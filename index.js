import { userRouter } from "./controller/usercontroller";
import { serviceRouter } from "./controller/servicecontroller";
import { doctorRouter } from "./controller/doctorContoller";
import { appointmentRouter } from "./controller/appointmentcontroller";
import express from 'express'
import path from'path'
import bodyParser from "body-parser";

const app = express ()
const PORT = +process.env.PORT 

app.use((req,res, next)=> {
    res.header('Access-Control-Allow-Origin','*');
    next()
  })
  app.use('/user', userRouter),
   app.use('/appointment', appointmentRouter),
   app.use('/doctor', doctorRouter),
   app.use('/service', serviceRouter),
   
   express.static('./static'),
  express.json(),
  express.urlencoded({
      extended:true
  })
  app.use(bodyParser.json())
 
  
// Endpoint
app.get('^/$|/DocConnect', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
  })
  app.get('/users', (req, res) => {
    try {
        const strQry = `
              SELECT user_id,  name,email,
               password_hash,,phone_number
              FROM users;
              `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error("Issue when retrieving all users.");
          res.json({
            status: res.statusCode,
            results,
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    })

    app.get('/user/:id', (req, res) => { 
        try {
            const strQry = `
           SELECT user_id,  name,email,
                   password_hash,,phone_number
                  FROM users;
                  
              WHERE user_id = ${req.params.id};
              `;
            db.query(strQry, (err, result) => {
              if (err) throw new Error("Issue when retrieving a user.");
              res.json({
                status: res.statusCode,
                result: result[0],
              });
            });
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message,
            });
          }
        })

        
app.post('/register', async (req, res) => {
    try {
        let data = req.body;
        data.password = await hash(data.password, 12);
        // Payload
        let user = {
          emailAdd: data.email,
          password: data.password,
        };
        let strQry = `
          INSERT INTO users
          SET ?;
          `;
        db.query(strQry, [data], (err) => {
          if (err) {
            res.json({
              status: res.statusCode,
              msg: "This email has already been taken",
            });
          } else {
            const token = createToken(user);
            res.json({
              token,
              msg: "You are now registered.",
            });
          }
        });
      } catch (e) {
        // 'Unable to add a new user.'
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    })
    app.patch('/user/:id', async (req, res) => {
        try {
          let data = req.body;
          if (data.password) {
            data.password = await hash(data.password, 12);
          }
          const strQry = `
          update Users
          SET ?
          where user_id= ${req.params.id};
          `;
          db.query(strQry, [data], (err) => {
            if (err) throw new Error('Unable to update user');
            res.json({
              status: res.statusCode,
              msg: 'Congartulations you have successfully updated the user!'
            })
          })
        } catch (e) {
          res.json({
            status: 404,
            msg: e.message
          })
        }
      })
      app.delete('/user/:id', (req,res) => {
        try {
          const strQry = `
          DELETE FROM users
          WHERE user_id= ${req.params.id};
          `
          db.query(strQry, (err) => {
            if (err) throw new Error('To delete a user, please review your delete query.')
              res.json({
            status: res.statusCode,
          msg: 'A user \'s information was removed '})
          })
        }catch(e){
          res.json({
            status:404,
            msg:e.message
          })
        }
      })

      app.get('*', (req, res) => { 
        res.json({
            status: 404,
            msg: 'Resource not found'
        })
      })
      
      app.post('/login', (req, res) => {
        try {
            const { email, password } = req.body
            const strQry = `
            SELECT user_id,  name,email,
                   password_hash,,phone_number
                  FROM users;
            WHERE email = '${email}';
            `
            db.query(strQry, async (err, result) => {
                if (err) throw new Error('To login, please review your query.')
                if (!result?.length) {
                    res.json(
                        {
                            status: 401,
                            msg: 'You provided a wrong email.'
                        }
                    )
                } else {
                    const isValidPass = await compare(password, result[0].password)
                    if (isValidPass) {
                        const token = createToken({
                            email,
                            password
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'Invalid password or you have not registered'
                        })
                    }
                }
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
      })
      
      
      
      app.listen(port, () => {
        console.log(`Server is running on ${port}`);
      })
      
  


      
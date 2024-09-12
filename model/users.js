import { compare, hash } from "bcrypt";
import { connection as db } from "../config/index.js";

class users {
  fetchUsers(req, res) {
    try {
      const strQry = `
                SELECT *
                FROM users;
                `;
      db.query(strQry, (err, results) => {
        if (err) throw new Error(err);
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
  }

  fetchUser(req, res) {
    try {
      const strQry = `
            SELECT *
            FROM users
            WHERE user_id = ${req.params.id}
            `;
      db.query(strQry, (err, result) => {
        if (err) throw new Error(err);
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
  }

  //   fetchUser(req, res) {9
  //     try {
  //         const strQry = `
  //     SELECT userID, firstName, lastName, age, emailAdd, userRole, profileURL
  //     FROM Users
  //     WHERE userID = ${req.params.id};
  //     `
  //         db.query(strQry, (err, result) => {
  //             if (err) throw new Error('Issue when retrieving a user.')
  //             res.json({
  //                 status: res.statusCode,
  //                 result: result[0]
  //             })
  //         })
  //     } catch (e) {
  //         res.json({
  //             status: 404,
  //             msg: 'Please try again later.'
  //         })
  //     }
  // }

  async registerUser(req, res) {
    try {
      let data = req.body;
      data.password_hash = await hash(data.password_hash, 12);
      // Payload
      let user = {
        emailAdd: data.email,
        password_hash: data.password_hash,
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
  }

  async updateUser(req, res) {
    try {
      let data = req.body;
      if (data.password_hash) {
        data.password_hash = await hash(data.password_hash, 12);
      }
      const strQry = `
            update users
            SET ?
            where user_id= ${req.params.id};
            `;
      db.query(strQry, [data], (err) => {
        if (err) throw new Error("Unable to update user");
        res.json({
          status: res.statusCode,
          msg: "You have successfully updated the user!",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }
  deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const deleteUserQuery = `
        DELETE FROM users
        WHERE user_id = ?
      `;
      db.query(deleteUserQuery, [userId], (err) => {
        if (err) {
          if (err.code === 'ER_ROW_IS_REFERENCED_2') {
            res.json({
              status: 400,
              msg: "You cannot delete your account until all appointments are cancelled.",
            });
          } else {
            throw new Error(err);
          }
        } else {
          res.json({
            status: res.statusCode,
            msg: "A user's information was removed",
          });
        }
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }
  async login(req, res) {
    try {
      const { email, password_hash } = req.body;
      const strQry = `
            SELECT user_id,  name,email,
                 password_hash,,phone_number
                FROM users;
                
            WHERE user_id = ${req.params.id};
            `;
      db.query(strQry, async (err, result) => {
        if (err) throw new Error("To login, please review your query.");
        if (!result?.length) {
          res.json({
            status: 401,
            msg: "You provided a wrong email.",
          });
        } else {
          const isValidPass = await compare(password_hash, result[0].pwd);
          if (isValidPass) {
            const token = createToken({
              email,
              password,
            });
            res.json({
              status: res.statusCode,
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: 401,
              msg: "Invalid password or you have not registered",
            });
          }
        }
      });
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message,
      });
    }
  }
}
export { users };

import {connection as db } from "../config/index.js"

class appointments{
    fetchAppointments(req,res) {
        try {
            const strQry =`
            SELECT *
            FROM appointments`;
            db.query(strQry, (err, results) => {
                if (err) throw new Error("There was an issue when retrieving all appointments.");
                res.json({
                  status: res.statusCode,
                  results,
                });
              });
        } catch (e) {
            res.json({
                status:404,
                msg: e.message ,
            })
        }
    }

fetchAppointment(req,res) {
    try {
        const strQry= `
          SELECT  *
          FROM appointments
                WHERE appointment_id = ${req.params.id};  
        `
        db.query(strQry, (err, result) => {
            if (err) throw new Error("There was an issue retrieving the specified appointment");
            res.json({
              status: res.statusCode,
              result:result[0],
            });
          });
    } catch (e) {
        res.json({
            status:404,
            msg: e.message ,
        })
    }
}

addAppointment(req, res) {

    try {
      let strQry = `
        INSERT INTO appointments
        SET ?;
          `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error("Unable to add a new appointment");{
          res.json({
            status: res.statusCode,
            msg: "appointment was added successfully",
          });
        }
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }


updateAppointment(req,res) {
    try {
        const strQry = `
        UPDATE appointments
        SET ?
       WHERE appointment_id = ${req.params.id};
        `;
        db.query(strQry, [req.body], (err) => {
          if (err) throw new Error(err);
          res.json({
            status: res.statusCode,
            msg: 'The appointment has been updated '
          })
        })
      } catch (e) {

        res.json({
          status: 404,
          err: e.message
        })
      }
}

deleteUser(req, res) {
  try {
    const userId = req.params.id;
    db.beginTransaction((err) => {
      if (err) {
        throw new Error(err);
      }
      const deleteAppointmentQuery = `
        DELETE FROM appointments
        WHERE user_id = ?
      `;
      db.query(deleteAppointmentQuery, [userId], (err) => {
        if (err) {
          return db.rollback(() => {
            throw new Error(err);
          });
        }
        const deleteUserQuery = `
          DELETE FROM users
          WHERE user_id = ?
        `;
        db.query(deleteUserQuery, [userId], (err) => {
          if (err) {
            return db.rollback(() => {
              throw new Error(err);
            });
          }
          db.commit((err) => {
            if (err) {
              return db.rollback(() => {
                throw new Error(err);
              });
            }
            res.json({
              status: res.statusCode,
              msg: "A user's information was removed",
            });
          });
        });
      });
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message,
    });
  }
}




}
export {appointments}

import { compare,hash } from "bcrypt";

class appointments{
    fetchAppointments(req,res) {
        try {
            const strQry =`
            SELECT  appointment_id, patient_id,  
             service_id ,doctor_id,
                appointment_date ,total_price ;`;
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
          SELECT  appointment_id, patient_id,  
             service_id ,doctor_id,
                appointment_date ,total_price 
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

deleteProduct(req,res) {
    try {
        const strQry = `
        DELETE FROM appointments
      WHERE appointment_id = ${req.params.id};
        `
        db.query(strQry, (err) => {
          if (err) throw new Error('To cancel an appointment, you might have to review your delete query.')
            res.json({
          status: res.statusCode,
        msg: 'An appointment has been cancelled'})
        })
      }catch(e){
        res.json({
          status:404,
          msg:e.message
        })
      }
}




}
export {appointments}
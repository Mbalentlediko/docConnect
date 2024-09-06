import { connection as db } from "../config/index.js";

class doctors {
  fetchDoctors(req, res) {
    try {
      const strQry = `
            SELECT *
            FROM doctors;  `;
      db.query(strQry, (err, results) => {
        if (err)
          throw new Error("There was an issue when retrieving all Doctors.");
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

  fetchDoctor(req, res) {
    try {
      const strQry = `SELECT *
        FROM doctors
            WHERE doctor_id = ${req.params.id};  
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

  addDoctor(req, res) {
    try {
      let strQry = `
        INSERT INTO doctors
        SET ?;
          `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error("Unable to add a new doctor");
        {
          res.json({
            status: res.statusCode,
            msg: "Doctor was added successfully",
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

  updateDoctor(req, res) {
    try {
      const strQry = `
        UPDATE doctors
        SET ?
       WHERE doctor_id = ${req.params.id};
        `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error(err);
        res.json({
          status: res.statusCode,
          msg: "A doctor 's information was updated ",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }

  deleteDoctor(req, res) {
    try {
      const strQry = `
        DELETE FROM doctors
      WHERE doctor_id = ${req.params.id};
        `;
      db.query(strQry, (err) => {
        if (err)
          throw new Error(
            "To delete a doctor, you might have to review your delete query."
          );
        res.json({
          status: res.statusCode,
          msg: "A doctor 's information was removed ",
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
export { doctors };

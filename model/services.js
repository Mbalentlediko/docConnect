import { connection as db } from "../config/index.js";

class services {
  fetchServices(req, res) {
    const strQry = `
        SELECT *
        FROM services;
        `;
    db.query(strQry, (err, results) => {
      if (err) throw new Error(err);
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  catch(e) {
    res.json({
      status: 404,
      msg: e.message,
    });
  }

  fetchService(req, res) {
    try {
      const strQry = `
        SELECT *
        FROM services
        WHERE service_id=${req.params.id};
        `;
      db.query(strQry, (err, result) => {
        if (err) throw new Error("Issue when retrieving the specified user.");
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

  addService(req, res) {
    try {
      let strQry = `
        INSERT INTO services
        SET ?;
          `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error("Unable to add a new service");
        {
          res.json({
            status: res.statusCode,
            msg: "Service was added successfully",
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

  updateService(req, res) {
    try {
      const strQry = `
        UPDATE services
        SET ?
        WHERE service_id=${req.params.id};

        `;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error(err);
        res.json({
          status: res.statusCode,
          msg: "You have successfully updated a service",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }

  deleteService(req, res) {
    try {
      const strQry = `
        DELETE FROM services
        WHERE service_id=${req.params.id};
        `;
      db.query(strQry, (err) => {
        if (err)
          throw new Error(
            "To delete a service, please review your delete query."
          );
        res.json({
          status: res.statusCode,
          msg: "A service 's information was removed ",
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
export { services };

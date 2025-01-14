function errorHandling(err, req, res, next) {
  if (err || res.statusCode >= 400) {
    res.json({
      status: err.status || err.statusCode || 500,
      err: "An error occured, Please try again later",
    });
  }
  next();
}
export { errorHandling };

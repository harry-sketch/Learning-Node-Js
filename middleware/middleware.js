const filterRouting = (req, res, next) => {
  if (!req.query.age) {
    return res.send("please provide the age");
  }
  if (req.query.age < 18) {
    return res.send("Age should be greater than 18");
  }
  return next();
};

module.exports = filterRouting;

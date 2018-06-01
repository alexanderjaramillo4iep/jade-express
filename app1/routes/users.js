var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
  var p = req.body;

  if (p.password == p.password2) {
    res.send("Te has registrado correctamente");
    return;
  }
  res.send("las contraseñas no coinciden");
  return;
});

module.exports = router;

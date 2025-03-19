module.exports = (app) => {
  const controller = require('../controllers/root.js');
  var router = require('../router/router.js')
  router.get("/", controller.root);

  app.use("/api", router);
};

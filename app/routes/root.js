module.exports = (app) => {
  const controller = require('../controllers/root.js');
  var router = require('../router/router.js')

  /**
   * @swagger
   * /:
   *   get:
   *     summary: Entry point
   *     responses:
   *       200:
   *         description: This is the starting point for the backend app
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   */
  router.get("/", controller.root);

  app.use("/api", router);
};

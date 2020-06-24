const router = require('express').Router();
const { quarantineTypeService } = require('../services');
const { isAuthorized } = require('../helpers/authHelper');

router.get('/', isAuthorized, async(req, res) => {
  try {
  const zones = await quarantineTypeService.getAll();
  return res.send(zones).status(200);
  } catch(e) {
      return res.json({
          message: e.message
      }).status(500);
  }
});

router.get('/:id', isAuthorized, async(req, res) => {
  const { id } = req.params;
  try {
  const zone = await quarantineTypeService.getById(id);
  return res.send(zone).status(200);
  } catch(e) {
      return res.json({
          message: e.message
      }).status(500);
  }
});

module.exports = router;
const express = require("express");
const henkiloControllers = require("../controllers/henkiloControllers");

const router = express.Router();

// Define routes for henkilot
router
  .route("/")
  .get(henkiloControllers.getAllHenkilot) // Get all henkilot
  .post(henkiloControllers.createHenkilo); // Use createHenkilo

router
  .route("/:id") // Routes with ID parameter
  .get(henkiloControllers.getHenkiloById) // Get henkilo by ID
  .put(henkiloControllers.updateHenkiloById) // Use updateHenkiloById
  .delete(henkiloControllers.deleteHenkiloById); // Use deleteHenkiloById

module.exports = router;

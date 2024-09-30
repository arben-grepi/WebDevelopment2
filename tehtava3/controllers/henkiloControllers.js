const Henkilo = require("../models/Henkilo"); // Import the Henkilo model

// Create a new Henkilo (POST)
exports.createHenkilo = async (req, res, next) => {
  try {
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvalinkki,
      laji,
      saavutukset,
    } = req.body;
    const newHenkilo = await Henkilo.create({
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvalinkki,
      laji,
      saavutukset,
    });
    return res.status(200).json({
      success: true,
      count: newHenkilo.length,
      data: newHenkilo,
    });
  } catch (err) {
    console.log(err);
    // Use res.status(500) instead of res.send(500)
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// Get all Henkilot (GET)
exports.getAllHenkilot = async (req, res, next) => {
  try {
    const henkilot = await Henkilo.findAll();
    return res.status(200).json({
      success: true,
      count: henkilot.length,
      data: henkilot,
    });
  } catch (err) {
    console.log(err);
    // Use res.status(500) instead of res.send(500)
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// Get Henkilo by ID (GET)
exports.getHenkiloById = async (req, res, next) => {
  const henkiloId = Number(req.params.id);
  const henkilo = await Henkilo.findByPk(henkiloId);
  if (!henkilo) {
    return res.status(404).json({
      success: false,
      error: "Henkilo not found",
    });
  }

  return res.status(200).json({
    success: true,
    count: 1, // Since it's a single record
    data: henkilo,
  });
};

// Update Henkilo by ID (PUT)
exports.updateHenkiloById = async (req, res, next) => {
  try {
    const henkiloId = Number(req.params.id);
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvalinkki,
      laji,
      saavutukset,
    } = req.body;
    const henkilo = await Henkilo.findByPk(henkiloId);

    if (!henkilo) {
      return res.status(404).json({
        success: false,
        error: "Henkilo not found",
      });
    }

    await henkilo.update({
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvalinkki,
      laji,
      saavutukset,
    });

    return res.status(200).json({
      success: true,
      count: 1, // Since it's a single record
      data: henkilo,
    });
  } catch (err) {
    console.log(err);
    // Use res.status(500) instead of res.send(500)
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// Delete Henkilo by ID (DELETE)
exports.deleteHenkiloById = async (req, res, next) => {
  try {
    const henkiloId = Number(req.params.id);
    const result = await Henkilo.destroy({ where: { id: henkiloId } });

    if (result === 0) {
      return res.status(404).json({
        success: false,
        error: "Henkilo not found",
      });
    }

    return res.status(204).json({
      success: true,
      data: null, // No content
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

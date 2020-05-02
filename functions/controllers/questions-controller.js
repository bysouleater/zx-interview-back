const questionsService = require('../services/questions-service');

const getAll = async (req, res) => {
  const questions = await questionsService.getAll();

  return res.json({ questions });
};

module.exports = {
  getAll,
}

const answersService = require('../services/answers-service');

const saveAnswers = async (req, res) => {
  const body = req.body;
  const id = (await answersService.create(body)).id;
  const answer = await answersService.get(id);

  return res.status(201).send(answer);
};

module.exports = {
  saveAnswers,
};

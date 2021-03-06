const answersService = require('../services/answers-service');

const saveAnswers = async (req, res) => {
  try {
    const { body } = req;
    const { id } = await answersService.create(body);
    const answer = await answersService.get(id);

    return res.status(201).send(answer);
  } catch (e) {
    return res.status(500).send(e.toString());
  }
};

module.exports = {
  saveAnswers,
};

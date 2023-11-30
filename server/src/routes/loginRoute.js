const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res) => {
  const { password } = req.body;
  const correctPassword = process.env.PASSWORD;

  if (password === correctPassword) {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET,
    );
    res.json({ token });
  } else {
    res.status(401).send('Wrong password');
  }
};

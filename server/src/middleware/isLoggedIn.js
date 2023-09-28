const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send('Invalid credentials');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid credentials');
    }

    // If verification is successful, you can attach the decoded token payload to the request for later use
    req.user = decoded;

    // Call next() to continue processing the request
    next();
  });
};

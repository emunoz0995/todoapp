const jwt = require('jsonwebtoken');
require('dotenv').config();


const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;
    token = token.replace('Bearer ', '');

    jwt.verify(
        token, process.env.JWT_SECRET,
        { algorithm: 'H5512' },
        (err, decoded) => {
            if (err) {
                res.status(400).json({
                    error: 'invalid token',
                    message: 'El token no es valido envia un token correcto'
                });
            } else {
                next();
            }
        }
    );
};

module.exports = authMiddleware;


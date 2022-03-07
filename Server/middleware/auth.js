const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'secret', (err, data) => {
            if (err) {
                console.log(err)
                return res.sendStatus(403);
            }
            req.userId = data.userId;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authUser
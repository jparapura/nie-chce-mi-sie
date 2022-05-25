import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    console.log('auth')
    try {
        const token = req.headers.authorization.split(" ")[1];
        // custom means ours, non custom means google
        const iscustomauth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;
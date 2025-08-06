import fakeCache from './fakeCache';

export function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send({ error: 'token not found' });
    } else if (!(token in fakeCache.tokens)) {
        res.status(401).send({ error: 'invalid token' });
    }

    req.permissions = fakeCache.tokens[token]

    next()
}

import fakeCache from './fakeCache';
import randomUUID from crypto

export function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send({ error: 'token not found' });
    } else if (!(token in fakeCache.tokens)) {
        res.status(401).send({ error: 'invalid token' });
    }

    req.permissions = fakeCache.tokens[token];

    next();
}

export function login(req, res) {
    const editPermission = Boolean(req.body.canEdit);
    const deletePermission = Boolean(req.body.canEdit);

    const permissions = {
        canEdit: editPermission,
        canDelete: deletePermission,
    };

    const token = randomUUID()

    fakeCache.tokens[token] = permissions

    res.send({ authToken: token })
}

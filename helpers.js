import fakeCache from './storage/fakeCache.js';

// Um pouquinho de JSdoc só para eu ter code completion sem Typescript
/**
 * @param {object[]} data
 * @param {number} data[].id
 */
export function findLastUserId(data) {
    const dataLen = data.length;

    if (!dataLen || dataLen === 0) {
        return -1;
    }

    return data[dataLen - 1].id;
}

/**
 * @param {string} name
 */
export function registerUserVisit(name) {
    if (!(name in fakeCache.visits)) {
        fakeCache.visits[name] = 0;
    }

    fakeCache.visits[name] += 1;
}

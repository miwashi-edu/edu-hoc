/**
 * generateID()
 * ----------------------------------------
 * Generate a unique ID string.
 * Prefers Web Crypto API (RFC 4122 v4 UUID); falls back to
 * timestamp + random hex for older/test environments.
 *
 * @returns {string}
 */
export const generateID = () =>
    (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

/**
 * toTask(input)
 * ----------------------------------------
 * Normalize a seed item into a task object.
 * - If input is a string: uses it as title.
 * - If input is an object: fills missing fields with defaults.
 *
 * @param {string | {id?:string, title?:string, done?:boolean}} input
 * @returns {{id:string, title:string, done:boolean}}
 */
export const toTask = (input) => {
    if (typeof input === 'string') {
        return { id: generateID(), title: input, done: false };
    }
    const { id, title, done } = input || {};
    return {
        id: id ?? generateID(),
        title: title ?? 'untitled',
        done: !!done,
    };
};

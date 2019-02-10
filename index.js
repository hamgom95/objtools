/**
 * Get value for key in object or set default.
 * @param key Key in object.
 * @param defaultValue Default value to set if property not found.
 * @returns Value for property in object.
 */
function setDefault(key, defaultValue) {
    if (!this.hasOwnProperty(key)) {
        this[key] = defaultValue;
    }
    return this[key];
}

/**
 * Get value at path in object.
 * @param levels Path in object.
 * @returns Value at path.
 */
function getPath(...levels) {
    return levels.reduce((acc, level) => acc[level], this);
}

/**
 * Set value at path in object.
 * @param value Value to set at path.
 * @param levels Path in object.
 * @return Set value at path.
 */
function setPath(value, ...levels) {
    const last = levels.pop();
    if (last === undefined) throw new Error("Specify at least one path level");

    const elem = levels.reduce(
        (state, level) => state.setDefault(level, {}),
        this
    );

    elem[last] = value;
    return elem[last];
}

/**
 * Register object methods to cls.
 * @param cls Class to add methods to.
 * @returns Mixed in class.
 */
const register = (cls = Object) => (
    Object.assign(cls.prototype, { setDefault, setPath, getPath }), cls
);

module.exports = {
    setDefault,
    getPath,
    setPath,
    register
};

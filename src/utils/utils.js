/**
 * Function used to check if property is null
 * @param prop: Property to check
 * @returns True if property is null or false otherwise
 */
export const isNull = function(prop) {
    return !prop || typeof(prop) === 'undefined' || prop === null
}
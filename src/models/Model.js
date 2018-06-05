import {isNull} from '../utils/utils';
/**
 * Base class for all data models in application
 */
const Model = class {

    /**
     * Method used to assign property values from "props" argument to properties of object
     * @param props: Object contains properties and their values to assign in form of {key:value}
     * @returns: This object if successfully applied properties and false otherwise
     */
    assign(props) {
        if (isNull(props) || typeof(props) !== "object") {
            return false;
        }
        for (const key in props) {
            this[key] = props[key];
        }
        return this;
    }
}

export default Model;
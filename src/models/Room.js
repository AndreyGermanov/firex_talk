import Model from './Model'

/**
 * Data model for chat room object.
 */
const Room = class extends Model {
    /**
     * Constructor. Used to initialize properties of class.
     * Used to define initial values for all object properties
     */
    constructor() {
        super();
        // Unique ID of room
        this.id = null;
        // Name of room
        this.name = "";
    }
}

export default Room;
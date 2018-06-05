import Model from './Model'

/**
 * Data model for chat message.
 */
const Message = class extends Model {
    /**
     * Constructor. Used to initialize properties of class.
     * Used to define initial values for all object properties
     */
    constructor() {
        super();
        // Unique ID of message
        this.id = null;
        // Time of message
        this.timestamp = 0;
        // Text of message;
        this.text = "";
        // Message attachment image or file
        this.attachment = null;
        // ID of user, which posted this message
        this.from_user_id = 0;
        // ID of user, to which message posted
        this.to_user_id = 0;
        // ID of room, to which message posted
        this.to_room_id = 0;
    }
};

export default Message;
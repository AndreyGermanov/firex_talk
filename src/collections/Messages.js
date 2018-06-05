import Collection from './Collection';
import Message from '../models/Message';

/**
 * Class which manages collection of Message models
 */
const Messages = class extends Collection {
    constructor() {
        super(Message);
    }
};

export default new Messages();
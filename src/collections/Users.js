import Collection from './Collection';
import User from '../models/User';

/**
 * Class which manages collection of User models
 */
const Users = class extends Collection {
    constructor() {
        super(User);
    }
}

export default new Users();
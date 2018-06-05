import Collection from './Collection';
import Room from '../models/Room';

/**
 * Class which manages collection of Room models
 */
const Rooms = class extends Collection {
    constructor() {
        super(Room);
    }
};

export default new Rooms();
import {isNull} from '../utils/utils';

/**
 * Base class for all collections of data models
 */

const Collection = class {
    /**
     * Class constructor. Used to initialize all properties of object
     */
    constructor(modelClass) {
        // Class of models, to which items of collection belong
        this.modelClass = modelClass;
        // Array of items in collection
        this.items = [];
    }

    /**
     * Method used to find item, which matches to specified list of properties
     *
     * @param props: Map of properties in format {key:value} which used to compare with collection items using AND
     * operator
     * @returns array of items which matches to all specified properties
     */
    getList(props) {
        if (isNull(props)) {
            console.trace("Filter conditions not specified");
            return [];
        }
        if (typeof(props) !== 'object') {
            console.trace("Incorrect filter value- "+props);
            return [];
        }
        var result = this.items;
        for (const key in props) {
            const value = props[key];
            result = result.filter(item => !isNull(item) && item.hasOwnProperty(key) && item[key] === value);
            if (!result.length) {
                return result;
            }
        }
        return result;
    }

    /**
     * Method used to find item by id
     *
     * @param id: ID to search
     * @return Found model or null if nothing found
     */
    getById(id) {
        const result = this.getList({id:id});
        if (!result || !result[length]) {
            return null;
        } else {
            return result[0];
        }
    }

    /**
     * Method used to add item to collection.
     *
     * @param item: Item to add. Must be instance of class, which current collection supports.
     * @returns: True if item successfully added or false otherwise
     */
    add(item) {
        if (isNull(item)) {
            console.trace("Item is not specified");
            return false;
        }
        if (!(item instanceof this.modelClass)) {
            console.trace("Item is not correct model for this collection "+item);
            return false;
        }
        if (this.getById(item.id)) {
            console.trace("Item with specified ID already exists in collection "+item);
            return false;
        }
        this.items.push(item);
    }

    /**
     * Method removes item with specified id from collection
     * @param id: ID of item to remove
     * @return: Removed item or null if nothing removed
     */
    delete(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            return null;
        }
        const item = this.items[index];
        this.items.splice(index,1);
        return item;
    }

    /**
     * Method updates item, if item with the same ID exists in collection. If item does not exists
     * and 'upsert=true', then method adds item to collection
     * @param item: Item to update
     * @param upsert: If true, item will be added to collection if not exists, otherwise not
     * @return index of updated item or null if nothing updated
     */
    update(item,upsert=false) {
        if (isNull(item)) {
            console.trace("Item to update not specified");
            return null;
        }
        if (typeof(item) !== 'object' || !item.hasOwnProperty('id') || !(item instanceof this.modelClass)) {
            console.trace("Incorrect item provided");
            return null;
        }
        const index = this.items.findIndex(collectionItem => collectionItem.id === item.id);
        if (index !== -1) {
            this.items.splice(index,1);
        }
        if (index !== -1 || upsert) {
            this.items.add(item);
        }
        return this.items.indexOf(item);
    }


}

export default Collection;
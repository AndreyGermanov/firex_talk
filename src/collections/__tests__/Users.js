import Users from '../Users';
import User from '../../models/User';
import Room from '../../models/Room';

/**
 * Tests for Users collection
 */

const populate = () => {
    Users.items.push((new User()).assign({
        id: 'u1',
        name: "User 1",
        roomId: "r1"
    }));
    Users.items.push((new User()).assign({
        id: 'u2',
        name: "User 2",
        roomId: "r1"
    }));
    Users.items.push((new User()).assign({
        id: 'u3',
        name: "User 3",
        roomId: "r2"
    }))
    Users.items.push((new User()).assign({
        name: "User 4",
        roomId: "r3"
    }))
}

beforeEach(() => {
    populate();
});

afterEach(() => {
    Users.items = [];
});

describe("getList() tests", () => {
    test("Should return empty array if no search filter provided", () => {
        const items = Users.getList();
        expect(items.hasOwnProperty("length")).toBe(true);
        expect(items.length).toBe(0);
    });
    test("Should return empty array if incorrect filter format provided", () => {
        const items = Users.getList("XBAX");
        expect(items.length).toBe(0);
    });
    test("Should return empty array if incorrect property name provided", () => {
        const items = Users.getList({"something weird":"boo"});
        expect(items.length).toBe(0);
    });
    test("Should return empty array if no items found", () => {
        const items = Users.getList({roomId: "NOTHING"});
        expect(items.length).toBe(0);
    });
    test("Should return correct number of found items with single property search", () => {
        const items = Users.getList({roomId:"r1"});
        expect(items.length).toBe(2);
        expect(Users.items.length).toBe(4);
    });
    test("Should return correct number of found items with multiple property search", () => {
        const items = Users.getList({roomId:"r1",id:"u2"});
        expect(items.length).toBe(1);
    });
});

describe("getById() tests", () => {
    test("Should return null if no search id provided", () => {
        const item = Users.getById();
        expect(item).toBe(null);
    });
    test("Should return null if null id provided", () => {
        const item = Users.getById(null);
        expect(item).toBe(null);
    });
    test("Should return null if incorrect id provided", () => {
        const item = Users.getById({"boo":"boo","two":"three"});
        expect(item).toBe(null);
    });
    test("Should return correct item if correct id provided", () => {
        const item = Users.getById("u2");
        expect(typeof(item)).toBe("object");
        expect(item.name).toBe("User 2");
    });
});

describe('add() tests', () => {
    test("Should not add incorrect values", () => {
        const first_count = Users.items.length;
        var result = Users.add();
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
        result = Users.add(null);
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
        result = Users.add((new Room()).assign({"id":"r4","name":"ROOM"}));
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should not add item without ID", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({name: "User 7"});
        const result = Users.add(item);
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should not add item with the same ID", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({id:"u1",name:"Test"});
        const result = Users.add(item);
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should add new item correctly", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({id:"u4",name:"Test"});
        const result = Users.add(item);
        expect(result).toBe(first_count);
        expect(Users.items.length).toBe(first_count+1);
    });
})

describe("delete() tests", () => {
    test("Should not work if id of item not provided", () => {
        const first_count = Users.items.length;
        const result = Users.delete();
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should not work if id is incorrect", () => {
        const first_count = Users.items.length;
        var result = Users.delete({"boo":"boo"});
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
        result = Users.delete(null);
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
        result = Users.delete("u10");
        expect(result).toBe(false);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should remove item from collection and return removed item", () => {
        const first_count = Users.items.length;
        const result = Users.delete("u2");
        expect(result.name).toBe("User 2");
        expect(Users.items.length).toBe(first_count-1);
        expect(Users.getById("u2")).toBe(null);
    })
})

describe("update() tests", () => {
    test("Should not update if incorrect item type provided", () => {
        const first_count = Users.items.length;
        var result = Users.update();
        expect(result).toBe(null);
        expect(Users.items.length).toBe(first_count);
        result = Users.update("BOO");
        expect(result).toBe(null);
        expect(Users.items.length).toBe(first_count);
        result = Users.update((new Room()).assign({id:"r5",name:"ROOM"}));
        expect(result).toBe(null);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should not update if incorrect id of item provided", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({id:"u8",name:"User 8"});
        const result = Users.update(item);
        expect(result).toBe(null);
        expect(Users.items.length).toBe(first_count);
    });
    test("Should update item if correct id provided", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({id:"u2",name:"User 8"});
        const result = Users.update(item,true);
        expect(result).toBe(1);
        expect(Users.items.length).toBe(first_count);
        const new_item = Users.getById("u2");
        expect(new_item.name).toBe("User 8");

    });
    test("Should add new item in upsert mode", () => {
        const first_count = Users.items.length;
        const item = new User();
        item.assign({id:"u8",name:"User 8"});
        const result = Users.update(item,true);
        expect(result).toBe(first_count);
        expect(Users.items.length).toBe(first_count+1);
    });
})

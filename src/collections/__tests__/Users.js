import Users from '../Users';
import User from '../../models/User';

/**
 * Tests for Users collection
 */
describe("Users collection search tests", () => {

    beforeEach(() => {
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
    });

    afterEach(() => {
        Users.items = [];
    });

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
        const items = Users.getList({"roomId": "NOTHING"});
        expect(items.length).toBe(0);
    });
    test("Should return correct number of found items", () => {
        const items = Users.getList({roomId:"r1"});
        expect(items.length).toBe(2);
        expect(Users.items.length).toBe(3);
    });
});

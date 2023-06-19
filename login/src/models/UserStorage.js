
const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data, reqId) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(reqId);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, key) => {
            newUser[key] = users[key][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    static #getUsers(data, fields) {
        const users=JSON.parse(data);
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUsers(...fields) {
        return fs.readFile("./src/databases/users.json")
            .then((data => {
                return this.#getUsers(data, fields);
            }))
            .catch(console.error);
    };

    static getUserInfo(reqId) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, reqId);
            })
            .catch((err)=> console.error(err) );
    };



    static async saveUser(userInfo) {
        const users = await this.getUsers("id", "name", "password");
        if(users.id.includes(userInfo.id)){
            throw "id already exist";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;
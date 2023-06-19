class UserStorage{
    static #users ={
        id: ["oh", "yoon"],
        password: ["5", "1"],
        name: ["오준상", "윤진원"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(reqId) {
        const users = this.#users;
        const idx = users.id.indexOf(reqId);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, key) => {
            newUser[key] = users[key][idx];
            return newUser;
        }, {});
        return userInfo;
    };

    static saveUser(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        console.log(users);
        return { success: true };
    }
}

module.exports = UserStorage;
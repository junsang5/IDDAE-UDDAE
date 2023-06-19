
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const reqId=client.id;
        const reqPassword=this.body.password;
        const { id, password } = UserStorage.getUserInfo(reqId);
        if(!id) return {success: false, msg: "id is not exist",};
        else if(password===reqPassword)
            return {success: true, msg: "login success",};
        else return {success: false, msg: "wrong password",};

    }
    register() {
        const client = this.body;
        UserStorage.saveUser(client);
        return {success: true,};
    }
}
module.exports = User;

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const reqId=client.id;
        const reqPassword=this.body.password;
        try{
            const { id, password } = await UserStorage.getUserInfo(reqId);
            if(password===reqPassword)
                return {success: true, msg: "login success",};
            return {success: false, msg: "wrong password",};
        } catch(err) {
            console.error(err);
        }
        return { success: false, msg: "id does not exist" };

    }
    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.saveUser(client);
        return response;
        } catch(err) {
            console.error(err);
        }
        return { success: false, msg: "id already exist", };
    }
}
module.exports = User;
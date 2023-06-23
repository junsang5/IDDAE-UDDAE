
const db = require("../config/db");

class UserStorage{

    static getUserInfo(reqId) {

        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?";
            db.query(query, [reqId], (err, data) => {
                if(err) reject(err);
                else resolve(data[0]);
            });
        })

    };



    static async saveUser(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
                if(err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }
}

module.exports = UserStorage;
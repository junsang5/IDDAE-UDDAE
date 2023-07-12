
const db = require("../config/db");

class MeetingStorage{

    static getMeetingInfo(reqId) {

        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM meetings WHERE id_meeting = ?";
            db.query(query, [reqId], (err, data) => {
                if(err) reject(err);
                else resolve(data[0]);
            });
        })

    };



    static async saveMeeting(MeetingInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO meetings(id_meeting, id_creator, name_meeting, num_join) VALUES(?, ?, ?, ?);";
            db.query(query, [MeetingInfo.id_meeting, MeetingInfo.id_creator, MeetingInfo.name_meeting, MeetingInfo.num_join], (err) => {
                if(err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }
}

module.exports = MeetingStorage;
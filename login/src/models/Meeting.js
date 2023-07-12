const MeetingStorage = require("./MeetingStorage");

class Meeting{
    constructor(body) {
        this.body=body;
    };

    async create() {
        console.log(await MeetingStorage.getMeetingInfo(event.id_meeting-1));
        try {
            const response = await MeetingStorage.saveMeeting(event);
            return response;
            } catch(err) {
                return { success: false, msg: "make event error", };
            }
    }
}

module.exports = Meeting;

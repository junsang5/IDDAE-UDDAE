"use strict";
const logger = require("../../config/logger");
const Meeting = require("../../models/Meeting");

const output = {

    create: (req, res) => {
        logger.info(`GET /login 304 "move to createMeeting page"`);
        res.render("meeting/create");
    },
};

const process = {
    create: async (req, res) => {
        const meeting = new Meeting(req.body);
        const response = await meeting.create();

        const url = {
            method: "POST",
            path: "meeting/create",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
     },

};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if(response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
};
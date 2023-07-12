import express from 'express';
import { auth } from 'google-auth-library';
import {google} from 'googleapis';

const router = express.Router();

const calendar = google.calendar({
    version:'v3',
    auth:process.env.API_KEY,

})

router.get('/access', (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URL
    );
    const scopes = [
        'openid',
        'email',
        'profile',
        'https://www.googleapis.com/auth/calendar'
    ];

    const url = oauth2Client.generateAuthUrl({

        access_type: 'offline',

        scope: scopes,

        include_granted_scopes: true
    });
    res.redirect(url);
});

router.get('/', async(req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URL
    );
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.send(tokens);
})

export default router;

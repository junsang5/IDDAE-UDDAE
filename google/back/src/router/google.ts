import express from 'express';
import {google} from 'googleapis';
import {Request, Response} from 'express';

const router = express.Router();

router.get('/access', (req: Request, res: Response) => {
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

router.get('/', async(req: Request, res: Response) => {
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URL
    );
    const code: string = req.query.code as string;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const calendar = google.calendar({
        version:'v3',
        auth: process.env.API_KEY,
    });
    const {data} = await calendar.events.get({
        calendarId: "primary",
        eventId:"",
        auth: oauth2Client,
    });
    res.send(data);
    //return tokens
});

router.get('/calendar/list', async(req, res) => {

    // const {data} = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${process.env.API_KEY}`,{
    //     headers:{
    //         Authorization: "Bearer ya29.a0AbVbY6OgGkr8E9DnReZfHquxqs92AqovrkZD2EXrhwwHFnaPpvfhYVXzaU8C6Cd0WtZ_-r9EhKArrcSxuGYgBq4YvFyMFI1IYl5iqVbge8V-SMPM0tBszX_0FRkFkGhr9pyz4DhcSwIV97cL6f30eh4N8qBdaCgYKAZESARISFQFWKvPl8R5NIyTaPFPFOTQ-YEsmNA0163",
    //     },
    // })
    // .catch(err => {
    //     console.error(err);
    // });
    // res.send(data);
});

export default router;
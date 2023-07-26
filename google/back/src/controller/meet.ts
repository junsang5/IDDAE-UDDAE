import { Request, Response } from "express";
import meetService from '../service/Meet';

const createMeet = (req:Request, res:Response) => {
    const meet = new meetService(req.body);
    meet.save();
}
const access = (req:Request, res:Response) => {

}

export default {createMeet, access};
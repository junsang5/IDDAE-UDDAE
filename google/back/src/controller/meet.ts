import { Request, Response } from "express";
import meetService from '../service/Meet';

const createMeet = async(req:Request, res:Response) => {
    const meet = new meetService(req.body);
    const response = await meet.save();
    return res.json(response);
}
const access = (req:Request, res:Response) => {

}

export default {createMeet, access};
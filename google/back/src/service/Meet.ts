import dataSource from "../config/dataSource";
import {Meet} from "../entity/Meet";
import { PossibleTime } from "../entity/PossibleTime";
interface meet_form {
    meet_name: string,
    creator: string,
    due_from: Date,
    due_to: Date,
    possible_time: Date[],
    running_time: number,
    type: string,
}
class meetService {
    body:meet_form
    constructor(body: meet_form){
        this.body = body;
    }
    async save() {
        try{
            const totalPossible = this.body.possible_time;
            const meet = await dataSource.manager.create(Meet, {
                meet_name: this.body.meet_name,
                creator: this.body.creator,
                due_from: this.body.due_from,
                due_to: this.body.due_to,
                running_time: this.body.running_time,
                type: this.body.type,
            });
            await dataSource.manager.save(meet);
            totalPossible.forEach(async (time:Date) => {
                const possible = new PossibleTime();
                possible.meet = meet; possible.start_time = time;
                await dataSource.manager.save(possible);
            });
        } catch(err) {
            return {success: false, msg: "create failed"};
        }
        return {success: true, msg:"create success"};
    }
    async getInfo() {

    }

}

export default meetService;
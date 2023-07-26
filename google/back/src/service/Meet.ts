import dataSource from "../config/dataSource";
import {Meet} from "../entity/Meet";
import { PossibleTime } from "../entity/PossibleTime";
interface meet_form {
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
        const totalPossible = this.body.possible_time;
        const meet = await dataSource.manager.create(Meet, {
            creator: this.body.creator,
            due_from: this.body.due_from,
            due_to: this.body.due_to,
            running_time: this.body.running_time,
            type: this.body.type,
        });
        totalPossible.forEach(async (time:Date) => {
            const possible = new PossibleTime();
            possible.meet = meet; possible.start_time = time;
            dataSource.manager.save(possible);
        });
    }

}

export default meetService;
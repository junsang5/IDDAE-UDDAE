import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Meet} from './Meet';
@Entity()
export class PossibleTime {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    start_time: Date

    @ManyToOne( () => Meet, (meet)=>meet.possible_times)
    @JoinColumn({name:"meet_id"})
    meet: Meet
}
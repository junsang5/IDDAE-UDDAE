import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { PossibleTime } from "./PossibleTime";

@Entity()
export class Meet {

    @PrimaryGeneratedColumn()
    meet_id: number

    @Column()
    meet_name: string

    @Column()
    creator: string

    @Column()
    due_from: Date

    @Column()
    due_to: Date

    @Column()
    running_time: number

    @Column()
    type: string

    @OneToMany(()=>PossibleTime, (possible_time)=>possible_time.meet)
    possible_times: PossibleTime[]



}
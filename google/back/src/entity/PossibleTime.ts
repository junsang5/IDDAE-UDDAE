import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Meet} from './Meet';
@Entity()
export class PossibleTime {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    start_time: Date

    @ManyToOne( () => Meet, (meet)=>meet.possible_times)
    meet: Meet
}
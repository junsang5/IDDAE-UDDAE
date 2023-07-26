import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

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

}
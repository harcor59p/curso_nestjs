import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm' ;

export enum TaskStatus {
    PENDING = 'PENDING' ,
    IN_PROGRESS = 'IN_PROGRESS' ,
    DONE = 'DONE',
}

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    id: number ;

    @Column({unique: true})
    title: string ;

    @Column()
    description: string ;

    @Column()
    status: TaskStatus ;
}
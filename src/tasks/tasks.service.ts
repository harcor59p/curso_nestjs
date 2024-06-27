import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaksDto, UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
    Task: any;

    constructor(
        @InjectRepository(Task) private tasksRepo: Repository<Task>
    ) { }

    // private task: Task[] = [{
    //     id: '1',
    //     title: 'frist task',
    //     description: 'some task',
    //     status: TaskStatus.PENDING,
    // }]

    getAllTasks() {
        return this.tasksRepo.find();
    }
    getTaskById(id: number) : Promise<Task | null> {
        return this.tasksRepo.findOne({
            where : {
                id
            }
        });
    }

    createTasks(Task : CreateTaksDto) {
        const newTask = this.tasksRepo.create(Task) ;
        return this.tasksRepo.save(newTask) ;
    }

    // createTasks(title: string, description: string) {
    //     const task = {
    //         id: new Date().toISOString(),
    //         title,
    //         description,
    //         status: TaskStatus.PENDING

    //     };
    //     this.task.push(task);
    //     return task;
    // }



    deleteTasks(id: number) {
        return this.tasksRepo.delete({id})
    }


    updateTasks(id: number , task : UpdateTaskDto) {
        return this.tasksRepo.update({id} , task)
    }

}

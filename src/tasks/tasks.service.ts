import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { title } from 'process';
import { UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {

    private task: Task[] = [{
        id: '1',
        title: 'frist task',
        description: 'some task',
        status: TaskStatus.PENDING,
    }]
    getAllTasks() {
        return this.task
    }
    createTasks(titke: string, description: string) {
        const task = {
            id: new Date().toISOString(),
            title,
            description,
            status: TaskStatus.PENDING

        };
        this.task.push(task);
        return task;
    }
    deleteTasks(id: string) {
        this.task = this.task.filter(task => task.id !== id)
    }

    getTaskById(id: string) : Task {
        return this.task.find((task) => task.id === id) ;
    }

    updateTasks(id: string , updatedFields : UpdateTaskDto) { 

        const task = this.getTaskById(id) ;
        const newTask = Object.assign(task , updatedFields) ;
        this.task = this.task.map((task) => (task.id === id ? newTask : task))
        return newTask ;
    }

}

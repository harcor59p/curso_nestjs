import { Controller, Get, Post, Body, Delete , Param, Patch, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaksDto, UpdateTaskDto } from './dto/tasks.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id' , ParseIntPipe) id: number) : Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() newTask: CreateTaksDto) {
        return this.tasksService.createTasks(newTask)
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number){
        return this.tasksService.deleteTasks(id)
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number , @Body() task : UpdateTaskDto){
        return this.tasksService.updateTasks(id , task)
    }

}



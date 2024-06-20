import { TaskStatus } from "../task.entity"

export class CreateTaksDto {
    title: string;
    description: string;
}

export class UpdateTaskDto {
    title: string;
    description: string;
    status: TaskStatus;
}
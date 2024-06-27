import { TaskStatus } from "../task.entity" ;
import {IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, isNotEmpty} from 'class-validator' ;

export class CreateTaksDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING , TaskStatus.IN_PROGRESS , TaskStatus.DONE])
    status: TaskStatus;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    @MinLength(3)
    title: string;
    @IsString()
    @IsOptional()
    @MinLength(3)
    description: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING , TaskStatus.IN_PROGRESS , TaskStatus.DONE])
    status: TaskStatus;
}


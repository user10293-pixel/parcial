import { IsString, IsIn } from 'class-validator';

export class TaskStatusDTO {
    @IsString()
    @IsIn(['pendiente', 'completada'], { message: 'Estado debe ser: pendiente o completada' })
    status: string;
}
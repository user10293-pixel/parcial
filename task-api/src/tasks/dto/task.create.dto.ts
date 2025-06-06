import { IsString, IsOptional, IsIn } from 'class-validator';

export class TaskCreateDTO {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn(['Alta', 'Media', 'Baja'], { message: 'Prioridad debe ser: Alta, Media o Baja' })
    priority?: string;

    @IsString()
    @IsOptional()
    dueDate?: string;
}
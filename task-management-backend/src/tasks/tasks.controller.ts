import { Controller, Get, Post, Delete, Param, Body, HttpException, HttpStatus, ParseIntPipe  } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

 @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body('description') description: string) {
    if (!description) {
      throw new HttpException('Description is required', HttpStatus.BAD_REQUEST);
    }
    return this.tasksService.create(description);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    await this.tasksService.deleteTask(id);
  }
}

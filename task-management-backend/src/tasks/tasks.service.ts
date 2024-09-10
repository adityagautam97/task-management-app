import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository,DeleteResult } from 'typeorm';
import { Task } from './task.entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
      ) {}
    
      async findAll(): Promise<Task[]> {
        return this.tasksRepository.find();
      }
    
      async create(description: string): Promise<Task> {
        const task = this.tasksRepository.create({ description });
        return this.tasksRepository.save(task);
      }
    
      async remove(id: number): Promise<DeleteResult> {
        return  await this.tasksRepository.delete(id);
      }
    async deleteTask(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

}

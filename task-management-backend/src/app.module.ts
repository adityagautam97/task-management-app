import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host:"localhost",
      port:1433,
      username: 'sa',
      password: 'Jaipur@1234',
      database: 'TaskManagmentDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

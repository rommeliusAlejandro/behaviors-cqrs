import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BehaviorsModule } from './behaviors/behaviors.module';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [BehaviorsModule, WorkflowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BehaviorsController } from './behaviors.controller';
import { EventHandlers } from './events/handlers';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [BehaviorsController],
  providers: [
    ...EventHandlers,
    ...CommandHandlers
  ]
})
export class BehaviorsModule {}

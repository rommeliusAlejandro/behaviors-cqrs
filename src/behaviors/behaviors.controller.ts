/**
 * @author Rommel Loayza
 */
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ChangeValueCommand } from './commands/impl/change-value.command';

@Controller('behaviors')
export class BehaviorsController {

  @Inject()
  private readonly commandBus: CommandBus;

  @Get('changeValue/:id')
  async changeValue(@Param('id') id: string){
    return this.commandBus.execute(new ChangeValueCommand(id, "test", ['2','3','4'], '6'));
  }
}

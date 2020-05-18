/**
 * @author Rommel Loayza
 */
import { ChangeValueCommand } from '../impl/change-value.command';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { FieldNode } from '../../models/field.node';

@CommandHandler(ChangeValueCommand)
export class ChangeValueHandler implements ICommandHandler<ChangeValueCommand> {
  @Inject()
  private readonly publisher: EventPublisher;

  async execute(command: ChangeValueCommand) {
    console.log('Change Value command');
    const node = this.publisher.mergeObjectContext(
      new FieldNode(command.nodeId, command.value, command.targets, command.parentId)
    );
    node.affectTargets();
    node.commit();
  }
}

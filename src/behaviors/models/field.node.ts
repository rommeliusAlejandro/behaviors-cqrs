/**
 * @author Rommel Loayza
 */
import { AggregateRoot } from '@nestjs/cqrs';
import { ValueChangedEvent } from '../events/impl/value-changed.event';

export class FieldNode extends AggregateRoot {

  constructor(
    private readonly id: string,
    private readonly value: string,
    private readonly targets: string[],
    private readonly parentId: string
  ) {
    super();
  }

  affectTargets() {
    this.apply(new ValueChangedEvent(this.value, this.targets, this.parentId));
  }

}

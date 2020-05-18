/**
 * @author Rommel Loayza
 */
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ValueChangedEvent } from '../impl/value-changed.event';

@EventsHandler(ValueChangedEvent)
export class ChangeParentStatusHandler implements IEventHandler<ValueChangedEvent> {

  handle(event: ValueChangedEvent) {
    console.log("Updating parent "+event.parentId);
  }
}

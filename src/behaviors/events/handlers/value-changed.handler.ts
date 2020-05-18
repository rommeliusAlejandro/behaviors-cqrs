/**
 * @author Rommel Loayza
 */
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ValueChangedEvent } from '../impl/value-changed.event';

@EventsHandler(ValueChangedEvent)
export class ValueChangedHandler implements IEventHandler<ValueChangedEvent> {

  handle(event: ValueChangedEvent) {
    console.log("Event fired for value: "+event.value );
    console.log("Targets are: "+event.target);
  }
}

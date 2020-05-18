/**
 * @author Rommel Loayza
 */
export class ValueChangedEvent {
  constructor(
    public readonly value: string,
    public readonly target: string[],
    public readonly parentId: string) {
  }
}

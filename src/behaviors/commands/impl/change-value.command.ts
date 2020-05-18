/**
 * @author Rommel Loayza
 */
export class ChangeValueCommand {

  constructor(
    public readonly nodeId: string,
    public readonly value: string,
    public readonly targets: string[],
    public readonly parentId: string
  ) {
  }
}

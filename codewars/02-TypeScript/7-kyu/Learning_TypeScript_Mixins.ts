/**
 * Learning TypeScript. Mixins
 * https://www.codewars.com/kata/597277844998c50c9a000051/train/typescript
 *
 */

export class Serializable {
  serialize(): string {
    return JSON.stringify(this)
  }

  deserialize(source: string): void {
    const deserializedObj = JSON.parse(source)

    Object.assign(this, deserializedObj)
  }
}

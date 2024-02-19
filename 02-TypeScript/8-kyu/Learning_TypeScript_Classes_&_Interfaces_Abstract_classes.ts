/**
 * Learning TypeScript. Classes & Interfaces. Abstract classes
 * https://www.codewars.com/kata/590cb67bc69e3a31d0000042/train/typescript
 *
 */

export abstract class Animal {
  protected constructor(public value: number) {}

  convertTo(someone: Animal): number {
    return this.value / someone.value
  }
}

export class Boa extends Animal {
  constructor() {
    super(38)
  }
}

export class Parrot extends Animal {
  constructor() {
    super(1)
  }
}

export class Monkey extends Animal {
  constructor() {
    super(7.6)
  }
}

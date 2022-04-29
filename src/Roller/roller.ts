namespace Roller {

  interface RollerInterface {
    (dice: number, options: Option[]): Roll
  }

  type Roll = {
    elements: Element;
    target: Value;
    autoSuccesses: number;
  }

  interface Option {
    apply(roll: Roll): Roll
    generate(text: string): this | undefined
    merge(option: this): this
  }

  interface AddAutoSuccesses extends Option {
    autoSuccesses: number;
  }

  interface SetTarget extends Option {
    target: Value;
  }

  interface DoubleValues extends Option {
    doubledValues: Set<Value>;
  }

  type RerollValues = {
    rerolledValues: Set<Value>;
  }

  type Element = {
    isRerolled: boolean;
    value: Value;
  }

  enum Value {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten
  }
}

export interface Modifier {
  modify(roll: Roll): Roll
  generate(text: string): this | undefined
  merge(other: this): this
}

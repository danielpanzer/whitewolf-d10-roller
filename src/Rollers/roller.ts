export interface Roller {
  roll(dice: number, modifiers: Modifier[]): Roll
}

import { Roller } from './roller';
import { Face } from '../Models/die'
import { Roll } from '../Models/roll'
import { Modifier } from '../Modifiers/modifier'

//TODO: To be implemented
export class ProductionRoller implements Roller {

  roll(dice: number, modifiers: Modifier[]): Roll {
    return {
      dice: [],
      target: Face.Seven,
      autoSuccesses: 0
    }
  }
}

import { expect } from 'chai';
import { DeterministicRoller } from '../src/Rollers/DeterministicRoller';
import { Face } from '../src/Models/die'

describe('DeterministicRoller', () => {

  it('rolls deterministically', () => {
    let roller = new DeterministicRoller(
      [
        Face.Two,
        Face.Five,
        Face.One,
      ]
    )

    expect(
      JSON.stringify(
        roller.roll(3, [])
      )
    )
    .to.equal(
      JSON.stringify(
        {
          dice: [
            {
              face: Face.Two,
              isRerolled: false
            },
            {
              face: Face.Five,
              isRerolled: false
            },
            {
              face: Face.One,
              isRerolled: false
            }
          ],
          target: Face.Seven,
          autoSuccesses: 0
        }
      )
    )
  });
});

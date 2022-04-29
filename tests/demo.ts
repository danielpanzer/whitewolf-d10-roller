import { expect } from 'chai';
import { hello } from '../src/index';

describe('demo test', () => { // the tests container
    it('says hello', () => { // the single test
        expect(hello()).to.equal("Hello world!")
    });
});

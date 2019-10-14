import { expect } from 'chai';
import { add,sub,mul,div } from './calculator';


describe('Calculator', function(){
    it('dapat melakukan fungsi penjumlahan', function(){
      expect(add(10,5)).to.be.eq(15);
    });
    it('dapat melakukan fungsi pengurangan', function(){
        expect(sub(10,5)).to.be.eq(5);
    });
    it('dapat melakukan fungsi perkalian', function(){
        expect(mul(10,5)).to.be.eq(50);
    });
    it('dapat melakukan fungsi penmbagian', function(){
        expect(div(10,5)).to.be.eq(2);
    });
});

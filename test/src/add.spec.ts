import { get } from 'request-promise-native';
import { StatusCodeError } from 'request-promise-native/errors'
import { expect } from "chai";

describe("calculator server", function() {
    this.timeout(5000);
    this.slow(5000);
  
    describe("add service", function() {
      it("Dapat melakukan proses penjumlahan", async function() {
        const result = await get("http://localhost:3000/a?n1=10&n2=5", {
          json: true
        });
        expect(result).to.be.deep.eq({
          result: 15
        });
      });
  
      it("Galat karena input bukan berupa angka", async function() {
        let error = null;
        try {
          await get("http://localhost:3000/a?n1=10&n2=hasan", { json: true });
        } catch (err) {
          error = err;
        }
        expect(error).to.be.exist;
        expect(error).to.be.instanceOf(StatusCodeError);
        expect(error.statusCode).to.be.eq(400);
      });
  
      it("Galat karena tidak memiliki input", async function() {
        let error = null;
        try {
          await get("http://localhost:3000/a", { json: true });
        } catch (err) {
          error = err;
        }
        expect(error).to.be.exist;
        expect(error).to.be.instanceOf(StatusCodeError);
        expect(error.statusCode).to.be.eq(400);
      });
    });

    describe("sub service", function() {
        it("Dapat melakukan proses pengurangan", async function() {
          const result = await get("http://localhost:3000/s?n1=10&n2=5", {
            json: true
          });
          expect(result).to.be.deep.eq({
            result: 5
          });
        });
    
        it("Galat karena input bukan berupa angka", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/s?n1=10&n2=hasan", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    
        it("Galat karena tidak memiliki input", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/s", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    });

    describe("mul service", function() {
        it("Dapat melakukan proses perkalian", async function() {
          const result = await get("http://localhost:3000/m?n1=10&n2=5", {
            json: true
          });
          expect(result).to.be.deep.eq({
            result: 50
          });
        });
    
        it("Galat karena input bukan berupa angka", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/m?n1=10&n2=hasan", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    
        it("Galat karena tidak memiliki input", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/m", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    });

    describe("div service", function() {
        it("Dapat melakukan proses pembagian", async function() {
          const result = await get("http://localhost:3000/d?n1=10&n2=5", {
            json: true
          });
          expect(result).to.be.deep.eq({
            result: 2
          });
        });
    
        it("Galat karena input bukan berupa angka", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/d?n1=10&n2=hasan", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    
        it("Galat karena tidak memiliki input", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/d", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(400);
        });
    });

    it("harusnya error ketika akses endpoint yang tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/hasannabil", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(404);
    });
});
  
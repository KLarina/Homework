var test = require('../script.js');

describe("test", function() {
    it("test function pow()", function() {
        //prepare
        var result;
        //act
        result = test.pow(2,3);
        //assert
        expect(result).toBe(8);
    });
});
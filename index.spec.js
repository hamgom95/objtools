const { expect } = require("chai");
const { register, setDefault } = require("./index");

describe("setDefault()", function() {
    it("should set default if undefined property", function() {
        const obj = {};
        setDefault.call(obj, "a", 42);
        expect(obj.a).to.equal(42);
    });
});

describe("register()", function() {
    it("should mixin methods", function() {
        register(Object);
        expect({}.setDefault).to.not.be.undefined;
    });
});

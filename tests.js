// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when sayHello("Jane") is executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when sayHello("Alex") is executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when sayHello("Pat") is executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when sayHello() is executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when sayHello(true) is executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when sayHello(false) is executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when isFive(5) is executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when isFive("5") is executed', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function.', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return true when isEven(2) is executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when isEven(-4) is executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when isEven(3) is executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when isEven("banana") is executed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when isEven("8") is executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when isEven("Infinity") is executed', function () {
        expect(isEven("Infinity")).toBe(false);
    });
    it('should return false when isEven(true) is executed', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when isEven(false) is executed', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when isEven() is executed', function () {
        expect(isEven()).toBe(false);
    });
});
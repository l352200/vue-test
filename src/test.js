var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function look(a) {
    console.log(a.label1);
    console.log(a.label4);
    //没定义就变成undefined了 因为readonly 也不能再次赋值
    // a.label4=3
}
var obj = { label1: 'hello', label4: 22 };
look(obj);
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr, 'myStr');
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var a = mySearch('a2', 'a');
console.log(a, 'mySearch1');
var mySearch2;
mySearch2 = function (a, b) {
    var aa = Number(a);
    var bb = Number(b);
    return aa - bb;
};
console.log(mySearch2('22a', 'b21'), 'test');
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));

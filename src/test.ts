
interface labelObj {
    label1: string,
    label2?: number,
    label3?: string,
    //类似const 区别是const 针对变量  readonly 针对属性
    readonly label4?: number
}

function look(a: labelObj) {
    console.log(a.label1);
    console.log(a.label4);
    //没定义就变成undefined了 因为readonly 也不能再次赋值
    // a.label4=3
}

let obj = { label1: 'hello', label4: 22 }
look(obj)

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr, 'myStr');

interface SearchFunc {
    //函数
    (source: string, subString: string): boolean;
  }
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
let a=mySearch('a2','a')
console.log(a,'mySearch');

interface SearchFunc2 {
    //函数
    (source: string, subString: string): number;
  }
let mySearch2: SearchFunc2
mySearch2 = function (a, b) {
    let aa=Number(a)
    let bb=Number(b)
    return aa-bb
}
console.log(mySearch2('22a','b21'),'test');


class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [y: number]: Animal;
    // [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
  

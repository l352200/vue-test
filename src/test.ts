
interface labelObj {
    label1: string,
    label2?: number,
    label3?: string,
    //类似const 区别是const 针对变量  readonly 针对属性
    readonly label4?: number
}

function look(a: labelObj) {
    // console.log(a.label1);
    // console.log(a.label4);
    //没定义就变成undefined了 因为readonly 也不能再次赋值
}

let obj = { label1: 'hello', label4: 22 }
look(obj)

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// console.log(myStr, 'myStr');

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
// console.log(a,'mySearch');

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
// console.log(mySearch2('22a','b21'),'test');
// console.log(mySearch2('22','21'),'test2');


// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [y: number]: Animal;
//     // [x: string]: Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // 可以，length是number类型
//     // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {
//         this.currentTime=new Date(h+m)
//      }
// }
// let cloack = new Clock(1000000000000, 200000000000)
// console.log(cloack.currentTime);

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { 
//         console.log(h,'h');
//         console.log(m,'m');
        
//     }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// // analog.tick()

// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
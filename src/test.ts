interface labelObj {
  label1: string;
  label2?: number;
  label3?: string;
  //类似const 区别是const 针对变量  readonly 针对属性
  readonly label4?: number;
}

function look(a: labelObj) {
  // console.log(a.label1);
  // console.log(a.label4);
  //没定义就变成undefined了 因为readonly 也不能再次赋值
}

let obj = { label1: "hello", label4: 22 };
look(obj);

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
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
let a = mySearch("a2", "a");
// console.log(a,'mySearch');

interface SearchFunc2 {
  //函数
  (source: string, subString: string): number;
}
let mySearch2: SearchFunc2;
mySearch2 = function (a, b) {
  let aa = Number(a);
  let bb = Number(b);
  return aa - bb;
};
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

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);

function testMethods(n: number, a: Array<number | string>, s: string) {
  var text:any;
  switch (n) {
    //splice 截取数组 第一个参数 起始位置 第二个参数截取多少个 改变原数组为剩余未被截取的部分 返回值为截取部分
    case 1:
      text = a.splice(1, 4);
      console.log(a, "splice-a");
      console.log(text, "splice-text");
      break;
    //slice 截取数组 第一个参数 起始位置 第二个参数 终止位置（该索引不执行） 不改变原数组 返回值为截取部分
    case 2:
      text = a.slice(1, 3);
      console.log(a, "slice-a");
      console.log(text, "slice");
      break;
    //pop 删除数组最后一个元素 无参数 改变原数组 返回值为被删除的元素
    case 3:
      text = a.pop();
      console.log(a, "pop-a");
      console.log(text, "pop");
      break;
    //join 把数组各元素分隔成字符串 第一个参数 分隔符（字符串） 不改变原数组 返回值为被分隔后的字符串
    case 4:
      text = a.join("-");
      console.log(a, "join-a");
      console.log(text, "join");
      break;
    //unshift 向开头添加若干元素 参数为添加的元素 返回值为改变后数组长度
    case 5:
      text = a.unshift('hello', 'sakiro');
      console.log(a, "unshift-a");
      console.log(text, "unshift");
      break;
    //shift 删除数组第一个元素 无参数 改变原数组 返回值为被删除的元素
    case 6: 
      text = a.shift();
      console.log(a, "shift-a");
      console.log(text, "shift");
      break;
    //split 把按一定分隔符分隔好的字符串转成数组 参数为分隔符 返回值为原数组
    case 7:
      text = s.split(",");
      console.log(s, "split-a");
      console.log(text, "split");
      break;
    default:
      break;
  }
}
//测试若干方法
for (var i = 0; i < 8; i++) {
  testMethods(i, [1, 2, 3, 4, 5, 6, 7, 8, 9], "1,2,3,4,5,6,7,8,9");
}

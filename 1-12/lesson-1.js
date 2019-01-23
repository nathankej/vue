//声明变量  var 关键字
var name = 'ryu'; //声明一个变量 

var name = 'xiaoming',age = '18';//
//const 关键字  声明常量使用
const ENV = 'nodejs' ;

//let关键字  声明块变量

function myapp(){
    let a =1;
    let b=1;
}

//数据类型 

var name = 'nathan'; 

var num =  12;

var boolen = false;

//取到obj内的值 使用 ‘.’ 或者 obj['name'] 进行操作 var a = 'name'; obj[a]
// 1, Object.assign(),合并对象属性生成一个新的对象。
// 2, for in  语句。
var form = {
    name:'',
    age:0,
    like:'',
    phone:''
};


//使用for in 进行简单的表单验证 
for (var a in form){
    if (a != like){

    }
}
//for  of 语句 循环 *es6  循环 对象的值 
//
for(var a of form){
    console.log(a);
}

var obj1 = {
  name : 'jian',
  height : 155,
  weight : '65kg'
};
var obj2 = {
    name:'liu',
    age:16,
    sex:'boy'
}
var obj3 = Object.assign(obj1,obj2);


// 数组
var arr = [1,2,3,4];
//数组的操作  
var fun = function(){
    console.log('happy');
};
// Array.push()  array.split()
//Array.splice(a,b,c)  splice操作函数有三值，第一个需要删除的数字的索引，第二个从索引开始删除多少个选项，第三个值 在原始位置上面添加的值

var goods = ['牛奶','啤酒','可乐','雪碧']
goods.splice(0,1,'苏打水')

//array.indexOf() 寻找数组当中 的索引
goods.indexOf('啤酒') // 1
goods.indexOf('白酒') //-1

//array.slice(a,b) 根据索引，截取一个数组  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 

// Array.forEach()  传入一个回调函数 回调函数里有三个值 （item,index，arr）
var goods = ['牛奶','啤酒','可乐','雪碧'];
// goods.forEach(function(elment,index,arr){

// });
//NEST array
var people = [
    {
        name:'xiaomin',
        age:16
    },
    {
        name:'xiaowang',
        age:17
    },
    {
        name:'xiaozhang',
        age:18
    }
]

people.forEach(function(item,index,arr){
    // console.log('item:'+item+'index:'+index+'arr:'+arr)
    console.log(item);
    console.log(index);
    console.log(arr)
})
//map 
people.map(function(item,index,arr){
    return Object.assign(item,{sex:'boy'})
})
var a =1;
var b = 2;
var fun =function(a,b){
    console.log(a+b);
}
function plus(a,b){
    var type = '*'; //var 只能在里面使用，存在变量提升的问题 使用let关键字可以解决这个问题 。
    b = 'xx'; //可以在函数外使用
    console.log(a*b);
    type = '123' //变量提升
}
console.log(type)

//匿名函数  箭头函数  =
 ()=>{console.log()}  等同于  function(){console.log()} 

 //三元表达式

 var status = true;
 var x = status?'对':'错';
//dom操作
document.querySelector() // 上下文中选取第一个。
document.querySelectorAll() //选取文档中所有的对应元素。，格式都为数组。document.querySelectorAll('div')[5]
document.getElementById() //根据ID选择 dom节点。
document.getElementsByClassName() // 返回所有对应的，格式都为数组。
document.getElementsByTagName() // 返回所有对应的，格式都为数组。

//Ajax 异步获取数据。 常用axios进行Ajax请求
// js框架 vue ，react ，angular ，js库 jquery 等等。
axios({
    url:url,
    data:{

    },
    methods:'get'
})

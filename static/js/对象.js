/**
 * Created by peng on 17/8/2.
 */
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
console.log(xiaoming);


//如果我们要检测xiaoming是否拥有某一属性，可以用in操作符
var a = 'name' in xiaoming;
console.log(a);
//如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：

//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
xiaoming.hasOwnProperty('name');

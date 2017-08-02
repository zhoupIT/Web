/**
 * Created by peng on 17/8/2.
 */
var arr = [1,2,3,4,5,56];
console.log(arr.length+' '+arr.indexOf(56));
//从索引0开始 到2结束,但是不包括2
console.log(arr.slice(0,2));

var copyArr = arr.slice();
console.log('copy一个新的数组'+copyArr);


//push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
copyArr.push(10,11);
console.log(copyArr);

copyArr.pop();
console.log(copyArr);


//unshift Array的头部添加若干元素  使用unshift()方法，shift()方法则把Array的第一个元素删掉
copyArr.unshift(101,102);
console.log(copyArr);

copyArr.shift();
console.log(copyArr);

//sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
var tempArr = ['b','c','a'];
tempArr.sort();
console.log(tempArr);

//reverse()把整个Array的元素给掉个个，也就是反转：

//splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
var spliceArr = ['z','h','o','u'];
//从索引1开始删除2个元素 然后再添加两个因素
spliceArr.splice(1,2,'pp','zz');
console.log(spliceArr);

//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
var newArr = spliceArr.concat(copyArr);
console.log(newArr);

//join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
var joinArr = ['A', 'B', 'C', 1, 2, 3];
var string = joinArr.join('-'); // 'A-B-C-1-2-3'
console.log(string);

var namearr = ['小明','小红','大军','阿黄'];
namearr.sort();
var s1 = namearr.slice(0,namearr.length-1);
var s2 = namearr[namearr.length-1];
console.log('欢迎'+s1+'和'+s2+'同学');
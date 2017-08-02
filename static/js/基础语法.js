/**
 * Created by peng on 17/8/2.
 */
var age = 21;
var person = {
    name: 'zhoupIT',
    age: 20,
    tags: ['js','web','mobile'],
    city: 'shanghai',
    zipcode: null
};

var xs = 'd hello';
var ds = 'x HELLO';
if(age >= person.age){
    alert('成人'+person.name);
    //打印大写
    console.log('大写'+xs.toUpperCase());
    //打印小写
    console.log('小写'+ds.toLowerCase());

    //打印区间里面的string
    console.log('2之后的字符串'+ds.substring(2));
} else {
    alert('青少年');
}

function hello(name) {
    console.log('Yo ' + name + ', I\'m ' + this.name)
}


var gongke = {
    name: 'gongke',
}

var tingting = {
    name: 'tingting',
}

hello.call(gongke, 'sb'); //hello.call() === hello(),  但是call可以把hello()里面的this绑定为传进去的对象，即gongke
hello.apply(gongke, ['sb']); //hello.apply()和hello.call()基本一致，只是hello.apply()传参的时候，后面的所有参数要放到一个数组里面

var hello2 = hello.bind(gongke, 'sb'); //hello.bind()和hello.call()的用法也基本一致，但是hello.bind()可以把绑定的新环境返回，等着你用，并没有向上面2个函数一样马上执行
hello2(); 
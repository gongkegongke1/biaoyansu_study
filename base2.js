function a() {
    this //这里的this指向undefined
}

(function () {
    this //这里的this指向undefined
})


var user = {
    fname: 'huahua',
    lname: 'wang',
    fullname: function() {
        console.log(this) //这里的this指向父级对象，即user
        return this.lname + this.fname
    }
}
var a = user.fullname;
console.log(a());

function User() {
    this.name = 'gongke' //在构造器中，this指向即将生成的对象，即User
}

var gongke = new User();
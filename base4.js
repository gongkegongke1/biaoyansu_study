var a = [2,4,6,8]

function each(arr, callback) {
    for(var i=0; i<=arr.length; i++) {
        var item = arr[i];
        callback(item); //回调函数的本质就是允许你在某个函数里面插入你的代码，并且不影响原来代码的执行。比如这行，你插入了你写的一个方法，each()先进入callback()里面，
                        //把item = arr[0]传到greaterThan5()里面判断， arr[0] = 2 < 5， 所以2不打印， 继续执行console.log(item)
        console.log(item) //打印 arr[0] = 2。 同理arr[1] = 4。 但是当arr[2] = 6时， greaterThan5(6)需要执行，所以打印6，然后console.log(6)也会打印，所以6会打印2次。同理arr[3] = 8也会打印2次
    }
}

function greaterThan5(item) {
    if (item > 5) {
        console.log(item);
    }
}

function lessThan5(item) {
    if (item < 5) {
        console.log(item);
    }
}


each(a, greaterThan5);
// each(a, lessThan5);


// hook 对象属性
// 对象的赋值和获取操作

let user = {
    "name": "小明"
};
// hook的时机，对象已经定义或者已经加载
_name = user.name;
Object.defineProperty(user, "name", {
    get (){     // 获取属性值的时候执行
        console.log("正在获取属性值");
        return _name;
    },
    set (value){     // 设置属性值的时候执行
        console.log("正在设置属性值");
        _name = value;
    }
})
_age = 1;
Object.defineProperty(user, "age", {
    get (){     // 获取属性值的时候执行
        console.log("正在获取属性值");
        return _age;
    },
    set (value){     // 设置属性值的时候执行
        console.log("正在设置属性值：", value);
        _age = value;
    }
})

// 获取属性值的操作
console.log(user.name);
// 设置属性值的操作
user.name = "小王";
// 重新获取值
console.log(user.name);
console.log("=========================");

console.log(user.age);
user.age = 12;
console.log(user.age);

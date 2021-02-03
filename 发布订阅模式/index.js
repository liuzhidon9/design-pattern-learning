let salesOffices = {} //定义售楼处
salesOffices.clientList = {}  //缓存列表，存放订阅者的回调函数

salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}

salesOffices.trigger = function () {
    let key = Array.prototype.shift.call(arguments) //取出消息类型
    let fns = this.clientList[key]
    if (!fns || fns.length === 0) {
        return false
    }
    for (let i = 0; i <= fns.length - 1; i++) {
        fns[i].apply(this, arguments)
    }
}

salesOffices.listen('squareMeter110', function (price) { //小明订阅消息
    console.log('squareMeter110', price);
})
salesOffices.trigger('squareMeter110', 2000000)


let myevent = {
    clientList: {},//缓存订阅事件
    triggerList: {},//缓存还没有人订阅的消息
    listen: function (key, fn) {
        if (this.triggerList[key].length !== 0) {
            for (data = this.triggerList[key].shift(); data; data = this.triggerList[key].shift()) {
                fn(data)

            }
            return
        }
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function (key, data) {
        let fns = this.clientList[key]
        if (!fns || fns.length === 0) {//没有人订阅此消息，先缓存起来
            this.triggerList[key] = this.triggerList[key] ? this.triggerList[key] : []
            this.triggerList[key].push(data)
            return
        }
        for (let i = 0; i <= fns.length - 1; i++) {
            fns[i].apply(this, arguments)
        }
    }
}

let installEvent = function (obj) {
    for (const key in myevent) {
        obj[key] = myevent[key]
    }
}

salesOffices = {}
installEvent(salesOffices)

salesOffices.trigger('squareMeter62', 1000000)
salesOffices.trigger('squareMeter62', 2000000)
salesOffices.listen('squareMeter62', function (data) { //小明订阅消息
    console.log('squareMeter62', data);
})
setTimeout(() => {
    salesOffices.listen('squareMeter62', function (price) { //小明订阅消息
        console.log('squareMeter62', price);
    })
}, 1000)
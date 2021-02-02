// 隐蔽的单例模式
class Singleton {
    constructor(name) {
        this.instance = null
        this.name = name
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Singleton(name)
        }
        return this.instance
    }
    getName() {
        console.log(this.name);
    }
}

let a = Singleton.getInstance("Nicholas.Cage")
let b = Singleton.getInstance("Nicholas.ZhaoSi")

console.log('a === b', a === b); //true
a.getName()
b.getName()

// 透明单例模式 ：引入代理类来组合成单例模式
// 创建一个全局唯一的div节点
class CreateDiv {
    constructor(html) {
        this.html = html
        this.init()
    }

    init() {
        // let div = document.createElement('div')
        // div.innerHTML = this.html
        // document.body.appendChild(div)
        console.log(this.html);
    }
}
let proxyCreateDiv = (function () {
    let instance
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }


})()

let aa = new proxyCreateDiv('hello world')
let bb = new proxyCreateDiv('how are you')
console.log('aa===bb', aa === bb);//true


// 通用的惰性单例
let createLoginLayer = function (text) {
    console.log(text);
    return text
}
let getSingle = function (fn) {
    let result
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

let createSingleLoginLayer = getSingle(createLoginLayer)
let aaa = createSingleLoginLayer('xxx')
let bbb = createSingleLoginLayer('yyy')
console.log('aaa===bbb', aaa === bbb);//true

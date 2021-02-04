let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")

setCommand = function (button, command) {
    button.onclick = function () {
        command.execute()
    }
}

let menuBar = {
    refresh() {
        console.log('刷新菜单目录');
    }
}
let subMenu = {
    add() {
        console.log('添加子菜单');
    },
    del() {
        console.log('删除子菜单');
    }
}

class RefreshMenuBarCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    execute() {
        this.receiver.refresh()
    }
}

class AddSubMenuCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    execute() {
        this.receiver.add()
    }
}

class DelSubMenuCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    execute() {
        this.receiver.del()
    }
}

let refreshMenuBarCommand = new RefreshMenuBarCommand(menuBar)
let addSubMenuCommand = new AddSubMenuCommand(subMenu)
let delSubMenuCommand = new DelSubMenuCommand(subMenu)
setCommand(button1, refreshMenuBarCommand)
setCommand(button2, addSubMenuCommand)
setCommand(button3, delSubMenuCommand)
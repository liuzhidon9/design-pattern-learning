# 命令模式

#### 定义：`命令模式是一种数据驱动的设计模式，它属于行为模式，请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。`

### 菜单程序 `传统面向对象`

```js
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

setCommand = function (button, command) {
  button.onclick = function () {
    command.execute();
  };
};

let menuBar = {
  refresh() {
    console.log("刷新菜单目录");
  },
};
let subMenu = {
  add() {
    console.log("添加子菜单");
  },
  del() {
    console.log("删除子菜单");
  },
};

class RefreshMenuBarCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.refresh();
  }
}

class AddSubMenuCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.add();
  }
}

class DelSubMenuCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.del();
  }
}

let refreshMenuBarCommand = new RefreshMenuBarCommand(menuBar);
let addSubMenuCommand = new AddSubMenuCommand(subMenu);
let delSubMenuCommand = new DelSubMenuCommand(subMenu);
setCommand(button1, refreshMenuBarCommand);
setCommand(button2, addSubMenuCommand);
setCommand(button3, delSubMenuCommand);
```

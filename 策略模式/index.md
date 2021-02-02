# 策略模式

#### 定义：`定义一系列的算法，并把它们一个个封装起来，并且使它们能够相互转换`

### 使用策略模式来计算奖金

`很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。例如，绩效为 S 的人年终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终奖是 2 倍工资。假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖。`

#### 传统面向对象版

```js
// 使用策略模式计算奖金
class PerformanceS {
  calculate(salary) {
    return salary * 4;
  }
}
class PerformanceA {
  calculate(salary) {
    return salary * 3;
  }
}
class PerformanceB {
  calculate(salary) {
    return salary * 2;
  }
}
class PerformanceC {
  calculate(salary) {
    return salary * 1;
  }
}

class Bonus {
  constructor() {
    this.salary = null; //原始工资
    this.strategy = null; //绩效等级对应的策略对象
  }

  setSalary(salary) {
    this.salary = salary;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
  getBonus() {
    return this.strategy.calculate(this.salary);
  }
}

let bonus = new Bonus();
bonus.setSalary(3000);
bonus.setStrategy(new PerformanceS());
console.log("getBonus", bonus.getBonus());
```

#### js 简易版

```js
// js简易版
let strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
  C: function (salary) {
    return salary * 1;
  },
};

let calculateBonus = function (strategy, salary) {
  return strategies[strategy](salary);
};
console.log("calculateBonus", calculateBonus("A", 3000));
```

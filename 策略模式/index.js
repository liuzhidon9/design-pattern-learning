// 使用策略模式计算奖金
class PerformanceS {
    calculate(salary) {
        return salary * 4
    }
}
class PerformanceA {
    calculate(salary) {
        return salary * 3
    }
}
class PerformanceB {
    calculate(salary) {
        return salary * 2
    }
}
class PerformanceC {
    calculate(salary) {
        return salary * 1
    }
}

class Bonus {
    constructor() {
        this.salary = null //原始工资
        this.strategy = null //绩效等级对应的策略对象
    }

    setSalary(salary) {
        this.salary = salary
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }
    getBonus() {
        return this.strategy.calculate(this.salary)
    }
}

let bonus = new Bonus()
bonus.setSalary(3000)
bonus.setStrategy(new PerformanceS)
console.log('getBonus', bonus.getBonus());

// js简易版
let strategies = {
    S: function (salary) {
        return salary * 4
    },
    A: function (salary) {
        return salary * 3
    },
    B: function (salary) {
        return salary * 2
    },
    C: function (salary) {
        return salary * 1
    },
}

let calculateBonus = function (strategy, salary) {
    return strategies[strategy](salary)
}
console.log('calculateBonus', calculateBonus('A',3000));
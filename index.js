// class Water {
//     private boil: number;
//     private minWater:number = 0;
//     private maxWater:number = 1000;
//     constructor(private volume: number) {};
//     public get(boil: number):number {
//         this.volume += boil;
//         if(this.volume > this.maxWater)
//             throw new Error('Its already filled')
//         else {
//             return this.volume;
//         }
//     };
//     public set(boil:number):void {      
//         if(this.volume < this.minWater) {
//             throw new Error('Not enought water to give!');
//         }
//         else {
//             this.volume -= boil;
//         }
//     }
//     public getCurrentBoil():number {
//         return this.volume
//     }
// }
// const water = new Water(200);
// debugger
// console.log(water);
// water.get(200);
// console.log(water);
// water.set(300);
// console.log(water);
/* ########### Receipt ############
    
Americano: 200 Water; 0 Milk; 200 Beans;
   Latte: 200 water; 200 Mlk; 100 Beans;
   Espresso: 100 Water; 0 Milk; 300 Beans;
   Flatt White: 200 water: 300 Milk; 200 Beans;
*/
var Coffe = /** @class */ (function () {
    function Coffe(water, milk, beans) {
        this.water = water;
        this.milk = milk;
        this.beans = beans;
    }
    return Coffe;
}());
var Water = /** @class */ (function () {
    function Water(water) {
        this.water = water;
    }
    return Water;
}());
var Beans = /** @class */ (function () {
    function Beans(beans) {
        this.beans = beans;
    }
    return Beans;
}());
var Milk = /** @class */ (function () {
    function Milk(milk) {
        this.milk = milk;
    }
    return Milk;
}());
var CoffeMachine = /** @class */ (function () {
    function CoffeMachine(waterController, beansController, milkController) {
        this.waterController = waterController;
        this.beansController = beansController;
        this.milkController = milkController;
    }
    CoffeMachine.prototype.getAmericano = function () {
        if (this.waterController > 200 && this.beansController > 200) {
            this.waterController -= 200;
            return new Coffe(200, 0, 200);
        }
        throw new Error('Not enough ingridients');
    };
    CoffeMachine.prototype.getLatte = function () {
        //Todo
        return new Coffe(200, 200, 100);
    };
    CoffeMachine.prototype.getEspresso = function () {
        //Todo
        return new Coffe(100, 0, 300);
    };
    CoffeMachine.prototype.getFlatWhite = function () {
        //Todo
        return new Coffe(200, 300, 200);
    };
    CoffeMachine.prototype.setWater = function (volume) {
    };
    CoffeMachine.prototype.setBeans = function (volume) {
    };
    CoffeMachine.prototype.setMilk = function (volume) {
    };
    return CoffeMachine;
}());
var machine = new CoffeMachine(new Water(2000), new Beans(2000), new Milk(2000));

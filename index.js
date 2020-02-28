/* ########### Receipt ############
    
Americano: 200 Water; 0 Milk; 200 Beans;
   Latte: 200 water; 200 Mlk; 100 Beans;
   Espresso: 100 Water; 0 Milk; 300 Beans;
   Flatt White: 200 water: 300 Milk; 200 Beans;
*/
var Coffee = /** @class */ (function () {
    function Coffee(water, beans, milk) {
        this.water = water;
        this.beans = beans;
        this.milk = milk;
    }
    return Coffee;
}());
var Water = /** @class */ (function () {
    function Water(water) {
        this.water = water;
    }
    Water.prototype.setWater = function (volume) {
        this.water += volume;
    };
    Water.prototype.getWater = function (volume) {
        this.water -= volume;
    };
    Water.prototype.currentWater = function () {
        return this.water;
    };
    return Water;
}());
var Beans = /** @class */ (function () {
    function Beans(beans) {
        this.beans = beans;
    }
    Beans.prototype.setBeans = function (volume) {
        this.beans += volume;
    };
    Beans.prototype.getBeans = function (volume) {
        this.beans -= volume;
    };
    Beans.prototype.currentBeans = function () {
        return this.beans;
    };
    return Beans;
}());
var Milk = /** @class */ (function () {
    function Milk(milk) {
        this.milk = milk;
    }
    Milk.prototype.setMilk = function (volume) {
        this.milk += volume;
    };
    Milk.prototype.getMilk = function (volume) {
        this.milk -= volume;
    };
    Milk.prototype.currentMilk = function () {
        return this.milk;
    };
    return Milk;
}());
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine(waterController, beansController, milkController) {
        this.waterController = waterController;
        this.beansController = beansController;
        this.milkController = milkController;
    }
    CoffeeMachine.prototype.getCurrentIngredientInConsole = function () {
        console.log("Currently \n            water Volume is " + this.waterController.currentWater() + " \n            beans Volume is " + this.beansController.currentBeans() + " \n            milk Volume is " + this.milkController.currentMilk());
    };
    CoffeeMachine.prototype.getAmericano = function () {
        if (this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 200) {
            this.waterController.getWater(200);
            this.beansController.getBeans(200);
            console.log('Americano Done!');
            this.getCurrentIngredientInConsole();
            return new Coffee(200, 200);
        }
        else {
            throw new Error('Not enought ing');
        }
    };
    CoffeeMachine.prototype.getLatte = function () {
        if (this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 100 && this.milkController.currentMilk() >= 200) {
            this.waterController.getWater(200);
            this.beansController.getBeans(100);
            this.milkController.getMilk(200);
            console.log('Latter done!');
            this.getCurrentIngredientInConsole();
            return new Coffee(200, 100, 200);
        }
        else {
            throw new Error('Not enought ing');
        }
    };
    CoffeeMachine.prototype.getEspresso = function () {
        if (this.waterController.currentWater() >= 100 && this.beansController.currentBeans() >= 300) {
            this.waterController.getWater(200);
            this.beansController.getBeans(300);
            console.log('Espresso done!');
            this.getCurrentIngredientInConsole();
            return new Coffee(100, 300);
        }
        else {
            throw new Error('Not enought ing');
        }
    };
    CoffeeMachine.prototype.getFlatWhite = function () {
        if (this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 200 && this.milkController.currentMilk() >= 300) {
            this.waterController.getWater(200);
            this.beansController.getBeans(200);
            this.milkController.getMilk(300);
            console.log('Flatt White Done');
            this.getCurrentIngredientInConsole();
            return new Coffee(200, 200, 300);
        }
        else {
            throw new Error('Not enought ing');
        }
    };
    CoffeeMachine.prototype.setWater = function (volume) {
        this.waterController.setWater(volume);
    };
    CoffeeMachine.prototype.setBeans = function (volume) {
        this.beansController.setBeans(volume);
    };
    CoffeeMachine.prototype.setMilk = function (volume) {
        this.milkController.setMilk(volume);
    };
    return CoffeeMachine;
}());
var machine = new CoffeeMachine(new Water(2000), new Beans(2000), new Milk(2000));
machine.getAmericano();
machine.getEspresso();
machine.getFlatWhite();
machine.getLatte();

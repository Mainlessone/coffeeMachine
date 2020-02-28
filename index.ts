/* ########### Receipt ############
    
Americano: 200 Water; 0 Milk; 200 Beans;
   Latte: 200 water; 200 Mlk; 100 Beans;
   Espresso: 100 Water; 0 Milk; 300 Beans;
   Flatt White: 200 water: 300 Milk; 200 Beans;
*/
class Coffee {

    constructor(
        protected water: number,
        protected beans: number,
        protected milk?: number
        ) {}

}

class Water { 
    constructor(public water: number){}
    setWater(volume) {
        this.water += volume
    }
    getWater(volume):void {
        this.water -= volume;
    }
    currentWater():number {
        return this.water
    }
}

class Beans {
    constructor(public beans: number){}

    setBeans(volume) {
        this.beans += volume
    }
    getBeans(volume):void {
        this.beans -= volume;
    }
    currentBeans():number {
        return this.beans
    }
}

class Milk {
    constructor(public milk: number) {}

    setMilk(volume):void {
        this.milk += volume
    }
    getMilk(volume):void {
        this.milk -= volume
    }
    currentMilk():number {
        return this.milk
    }
}

class CoffeeMachine {

        constructor(
            public waterController: Water,
            public beansController: Beans,
            public milkController?: Milk
            ) {}


    public getCurrentIngredientInConsole():void {
        console.log(
            `Currently 
            water Volume is ${this.waterController.currentWater()} 
            beans Volume is ${this.beansController.currentBeans()} 
            milk Volume is ${this.milkController.currentMilk()}`
            )
    }
    public getAmericano():Coffee {
        if(this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 200) {
            this.waterController.getWater(200);
            this.beansController.getBeans(200);
            console.log('Americano Done!');
            this.getCurrentIngredientInConsole();
            return new Coffee(200, 200);
        }
        else {
            throw new Error('Not enought ing');
        }
        
    }

    public getLatte():Coffee{
        if(this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 100 && this.milkController.currentMilk() >= 200) {
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
    }
    public getEspresso():Coffee{
        if(this.waterController.currentWater() >= 100 && this.beansController.currentBeans() >= 300) {
            this.waterController.getWater(200);
            this.beansController.getBeans(300);
            console.log('Espresso done!');
            this.getCurrentIngredientInConsole();
            return new Coffee(100, 300);
        }
        else {
            throw new Error('Not enought ing');
        }
        
        
    }
    public getFlatWhite():Coffee{
        if(this.waterController.currentWater() >= 200 && this.beansController.currentBeans() >= 200 && this.milkController.currentMilk() >= 300) {
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
    }

    public setWater(volume: number): void {
        this.waterController.setWater(volume);
    }
    
    public setBeans(volume:number): void {
        this.beansController.setBeans(volume);
    }
    public setMilk(volume:number): void {
        this.milkController.setMilk(volume);
    }
}

const machine = new CoffeeMachine(new Water(2000), new Beans(2000), new Milk(2000));
machine.getAmericano();
machine.getEspresso();
machine.getFlatWhite();
machine.getLatte();
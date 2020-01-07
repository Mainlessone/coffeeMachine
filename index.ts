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
class Coffe {

    constructor(
        protected water: number,
        protected milk: number,
        protected beans: number
        ) {}

}

class Water { 
    constructor(public water: number){}

}

class Beans {
    constructor(public beans: number){}
}

class Milk {
    constructor(public milk: number) {}
}

class CoffeMachine {

        constructor(
            public waterController: Water,
            public beansController: Beans,
            public milkController?: Milk
            ) {}


    public getAmericano():Coffe {
        if(this.waterController > 200 && this.beansController > 200) {
            this.waterController-= 200;

            return new Coffe(200, 0,200);
        }
        throw new Error('Not enough ingridients')
    }

    public getLatte():Coffe{
//Todo
        return new Coffe(200,200,100);
    }
    public getEspresso():Coffe{
//Todo
        
        return new Coffe(100,0,300);
    }
    public getFlatWhite():Coffe{
//Todo
        return new Coffe(200,300,200);
    }

    public setWater(volume: number): void {

    }
    
    public setBeans(volume:number): void {

    }
    public setMilk(volume:number): void {
        
    }
}

const machine = new CoffeMachine(new Water(2000), new Beans(2000), new Milk(2000))
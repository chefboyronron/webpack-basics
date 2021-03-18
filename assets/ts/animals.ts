export class Animals {

    private animalInfo: any;

    constructor() {}

    getAnimal = (param:any) => {
        this.animalInfo = param;
        return this.animalInfo;
    }
}
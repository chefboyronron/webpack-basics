import { Animals } from './animals';

export class Script {

    constructor() {
        let animal = new Animals();
        let dog = animal.getAnimal({type: 'dog', name: 'chopper'});
        console.log(dog);
    }
}

let script = new Script();
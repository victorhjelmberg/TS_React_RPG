import {Player} from './Player';

export class Mine{
    constructor(player : Player){
        this.player = player;
    }

    private player : Player;

    private getStone(){
        this.getRessource("Stone", 1);
    }

    private getGold(){
        this.getRessource("Gold", 1);
    }

    private getRessource(ressource:string, amount:number){
        this.player.sendMessage("You mined 1 " + ressource + ".");
        this.player.addMaterial(ressource, amount);
    }

    private takeDamage(damage:number){
        this.player.sendMessage("A bomb exploded while you where digging. You took " + damage + " damage.");
        this.player.takeDamage(damage);
    }

    public mine(){
        const mineProbability: [number, {():void}][] = [ //[Probability, callback]
            [80, () => this.getStone()],
            [10, () => this.getGold()],
            [8, () => this.takeDamage(10)],
            [2, () => this.takeDamage(30)],
        ];
    
        // Picks a random callback, from the given probabilities
        const akkPercentage = mineProbability.reduce((akk, cur) => akk + cur[0], 0);
        let pickedNumber = Math.ceil(Math.random() * akkPercentage);

        for(let i of mineProbability){
            if(i[0] >= pickedNumber){
                i[1].bind(this)();
                break;
            } else {
                pickedNumber -= i[0];
            }
        }
    }
}
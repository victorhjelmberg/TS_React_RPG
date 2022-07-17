import {Player} from './Player';
import {Mine} from './Mine';


class Controlls{

    constructor(sendMessage: (text:string)=>void){
        this.p = new Player(sendMessage);
        this.m = new Mine(this.p);
    }

    private p: Player;
    private m: Mine;

    public inventory(){
        this.p.displayInventory();
    }

    public mine(){
        this.m.mine();
    }

    public displayHealth(){
        this.p.displayHealth();
    }

    public sendPlayerMessage(message: string){
        this.p.sendMessage(message);
    }
}
export default Controlls;

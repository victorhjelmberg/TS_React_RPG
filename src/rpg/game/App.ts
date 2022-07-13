import {Player} from './Player';
import {Mine} from './Mine';

class App{

    private p = new Player();
    private m = new Mine(this.p);

    public inventory(){
        this.p.displayInventory();
    }

    public mine(){
        this.m.mine();
    }

}
export default App;

export class Player{

    constructor(sendMessage: (text:string)=>void){
        this.sendMessage = sendMessage;
        this.resetInventory();
    }

    private inventory : {[name: string] : number} = {}

    private health = 100;

    private resetInventory(){
        this.inventory = {
            "Stone": 0,
            "Gold": 0
        }
    }

    public sendMessage;

    public takeDamage(damage: number){
        this.health -= damage;

        //Checks if the player is dead
        if(this.health <= 0){
            this.resetInventory();
            this.sendMessage("You died and lost all of your inventory");
        }
    }

    public addMaterial(material: string, amount: number){
        this.inventory[material] += amount;
    }

    /* Display */
    public displayHealth(){
        this.sendMessage("Health: " + this.health);
    }
    public displayInventory(){
        this.sendMessage(JSON.stringify(this.inventory));
    }
}

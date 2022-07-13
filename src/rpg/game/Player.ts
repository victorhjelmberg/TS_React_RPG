export class Player{

    constructor(){
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

    public takeDamage(damage: number){
        this.health -= damage;

        //Checks if the player is dead
        if(this.health <= 0){
            this.resetInventory();
            console.log("You died and lost all of your inventory");
        }
    }

    public addMaterial(material: string, amount: number){
        this.inventory[material] += amount;
    }

    /* Display */
    public displayHealth(){
        console.log("Health: " + this.health);
    }
    public displayInventory(){
        console.log(this.inventory);
    }
}

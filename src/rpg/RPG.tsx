import React, { Component } from 'react';
import './RPG.css';

import Controlls from './game/Controlls';

class RPG extends Component<{}, {comp: JSX.Element[], textInput: string}>{

    constructor(props:any){
        super(props);

        this.state = {comp: [<p style={{"fontWeight": "bold"}}>Welcome to text-RPG. Type /commands to get started</p>], textInput: ''};

        this.addText = this.addText.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    private game = new Controlls(this.addText.bind(this));

    private commandLibary : {[command:string]:()=>void} = {
        'mine': this.game.mine.bind(this.game),
        'inventory': this.game.inventory.bind(this.game),
        'health': this.game.displayHealth.bind(this.game)
    }

    private addText(text: string){
        let b = this.state.comp;
        b.unshift(<p>{text}</p>);

        this.setState({comp: b});
    }

    private onFormSubmit(event: React.FormEvent){
        event.preventDefault();
        this.executeCommand(this.state.textInput);
        this.setState({textInput: ''});
    }

    private executeCommand(untestedCommand: string){

        if(!untestedCommand.startsWith('/')){
            this.addText('Syntax error: Command needs to begin with "/"');
            return;
        }

        const command = untestedCommand.substring(1).toLowerCase();

        const commandCallback = this.commandLibary[command]
        
        if(typeof(commandCallback) === 'undefined'){
            if(command === 'commands'){
                //List commands
                this.addText('Commands: ' + Object.keys(this.commandLibary).map((command) => '/' + command).join(', '));
            } else {
                //Command not found
                this.addText('Command not found. Try /commands for a full list of all commands');
            }
        } else {
            commandCallback();
        }
    }

    private onInputChange(event: React.FormEvent<HTMLInputElement>){
        this.setState({textInput: event.currentTarget.value});
    }

    render(){
        return (
            <div>
                <div className='red'>
                    {React.Children.toArray(this.state.comp)}
                </div>
                <form className='form' onSubmit={this.onFormSubmit}>
                    <input className='input' value={this.state.textInput} onChange={this.onInputChange}></input>
                    <input className='button' type='submit' ></input>
                </form>
            </div>
        )
    }
}
export default RPG;
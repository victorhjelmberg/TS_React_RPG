import React, { Component } from 'react';
import './RPG.css';

import Controlls from './game/Controlls';

class RPG extends Component<{}, {comp: JSX.Element[], textInput: string}>{

    constructor(props:any){
        super(props);

        this.state = {comp: [<p>Hejsa</p>], textInput: ''};

        this.addText = this.addText.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    private game = new Controlls(this.addText.bind(this));

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
        }

        const command = untestedCommand.substring(1).toLowerCase();

        switch(command){
            case('mine'): {
                this.game.mine();
                break;
            }
            case('inventory'): {
                this.game.inventory();
                break;
            }
            case('health'):{
                this.game.displayHealth();
                break;
            }
            default:{
                this.addText('Command was not found');
            }
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
                <button onClick={() => this.addText('Hejsa')}>Oke</button>
            </div>
        )
    }
}
export default RPG;
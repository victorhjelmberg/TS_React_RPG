import React, { Component } from 'react';
import './RPG.css';

class RPG extends Component<{}, {comp: any}>{

    constructor(props:any){
        super(props);

        this.addText = this.addText.bind(this);
    }

    state={comp: [<p>Hejsa</p>]}

    addText(){
        let b = this.state.comp;
        b.unshift(<p>Hejsa</p>);

        this.setState({comp: b});
    }

    render(){
        return (
            <div>
                <div className='red'>
                    {this.state.comp}
                </div>
                <button className='button' onClick={this.addText}>Oke</button>
            </div>
        )
    }
}
export default RPG;
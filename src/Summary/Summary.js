import React, {Component} from 'react';
import './Summary.css'
import SummaryItems from '../SummaryItems/SummaryItems';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

export default class Summary extends Component{
    render(){
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryItems
                    selected={this.props.selected} />
                <SummaryTotal
                    selected={this.props.selected} />
            </section>
        );
    }
}
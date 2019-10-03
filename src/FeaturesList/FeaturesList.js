import React, {Component} from 'react';
import Features from '../Features/Features';

export default class FeaturesList extends Component{
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
                <Features
                    key={featureHash}
                    feature={feature}
                    options={this.props.features[feature]}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}/>
            );
        });
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}
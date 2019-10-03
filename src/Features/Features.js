import React, {Component} from 'react';
import './Features.css';
import FeatureItems from '../FeatureItems/FeatureItems';
import slugify from 'slugify';

export default class Features extends Component{
    render(){
        const itemHash = slugify(JSON.stringify(this.props.options));
        return(
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                <FeatureItems 
                    key={itemHash}
                    options={this.props.options}
                    feature={this.props.feature}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}/>
            </fieldset>
        );
    }
}
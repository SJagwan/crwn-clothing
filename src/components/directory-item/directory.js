import React,{Component} from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {selectDirectorySelection} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

const Directory =({sections})=>{
        return (
            <div className="directory-menu">
                {
                sections.map(({id,...otherSectionProps}) =>(<MenuItem key={id} {...otherSectionProps} />))
                }
                
            </div>
        )
}

const mapStateToProps=createStructuredSelector({
  sections: selectDirectorySelection
})


export default connect(mapStateToProps)(Directory);

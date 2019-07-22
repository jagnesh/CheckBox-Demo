import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../styles/Styles';
import CheckBox from './CheckBox';

class ListItem extends Component{
    render(){
        return(
            <View style={Styles.itemStyle}>
                <CheckBox onSelectionChange={(checked)=>this.props.onSelectionChange(checked,this.props.item)}/>
                <Text style={Styles.itemTextStyle}>{this.props.item.value}</Text>
            </View>
        )
    }
}
export default ListItem
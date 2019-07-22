import React, { Component } from 'react'
import { TouchableWithoutFeedback, Image } from 'react-native'
import Styles from '../styles/Styles';

export default class CheckBox extends Component {
    state = {
        checked: false
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({checked:!this.state.checked},this.props.onSelectionChange(!this.state.checked))}>
                <Image source={(this.state.checked?require('../icons/checked.png'):require('../icons/unchecked.png'))} style={Styles.checkboxIcon} />
            </TouchableWithoutFeedback>
        )
    }
}
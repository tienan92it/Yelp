/**
 * Created by AnTran on 3/26/17.
 */
import React from 'react';
import {
    View, Image, Text, TouchableOpacity
} from 'react-native';

import styles from './styles'

const DropDownItem = (props) => {

    const { icon, value, onChoose } = props

    let valueItem = value

    return (
        <TouchableOpacity onPress={() => onChoose(valueItem)}>
            <View style={styles.dropDownItemBox}>
                <Text>{value == 0 ? "Auto" : value + " miles"}</Text>
                <Image style={styles.icon}
                       source={icon}/>
            </View>
        </TouchableOpacity>
    );

    DropDownItem.propTypes = {
        icon: React.PropTypes.string,
        value: React.PropTypes.string,
        onChoose: React.PropTypes.func
    }

    DropDownItem.defaultProps = {
        icon: '',
        value: '',
        onChoose: () => console.log("on Choose item")
    };
}

export default DropDownItem
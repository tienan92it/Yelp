/**
 * Created by AnTran on 3/26/17.
 */
import React from 'react';
import {
    View, Switch, Text, TouchableOpacity
} from 'react-native';

import styles from './styles'

const CategoryItem = (props) => {

    const { value, onChoose } = props

    let valueItem = value

    return (
        <TouchableOpacity onPress={() => onChoose(valueItem)}>
            <View style={styles.dropDownItemBox}>
                <Text>{value}</Text>
                <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    value={this.state.falseSwitchIsOn} />
            </View>
        </TouchableOpacity>
    );

    CategoryItem.propTypes = {
        value: React.PropTypes.string,
        onChoose: React.PropTypes.func
    }

    CategoryItem.defaultProps = {
        value: '',
        onChoose: () => console.log("on Choose item")
    };
}

export default CategoryItem
/**
 * Created by AnTran on 3/26/17.
 */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const SearchBar = (props) => {
    const { onCancelClick, onSearchClick } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftOption} onPress={onCancelClick}>
                <Text style={[styles.textBar, {textAlign: "left"}]}>Cancel</Text>
            </TouchableOpacity>

            <Text style={[styles.textBar, styles.title]}>Filter</Text>

            <TouchableOpacity style={styles.rightOption} onPress={onSearchClick}>
                <Text style={[styles.textBar, {textAlign: "left"}]}>Search</Text>
            </TouchableOpacity>
        </View>

    )

    SearchBar.propTypes = {
        onCancelClick: React.PropTypes.func,
        onSearchClick:React.PropTypes.func
    };

    SearchBar.defaultProps = {
        onCancelClick: () => console.log('Cancel is clicked'),
        onSearchClick: () => console.log('Filter is clicked')
    };
}

export default SearchBar
import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const SearchBar = (props) => {
  const { searchText, onChange, onFilterClick } = props

  return (
      <View style={styles.container}>
          <TouchableOpacity style={{flex: 0.2}} onPress={onFilterClick}>
              <Text style={styles.filterButton}>Filter</Text>
          </TouchableOpacity>
          <TextInput
                style={styles.searchBar}
                value={searchText}
                onChange={onChange}
                placeholder='Search' />
      </View>

  )

  SearchBar.propTypes = {
      searchText: React.PropTypes.string,
      onChange: React.PropTypes.func,
      onFilterClick:React.PropTypes.func
  };

  SearchBar.defaultProps = {
      searchText: '',
      onChange: () => console.log('On Text Change'),
      onFilterClick: () => console.log('On Filter Click')
  };
}

export default SearchBar

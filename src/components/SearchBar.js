import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit }) => {

  return (
    <View style={ styles.backgroundStyle }>
      <Feather style={ styles.iconStyle} name="search"></Feather>
      <TextInput
        value={term}
        style={ styles.inputStyle}
        placeholder="Search"
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center'
  }
})


export default SearchBar

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({title, results, navigation}) => {

  if (!results.length) {
    return null;
  };

  return (
    <View>
      <Text style={ styles.titleStyle}>{title}</Text>
      <Text style={ styles.restultCounterStyle } > Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
            >
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5
  },
  restultCounterStyle: {
    marginLeft: 10
  }
})

export default withNavigation(ResultsList)

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={ styles.containerStyle }>
      <Image
        style={styles.imageStyle}
        source={{uri: result.image_url}}
      />
      <Text style={styles.nameStyle}> {result.name}</Text>
      <Text>{ result.rating} Stars, {result.review_count} reviews</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  containerStyle: {
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 10
  }
})

export default ResultsDetail

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
      // price === '$' || '$$' || '$$$' || '$$$$'
      return results.filter(result => {
        return result.price === price
      });
    };



  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm => setTerm(newTerm))}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMessage
      ? <Text> { errorMessage } </Text>
      : null }
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('€')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice('€€')}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('€€€')}
          title="Show Off"
        />
        <ResultsList
          results={filterResultsByPrice('€€€€')}
          title="Gatsby"
        />
      </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({})


export default SearchScreen

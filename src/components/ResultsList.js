import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {results.length ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            return <ResultsDetail result={item} />;
          }}
        ></FlatList>
      ) : (
        <Text style={styles.noResults}>No results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
  noResults: {
    marginLeft: 15,
  },
});

export default ResultsList;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 125,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultsDetail;

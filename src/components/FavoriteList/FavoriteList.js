import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import University from '../University';

import useFavorites from '../../hooks/useFavorites';
import CustomButton from '../../ui/atoms/CustomButton';

const FavoriteList = ({ navigation }) => {
  const favorites = useFavorites();

  const getFavoriteListItem = ({ item }) => (
    <University title={item.name} aboutGaming={item.aboutGaming} navigation={navigation} />
  );

  return (
    <View style={styles.container} >
      <View style={styles.universitiesWrapper}>
        <Text style={styles.sectionTitle}>Your universities</Text>
        <View>
          <CustomButton text="Home" onPress={() => navigation.navigate("UniversityList")}/>
        </View>
        <View style={styles.items}>
          <FlatList
            data={favorites}
            keyExtractor={favorite => favorite.name}
            renderItem={getFavoriteListItem}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  universitiesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});

export default FavoriteList;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../../ui/atoms/CustomButton';

const UniversityDetailsCard = ({ name, country, aboutGaming, saveFavorite, loadFavorite }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const addButtonText = isFavorite ? 'Added to favorites' : 'Add to favorites';

  useEffect(() => {
    loadFavorite(name, setIsFavorite);
  }, []);

  const didSelectAddToFavorites = () => {
    saveFavorite({ name, country, aboutGaming });
  }

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.cardLabel}>{"Name: "}</Text>
        <Text style={styles.cardDetail}>{name}</Text>

        <Text style={styles.cardLabel}>{"Country: "}</Text>
        <Text style={styles.cardDetail}>{country}</Text>

        <Text style={styles.cardLabel}>{"About gaming: "}</Text>
        <Text style={styles.cardDetail}>{aboutGaming}</Text>
      </View>
      <View style={styles.sectionButton}>
        <CustomButton text={addButtonText} onPress={() => didSelectAddToFavorites()} disabled={isFavorite}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionButton: {
    marginTop: 12,
    marginBottom: 5,
  },
  cardLabel: {
    fontWeight: 'bold',
  },
  cardDetail: {
    marginTop: 3,
    marginBottom: 10,
  },
});

export default UniversityDetailsCard;

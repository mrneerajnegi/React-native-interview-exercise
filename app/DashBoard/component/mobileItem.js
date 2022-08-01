import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const MobileItem = ({item}) => (
  <View style={styles.container}>
    <View style={{flex: 1}}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
    <Image
      style={styles.image}
      source={{
        uri: item.image,
      }}></Image>
  </View>
);
export default MobileItem;

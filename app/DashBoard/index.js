import React, {useState} from 'react';
import {View, SectionList, Text, TextInput,SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import {DASHBOARD, SEARCH_PLACEHOLDER} from '../Constants/strings';
import {mobiles} from '../Data/mockdata';
import MobileItem from './component/mobileItem';
import {searchByCatProd} from './service/homeService';
import styles from './styles';

const DashBoardScreen = () => {
  const [searchKeyword, setSearch] = useState('');
  const [mobileData, setMobiles] = useState(mobiles);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={DASHBOARD} />
      <View style={styles.innerContainer}>
        <TextInput
          onChangeText={value => {
            setSearch(value);
          }}
          onSubmitEditing={value => {
            if (value.nativeEvent.text.length === 0) {
              setMobiles(mobiles);
            } else {
              const filteredMobiles = searchByCatProd(value.nativeEvent.text);
              setMobiles(filteredMobiles);
            }
          }}
          returnKeyType={'done'}
          value={searchKeyword}
          style={styles.textInputStyle}
          placeholderStyle={styles.placeholderStyle}
          placeholder={SEARCH_PLACEHOLDER}></TextInput>

        <SectionList
          sections={mobileData}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => <MobileItem item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;

import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BirdImage from './assets/bird1.jpg';
import Accordion from './components/Accordion';
const App = () => {
  const [fullTextVisible, setFullTextVisible] = React.useState(false);
  const [data, setData] = React.useState([
    {
      heading: 'Fundamental Theorum Of Airthmatics',
      lessons: [
        {name: 'Prime factorization Exercise', locked: false, startDate: false},
        {name: 'Fill In The Blanks', locked: false, startDate: false},
        {name: 'Match the Following', locked: true, startDate: '14 March'},
      ],
    },
    {
      heading: 'HCF and LCM',
      lessons: [
        {name: 'Prime factorization Exercise', locked: false, startDate: false},
        {name: 'Fill In The Blanks', locked: false, startDate: false},
        {name: 'Match the Following', locked: true, startDate: '14 March'},
        {name: 'Match the Following', locked: true, startDate: '14 March'},
        {name: 'Match the Following', locked: true, startDate: '14 March'},
        {name: 'Match the Following', locked: true, startDate: '14 March'},
      ],
    },
  ]);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <FontAwesomeIcon name="angle-left" size={30} />
      </View>
      <View style={styles.container1}>
        <Image source={BirdImage} style={styles.image} />
        <View>
          <Text style={styles.text1}>How To Clear FRA</Text>
          <Text style={styles.text1}>Without coaching-</Text>
          <Text style={styles.text1}>Vision IAS</Text>
          <View style={styles.flexRow}>
            <FontAwesomeIcon
              name={'play'}
              color={'red'}
              size={20}
              style={{marginLeft: 10}}
            />
            <Text style={styles.text2}>10 Videos</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={[styles.heading]}>Introduction</Text>
        <View>
          <Text
            numberOfLines={fullTextVisible ? 1000 : 3}
            style={styles.greyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>

          <Text
            style={styles.seeMoreText}
            onPress={() => setFullTextVisible(!fullTextVisible)}>
            {fullTextVisible ? 'see less' : 'see more'}
          </Text>
        </View>
      </View>

      {data?.map((item, i) => (
        <View style={{marginTop: 15}}>
          <Accordion heading={item.heading} lessons={item.lessons} key={i} />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {paddingHorizontal: 20},
  header: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    // resizeMode: 'stretch',

    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 20,
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
    marginTop: 20,
  },
  seeMoreText: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'red',
    bottom: 0,
    right: 0,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
  },
  text1: {
    fontSize: 20,
    marginLeft: 10,
  },
  text2: {
    marginLeft: 10,
    fontSize: 15,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  greyText: {
    color: '#8c8c8c',
  },
});

export default App;

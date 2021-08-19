import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RadialGradient from 'react-native-radial-gradient';

const Accordion = props => {
  const {lessons, heading} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <RadialGradient
      style={styles.gradientBorder}
      colors={['#CCC', '#FFF']}
      stops={[0.01, 0.6, 0.8]}
      radius={200}>
      <View style={styles.root} elevation={5}>
        <View style={styles.container1}>
          <Text style={styles.heading}>{heading}</Text>
          {!open && <Text>{`${lessons.length} Tests`}</Text>}
          {open &&
            lessons?.map((item, i) => (
              <View style={styles.lesson} key={i}>
                <FontAwesomeIcon
                  name={'lock'}
                  size={20}
                  color={item.locked ? 'red' : 'green'}
                />
                <Text style={{marginLeft: 10}}>{item.name}</Text>
              </View>
            ))}
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpen(!open);
          }}>
          <FontAwesomeIcon name={open ? 'angle-up' : 'angle-down'} size={30} />
        </TouchableOpacity>
      </View>
    </RadialGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {width: '100%', marginTop: 10, borderRadius: 10},
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  lesson: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
  },
  container1: {
    paddingHorizontal: 10,
  },
});

export default Accordion;

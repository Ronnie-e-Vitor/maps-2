import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <MaterialIcons name="cloud" size={30} color="white" />
        <Text style={{marginLeft:5, fontWeight:'bold', color:'#fff', fontSize: 20}}>ConecTec</Text>
        </View>
        <FontAwesome6 name="user-large" size={23} color="white" />

    
    
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1194e4',
    paddingVertical: 22,
    paddingHorizontal: 20,

  },
  navText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NavBar;
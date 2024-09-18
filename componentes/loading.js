import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const loading = () => {
  return (

     <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color="#0000ff" />
    </View>
    
  )
}

export default loading

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
})
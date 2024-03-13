import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Header from '../components/Header';
import Description from '../components/Description';
import ShiftItem from '../components/ShiftItem';
import ButtonPrimary from '../components/Button';

const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function Provider() {
  return (
    <View style={styles.container}>
      <Header title={"Submit your availability"}/>
      <Description text={"Select days of the week and hours you want to work"}/>
      <View style={styles.shiftsContainer}>
        {workDays.map(item => <ShiftItem label={item} id={item}/>)}
      </View>
      <ButtonPrimary
            onPress={() => console.log('save availability')}
            title={"Save"}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 18,
    },
    shiftsContainer: {
        marginTop: 20,
        width: '100%',
    }
});
import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import Header from '../components/Header';
import Description from '../components/Description';
import NewShiftItem from '../components/NewShiftItem';
import ButtonPrimary from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function Provider() {
    const onSaveButtonPress = () => {
        // TODO call api to update with provider id
        Alert.alert('Schedule saved!')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Header title={"Submit your availability"}/>
        <Description text={"Select days of the week and hours you want to work"}/>
        <View style={styles.shiftsContainer}>
            {workDays.map(item => <NewShiftItem label={item} key={item}/>)}
        </View>
        <ButtonPrimary
            onPress={onSaveButtonPress}
            title="Save"
            borderColor="green"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 25,
        backgroundColor: '#FFF',
        paddingHorizontal: 18,
    },
    shiftsContainer: {
        marginTop: 15,
        marginBottom: 15,
        width: '100%',
    },
});
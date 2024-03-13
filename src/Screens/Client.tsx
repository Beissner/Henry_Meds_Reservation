import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import dayjs from 'dayjs';

import Header from '../components/Header';
import Description from '../components/Description';
import ShiftItem from '../components/ShiftItem';
import fake_available_shifts_API from '../api/fakeAPI';
import { Shift } from '../utils/types';


export default function Client() {

    const [bookedShifts, setBookedShifts] = useState<string[]>([]);

    useEffect(() => {
        // TODO with a real api fectch data here

    },[]);

    // mark shift as booked
    const onPressBookAppointment = (shift: Shift) => {
        
        setBookedShifts([...bookedShifts, shift.id])
    }

    const onShiftPress = (provider: string, shift: Shift) => {
       
        const shiftTimeFormatted = `${dayjs(shift.startTime).format('hh:mm A')} - ${dayjs(shift.endTime).format('hh:mm A')}`;
        const shiftDateFormatted = dayjs(shift.date).format('MMM D');
        const dateAndTime = `${shiftDateFormatted} at ${shiftTimeFormatted}`;

        Alert.alert('Book Appointment', `Are you sure you want to book an appt with ${provider} on ${dateAndTime}?`,
        [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK', onPress: () => onPressBookAppointment(shift)},
          ]
        );
    }

    // TODO use FlatList to improve performance in long lists
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header title={"Reserve an appointment"}/>
            <Description text={"Select a 15 minute slot with your favorite provider"}/>
            {fake_available_shifts_API.map((provider) => {
                return (
                    <View key={provider.providerId} style={styles.shiftsContainer}>
                        <Text style={styles.providerLabel}>{provider.providerName}</Text>
                        {provider.shifts.map((shift) => {
                            const isBooked = bookedShifts.includes(shift.id);
                            return <ShiftItem shift={shift} booked={isBooked} onPress={(shift) => onShiftPress(provider.providerName, shift)} key={shift.id}/>
                        })}
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingTop: 25,
        paddingBottom: 55,
        backgroundColor: '#FFF',
        paddingHorizontal: 18,
    },
    shiftsContainer: {
        marginTop: 20,
    },
    providerLabel: {
        fontSize: 18,
        fontWeight: '600',
    }
});
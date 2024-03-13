import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import dayjs from 'dayjs';

import ButtonPrimary from './Button';
import { Shift } from '../utils/types';

interface ShiftItemProps {
    shift: Shift;
    onPress: (shift: Shift) => void;
    booked: boolean;
}

export default function ShiftItem({ shift, onPress, booked }: ShiftItemProps) {

    const shiftTimeFormatted = `${dayjs(shift.startTime).format('hh:mm A')} - ${dayjs(shift.endTime).format('hh:mm A')}`;
    const shiftDateFormatted = dayjs(shift.date).format('MMM D');
    const dateAndTime = `${shiftDateFormatted} at ${shiftTimeFormatted}`;
    return (
        <View style={styles.itemContainer}>
            <View style={styles.shiftRow}>
                <Text>{dateAndTime}</Text>   
                {booked ? <View style={styles.button}><Text>✅</Text></View>  : 
                (
                <ButtonPrimary
                    onPress={() => onPress(shift)}
                    title={'reserve'}
                    style={styles.button}
                />
                )} 
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
       marginVertical: 8,
       marginLeft: 10,
    },
    shiftRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: 100,
    },
  });
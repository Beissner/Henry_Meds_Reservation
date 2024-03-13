import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from 'dayjs';

import ButtonPrimary from './Button';

interface NewShiftItemProps {
    label: string;
}

export default function ShiftItem({ label }: NewShiftItemProps) {

    // local state handles showing the picker, current selection (start/end) and times
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selection, setSelection] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);

    const showDatePicker = (selection: string) => {
        setDatePickerVisibility(true);
        setSelection(selection);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    // save selected time
    const handleConfirm = (date: Date) => {
        hideDatePicker();
        const formattedDate = dayjs(date).format('hh:mm A');

        if (selection === 'start') {
            setStartTime(formattedDate);
        } else {
            setEndTime(formattedDate);
        }
    };
  
    return (
    <View style={styles.itemContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.buttonRow}>
            <View style={styles.shiftColumn}>
                {startTime && <Text style={styles.time}>{startTime}</Text>}
                <ButtonPrimary
                    onPress={() => showDatePicker("start")}
                    title={"Start"}
                />
            </View>
            <View style={styles.spacer}/>
            <View style={styles.shiftColumn}>
                {endTime && <Text style={styles.time}>{endTime}</Text>}
                <ButtonPrimary
                    onPress={() => showDatePicker("end")}
                    title={"End"}
                />
            </View>
        </View>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    spacer: {
        marginHorizontal: 8,
    },
    time: {
        fontSize: 16,
        fontWeight: '800',
        marginBottom:8,
    },
    shiftColumn: {
        width: 80,
        alignItems: 'center',
    }
  });
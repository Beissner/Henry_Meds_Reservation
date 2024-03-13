import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from 'dayjs';

import ButtonPrimary from './Button';

interface ShiftItemProps {
    label: string;
    id?: string;
    // shiftStart: string;
    // shiftEnd: string;
}

export default function ShiftItem({ label, id, }: ShiftItemProps) {

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
    <View id={id} style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
     <View style={styles.buttonContainer}>
       {startTime ? <Text>{startTime}</Text> : (
         <ButtonPrimary
            onPress={() => showDatePicker("start")}
            title={"Start"}
        />
       )
       }
        <View style={styles.spacer}/>
        {endTime ? <Text>{endTime}</Text> : (
        <ButtonPrimary
        onPress={() => showDatePicker("end")}
       title={"End"}
   />
       )
       }
        
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
        justifyContent: 'space-between',
        width: '90%',
    },
    label: {
        fontSize: 16,
       
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    spacer: {
        marginHorizontal: 8,
    }
  });
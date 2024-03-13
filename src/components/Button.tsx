import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function ButtonPrimary({title, onPress}: ButtonProps) {
  return (
    <View style={styles.startButton}>
        <Button
            onPress={onPress}
            title={title}
            color="#000"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    startButton: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: 'green',
      }, 
     
});
import { View, Text, StyleSheet, Button, StyleProp } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    borderColor?: string;
    onPress: () => void;
    style?: StyleProp<T>;
}

export default function ButtonPrimary({title, borderColor = "blue", onPress, style}: ButtonProps) {
  return (
    <View style={[styles.startButton, style, { borderColor }]}>
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
      width: "100%",
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 5,
      }, 
});
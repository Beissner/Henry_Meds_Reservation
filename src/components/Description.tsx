import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface DescriptionProps {
    text: string;
}

export default function Header({ text }: DescriptionProps) {
  return (
    <View>
      <Text style={styles.header}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        fontSize: 18,
    }
  });
  

import { Text, StyleSheet } from 'react-native'
import React from 'react'

interface DescriptionProps {
    text: string;
}

export default function Header({ text }: DescriptionProps) {
  return <Text style={styles.header}>{text}</Text>;
}


const styles = StyleSheet.create({
    header: {
        fontSize: 18,
    }
  });
  

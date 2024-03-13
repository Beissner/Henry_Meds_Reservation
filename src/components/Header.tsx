import { Text, StyleSheet } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
  return <Text style={styles.header}>{title}</Text>;
}


const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '800',
    }
  });
  

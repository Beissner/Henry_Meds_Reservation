import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import RadioGroup from 'react-native-radio-buttons-group';

import { userType } from '../utils/enums';
import Header  from '../components/Header';
import Description from '../components/Description';
import ButtonPrimary from '../components/Button';

export default function Menu({navigation}: StackNavigationProp) {
  const [user, setUser] = useState<userType | null>(userType.client);
  const [selectedId, setSelectedId] = useState<string>();

  const radioButtons = useMemo(() => ([
    {
        id: '1',
        label: 'Provider',
        value: userType.provider,
        containerStyle: styles.radioButton,
    },
    {
        id: '2',
        label: 'Client',
        value: userType.client,
        containerStyle: styles.radioButton,
    }
]), []);

  const handleOnPressButton = () => {
    // 
    console.log('button has been pressed');

    if (selectedId == userType.client) {
      navigation.navigate('Client', {
        user: selectedId
      });
    } else {
      navigation.navigate('Provider', {
        user: selectedId
      });
    }


  }

  return (
    <View style={styles.container}>
      <Header title={"Welcome!"}/>
      <Description text={"Select what kind of user you are"}/>
      <View style={styles.radioButtonContainer}>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
      </View>
      <ButtonPrimary
        onPress={handleOnPressButton}
        title={"Next"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    radioButton: {
      alignSelf: 'flex-start',
    },
    radioButtonContainer: {
      marginTop: 20,
    }
});
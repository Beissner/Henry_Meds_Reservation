import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import type { StackScreenProps } from '@react-navigation/stack';

import { userType } from '../utils/enums';
import Header  from '../components/Header';
import Description from '../components/Description';
import ButtonPrimary from '../components/Button';

type RootStackParamList = {
  Menu: undefined;
  Client: undefined;
  Provider: undefined;
};

type MenuPropTypes = StackScreenProps<RootStackParamList, 'Menu'>;

export default function Menu({navigation}: MenuPropTypes) {
  
  const [selectedId, setSelectedId] = useState<string>();
  const [showValidation, setShowValidation] = useState<boolean>();

  const radioButtons = useMemo(() => ([
    {
        id: userType.provider,
        label: 'Provider',
        value: userType.provider,
        containerStyle: styles.radioButton,
    },
    {
        id: userType.client,
        label: 'Client',
        value: userType.client,
        containerStyle: styles.radioButton,
    }
]), []);

  const handleRadioPress = (val: string) => {
    setSelectedId(val);
    setShowValidation(false);

  }

  const handleOnPressButton = () => {
    // TODO normally authentication would identify the type of user and the user object saved to a state managment library

    if (selectedId == userType.client) {
      // send user to Client page
      return navigation.navigate('Client');
    } if (selectedId == userType.provider) {
      // send user to Provider page
      return navigation.navigate('Provider');
    } else {
      setShowValidation(true);
    }
  }

  return (
    <View style={styles.container}>
      <Header title={"Welcome!"}/>
      <Description text={"Select what kind of user you are"}/>
      <View style={styles.radioButtonContainer}>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={handleRadioPress}
            selectedId={selectedId}
        />
      </View>
      {showValidation ? <Text style={styles.validation}>Please make a selection</Text> : null}
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
        paddingHorizontal: 25
    },
    radioButton: {
      alignSelf: 'flex-start',
    },
    radioButtonContainer: {
      marginVertical: 20,
    },
    validation: {
      color: 'red',
      marginBottom: 10,
    }
});
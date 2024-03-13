import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import ReservationUserFlowStack from './src/Router';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <ReservationUserFlowStack />
    </NavigationContainer>
  );
}

export default App;

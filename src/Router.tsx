import { createStackNavigator } from '@react-navigation/stack';

import Menu from './screens/Menu';
import Provider from './screens/Provider';
import Client from './screens/Client';

export default function ReservationUserFlowStack() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="Client" component={Client} />
      </Stack.Navigator>
    );
  }
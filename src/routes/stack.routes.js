import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header/Header';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Tickets from '../pages/tickets';

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home"
        component={Home}
        options={{
          header: (props) => <Header {...props} />,
          headerShown: true
        }}
      />
      <Screen name="Reserva de Ingresso"
        component={Tickets}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
          headerBackTitle: 'Voltar',
        }}
      />
      <Screen name="Reservas"
        component={Profile}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
          headerBackTitle: 'Voltar',
        }}
      />
    </Navigator>
  );
}
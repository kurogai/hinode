import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import HomeRoutes from "./home.routes";
import More from "../screens/more.screen";
import Manga from "../screens/manga.screen";
import Read from "../screens/read.screen";

const Stack = createStackNavigator();

const ROUTE_HOME = 'HomeRoute';
const ROUTE_MORE = 'More';
const ROUTE_MANGA = "Manga";
const ROUTE_READ = "Read";

export default function Route() {
	return (
		<NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_HOME} screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name={ROUTE_HOME} component={HomeRoutes} />
        <Stack.Screen name={ROUTE_MORE} component={More} />
        <Stack.Screen name={ROUTE_MANGA} component={Manga} />
        <Stack.Screen name={ROUTE_READ} component={Read} />
      </Stack.Navigator>
    </NavigationContainer>
	)
}
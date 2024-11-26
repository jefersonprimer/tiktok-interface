import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../../src/app/(tabs)/index";
import { Search } from "../../src/app/(tabs)/search";
import { Inbox } from "../../src/app/(tabs)/inbox";
import { New } from "../../src/app/(tabs)/new";
import { Profile } from "../../src/app/(tabs)/profile";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

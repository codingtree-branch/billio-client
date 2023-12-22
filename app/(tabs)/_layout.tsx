import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import ReceiptModal from '../../components/BottomSheetModal/ReceiptModal';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  iconFamily: React.ComponentType<any>;
}) {
  return <props.iconFamily size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="home" color={color} iconFamily={FontAwesome} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{
                        marginRight: 15,
                        opacity: pressed ? 0.5 : 1,
                      }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="myAccount"
          options={{
            title: 'My Account',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                name="user-circle"
                color={color}
                iconFamily={FontAwesome}
              />
            ),
          }}
        />
      </Tabs>
      <FloatingAction
        position={'center'}
        onPressMain={() => {
          setToggleModal(!toggleModal);
        }}
      />
      {toggleModal && <ReceiptModal />}
    </>
  );
}

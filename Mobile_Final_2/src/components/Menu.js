import React, { useState, useLayoutEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import UserMenu from './UserMenu';

export default function Menu({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={{ marginLeft: 1 }}>
          <Text style={{ fontSize: 20, padding: 5 }}>☰</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Deixei de usar mas deixei pra saber como era
  // const handleNavigate = (route) => {
  //   setMenuVisible(false);
  //   navigation.navigate(route);
  // };

  return (
    <UserMenu
      visible={menuVisible}
      onClose={() => setMenuVisible(false)}
      onNavigate={(screen) => {
        setMenuVisible(false);
        navigation.navigate(screen);
      }}
      onBackPress={() => {
        setMenuVisible(false);
        navigation.goBack();
      }}
    />
  );
}

import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const Settings = ({title = 'Settings'}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Settings;

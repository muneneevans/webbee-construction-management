import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const Drawer = ({title = 'Drawer'}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Drawer;

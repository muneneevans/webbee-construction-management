import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const Categories = ({title = 'Categories'}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Categories;

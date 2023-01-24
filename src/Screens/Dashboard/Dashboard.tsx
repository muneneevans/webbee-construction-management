import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const Dashboard = ({title = 'Dashboard'}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Dashboard;

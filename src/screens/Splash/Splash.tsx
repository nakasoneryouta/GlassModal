import React from 'react';
import { View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { images } from '../../config';
import styles from './styles';

interface Props {
}

const component: React.FC<Props> = ({  }) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.icon}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  );
};

export default component;

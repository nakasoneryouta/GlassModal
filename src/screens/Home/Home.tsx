import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from 'app/src/components/modal/BottomSheet/BottomSheet';

type NavigationProp = StackNavigationProp<HomeTabParamList, 'Home'>;
interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({navigation}) => {

  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

	return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
      />

      <BottomSheet ref={ref}>
      </BottomSheet>
    </GestureHandlerRootView>
	)

}

export default React.memo(component);
import { Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { increment, decrement } from '../redux/formSlice';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log('tab 1 render');

  useFocusEffect(
    React.useCallback(() => {
      console.log('tab 1 focused, count', count);
    }, [count])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="up count" onPress={() => dispatch(increment())} />
      <Button title="down count" onPress={() => dispatch(decrement())} />
      <Text>{count}</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

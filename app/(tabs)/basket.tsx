import { StyleSheet, View, FlatList } from 'react-native';


import { ThemedText } from '@/components/ThemedText';

import BasketProduct from '@/components/BasketProduct';
import { useContext } from 'react';
import { AppContext } from '@/context/AppProvider';

export default function TabTwoScreen() {
  const { state, setState } = useContext(AppContext);

  return (
    <View style={{padding: 20}}>
      <ThemedText type='title'>Sepetim</ThemedText>
      <View style={{height: 20}}></View>
      <FlatList data={state.basketProducts} renderItem={(product) => <BasketProduct data={product.item} />}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

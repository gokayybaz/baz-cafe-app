import { StyleSheet, View, FlatList } from 'react-native';


import { ThemedText } from '@/components/ThemedText';

import BasketProduct from '@/components/BasketProduct';
import { useContext } from 'react';
import { AppContext } from '@/context/AppProvider';
import { Button, Text } from 'react-native-paper';

export default function TabTwoScreen() {
  const { state, setState } = useContext(AppContext);

  const basketAmount = (basketProducts:any) => {
     let amount = 0;
     basketProducts.forEach((product:any) => {
       amount += product.price
     });
     return amount
  }

  return (
    <View style={{padding: 20}}>
      <ThemedText type='title'>Sepetim</ThemedText>
      <ThemedText type='subtitle'>{state.basketProducts.length < 1 ? "Sepetiniz boş gözüküyor" : "Sepet toplamı : " + basketAmount(state.basketProducts) + " ₺"}</ThemedText>
      <View style={{height: 15}}></View>
      {
        state.basketProducts.length < 1 ? <></> :       <Button style={{backgroundColor: "#795548"}} mode='elevated'><Text style={{color: "white"}}>Ödeme adımına geç</Text></Button>

      }
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

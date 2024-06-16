import { ThemedText } from '@/components/ThemedText';
import { Image, StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import dailyProducts from '../../data/mockData.js'
import DailyProduct from '@/components/DailyProduct';
import { useState } from 'react';



export default function HomeScreen() {
  const [dailyProductType, setDailyProductType] = useState('bread')
  return (
    <View style={{padding: 20}}>
    <Image
    style={{height: 200,width: "100%", borderRadius:20}}
     resizeMode='cover'
    source={require('@/assets/images/bakery.jpeg')}
  />
  <View style={{height: 20}}></View>
  <View style={{height: 520}}>
  <ThemedText type='title'>
    Günlük Taze
  </ThemedText>
  <ThemedText type='subtitle'>
    Listedeki ürünler günlük olarak yenilenmektedir.
  </ThemedText>
  <View style={{height: 20}}></View>
  <View style={{
    display: "flex",
    width: "100%",
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "space-around"
    }}>
    <Button onPress={() => {setDailyProductType('bread')}} mode='outlined'  style={{backgroundColor: dailyProductType == 'bread' ? "#795548" : 'white'}}><Text style={{color: dailyProductType == 'bread' ? "white" : '#795548'}}>Ekmek</Text></Button>
    <Button onPress={() => {setDailyProductType('bun')}} mode='outlined' style={{backgroundColor: dailyProductType == 'bun' ? "#795548" : 'white' }}><Text style={{color: dailyProductType == 'bun' ? "white" : '#795548'}}>Poğaça</Text></Button>
    <Button onPress={() => {setDailyProductType('cake')}} mode='outlined' style={{backgroundColor: dailyProductType == 'cake' ? "#795548" : 'white'}}><Text style={{color: dailyProductType == 'cake' ? "white" : '#795548'}}>Pasta</Text></Button>
    <Button onPress={() => {setDailyProductType('pie')}} mode='outlined' style={{backgroundColor: dailyProductType == 'pie' ? "#795548" : 'white'}}><Text style={{color: dailyProductType == 'pie' ? "white" : '#795548'}}>Börek</Text></Button>
  </View>
  <View style={{height: 20}}></View>
  <FlatList data={dailyProducts.filter(product => product.category === dailyProductType)} renderItem={(product) => <DailyProduct product={product.item} />}></FlatList>
  </View>
  
  </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});

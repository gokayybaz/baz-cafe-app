import React, { useContext } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import dailyProducts from '../data/mockData.js'
import { Alert, View } from 'react-native'
import { AppContext } from '@/context/AppProvider.jsx';

function DailyProduct({ product }) {
  const { state, setState } = useContext(AppContext);

  return (
    <Card style={{ backgroundColor: 'white', marginBottom: 30 }}>
      {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
      <Card.Content>
        <Text variant="titleLarge">{product.name}</Text>
        <View style={{ height: 5 }}></View>
        <Text variant="bodyMedium">{product.detail}</Text>
        <View style={{ height: 8 }}></View>
        <Text variant='bodyLarge'>Fiyat : {product.price} ₺</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode='outlined' onPress={() => {
          state.basketProducts.includes(product) ? Alert.alert("Hata!!", "İlgili ürün zaten sepetinizde bulunuyor") : setState(prevState => ({
            ...prevState,
            basketProducts: [...state.basketProducts, product]
          }));
        }}><Text style={{ color: '#795548' }}>Sepete Ekle</Text></Button>
      </Card.Actions>
    </Card>
  )
}

export default DailyProduct
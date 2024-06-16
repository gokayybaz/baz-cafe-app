import React from 'react'
import { Button, Card, Text } from 'react-native-paper'
import dailyProducts from '../data/mockData.js'
import { View } from 'react-native'

function DailyProduct({product}:any) {
    return (
        <Card style={{backgroundColor: 'white', marginBottom:30}}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
        <Card.Content>
          <Text variant="titleLarge">{product.name}</Text>
          <View style={{height: 5}}></View>
          <Text variant="bodyMedium">{product.detail}</Text>
          <View style={{height: 8}}></View>
          <Text variant='bodyLarge'>Fiyat : {product.price} ₺</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode='outlined'><Text style={{color: '#795548'}}>Sepete Ekle</Text></Button>
        </Card.Actions>
      </Card>
    )
}

export default DailyProduct
import { AppContext } from '@/context/AppProvider';
import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button, Card, IconButton, Text } from 'react-native-paper'

function BasketProduct({ data }) {
  const { state, setState } = useContext(AppContext);

  return (
    <Card style={{ backgroundColor: 'white', marginBottom: 30 }}>
      {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
      <Card.Content>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text variant="titleLarge">{data.name}</Text>
          <IconButton icon={"delete"} size={20} onPress={() => {
            let newArray = state.basketProducts.filter(function (product) {
              return product !== data;
            });
            setState(prevState => ({
              ...prevState,
              basketProducts: newArray
            }))
          }} />
        </View>
        <Text variant='bodyLarge'>Fiyat : {data.price} ₺</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode='outlined'><Text style={{ color: '#795548' }}>Azalt</Text></Button>
        <Text style={{ paddingHorizontal: 10 }}>1</Text>
        <Button mode='outlined'><Text style={{ color: '#795548' }}>Arttır</Text></Button>
      </Card.Actions>
    </Card>
  )
}

export default BasketProduct
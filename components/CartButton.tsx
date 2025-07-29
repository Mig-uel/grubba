import { images } from '@/constants'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function CartButton() {
  const totalItems = 10 // Placeholder for total items in the cart

  return (
    <TouchableOpacity
      className='cart-btn'
      onPress={() => {}}
    >
      <Image
        source={images.bag}
        className='size-5'
        resizeMode='contain'
      />

      {totalItems ? (
        <View className='cart-badge'>
          <Text className='small-bold text-white'>{totalItems}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

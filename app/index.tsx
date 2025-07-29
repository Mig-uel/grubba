import { images, offers } from '@/constants'
import cn from 'clsx'
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          // Check if item index is even or odd to apply different styles
          const isEven = index % 2 === 0
          const pressableConditionalClass = isEven
            ? 'flex-row-reverse'
            : 'flex-row'
          const textInfoAlignment = isEven ? 'pl-10' : 'pr-10'

          return (
            <View key={index}>
              <Pressable
                className={cn('offer-card', pressableConditionalClass)}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: '#FFFFFF222' }}
              >
                {({ pressed }) => (
                  <>
                    {/* Item Image */}
                    <View className='h-full w-1/2'>
                      <Image
                        source={item.image}
                        className='size-full'
                        resizeMode='cover'
                      />
                    </View>

                    {/* Item Title */}
                    <View className={cn('offer-card__info', textInfoAlignment)}>
                      <Text className='h1-bold text-white leading-tight'>
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className='size-10'
                        resizeMode='contain'
                        tintColor='#FFF'
                      />
                    </View>
                  </>
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName='pb-28 px-5'
        ListHeaderComponent={() => (
          <View className='flex-between flex-row w-full my-5'>
            <View className='flex-start'>
              <Text className='small-bold text-primary uppercase'>
                DELIVER TO
              </Text>

              <TouchableOpacity className='flex-center flex-row gap-x-1 mt-0.5'>
                <Text className='paragraph-bold text-dark-100'>
                  United States
                </Text>
                <Image
                  source={images.arrowDown}
                  className='size-3'
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>

            <Text>Cart</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

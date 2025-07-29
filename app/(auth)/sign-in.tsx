import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function SignIn() {
  const handleSignIn = () => router.push('/sign-up')

  return (
    <View>
      <Text>Sign In</Text>
      <Button
        title='Sign In'
        onPress={() => handleSignIn()}
      />
    </View>
  )
}

import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function SignUp() {
  const handleSignUp = () => router.push('/sign-in')

  return (
    <View>
      <Text>Sign Up</Text>

      <Button
        title='Sign Up'
        onPress={() => handleSignUp()}
      />
    </View>
  )
}

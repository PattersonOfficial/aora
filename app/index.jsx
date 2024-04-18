import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white font-pblack'>
      <Text>Aora App</Text>
      <StatusBar style='auto' />
    </View>
  );
}

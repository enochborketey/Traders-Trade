// App.js
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

// Sample Crypto Asset Data
const assets = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '0.05 BTC',
    value: '$1,500',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: '1.2 ETH',
    value: '$2,880',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    id: '3',
    name: 'Solana',
    symbol: 'SOL',
    amount: '30 SOL',
    value: '$750',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  },
  {
    id: '4',
    name: 'Tether',
    symbol: 'USDT',
    amount: '900 USDT',
    value: '$950',
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  },
  {
    id: '5',
    name: 'BnB',
    symbol: 'BNB',
    amount: '900 BNB',
    value: '$1050',
    icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
  },
];

const Wallet = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Wallet Balance Section */}
      <View className="p-6 bg-indigo-600">
        <Text className="text-gray-300">Total Wallet Balance</Text>
        <Text className="text-3xl font-bold text-white mt-1">$5,130.00</Text>

        <View className="flex-row justify-center mt-4">
          <TouchableOpacity className="bg-indigo-500 px-6 py-2 rounded-md mx-2">
            <Text className="text-white font-semibold">Send</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-6 py-2 rounded-md mx-2 border border-indigo-500">
            <Text className="text-indigo-500 font-semibold">Receive</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Asset List Section */}
      <FlatList
        data={assets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-white p-4 rounded-lg mt-3 shadow-sm">
            <View className="flex-row items-center">
              <Image
                source={{ uri: item.icon }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View>
                <Text className="font-medium">{item.name}</Text>
                <Text className="text-gray-500">{item.amount}</Text>
              </View>
            </View>
            <Text className="text-lg font-semibold">{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
export default Wallet
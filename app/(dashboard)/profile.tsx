// App.js
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const transactions = [
  { id: '1', name: 'Bitcoin', type: 'Buy', amount: '50.5 BTC', date: 'Oct 25, 2024' },
  { id: '2', name: 'Ethereum', type: 'Send', amount: '30.8 ETH', date: 'Oct 23, 2024' },
  { id: '3', name: 'USDC', type: 'Receive', amount: '500 USDC', date: 'Oct 20, 2024' },
];

const holdings = [
  { id: '1', name: 'Bitcoin', amount: '20 BTC', value: '$900,000' },
  { id: '2', name: 'Ethereum', amount: '15 ETH', value: '$200,400' },
  { id: '3', name: 'Solana', amount: '150 SOL', value: '$30,000' },
];

const Profile = ()=> {
  return (
    <FlatList
      data={holdings}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <>
          {/* Header Section */}
          <View className="items-center p-6 bg-indigo-600">
            <Image
              source={require('../../assets/images/me.jpg')}
              className="w-24 h-24 rounded-full border-2 border-white"
            />
            <Text className="text-xl font-bold text-white mt-4">Enoch Borketey</Text>
            <Text className="text-sm text-indigo-200">Crypto Investor</Text>

            {/* Wallet Balance */}
            <View className="bg-white p-4 rounded-lg mt-6 shadow-md w-11/12">
              <Text className="text-gray-400">Total Balance</Text>
              <Text className="text-2xl font-semibold">$12,850.45</Text>
            </View>

            <View className="flex-row mt-6">
              <TouchableOpacity className="bg-indigo-500 px-6 py-2 rounded-md mx-2">
                <Text className="text-white font-semibold">Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-6 py-2 rounded-md mx-2 border border-indigo-500">
                <Text className="text-indigo-500 font-semibold">Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Portfolio Section */}
          <View className="p-6">
            <Text className="text-lg font-semibold">Your Portfolio</Text>
          </View>
        </>
      )}
      renderItem={({ item }) => (
        <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mt-3 shadow-sm mx-6">
          <View>
            <Text className="font-medium">{item.name}</Text>
            <Text className="text-gray-500">{item.amount}</Text>
          </View>
          <Text className="text-lg font-semibold">{item.value}</Text>
        </View>
      )}
      ListFooterComponent={() => (
        <View className="p-6">
          <Text className="text-lg font-semibold mb-2">Recent Transactions</Text>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row justify-between items-center bg-white p-4 rounded-lg mt-2 shadow-sm">
                <View>
                  <Text className="font-medium">
                    {item.name} ({item.type})
                  </Text>
                  <Text className="text-gray-500">{item.date}</Text>
                </View>
                <Text className="text-indigo-500 font-semibold">{item.amount}</Text>
              </View>
            )}
          />
        </View>
      )}
    />
  );
}
export default Profile
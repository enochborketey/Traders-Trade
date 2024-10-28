// App.js
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

// Sample Data for Trends, Portfolio, and Transactions
const trends = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: '$30,000', change: '+2.5%' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: '$2,400', change: '-1.2%' },
  { id: '3', name: 'Solana', symbol: 'SOL', price: '$25.50', change: '+5.6%' },
];

const portfolio = [
  { id: '1', name: 'Bitcoin', amount: '0.05 BTC', value: '$1,500' },
  { id: '2', name: 'Ethereum', amount: '1.2 ETH', value: '$2,880' },
];

const transactions = [
  { id: '1', name: 'Bitcoin', type: 'Buy', amount: '0.005 BTC', date: 'Oct 25, 2024' },
  { id: '2', name: 'Ethereum', type: 'Send', amount: '0.25 ETH', date: 'Oct 23, 2024' },
];

// Main App Component
const Home = () => {
  return (
    <FlatList
      data={portfolio} // Use portfolio data as the main list data
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <>
          {/* Total Balance Section */}
          <View className="p-6 bg-indigo-600 ">
            <Text className="text-gray-300">Total Portfolio Value</Text>
            <Text className="text-3xl font-bold text-white mt-1">$5,130.00</Text>

            <View className="flex-row justify-center mt-4">
              <TouchableOpacity className="bg-indigo-500 px-6 py-2 rounded-md mx-2">
                <Text className="text-white font-semibold">Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-6 py-2 rounded-md mx-2 border border-indigo-500">
                <Text className="text-indigo-500 font-semibold">Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Market Trends Section */}
          <View className="p-6">
            <Text className="text-lg font-semibold mb-2">Market Trends</Text>
            <FlatList
              horizontal
              data={trends}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="bg-white p-4 rounded-lg shadow-sm mr-3">
                  <Text className="font-medium">
                    {item.name} ({item.symbol})
                  </Text>
                  <Text className="text-gray-500">{item.price}</Text>
                  <Text
                    className={`mt-1 ${
                      item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {item.change}
                  </Text>
                </View>
              )}
            />
          </View>

          {/* Portfolio Section Header */}
          <View className="p-6">
            <Text className="text-lg font-semibold mb-2">Your Portfolio</Text>
          </View>
        </>
      )}
      renderItem={({ item }) => (
        <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2 shadow-sm">
          <Text className="font-medium">{item.name}</Text>
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
              <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2 shadow-sm">
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
export default Home
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, } from 'react-native'




const index = () => {
  
  return (
    <ImageBackground style={styles.background}  source={require('../assets/images/download.jpeg')}  resizeMode='cover'>
   
        <View className='flex  items-center'>
        <Image className='w-70 h-70 self-auto mt-12' resizeMode="contain" source={require('../assets/images/wallet.png')} />
        </View>

        <View className='flex'>
                
                <Text className='text-5xl text-center mt-4'>Traders-Trade</Text>

        </View>

        <View>
        <Text className='text-center'>Where you Buy & Sell Cryptos</Text>

        </View>


          
          <TouchableOpacity onPress={() => router.push('(dashboard)')} className=' bg-slate-800 rounded-full border-2 border-stone-900 ml-1 mr-1 mt-9'>
            <Text className='text-white text-center text-lg'>TRADE NOW</Text>
          </TouchableOpacity>
      
                  
        
        
        
        <View>
        <Text className='ml-4 mt-3'>Continue WIth</Text>
        </View>



          <View className='flex-row justify-center items-center space-x-2 mt-6 '>
        <TouchableOpacity className='items-center'>
          <Image source={require('../assets/images/google.png')} className='h-[60] w-[80]'/>
        </TouchableOpacity>
                  <Text>OR</Text>
        <TouchableOpacity className='items-center'>
          <Image source={require('../assets/images/facebook.png')} className='h-[70] w-[80]'/>
        </TouchableOpacity>
        </View>








    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%', 
    
  },

});


export default index
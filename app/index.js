import { View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import {COLORS, SIZES, icons, images} from '../constants'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
import { Welcome, ScreenHeaderBtn } from '../components'
import Popularmovies from '../components/home/popular/Popularmovies'
import Chatbot from '../components/home/bot/Chatbot'

const Home = () => {

    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options ={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                     <ScreenHeaderBtn iconUrl={images.logo} dimension="140%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension = "80%"/>
                ),
                headerTitle: ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                style= {{
                    flex:1,
                    padding:SIZES.medium
                }}
                >
                    <Welcome
                    
                    />
                    <Chatbot/>
                    <Popularmovies/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
import { View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import {COLORS, SIZES} from '../constants'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
import { Welcome, ScreenHeaderBtn } from '../components'

const Home = () => {

    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options ={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                     <ScreenHeaderBtn  dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn  dimension = "100%"/>
                ),
                headerTitle: "CinéSuggest"
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
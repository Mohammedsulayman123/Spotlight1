import * as SecureStore from 'expo-secure-store'
import {Platform} from 'react-native'
import { TokenCache } from '@clerk/clerk-expo/dist/cache'

const createTokenCache = (): TokenCache => {
    return {
        getToken: async (key: string) => {
            try {
                const item = await SecureStore.getItemAsync(key)
                if (item) {
                    console.log(`${key} was used ▲ \n`)
                    return item
                } else {
                    console.log('No values stored under key: ' + key)
                    return null
                }
            } catch (error) {
                console.error('secure store get item error:', error)
                await SecureStore.deleteItemAsync(key)
                return null
            }
        },
        saveToken: async (key: string, token: string) => {
            try {
                await SecureStore.setItemAsync(key, token)
            } catch (error) {
                console.error('secure store save error:', error)
            }
        }
    }
}

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache(): undefined
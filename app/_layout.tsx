import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../Constants/theme';
import {  ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";

const publishabKey=process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if(!publishabKey){
  throw new Error(
  "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  return (
  <ClerkProvider  tokenCache={tokenCache} publishableKey={publishabKey}>
  <ClerkLoaded>
  <SafeAreaProvider>
  <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
  <Stack screenOptions={{ headerShown: false }} />
  </SafeAreaView>
  </SafeAreaProvider>
  </ClerkLoaded>
  </ClerkProvider>
  );
  }

export function TabLayout() {
  return (
    <Tabs
     screenOptions={{tabBarShowLabel:false}}
      >
        <Tabs.Screen name="index" 
         options={{tabBarIcon:({size,color}) => <Ionicons name="home" size={size} color={color}  />}}
        />
        <Tabs.Screen name="bookmarks" options={{tabBarIcon:({size,color}) => <Ionicons name="bookmark" size={size} color={color} />}}/>
        <Tabs.Screen name="create" options={{tabBarIcon:({size}) => <Ionicons name="add-circle" size={32} color={COLORS.primary}/>}}/>
        <Tabs.Screen name="notifications"/>
        <Tabs.Screen name="profile"/>
    </Tabs>
  );
}

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "@/styles/auth.styles"
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/Constants/theme'

export default function Login() {
  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary}/>
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* ILLUSTRATION */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/Online wishes-bro.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* LOGIN SECTION */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => console.log("Continue with Google")}
          activeOpacity={0.9}
        >
          <Image 
            source={require("../../assets/images/google.png")}
            style={{ width: 24, height: 24, marginRight: 12 }}
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={[styles.termsText, { color: COLORS.primary }]}>Terms</Text>
          {' '}and{' '}
          <Text style={[styles.termsText, { color: COLORS.primary }]}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { AppBarMenu, AppBarLogo, AppBarSearch } from '../../assets/icons'

export default function TheNavbar() {
  return (
    <View style={styles.bar}>
      <AppBarMenu />
      <AppBarLogo />
      <AppBarSearch />
    </View>
  )
}

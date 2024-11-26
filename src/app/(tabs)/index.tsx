import { View, StyleSheet, Text } from 'react-native';

export function Home() {
  return(
    <View styles={styles.container}>
      <Text>Pagina Home</Text>
    </View>
  );
}

const styles = styleSheet.create({
  container: {
    flex: 1, 
  }
})
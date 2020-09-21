import React from 'react';
import { View, FlatList, StyleSheet, Text, Animated, Easing } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

const DATA = [...Array(1000).keys()].map(i => (i + 1).toString());

const App = () => {

  spinValue = new Animated.Value(0)

  Animated.loop(
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start();

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const renderItem = ({ item }) => (
    <View style={{ 
      flex: 1, flexDirection: 'row', 
      marginHorizontal: 20, marginVertical: 10 
      }}>
      <Animated.Image
        style={{ transform: [{ rotate: spin }], width: 100, height: 100 }}
        source={require('./assets/avatar.png')}
      />
      <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 20 }}>
        <Text style={styles.title}>Animacja #{item}</Text>
        <Text>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque sed posuere tortor.
          </Text>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Test wydajności aplikacji React Native" />
      </Appbar.Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item}
        ref={ref => this.flatList = ref}
        onContentSizeChange={() =>this.flatList.scrollToEnd({animated: true})}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default App;
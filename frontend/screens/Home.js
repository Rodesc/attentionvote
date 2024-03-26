import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ATTENTION VOTEUUUH
            </Text>
            <Button
                title="Join Session"
                // onPress={() => navigation.navigate('Join')}
            />
            <Button
                title="New Session"
                // onPress={() => navigation.navigate('New')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ka-Blam',
    fontSize: 30,
    letterSpacing: 2,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
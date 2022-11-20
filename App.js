import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

<<<<<<< HEAD
export default function App() {
  return (
    <View style={styles.container}>
      <Text>MANTAAPslurr</Text>
      <StatusBar style="auto" />
    </View>
  );
=======
class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>COBA TEKAN</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
      </View>
    )
  }
>>>>>>> 91503f8a649ec9aafc81c275f066930e93dbcdc5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
=======
    backgroundColor: '#fff',
    alignItems: 'left',
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 91503f8a649ec9aafc81c275f066930e93dbcdc5
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< Updated upstream
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
=======
});

>>>>>>> Stashed changes

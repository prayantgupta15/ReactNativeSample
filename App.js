import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

// const MyData = () => {
//   return <Text>MyData</Text>
// }

const MyData = (props) => {

  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.qual}</Text>
    </View>
  )
}

class App extends React.Component {
  state =
    {
      name: "prayant",
      qual: "school"
    }


  changeState(name, qual) {
    console.log('Studying ' + name)
    Alert.alert('Now, you are graduate')
    this.setState({
      name: name
      , qual: qual
    })

  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data2 => {
        console.log(data2)

        this.setState({ name: data2[0].name })
      })

  }
  render() {
    const items = ['eat', 'sleep', 'code'];
    const disp = items.map((i) => {
      return (<Text style={{ fontSize: 30 }}>{i}</Text>)
    });
    return (
      <View style={styles.container}>
        {/* {disp} */}
        <MyData name={this.state.name}
          qual={this.state.qual} />
        <StatusBar style="auto" />
        <Button title="Graduate Me"
          // onPress={() => { console.log('pressed') }

          // onPress={this.changeState}
          // changeState=()=> {
          //   console.log('pressed')
          // }


          onPress={this.changeState.bind(this, "Eng. prayant", "btech")}
        ></Button>


        <TextInput
          placeholder="Enter Text"
          style={{
            fontSize: 30,
            height: 30
          }}
          onChangeText={(text) => { Alert.alert(text) }}

        ></TextInput>
      </View>
    );
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});

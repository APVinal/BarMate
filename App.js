import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import api from './api';
import Search from './search';

export default class App extends Component {
  state = {
    drinks: [],
    search: '',
    showModal: false, 
    spotlight: []
  }

  updateSearch(value){
    this.state.search = value;
    this.setState(this.state);
    console.log('state', this.state.search)
  }

  fetchApi(){
    let value = this.state.search;
    api.getDrinks(value).then((res) => {
      this.setState({
        drinks: res.drinks
      })
    })
  }

  render() {


    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.row} >
          <Text style={styles.title} >BarMate</Text>
          <Text>It's five o'clock somewhere!</Text>
          <Text>Type in your favorite liquor for a list of delicious drinks you can make with it.</Text>
        </View>

        <View style={styles.row} >    
          <TextInput 
            style={styles.searchBox}
            onChangeText={this.updateSearch.bind(this)} >
          </TextInput>
        </View>

        <View>
          <Button 
            onPress={this.fetchApi.bind(this)}
            title='Get Rummaging'
            disabled={!this.state.search}
          />
        </View>

        <View style={styles.displayRow} >
          <Search list={this.state.drinks}
           />
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  searchBox: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
    flex: 2,
    height: 50,
    width: 500,
    borderColor: 'black',
    borderWidth: 1
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50 
  },
  displayRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350   
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  hide: {
    display: 'none'
  }
});

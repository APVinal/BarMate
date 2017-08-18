import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Modal, TouchableHighlight, Image } from 'react-native';
import recipeApi from './recipe-api';
import RecipeModal from './recipe-modal';

class Search extends Component {
  constructor(props) {
    super(props);
    this.fetchRecipe = this.fetchRecipe.bind(this);
  }

  state = {
    showModal: false, 
    spotlight: []
  }
 

  fetchRecipe(id) {
    recipeApi.getRecipe(id).then((res) => {
      this.setState({
        spotlight: res.drinks,
        showModal: true
      })
      console.log(this.state.spotlight[0].strDrink);
    })
  }

  closeRecipe(){
    this.setState({
      showModal: false
    })
  }

  render() {
    const drinks = this.props.list.map((drink, index) => (
      <Button
        title={drink.strDrink}
        key={drink.idDrink}
        onPress={() => this.fetchRecipe(drink.idDrink)}
      />
    ))

    return (
      <View>
        <RecipeModal
          show={this.state.showModal}
          drink={this.state.spotlight}
          close={this.closeRecipe.bind(this)}
        />

        <ScrollView style={styles.container} >
          {drinks}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 500,
    margin: 15,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export default Search;
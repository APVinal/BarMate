import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Modal, Image } from 'react-native';

class RecipeModal extends Component {
  render(){

    if(!this.props.drink[0]){
      return(
      <View>
        <Text>Loading</Text>
      </View>
      )
    } else {
    return (
      <View >
        <Modal
          visible={this.props.show}
          animationType={'slide'}
        >
          <Image 
            source={{url: `this.props.drink[0].strDrinkThumb`}}
            style={{width: 100, height: 100}}
          />
          <Text>{this.props.drink[0].strDrink}</Text>
          <Text>Instructions: {this.props.drink[0].strInstructions}</Text>
          <Text> Recipe </Text>
          <Text> {this.props.drink[0].strIngredient1} {this.props.drink[0].strMeasure1} </Text>
          <Text> {this.props.drink[0].strIngredient2} {this.props.drink[0].strMeasure2} </Text>
          <Text> {this.props.drink[0].strIngredient3} {this.props.drink[0].strMeasure3} </Text>
          <Text> {this.props.drink[0].strIngredient4} {this.props.drink[0].strMeasure4} </Text>
          <Text> {this.props.drink[0].strIngredient5} {this.props.drink[0].strMeasure5} </Text>

          <Button 
            onPress={this.props.close} 
            title='Close Recipe'
          />       
        </Modal>
      </View>
    );
    }
  }
}



export default RecipeModal;

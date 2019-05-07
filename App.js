import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TextInput, Button} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props){

    super(props)
    this.state = {
      text:"",
      itens:[
      {key:"0", desc:"Item 1", done:false},
      {key:"01", desc:"Item 2", done:false},
      ]
    }

    this.inserirItem = this.inserirItem.bind(this)

  }

  renderItem(obj){
    return (
      <Text styles={styles.productContainer}>{obj.item.desc}</Text>
      )
  }

  inserirItem(){
  let newItem= {
    key:this.state.itens.length.toString(),
    desc:this.state.text,
    done:false
  }


  let itens = this.state.itens;
  itens.push(newItem)
  this.setState({itens})

  let text = ""
  this.setState({text})
  }

  render() {
    return (
      <View styles={styles.container} >
      <FlatList styles={styles.list}data ={this.state.itens} renderItem={this.renderItem} extraData={this.state} />
      <View styles={styles.InputView}>
      <TextInput style={styles.input} onChangeText={(text)=>{this.setState({text})}} value ={this.state.text} />
      <Button style={styles.productButton} onPress={this.inserirItem} title="Inserir" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  list: {
    margin: 20
  },
  InputView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  input: {
    backgroundColor:"white",
    borderColor:"#CCC",
    borderWidth: 3,
    padding:10,
    margin:20,
  },
  productContainer: {
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#DDD',
  borderRadius: 5,
  padding: 20,
  marginBottom: 20
},
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText: {
  fontSize: 16,
  color: '#DA552F',
  fontWeight: 'bold'
}
});

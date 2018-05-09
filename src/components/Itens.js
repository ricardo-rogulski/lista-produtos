import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhesItens}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Dt publicação: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

export default Itens;

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItens: {
    marginLeft: 20,
    flex: 1 //Faz o texto ficar contido no espaço da tela.
  },
  txtTitulo: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 10
  },
  txtValor: {
    fontWeight: 'bold',
  }

});

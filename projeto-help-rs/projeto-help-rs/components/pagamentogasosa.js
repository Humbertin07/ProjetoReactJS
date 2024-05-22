import React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Image,
} from 'react-native';
import firebase from '../config/config'

class pagamentogasosa extends React.Component {
  constructor(props) {
    super(props);
  }

  salvar() {
    firebase.database().ref('/valordagasosa').push({
      opcao: this.opcao,
    });
    alert('Obrigado por Doar!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{'Pix para a Gasolina dos Jets'}</Text>
        <View style={styles.centralizado}>
          <Image source={require('../assets/qrcode.jpg')} style={styles.image} />
        </View>

        <Text style={styles.text}>
          {
            'Você está prestes a ajudar o Rio Grande do Sul, doando um valor definido por ti, para que sejam comprados litros de Gasolina para os Jet Skis!'
          }
        </Text>
        <Text style={styles.text}>
          {
            'Caso deseje doar em alguma outra ação, volte algumas páginas!'
          }
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um valor:"
          onChangeText={(texto) => {
            this.opcao = texto;
          }}
        />

        <TouchableOpacity
          style={[styles.button, styles.backButtonFinalizar]}
          onPress={() => this.salvar()}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Finalizar Compra
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Gasolina')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    borderWidth: 2,
    borderColor: '#3F4775',
    backgroundColor: 'lightblue',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    fontWeight: 'Bold',
    color: 'darkred',
  },
  button: {
    backgroundColor: '#3F4775',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'White',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#801524',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    fontWeight: 'Bold',
    color: 'darkred',
  },
  image: {
    marginBottom: 10,
    marginTop: 20,
    width: 450,
    height: 325,
  },
  centralizado: {
    alignSelf: 'Center',
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
    input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  backButtonFinalizar: {
    backgroundColor: '#3F4775',
  },
});

export default pagamentogasosa;

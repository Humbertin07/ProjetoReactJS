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

class pagamentopix extends React.Component {
  constructor(props) {
    super(props);
  }

  salvar() {
    firebase.database().ref('/valordopix').push({
      opcao: this.opcao,
    });
    alert('Obrigado por Doar!');
  }

  render() {
    return (
      <View>
        <Text style={styles.titulo}>{'Pix para o RS'}</Text>
        <div style={styles.div}>
          <Image source={require('../assets/ajuda.jpg')} style={styles.image} />
        </div>

        <Text style={styles.text}>
          {
            'Você está prestes a ajudar o Rio Grande do Sul, doando um valor definido por ti, para que seja usado aonde for necessário!'
          }
        </Text>
        <Text style={styles.text}>
          {
            'Caso deseje doar em alguma ação mais focada, volte algumas páginas!'
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
          style={[styles.button, styles.backButton]}
          onPress={() => this.salvar()}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Finalizar Compra
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Pix')}>
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
    textAlign: 'center',
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
    color: 'purple',
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 100,
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
  },
});

export default pagamentopix;

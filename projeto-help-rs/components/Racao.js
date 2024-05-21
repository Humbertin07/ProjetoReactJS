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

class OpcoesAjuda extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.titulo}>{'Pix para as Rações de Animais em Geral'}</Text>
        <div style={styles.div}>
        <Image source={require('../assets/ajuda.jpg')} style={styles.image} />
        </div>
        
        <Text style={styles.text}>{'LARARARARARARARARARA'}</Text>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('pagamentoracao')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Doar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Opcoes')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Voltar</Text>
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
    borderRadius: 8
  }
});

export default OpcoesAjuda;

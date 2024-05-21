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
    this.opcao = ""
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{'1. Pix para o RS'}</Text>
        <div style={styles.div}>
        <Image source={require('../assets/ajuda.jpg')} style={styles.image} />
        </div>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Pix')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Conheça!</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{'2. Gasolina para os Jet Skis!'}</Text>
        <div style={styles.div}>
        <Image source={require('../assets/ajuda.jpg')} style={styles.image} />
        </div>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Gasolina')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Conheça!</Text>
        </TouchableOpacity>
  
        <Text style={styles.text}>{'3. Mande Ração para os Animais!'}</Text>
        <div style={styles.div}>
        <Image source={require('../assets/ajuda.jpg')} style={styles.image} />
        </div><TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Racao')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Conheça!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('MenuPrincipal')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Voltar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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

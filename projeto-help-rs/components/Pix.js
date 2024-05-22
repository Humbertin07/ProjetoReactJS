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
      <View style={styles.container}>
        <Text style={styles.titulo}>{'Pix para o RS'}</Text>
        <div style={styles.div}>
        <Image source={require('../assets/rs.png')} style={styles.image} />
        </div>
        
        <Text style={styles.text}>{'O valor doado aqui, será direcionado ao que for necessário para o RS e sua comunidade.\n'}</Text>
        <Text style={styles.text}>{'\nSe seu objetivo é doar para outra causa, volte a página!'}</Text>

        <TouchableOpacity
          style={[styles.button, styles.backButtonDoar]}
          onPress={() => this.props.navigation.navigate('pagamentopix')}>
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
  backButtonDoar: {
    backgroundColor: '#3F4775',
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
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    height: 200,
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default OpcoesAjuda;

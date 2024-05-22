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
  ScrollView,
} from 'react-native';
import firebase from '../config/config';

class OpcoesAjuda extends React.Component {
  constructor(props) {
    super(props);
    this.opcao = '';
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{'1. Pix para o RS'}</Text>
        <View style={styles.centralizado}>
          <Image source={require('../assets/rs.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Pix')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Conheça!
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>{'2. Gasolina para os Jet Skis!'}</Text>
        <View style={styles.centralizado}>
          <Image source={require('../assets/rsJS.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Gasolina')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Conheça!
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>{'3. Mande Ração para os Animais!'}</Text>
        <View style={styles.centralizado}>
          <Image source={require('../assets/rsAnimais.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.props.navigation.navigate('Racao')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>
            Conheça!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButtonVoltar]}
          onPress={() => this.props.navigation.navigate('MenuPrincipal')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Voltar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
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
    backgroundColor: '#3F4775',
  },
  backButtonVoltar: {
    backgroundColor: '#801524',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    marginTop: 10,
    width: 350,
    height: 200,
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralizado: {
    alignSelf: 'Center',
  },
});

export default OpcoesAjuda;

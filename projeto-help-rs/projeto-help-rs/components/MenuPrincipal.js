import React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from 'react-native';


class PaginaLogado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress = (screen) => {
    Vibration.vibrate(100); // Vibra por 100ms
    if (this.state.sound) {
      this.state.sound.replayAsync();
    }
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Bem Vindo!'}</Text>
        <Text style={styles.subtitle}>{'Vamos Ajudar?'}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handlePress('Opcoes')}>
          <Text style={styles.buttonText}>Aonde Ajudar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handlePress('MeusRegistros')}>
          <Text style={styles.buttonText}>Meus Registros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.handlePress('Login')}>
          <Text style={[styles.buttonText, styles.backButtonText]}>Sair</Text>
        </TouchableOpacity>
      </View>
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
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    marginTop: 5,
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
    color: 'white',
    fontSize: 18,
  },
  backButton: {
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
});

export default PaginaLogado;

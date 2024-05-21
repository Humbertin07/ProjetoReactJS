import React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import firebase from '../config/config'

class RegistrarEscolha extends React.Component {
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
      <View>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => this.handlePress('MenuPrincipal')}>
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
});

export default RegistrarEscolha;

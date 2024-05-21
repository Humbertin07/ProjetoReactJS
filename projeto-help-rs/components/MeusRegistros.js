import React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  FlatList,
} from 'react-native';
import firebase from '../config/config';

handlePress = (screen) => {
  Vibration.vibrate(100); // Vibra por 100ms
  if (this.state.sound) {
    this.state.sound.replayAsync();
  }
  this.props.navigation.navigate(screen);
};

class MeusRegistros extends React.Component {
  constructor(props) {
    super(props);
    this.opcao = '';
    this.state = {
      valordopix: [],
      valordagasosa: [],
      valordaracao: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('valordopix')
      .on('value', (snapshot) => {
        let data = snapshot.val();
        let dados = Object.values(data);
        this.setState({ valordopix: dados });
      });
  
    firebase
      .database()
      .ref('valordagasosa')
      .on('value', (snapshot) => {
        let data = snapshot.val();
        let dados = Object.values(data);
        this.setState({ valordagasosa: dados });
      });
  
    firebase
      .database()
      .ref('valordaracao')
      .on('value', (snapshot) => {
        let data = snapshot.val();
        let dados = Object.values(data);
        this.setState({ valordaracao: dados });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 22,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}>
            {' '}
            {'Você doou os valores abaixo para o Pix Geral do RS\n'}{' '}
            {this.state.valordopix.length > 0 ? (
              <FlatList
                data={this.state.valordopix}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.opcao}</Text>
                  </View>
                )}
              />
            ) : null}
          </Text>

          <Text
            style={{
              fontSize: 22,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}>
            {' '}
            {'Você doou os valores abaixo para a gasolina dos Jet Skis\n'}{' '}
            {this.state.valordagasosa.length > 0 ? (
              <FlatList
                data={this.state.valordagasosa}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.opcao}</Text>
                  </View>
                )}
              />
            ) : null}
          </Text>

          <Text
            style={{
              fontSize: 22,
              borderColor: 'gray',
              borderWidth: 1,
              textAlign: 'center',
            }}>
            {' '}
            {'Você doou os valores abaixo para a ração dos animais\n'}{' '}
            {this.state.valordaracao.length > 0 ? (
              <FlatList
                data={this.state.valordaracao}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.opcao}</Text>
                  </View>
                )}
              />
            ) : null}
          </Text>
        </View>

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

export default MeusRegistros;

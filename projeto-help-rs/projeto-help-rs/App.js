import * as React from 'react';
import { Text, View, Button, TextInput, Alert, StyleSheet, Vibration } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPrincipal from './components/MenuPrincipal';
import MeusRegistros from './components/MeusRegistros';
import CadastroAjuda from './components/CadastroAjuda';
import Opcoes from './components/Opcoes';
import Pix from './components/Pix';
import Gasolina from './components/Gasolina';
import Racao from './components/Racao';
import pagamentopix from './components/pagamentopix';
import pagamentogasosa from './components/pagamentogasosa';
import pagamentoracao from './components/pagamentoracao';
import firebase from './config/config';

const Navegacao1 = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navegacao2.Navigator>
          <Navegacao2.Screen
            name="Login"
            component={NavTab}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="MenuPrincipal"
            component={MenuPrincipal}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="MeusRegistros"
            component={MeusRegistros}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="CadastroAjuda"
            component={CadastroAjuda}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="Opcoes"
            component={Opcoes}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="Pix"
            component={Pix}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="Gasolina"
            component={Gasolina}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="Racao"
            component={Racao}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="pagamentopix"
            component={pagamentopix}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="pagamentogasosa"
            component={pagamentogasosa}
            options={{ headerShown: false }}
          />
          <Navegacao2.Screen
            name="pagamentoracao"
            component={pagamentoracao}
            options={{ headerShown: false }}
          />
        </Navegacao2.Navigator>
      </NavigationContainer>
    );
  }
}

const Navegacao2 = createStackNavigator();

class NavTab extends React.Component {
  render() {
    return (
      <Navegacao1.Navigator>
        <Navegacao1.Screen
          name="Login"
          component={Principal} //o componente é a próxima estrutura de navegação
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Navegacao1.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-details"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Navegacao1.Navigator>
    );
  }
}

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      password: undefined,
    };
  }

  gravar() {
    const email = this.state.user.toLowerCase();
    const password = this.state.password.toLowerCase();
    console.log('teste');

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        Vibration.vibrate(100);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == 'auth/email-already-in-use') {
          console.log('Esse email já está em uso');
          Alert.alert('Erro', 'Esse email já está em uso');
        } else if (errorCode == 'auth/weak-password') {
          console.log('Senha fraca');
          Alert.alert('Erro', 'Senha fraca, digite outra senha');
        } else if (errorCode == 'auth/invalid-email') {
          console.log('Formato do email invalido');
          Alert.alert('Erro', 'Formato do email invalido');
        } else {
          console.log('Erro Desconhecido');
          Alert.alert('Erro', 'Ocorreu um erro' + +error);
        }
      });
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.texto}>{'Cadastrar Usuário:'}</Text>
        <TextInput
          style={estilos.input}
          onChangeText={(texto) => this.setState({ user: texto })}></TextInput>
        <Text style={estilos.texto}>{'Cadastrar Senha:'}</Text>
        <TextInput
          style={estilos.inputBotoes}
          onChangeText={(texto) =>
            this.setState({ password: texto })
          }></TextInput>
        <Button color= '#801524' title="Cadastrar" onPress={() => this.gravar()} />
      </View>
    );
  }
}

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: undefined,
      senha: undefined,
    };
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.texto}>{'Usuário:'}</Text>
        <TextInput
          style={estilos.input}
          onChangeText={(texto) =>
            this.setState({ usuario: texto })
          }></TextInput>
        <Text style={estilos.texto}>{'Senha:'}</Text>
        <TextInput
          style={estilos.inputBotoes}
          onChangeText={(texto) => this.setState({ senha: texto })}></TextInput>
        <Button color= '#801524' title="Logar" onPress={() => this.ler()}></Button>
      </View>
    );
  }

  ler() {
    const email = this.state.usuario.toLowerCase();
    const password = this.state.senha.toLowerCase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Vibration.vibrate(100);
        Alert.alert('Logado!!!', 'Login realizado com sucesso!');
        this.props.navigation.navigate('MenuPrincipal', {
          email: this.state.usuario,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == 'auth/invalid-email') {
          console.log('Formato do email invalido');
          alert('Formato do email invalido');
        } else {
          console.log('Erro Desconhecido');
          alert('Ocorreu um erro');
        }
      });
  }
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    fontWeight: 'Bold',
    color: 'darkred',
  },
  input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  inputBotoes: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 35,
    borderRadius: 10,
  },
    container: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});

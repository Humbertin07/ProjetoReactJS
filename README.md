<h1>🚩 HelpRS 🚩</h1>

O HelpRS é um aplicativo, muito básico, para que sejam feitas doações focadas em áreas específicas do Rio Grande do Sul!
Deixei como exemplo 3 escolhas, sendo elas pix geral, pix para as embarcações e jet skis que lá estão ajudando e pix para as rações dos animais resgatados em geral!
Claro que existem outras problemáticas, mas ainda sim, foquei nas mais vistas...

<h1>💡 Minha Motivação 💡</h1>
Não preciso nem dizer! Estamos vivendo um momento extremamente delicado com os irmãos do sul! 
Como o DACC (Diretório Acadêmico de Ciência da Computação), cresceu o que era uma simples doação, para uma tentativa de arrecadar muitas doações, acabei me inspirando nessa iniciativa, para criar esse app simples!

<h1>🛠️ O Código do APP 🛠️</h1>
Como se tratam de muitas páginas, não consigo colocar todos os código aqui, mas para complementar e ter uma ideia do que seria, colocarei apenas o App.js!

<details>
  <summary>Código em React JS</summary>

  ```js
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
      <View>
        <Text style={estilos.texto}>{'Cadastrar Usuário:'}</Text>
        <TextInput
          style={estilos.input}
          onChangeText={(texto) => this.setState({ user: texto })}></TextInput>
        <Text style={estilos.texto}>{'Cadastrar Senha:'}</Text>
        <TextInput
          style={estilos.input}
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

```
  
</details>

<h1>📲 Algumas Telas do Meu Aplicativo 📲</h1>

Bem, para que possamos entrar em nosso app, devemos logar e para isso temos que fazer o cadastro!

![Captura de tela 2024-05-22 012649](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/3fc3edd6-46d4-4cc5-891d-d538e4a76908)

E logo após, logar em nossa conta!

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/46d9ffc3-5923-4498-ba01-e3a6e094eddf)

Chegamos ao nosso menu inicial!

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/1153a080-e56d-4f9a-89eb-58ba6b7ee613)

Escolhendo a primeira Opção, ou seja, Aonde Ajudar, temos algumas opções, como eu disse no início, escolhi três das problemáticas mais vistas!

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/3e774085-815d-4c09-8740-75c43cd38f29)

Escolhendo uma delas, a página de apresentação da causa é aberta e logo em seguida, você poderá doar!

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/66775451-4234-4861-be0f-734702b9d50a)

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/4f374a84-1377-457c-970e-9a6e2970b2fe)

Doando um valor de x reais, isso será salvo no database e ficará pronto para visualização nos meus registros, segunda página do menu principal!

![image](https://github.com/Humbertin07/ProjetoReactJS/assets/130792797/f820d253-9204-4dde-afe0-9ec6be3426ec)

Bem, seguindo essa lógica simples, temos todo o funcionamento do app e assim chegamos ao fim do projeto!

<h1>🖖 Dev Por Trás do Projeto! 🖖</h1>
Humberto Pellegrini
24.123.065-5

Com auxílio e incentivo do Professor Isaac Jesus Silva!














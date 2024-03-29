import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const cadastro = () => {
  alert(senha);
  alert(email);
  alert(celular);
  alert(cpf);
  alert(nome);
}

const acessar = () => {
  
}
  return (
    <View style={styles.container}>
        <StatusBar hidden />

    <Image style={{width:200,height:200}} source={require('./assets/logo-vaga-emprego.png')} />

    <Text style={styles.TextLogin}>Faça já o seu Login e veja as vagas para o seu perfil profissional.</Text>

    <TextInput placeholder="E-mail:" style={styles.TextInput} onChangeText={text=>setLogin(text)} />
    <TextInput secureTextEntry={true} placeholder="Senha:" style={styles.TextInput} onChangeText={text=>setSenha(text)} />


    <TouchableOpacity style={styles.btnAcesso} onPress={(acessar)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Acessar</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01497c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  TextInput:{
    width:'100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },

  btnCadastro:{
    width: '50%',
    height: 40,
    backgroundColor:'#05c7fc',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10
  },

  btnAcesso:{
    width: '50%',
    height: 40,
    backgroundColor:'#05c7fc',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
 
  TextLogin:{
    width: '80%',
    height: 60,
    color: 'white',
    justifyContent: 'center',
    marginBottom: 15
  }
});

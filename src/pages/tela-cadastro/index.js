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

  return (
    <View style={styles.container}>
        <StatusBar hidden />

    <Image style={{width:200,height:200}} source={require('./assets/logo-vaga-emprego.png')} />

    <TextInput placeholder="Nome Completo:" style={styles.TextInput} onChangeText={text=>setNome(text)} />
    <TextInput placeholder="CPF:" style={styles.TextInput} onChangeText={text=>setCPF(text)} />
    <TextInput placeholder="Celular:" style={styles.TextInput} onChangeText={text=>setCelular(text)} />
    <TextInput placeholder="E-mail:" style={styles.TextInput} onChangeText={text=>setEmail(text)} />
    <TextInput secureTextEntry={true} placeholder="Senha:" style={styles.TextInput} onChangeText={text=>setSenha(text)} />

    <TouchableOpacity style={styles.btnCadastro} onPress={(cadastro)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Cadastrar</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01497c  ',
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
    justifyContent: 'center'
  }
});

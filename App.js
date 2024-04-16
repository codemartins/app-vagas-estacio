import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Login() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const login = () => {
  setEmail,
  setSenha
}

console.log(data);

  return (
    <View style={styles.container}>
        <StatusBar style='auto' />

    <Image style={{width:200,height:200, marginBottom: 25}} source={require('./assets/logo-iJob2.png')} />
    <Text style={{color: "white", marginBottom: 30, fontSize: 25}}>Bem-vindo(a)</Text>
    <TextInput placeholder="Digite seu e-mail:" style={styles.TextInput} onChangeText={text=>setEmail(text)} />
    <TextInput secureTextEntry={true} placeholder="Digite sua senha:" style={styles.TextInput} onChangeText={text=>setSenha(text)} />

    <TouchableOpacity style={styles.btnLogin} onPress={(login)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
    </TouchableOpacity>

    <Text style={{color: 'white', textAlign: 'center', marginBottom: 50, top: 145}}>Powered by</Text>
    <Image style={{width: 150, height: 38, top: 95}} source={require('./assets/logo-estacio.png')} />
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
    width:'90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },

  btnLogin:{
    width: '40%',
    height: 40,
    backgroundColor:'#05c7fc',
    borderRadius: 20,
    justifyContent: 'center'
  }
});

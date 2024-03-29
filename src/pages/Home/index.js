import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

const cadastro = () => {
  
}

const acessar = () => {
  
}
  return (
    <View style={styles.container}>
        <StatusBar hidden />

    <Image style={{width:200,height:200}} source={require('./assets/logo-vaga-emprego.png')} />

    <Text style={styles.TextLogin}>Cadastre-se e faça Login agora mesmo e fique por dentro das principais vagas.</Text>

   
    <TouchableOpacity style={styles.btnCadastro} onPress={(cadastro)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Cadastre-se</Text>
    </TouchableOpacity>

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

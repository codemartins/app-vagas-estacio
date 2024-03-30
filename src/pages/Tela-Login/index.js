import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {

const cadastro = () => {
  
}

const acessar = () => {
  
}
  return (
    <View style={styles.container}>
        <StatusBar style='auto' />

    <Image style={{width:200,height:200}} source={require('./assets/logo-iJob2.png')} />

    <Text style={styles.TextLogin}>Cadastre-se e faça Login agora mesmo e fique por dentro das principais vagas.</Text>

   
    <TouchableOpacity style={styles.btnCadastro} onPress={(cadastro)}>
      <Text style={{color: '#05c7fc', textAlign: 'center'}}>Cadastre-se</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnAcesso} onPress={(acessar)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Acessar</Text>
    </TouchableOpacity>

    <Text style={{color: 'white', textAlign: 'center', marginBottom: 50, top: 178}}>Powered by</Text>
    <Image style={{width: 150, height: 38, top: 128}} source={require('./assets/logo-estacio.png')} />
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

  btnCadastro:{
    width: '50%',
    height: 40,
    backgroundColor:'#fff',
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
    marginBottom: 15,
    justifyContent: 'center',
    textAlign: 'center'
  }
});

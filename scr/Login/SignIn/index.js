import React, {useState }from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';



//Tela de logar
export default function SignIn() {
  const navigation = useNavigation();

  
  return(
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conecte-se</Text>
      </View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>

        <Text style={styles.title}>Email ou Matrícula</Text>
        <TextInput 
          placeholder='Digite seu email ou matrícula'
          keyboardType='email-address'
          style={styles.input}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput 
          placeholder='Digite sua senha'
          secureTextEntry={true}
          style={styles.input}
         
        />

        <TouchableOpacity style={styles.containerBotton} onPress={ () => navigation.navigate('Vagas')}>
          <Text style={styles.bottonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.bottonTitle}>Não possui uma conta?
          <TouchableOpacity style={styles.containerBotton2} onPress={ () => navigation.navigate('Welcome2')}>
            <Text style={styles.bottonText2}> Cadastre-se</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity style={styles.containerBotton3} onPress={ () => navigation.navigate('Welcome')}>
          <Text style={styles.bottonText}>Voltar</Text>
        </TouchableOpacity>
        
      </Animatable.View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#313D6F'
  },
  header:{
    marginTop:'20%',
    marginBottom:'8%',
    paddingStart:'5%'
  },
  headerText:{
    fontSize:36,
    color:'#F6F6F6'
  },
  containerForm:{
    backgroundColor:'#F6F6F6',
    flex:1,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize:20,
    marginTop: 28
  },
  input:{
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:16
  },
  containerBotton:{
    backgroundColor:'#313D6F',
    width:'100%',
    borderRadius: 4,
    paddingVertical:8,
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
  },
  bottonText:{
    color:'#F6F6F6',
    fontSize:18
  },
  bottonTitle:{
    textAlign:'center',
    marginTop: 20,
    fontSize:14
  },
  containerBotton2:{
    borderBottomWidth:1,
    borderColor:'#0a147d',
    justifyContent:'center',
    alignItems:'center',
  },
  bottonText2:{
    color:'#0a147d',
    top:4,
  },
  containerBotton3:{
    backgroundColor:'#313D6F',
    width:'100%',
    borderRadius: 4,
    paddingVertical:8,
    marginTop:'90%',
    justifyContent:'center',
    alignItems:'center'
  }

})
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons'



//Tela de menu (Status)
export default function Status () {
  const navigation = useNavigation()

  return(
    <View style={styles.container}>
      <Animatable.View style={styles.header} animation='fadeIn'>
        <View style={styles.containerInput}>
          <View style={styles.input}>
            <Icon name='search' size={20}/>
            <TextInput placeholder='Pesquisar'/>
          </View>
        </View>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <ScrollView >
          <Text style={styles.text}>Minhas vagas</Text>
        </ScrollView>
      </Animatable.View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Icon 
            name='bookmark'
            size={70}        
            color='#F6F6F6'
            onPress={ () => navigation.navigate('Status')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon
            name='work'
            size={70}
            color='#F6F6F6'
            onPress={ () => navigation.navigate('Vagas')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon
            name='person'
            size={70}
            color='#F6F6F6'
            onPress={ () => navigation.navigate('Perfil')}
          />
        </TouchableOpacity>
      </View>

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
    marginBottom:'5%',
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  containerForm:{
    flex:1,
    backgroundColor:'#F6F6F6',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    paddingStart: '5%',
    paddingEnd:'5%',

  },
  text:{
    fontSize:'30',
    
  },
  containerInput:{
    backgroundColor:'#F6F6F6',
    borderRadius:10,
    marginTop:10,
    fontSize:16,
    
  },
  input:{
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop:5,
    paddingStart:'2%'

  },
  containerButton:{
    flexDirection:'row',
    justifyContent:'center',
    height:'11%',
    backgroundColor:'#222A4D',
  },
  button:{
    width:'35%',
    alignItems:'center'
  },


})
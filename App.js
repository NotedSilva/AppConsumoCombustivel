import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {useState} from 'react';





export default function App() {

  function CalculoCombustivel() {
  const resultado = km / combustivel
  alert('O consumo do seu carro é ' + resultado + 'L');
}

const [km,setkm] = useState('');
const [combustivel,setcombustivel] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Consumo de Combustivel
      </Text>
     <TextInput value={km}
     style={styles.input}
     placeholder="Insira os KM percorrido"
     placeholderTextColor="#000000"
     keyboardType="numeric"
     onChangeText={(kms)=>setkm(kms)}
     />

     <TextInput value={combustivel}
     style={styles.input}
     placeholder="Digite a quantidade de combustivel"
     placeholderTextColor="#000000"
     keyboardType="numeric"
     onChangeText={(combustivel)=>setcombustivel(combustivel)}
     />

    <TouchableOpacity style={styles.btn}onPress={CalculoCombustivel}>
        <Text  style={styles.textbtn}> Calcular o Consumo </Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60,
    color:'#bf9780'
  },
  btn:{
    alignItems:'center',
    backgroundColor:'#bf9780',
    padding:15,
    borderRadius:10,
    margin:15,
    marginTop:40,
  },
  textbtn:{
    fontSize:25,
  },
  input:{
    fontSize:18,
    padding:20,
    backgroundColor:'#bf9780',
    margin:15,
  }
});

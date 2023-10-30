import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';

export default function App() {
  const [novoCodigo, setNovoCodigo] = useState('');
  const [novoRG, setNovoRG] = useState('');
  const [novoCPF, setNovoCPF] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const [novoCelular, setNovoCelular] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [novoEndereco, setNovoEndereco] = useState('');
  const [novoComplemento, setNovoComplemento] = useState('');

  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const cadastro = () => {
    if (novoCodigo && novoRG && novoCPF && novoNome && novoEmail && novoCelular && novoTelefone && novoEndereco && novoComplemento) {
      setDadosCadastrados([...dadosCadastrados, { novoCodigo, novoRG, novoCPF, novoNome, novoEmail, novoCelular, novoTelefone, novoEndereco, novoComplemento }]);
      setNovoCodigo('');
      setNovoRG('');
      setNovoCPF('');
      setNovoNome('');
      setNovoEmail('');
      setNovoCelular('');
      setNovoTelefone('');
      setNovoEndereco('');
      setNovoComplemento('');
    }
  }

  const removerItem = (index) => {
    const novosDados = [...dadosCadastrados];
    novosDados.splice(index, 1);
    setDadosCadastrados(novosDados);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.titulo}>TELA DE CADASTRO</Text>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Codigo: </Text>
        <TextInput style={styles.caixaTexto} value={novoCodigo} onChangeText={text => setNovoCodigo(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>RG: </Text>
        <TextInput style={styles.caixaTexto} value={novoRG} onChangeText={text => setNovoRG(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>CPF: </Text>
        <TextInput style={styles.caixaTexto} value={novoCPF} onChangeText={text => setNovoCPF(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Nome: </Text>
        <TextInput style={styles.caixaTexto} value={novoNome} onChangeText={text => setNovoNome(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Email: </Text>
        <TextInput style={styles.caixaTexto} value={novoEmail} onChangeText={text => setNovoEmail(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Celular: </Text>
        <TextInput style={styles.caixaTexto} value={novoCelular} onChangeText={text => setNovoCelular(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Telefone: </Text>
        <TextInput style={styles.caixaTexto} value={novoTelefone} onChangeText={text => setNovoTelefone(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Endereço: </Text>
        <TextInput style={styles.caixaTexto} value={novoEndereco} onChangeText={text => setNovoEndereco(text)} />
      </View>

      <View style={styles.opcoes}>
        <Text style={styles.label}>Complemento: </Text>
        <TextInput style={styles.caixaTexto} value={novoComplemento} onChangeText={text => setNovoComplemento(text)} />
      </View>

      <TouchableOpacity style={styles.botao} onPress={cadastro}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>CADASTRADOS</Text>

      <FlatList
        data={dadosCadastrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removerItem(index)} style={styles.item}>
            <View>
              <Text>Codigo: {item.novoCodigo};</Text>
              <Text>RG: {item.novoRG};</Text>
              <Text>CPF: {item.novoCPF};</Text>
              <Text>Nome: {item.novoNome};</Text>
              <Text>Email: {item.novoEmail};</Text>
              <Text>Celular: {item.novoCelular};</Text>
              <Text>Telefone: {item.novoTelefone};</Text>
              <Text>Endereço: {item.novoEndereco};</Text>
              <Text>complemento: {item.novoComplemento};</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: 'white',
    fontSize: 30,
  },

  label: {
    color: 'lightblue',
    fontSize: 20,
    marginTop: 15,
    width: 200,
    textAlign: 'center',
  },

  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  caixaTexto: {
    width: '50%',
    borderRadius: 10,
    height: 30,
    backgroundColor: 'lightgray',
    marginTop: 20,
    paddingLeft: 10,
  },

  botao: {
    marginTop: 30,
    backgroundColor: 'lightblue',
    width: 220,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 15,
  },

  item: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 4,
    borderColor: 'lightblue',
  },
});

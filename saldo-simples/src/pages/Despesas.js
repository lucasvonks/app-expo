import React from 'react'
import {  Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer'

const Despesas = () => {
  const handleGerenciarPress = () => {
    // aqui da pode navegar pra tela de gerenciamento
    // exemplo: navigation.navigate('GerenciarOrcamentos');
    console.log('Gerenciar clicado!');
  };

  return(
<Container>
      <Header />

      <Body>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 40,
          }}>
          <Text style={styles.title}> Gráfico de Despesas </Text>
          <Text style={styles.subtitle}> R$1650,00/R$2200,00 </Text>

          {/* Container dos gráficos */}
          <View style={styles.chartContainer}>
            <View style={styles.expenseBlock}>
              <Text style={styles.chartText}>Contas </Text>
              <ProgressBar
                progress={0.5}
                color="#E53935"
                style={styles.progressBar}
              />
              <Text style={styles.valueText}>R$1100/R$1100</Text>
            </View>

            <View style={styles.expenseBlock}>
              <Text style={styles.chartText}>Comida</Text>
              <ProgressBar
                progress={0.4}
                color="#FB8C00"
                style={styles.progressBar}
              />
              <Text style={styles.valueText}>R$190 / R$400</Text>
            </View>

            <View style={styles.expenseBlock}>
              <Text style={styles.chartText}>Entretenimento</Text>
              <ProgressBar
                progress={0.6}
                color="#410287"
                style={styles.progressBar}
              />
              <Text style={styles.valueText}>R$210 / R$300</Text>
            </View>

            <View style={styles.expenseBlock}>
              <Text style={styles.chartText}>Transporte</Text>
              <ProgressBar
                progress={0.3}
                color="#74FF73"
                style={styles.progressBar}
              />
              <Text style={styles.valueText}>R$150 / R$400</Text>
            </View>

            <View style={styles.saldoRow}>
              <Text style={styles.subtitle}>Saldo Restante: R$550,00</Text>
              <TouchableOpacity onPress={handleGerenciarPress}>
                <Text style={styles.gerenciarText}>Gerenciar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Footer />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    textAlign: 'center',
    paddingTop:20,
    fontWeight:'bold',
  },
  subtitle: {
    marginTop: 5,
    fontSize: 16,
  },
  chartContainer: {
    marginTop: 30,
    width: '85%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    elevation: 3, // sombra no Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  expenseBlock: {
    marginBottom: 25,
  },
  chartText: {
    textAlign: 'center',
    color: '#555',
  },
  progressBar: {
    height: 20,
    borderRadius: 5,
  },
  valueText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
  },
  saldoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  gerenciarText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default Despesas;
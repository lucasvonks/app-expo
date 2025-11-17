import * as React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer'

const CadastroDeDespesasScreen = ({ navigation }) => {
  const [descricao, setDescricao] = React.useState("");
  const [valor, setValor] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSalvar = () => {
    if (!descricao || !valor || !categoria || !data) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos para continuar.");
      return;
    }

    if (isNaN(valor) || parseFloat(valor) <= 0) {
      Alert.alert("Valor inválido", "Informe um valor numérico maior que zero.");
      return;
    }

    setLoading(true);

    // Simulação de gravação local (sem backend)
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Sucesso", "Despesa cadastrada com sucesso!");
      setDescricao("");
      setValor("");
      setCategoria("");
      setData("");
      // navigation.navigate("ControleDeDespesas");
    }, 1200);
  };

  return (
    <Container>
    <Header />

    <Body>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Cadastrar Despesa</Text>
        <Text style={styles.subtitle}>
          Registre suas despesas para manter o controle financeiro
        </Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <TextInput
          label="Descrição da despesa"
          value={descricao}
          onChangeText={setDescricao}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Valor (R$)"
          value={valor}
          onChangeText={setValor}
          style={styles.input}
          keyboardType="numeric"
          mode="outlined"
        />
        <TextInput
          label="Categoria"
          value={categoria}
          onChangeText={setCategoria}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Data (dd/mm/aaaa)"
          value={data}
          onChangeText={setData}
          style={styles.input}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleSalvar}
          loading={loading}
          style={styles.button}
        >
          Salvar Despesa
        </Button>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Deseja visualizar suas despesas?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Despesa')}
          >
            Ir para controle
          </Text>
        </Text>
      </View>
    </View>

    <Footer />
    </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
    textAlign: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
  },
  footer: {
    alignItems: "center",
    marginBottom: 50,
  },
  footerText: {
    fontSize: 14,
    color: "#475569",
  },
  link: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});

export default CadastroDeDespesasScreen;
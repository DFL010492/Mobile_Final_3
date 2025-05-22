import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style/HeroDetailsStyle';


export default function HeroDetails({ route, navigation }) {
  const { hero } = route.params;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.modal}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>

              <Text style={styles.name}>{hero.name}</Text>
              <Image source={{ uri: hero.image.url }} style={styles.image} resizeMode='contain' />

              <Text style={styles.section}>Aparência</Text>
              <Text>Gênero: {hero.appearance.gender}</Text>
              <Text>Raça: {hero.appearance.race}</Text>
              <Text>Altura: {hero.appearance.height.join(', ')}</Text>
              <Text>Peso: {hero.appearance.weight.join(', ')}</Text>
              <Text>Olhos: {hero.appearance['eye-color']}</Text>
              <Text>Cabelo: {hero.appearance['hair-color']}</Text>

              <Text style={styles.section}>Poderes</Text>
              {Object.entries(hero.powerstats).map(([key, value]) => (
                <Text key={key}>{`${key.toUpperCase()}: ${value}`}</Text>
              ))}

              <Text style={styles.section}>Biografia</Text>
              <Text>Nome completo: {hero.biography['full-name']}</Text>
              <Text>Alter egos: {hero.biography['alter-egos']}</Text>
              <Text>Aliases: {hero.biography.aliases.join(', ')}</Text>
              <Text>Local de nascimento: {hero.biography['place-of-birth']}</Text>
              <Text>Primeira aparição: {hero.biography['first-appearance']}</Text>
              <Text>Editora: {hero.biography.publisher}</Text>
              <Text>Alinhamento: {hero.biography.alignment}</Text>

              <Text style={styles.section}>Trabalho</Text>
              <Text>Ocupação: {hero.work.occupation}</Text>
              <Text>Base: {hero.work.base}</Text>

              <Text style={styles.section}>Conexões</Text>
              <Text>Afiliado a: {hero.connections['group-affiliation']}</Text>
              <Text>Parentes: {hero.connections.relatives}</Text>

            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}
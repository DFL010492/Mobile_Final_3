import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style/HeroDetailsStyle';

export default function HeroDetails({ route, navigation }) {
  const { hero } = route.params;

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        {/* Conteúdo do Modal */}
        <View style={styles.contentWrapper}>
          {/* Header fixo */}
          <View style={styles.header}>
            <Text style={styles.name}>{hero.name}</Text>
            <Image
              source={{ uri: hero.image.url }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Scroll somente nas informações */}
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.section}>Aparência</Text>
            <Text style={styles.info}>Gênero: {hero.appearance.gender}</Text>
            <Text style={styles.info}>Raça: {hero.appearance.race}</Text>
            <Text style={styles.info}>Altura: {hero.appearance.height.join(', ')}</Text>
            <Text style={styles.info}>Peso: {hero.appearance.weight.join(', ')}</Text>
            <Text style={styles.info}>Olhos: {hero.appearance['eye-color']}</Text>
            <Text style={styles.info}>Cabelo: {hero.appearance['hair-color']}</Text>

            <Text style={styles.section}>Poderes</Text>
            {Object.entries(hero.powerstats).map(([key, value]) => (
              <Text style={styles.info} key={key}>{`${key.toUpperCase()}: ${value}`}</Text>
            ))}

            <Text style={styles.section}>Biografia</Text>
            <Text style={styles.info}>Nome completo: {hero.biography['full-name']}</Text>
            <Text style={styles.info}>Alter egos: {hero.biography['alter-egos']}</Text>
            <Text style={styles.info}>Aliases: {hero.biography.aliases.join(', ')}</Text>
            <Text style={styles.info}>Local de nascimento: {hero.biography['place-of-birth']}</Text>
            <Text style={styles.info}>Primeira aparição: {hero.biography['first-appearance']}</Text>
            <Text style={styles.info}>Editora: {hero.biography.publisher}</Text>
            <Text style={styles.info}>Alinhamento: {hero.biography.alignment}</Text>

            <Text style={styles.section}>Trabalho</Text>
            <Text style={styles.info}>Ocupação: {hero.work.occupation}</Text>
            <Text style={styles.info}>Base: {hero.work.base}</Text>

            <Text style={styles.section}>Conexões</Text>
            <Text style={styles.info}>Afiliado a: {hero.connections['group-affiliation']}</Text>
            <Text style={styles.info}>Parentes: {hero.connections.relatives}</Text>
          </ScrollView>
          
        </View>
      </View>
    </View>
  );
}

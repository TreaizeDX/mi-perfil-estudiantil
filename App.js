import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function App() {
  const manejarContacto = () => {
    alert('📩 ¡Gracias por tu interés! (Aquí iría tu email)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/200/200?random=1' }}
            style={styles.photo}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Dominick Jiménez</Text>
          <Text style={styles.title}>Estudiante de Programación</Text>
          <Text style={styles.bio}>
            🚀 Aprendiendo apps móviles con Expo.{'\n'}
            💡 Mi meta: crear algo útil.
          </Text>
        </View>

        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Mis habilidades</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🌐 HTML y CSS</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡ JavaScript</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>💻 C#</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🔀 Git</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>📱 Expo Go</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Pressable style={styles.buttonPrimary} onPress={manejarContacto}>
            <Text style={styles.buttonPrimaryText}>📩 Contáctame</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => alert('🔗 Próximamente: mi portafolio')}
          >
            <Text style={styles.buttonSecondaryText}>🌐 Mi portafolio</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creado con 💖 en Snack.expo.dev{'\n'}
            📅 {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 30,
  },

  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#2196F3',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },

  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },

  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: '500',
  },

  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  buttonSecondaryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { DashboardSumaryCard } from '../../components/DashboardSumaryCard';

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.painelHeader}>
          <Image
            source={require('@/assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <View style={styles.sumaryContainer}>
          <DashboardSumaryCard 
            label='Doações recebidas'
            value={'R$ 1564,70'}
          />
          <DashboardSumaryCard 
            label='Doadores'
            value={'16'}
          />
          <DashboardSumaryCard 
            label='Animais cadastrados'
            value={'47'}
          />
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    backgroundColor: '#f0efdb',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  painelHeader: {
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 160,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',        
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sumaryContainer: {
    width: '100%',
    marginTop: 32,
  }
});
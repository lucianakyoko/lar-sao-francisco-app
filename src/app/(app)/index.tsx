import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { DashboardSumaryCard } from '@/components/DashboardSumaryCard';
import { useDonationSummary } from '@/hooks/useDonationSummary';

export default function Dashboard() {
  const { data, isPending, error } = useDonationSummary();

  if(isPending) {
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color='#2b9eed' />
        <Text>Carregando resumo...</Text>
      </View>
    )
  }

  if(error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro ao carregar dados</Text>
      </View>
    );
  }

  const { totalDonationsAmount, totalDonors, totalAnimals } = data || {};
  
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
            value={`R$ ${totalDonationsAmount?.toFixed(2) || '0,00'}`}
          />
          <DashboardSumaryCard 
            label='Doadores'
            value={totalDonors?.toString() || '0'}
          />
          <DashboardSumaryCard 
            label='Animais cadastrados'
            value={totalAnimals?.toString() || '0'}
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
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  }
});
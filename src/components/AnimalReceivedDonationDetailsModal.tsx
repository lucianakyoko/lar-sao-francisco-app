import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import CustomModal from './CustomModal';
import { DonationGroup } from '@/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type AnimalReceivedDonationDetailsModalProps = {
  visible: boolean;
  onClose: () => void;
  group: DonationGroup | null;
};

export default function AnimalReceivedDonationDetailsModal({
  visible,
  onClose,
  group,
}: AnimalReceivedDonationDetailsModalProps) {
  if (!group || !visible) return null;

  const { animal, donations, totalExtraAmount, totalDonatedItemsValue, totalValue, donationCount } = group;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={`Doações para ${animal.name}`}
      closeOnBackdropPress={true}
      showCloseButton={true}
      modalStyle={styles.modalStyle}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Cabeçalho com foto e resumo */}
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: animal.images?.[0] }}
            style={styles.animalImage}
          />
          <View style={styles.summary}>
            <Text style={styles.animalName}>{animal.name}</Text>
            <Text style={styles.summaryText}>
              {donationCount} doaç{donationCount === 1 ? 'ão recebida' : 'ões recebidas'}
            </Text>
          </View>
        </View>

        {/* Detalhes financeiros */}
        <View style={styles.financialSummary}>
          <View style={styles.financialItem}>
            <Text style={styles.financialLabel}>Doações extras</Text>
            <Text style={styles.financialValue}>{formatCurrency(totalExtraAmount)}</Text>
          </View>
          <View style={styles.financialItem}>
            <Text style={styles.financialLabel}>Valor dos itens doados</Text>
            <Text style={styles.financialValue}>{formatCurrency(totalDonatedItemsValue)}</Text>
          </View>
          <View style={styles.financialTotal}>
            <Text style={styles.financialTotalLabel}>Total</Text>
            <Text style={styles.financialTotalValue}>{formatCurrency(totalValue)}</Text>
          </View>
        </View>

        {/* Lista de doações */}
        <View style={styles.donationsList}>
          <Text style={styles.listTitle}>Histórico de doações</Text>

          {donations.map((donation) => (
            <View key={donation._id} style={styles.donationItem}>
              <View style={styles.donationRow}>
                <Text style={styles.donationDate}>{formatDate(donation.createdAt)}</Text>
                <View style={styles.donationBox}>
                  <Text style={styles.donationDonor}>{donation.donorName}</Text>
                  <Text style={styles.donationTotal}>{formatCurrency(donation.totalDonation)}</Text>
                </View>
              </View>             
            </View>
          ))}
        </View>
      </ScrollView>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    width: SCREEN_WIDTH * 0.92,
    minHeight: 454,
    maxHeight: '85%',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  animalImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
  },
  summary: {
    // flex: 1,
    justifyContent: 'center',
  },
  animalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b9eed',
  },
  financialSummary: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  financialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  financialLabel: {
    fontSize: 15,
    color: '#555',
  },
  financialValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  financialTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  financialTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  financialTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b9eed',
  },
  donationsList: {
    padding: 6,
    marginVertical: 40,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  donationItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 1,
  },
  donationRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  donationDate: {
    fontSize: 12,
    color: '#666',
    width: '100%',
    flex: 1,
  },
  donationBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    marginVertical: 4,
  },
  donationDonor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex:1,
  },
  donationTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  donationValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2b9eed',
    textAlign: 'right',
    flex: 1,
  },
  itemsContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  itemsLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  itemText: {
    fontSize: 13,
    color: '#777',
    marginLeft: 8,
  },
});
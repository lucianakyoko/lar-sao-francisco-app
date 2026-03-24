import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomModal from './CustomModal';

type ConfirmDeleteAnimalModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  animalName: string;
  animalImage: string;
  isLoading?: boolean;
};

export default function ConfirmDeleteAnimalModal({
  visible,
  onClose,
  onConfirm,
  animalName,
  animalImage,
  isLoading = false,
}: ConfirmDeleteAnimalModalProps) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title="Confirmar Exclusão"
      showCloseButton={true}
      closeOnBackdropPress={!isLoading}
      modalStyle={styles.modalStyle}
    >
      <View style={styles.content}>
        <View style={styles.animalDetail}>
          <Image source={{ uri: animalImage }} style={styles.image} />
          <Text style={styles.message}>
            Deseja realmente excluir {' '}
            <Text style={styles.animalName}>{animalName}</Text>?
          </Text>
        </View>

        <Text style={styles.warning}>
          Esta ação não pode ser desfeita.
        </Text>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
            disabled={isLoading}
          >
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.deleteButton, isLoading && styles.deleteButtonDisabled]}
            onPress={onConfirm}
            disabled={isLoading}
          >
            <Text style={styles.deleteText}>
              {isLoading ? 'Excluindo...' : 'Sim, excluir'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    width: '88%',
    maxHeight: 420,
  },
  content: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  animalDetail: {
    alignItems: 'center',
    width: 'auto',
    gap: 8,
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  animalName: {
    fontWeight: 'bold',
    color: '#5b5a62',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  warning: {
    fontSize: 15,
    color: '#e63939',
    textAlign: 'center',
    marginBottom: 28,
    paddingVertical: 18,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#e63939',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  deleteButtonDisabled: {
    backgroundColor: '#f4a8a8',
  },
  deleteText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

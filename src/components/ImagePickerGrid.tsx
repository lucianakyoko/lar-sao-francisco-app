import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  images: string[];
  onAddFromGallery: () => void;
  onAddFromCamera: () => void;
  onRemove: (index: number) => void;
  maxImages: number;
};

export default function ImagePickerGrid({
  images,
  onAddFromGallery,
  onAddFromCamera,
  onRemove,
  maxImages,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fotos do Animal (máx. {maxImages})</Text>

      <View style={styles.grid}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemove(index)}
            >
              <Ionicons name="close-circle" size={24} color="#e63939" />
            </TouchableOpacity>
          </View>
        ))}

        {images.length < maxImages && (
          <>
            <TouchableOpacity style={styles.addButton} onPress={onAddFromGallery}>
              <Ionicons name="image-outline" size={32} color="#2b9eed" />
              <Text style={styles.addText}>Galeria</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton} onPress={onAddFromCamera}>
              <Ionicons name="camera-outline" size={32} color="#2b9eed" />
              <Text style={styles.addText}>Câmera</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  removeButton: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  addButton: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  addText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

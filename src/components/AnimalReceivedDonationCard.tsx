import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  donationValue: number;
  imageUrl: string;
  onPress?: () => void;
};

export function AnimalReceivedDonationCard({
  name,
  donationValue,
  imageUrl,
  onPress
}: Props) {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.value}>
          R$ {donationValue.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9ECEF",
    gap: 20,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    borderColor: '#d1d3d4',
    borderWidth: 1,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },

  info: {
    flex: 1,
    paddingVertical: 8,
    height: 80,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: "#333",
  },
});
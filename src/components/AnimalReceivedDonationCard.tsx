import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  name: string;
  donationValue: number;
  imageUrl: string;
};

export function AnimalReceivedDonationCard({
  name,
  donationValue,
  imageUrl,
}: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.value}>
          R$ {donationValue.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  value: {
    fontSize: 14,
    color: "#333",
  },
});
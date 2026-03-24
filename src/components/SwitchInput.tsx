import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

type Props = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export default function SwitchInput({ label, value, onValueChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#ddd', true: '#2b9eed' }}
        thumbColor={value ? '#fff' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

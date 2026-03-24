import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  label: string;
  value: string;
  onChange: (date: string) => void;
};

export default function DatePickerInput({ label, value, onChange }: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  // Formata data para DD/MM/AAAA
  const formattedDate = useMemo(() => {
    if (!value) return '';
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }, [value]);

  // Calcula idade em anos ou meses
  const ageText = useMemo(() => {
    if (!value) return '';

    const birth = new Date(value);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
      years--;
      months += 12;
    }

    if (years >= 1) {
      return `${years} ${years === 1 ? 'ano' : 'anos'}`;
    } else {
      const totalMonths = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
      return `${totalMonths} ${totalMonths === 1 ? 'mês' : 'meses'}`;
    }
  }, [value]);

  const handleChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');

    if (selectedDate) {
      setTempDate(selectedDate);
      const formatted = selectedDate.toISOString().split('T')[0];
      onChange(formatted);
    }
  };

  const showDatepicker = () => setShowPicker(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.input} onPress={showDatepicker}>
        <Text style={value ? styles.dateText : styles.placeholder}>
          {value ? formattedDate : 'Selecione a data de nascimento'}
        </Text>
      </TouchableOpacity>

      {value && (
        <Text style={styles.ageText}>
          Idade: <Text style={styles.ageHighlight}>{ageText}</Text>
        </Text>
      )}

      {showPicker && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="default"
          onChange={handleChange}
          maximumDate={new Date()}
          locale="pt-BR"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    justifyContent: 'center',
    minHeight: 52,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    fontSize: 16,
    color: '#999',
  },
  ageText: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    marginLeft: 4,
  },
  ageHighlight: {
    fontWeight: 'bold',
    color: '#2b9eed',
  },
});

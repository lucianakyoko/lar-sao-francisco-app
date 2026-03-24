import { Stack } from 'expo-router';

export default function AnimalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/* Tela da lista de animais */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />

      {/* Tela do formulário (cadastro + edição) */}
      <Stack.Screen 
        name="animal-form" 
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitle: 'Voltar',
          headerTintColor: '#2B9EED',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </Stack>
  );
}
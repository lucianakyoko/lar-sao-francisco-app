import { Redirect, Stack } from 'expo-router';
import { useAuthStore } from '../../store/authStore';

export default function AppLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Dashboard', headerTitleAlign: 'center' }} 
      />
      <Stack.Screen 
        name="animals" 
        options={{ title: 'Animais' }} 
      />
      <Stack.Screen 
        name="donations" 
        options={{ title: 'Doações' }} 
      />
    </Stack>
  );
}

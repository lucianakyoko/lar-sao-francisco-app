import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import QueryProvider from '../providers/QueryProvider';
import { loadStoredToken } from '../store/authStore';

export default function RootLayout() {
  useEffect(() => {
    loadStoredToken();
  }, []);

  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </QueryProvider>
  );
}
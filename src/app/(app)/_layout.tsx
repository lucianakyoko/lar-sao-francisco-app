import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/authStore";

import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function AppLayout() {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: "#f2f2f2",
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#444",
        tabBarItemStyle: {
          borderRadius: 16,
          marginHorizontal: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
          tabBarActiveBackgroundColor: "#d7c8e3",
        }}
      />

      <Tabs.Screen
        name="donations"
        options={{
          title: "Doações",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cash" size={22} color={color} />
          ),
          tabBarActiveBackgroundColor: "#d7c8e3",
        }}
      />

      <Tabs.Screen
        name="animals"
        options={{
          title: "Animais",
          tabBarIcon: ({ color }) => (
            <Ionicons name="paw" size={22} color={color} />
          ),
          tabBarActiveBackgroundColor: "#d7c8e3",
        }}
      />
    </Tabs>
  );
}
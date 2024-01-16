import React from "react";
import DrawerView from "@/navigation/drawer";
import AuthView from "@/navigation/auth";
import { useAuth } from "@/context/AuthProvider";

export default function RootStackView() {
  const { user } = useAuth();

  return user ? <DrawerView /> : <AuthView />;
}

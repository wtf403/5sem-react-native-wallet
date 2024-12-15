import React from "react";
import AuthView from "@/view/screens/auth";
import DrawerView from "@/view/screens/drawer";
import { useAuth } from "@/context/AuthProvider";

export default function RootStackView() {
  const { user } = useAuth();

  return user ? <DrawerView /> : <AuthView />;
}

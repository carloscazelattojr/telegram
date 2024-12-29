import { Redirect } from "expo-router";
import { useAuth } from "../providers/AuthProvider";

export default function HomeSreen() {
  const { user } = useAuth();
  let router = "/(auth)/login";

  if (user) {
    router = "/(home)";
  }
  return <Redirect href={router} />;
}

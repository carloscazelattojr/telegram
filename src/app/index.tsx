import { Redirect } from "expo-router";

export default function HomeSreen() {
  return <Redirect href={"/(auth)/login"} />;
}

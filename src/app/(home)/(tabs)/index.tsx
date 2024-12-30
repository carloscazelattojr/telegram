import { ChannelList } from "stream-chat-expo";
import { Link, router, Stack } from "expo-router";
import { useAuth } from "../../../providers/AuthProvider";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function MainTabScreen() {
  const { user } = useAuth();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={"/(home)/users"} asChild>
              <FontAwesome5
                name="users"
                size={24}
                color="gray"
                style={{ marginHorizontal: 25 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [user?.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  );
}

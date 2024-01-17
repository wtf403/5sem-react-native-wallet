import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackView from "@/view/screens/main/index";
import Profile from "@/view/screens/drawer/Profile";
import Theme from "@/view/screens/drawer/Theme";
import Language from "@/view/screens/drawer/Language";
import AppIcon from "@/view/screens/drawer/AppIcon";
import InviteFriends from "@/view/screens/drawer/InviteFriends";
import ReportBug from "@/view/screens/drawer/ReportBug";
import FAQ from "@/view/screens/drawer/FAQ";
import Protocol from "@/view/screens/drawer/Protocol";
import TermsAndConditions from "@/view/screens/drawer/TermsAndConditions";
import PrivacyPolicy from "@/view/screens/drawer/PrivacyPolicy";

import ProfileIcon from "@/media/icons/ProfileIcon.svg";
import ThemeIcon from "@/media/icons/ThemeIcon.svg";
import LanguageIcon from "@/media/icons/LanguageIcon.svg";
import IconAppIcon from "@/media/icons/IconAppIcon.svg";
import InviteFriendsIcon from "@/media/icons/InviteFriendsIcon.svg";
import ReportBugIcon from "@/media/icons/ReportBugIcon.svg";
import FAQIcon from "@/media/icons/FAQIcon.svg";
import ProtocolIcon from "@/media/icons/ProtocolIcon.svg";
import TermsAndConditionsIcon from "@/media/icons/TermsAndConditionsIcon.svg";
import PrivacyPolicyIcon from "@/media/icons/PrivacyPolicyIcon.svg";
import LogOutIcon from "@/media/icons/LogOutIcon.svg";

import { useAuth } from "@/context/AuthProvider";

import {
  useWindowDimensions,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  DrawerContentScrollView,
  Group,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { colors } from "@/utils/constants";

const Drawer = createDrawerNavigator();
export default function DrawerView() {
  const { user } = useAuth();

  const settingsItems = [
    {
      component: Profile,
      icon: ProfileIcon,
      label: "Profile",
      name: "profile",
    },
    { component: Theme, icon: ThemeIcon, label: "Theme", name: "theme" },
    {
      component: Language,
      icon: LanguageIcon,
      label: "Language",
      name: "language",
    },
    {
      component: AppIcon,
      icon: IconAppIcon,
      label: "App Icon",
      name: "app-icon",
    },
  ];

  const shareAndSupportItems = [
    {
      component: InviteFriends,
      icon: InviteFriendsIcon,
      label: "Invite Friends",
      name: "invite-friends",
    },
    {
      component: ReportBug,
      icon: ReportBugIcon,
      label: "Report Bug",
      name: "report-bug",
    },
    {
      component: FAQ,
      icon: FAQIcon,
      label: "FAQ",
      name: "faq",
    },
  ];

  const aboutItems = [
    {
      component: Protocol,
      icon: ProtocolIcon,
      label: "Protocol",
      name: "protocol",
    },
    {
      component: TermsAndConditions,
      icon: TermsAndConditionsIcon,
      label: "Terms and Conditions",
      name: "terms-and-conditions",
    },
    {
      component: PrivacyPolicy,
      icon: PrivacyPolicyIcon,
      label: "Privacy Policy",
      name: "privacy-policy",
    },
  ];

  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <View style={styles.heading}>
              <Image source={user.avatar} style={styles.avatar} />
              <Text>@{user.username}</Text>
            </View>

            {/* Settings */}
            <Text style={styles.groupTitle}>Settings</Text>
            <View style={styles.group}>
              {settingsItems.map((Item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => props.navigation.navigate(Item.name)}
                  style={styles.item}
                >
                  <Item.icon width={24} height={24} />
                  <Text>{Item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Share & Support */}
            <Text style={styles.groupTitle}>Share & Support</Text>
            <View style={styles.group}>
              {shareAndSupportItems.map((Item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => props.navigation.navigate(Item.name)}
                  style={styles.item}
                >
                  <Item.icon width={24} height={24} />
                  <Text>{Item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* About */}
            <Text style={styles.groupTitle}>About</Text>
            <View style={styles.group}>
              {aboutItems.map((Item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => props.navigation.navigate(Item.name)}
                  style={styles.item}
                >
                  <Item.icon width={24} height={24} />
                  <Text>{Item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Logout */}
            <View style={styles.group}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => console.log("logout")}
              >
                <LogOutIcon width={24} height={24} />
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>

            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
      screenOptions={{
        headerShown: true,
        drawerItemStyle: { display: "none" },
        drawerType: dimensions.width >= 1024 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="MainStackView"
        options={{ headerShown: false }}
        component={MainStackView}
      />
      {[...settingsItems, ...shareAndSupportItems, ...aboutItems].map(
        (Item, i) => {
          return (
            <Drawer.Screen
              key={i}
              name={Item.name}
              options={{
                title: Item.label,
              }}
              component={Item.component}
            />
          );
        }
      )}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    padding: 16,
  },
  heading: {
    marginHorizontal: "auto",
    alignItems: "center",
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  groupTitle: {
    marginHorizontal: 24,
    marginBottom: 4,
    paddingLeft: 8,
  },
  group: {
    marginBottom: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.BorderColor,
    borderRadius: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});

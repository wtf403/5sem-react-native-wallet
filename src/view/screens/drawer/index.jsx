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

import {
  useWindowDimensions,
  View,
  Text,
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

const Drawer = createDrawerNavigator();
export default function DrawerView() {
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

  const AboutItems = [
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
              {shareAndSupportItems.map((Item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => console.log(Item.name)}
                  style={styles.item}
                >
                  <Item.icon width={24} height={24} />
                  <Text>{Item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <DrawerItem
              label="Logout"
              onPress={() => props.navigation.navigate(Item.name)}
            />
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
      {[...settingsItems, ...shareAndSupportItems, ...AboutItems].map(
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

  group: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "gray",
  },
});

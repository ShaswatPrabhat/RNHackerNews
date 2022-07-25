import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  WrappingViewStyleDark,
  WrappingViewStyleWhite,
} from "./AppWrapper.styles";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppWrapper = ({ children }) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={new QueryClient()}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}
          >
            <View
              style={
                isDarkMode ? WrappingViewStyleDark : WrappingViewStyleWhite
              }
            >
              {children}
            </View>
          </ScrollView>
        </SafeAreaView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default AppWrapper;

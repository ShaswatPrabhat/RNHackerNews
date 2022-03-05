import { QueryClient, QueryClientProvider } from "react-query";
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

const AppWrapper = ({ children }) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <View
            style={isDarkMode ? WrappingViewStyleDark : WrappingViewStyleWhite}
          >
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default AppWrapper;

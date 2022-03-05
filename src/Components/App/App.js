/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { Button,  } from "react-native";

const App: () => Node = () => {
  return (
    <AppWrapper>
      <Button
        title="Fetch News"
        onPress={async () => {
          await Linking.openURL("https://news.ycombinator.com/news");
        }}
      />
    </AppWrapper>
  );
};

export default App;

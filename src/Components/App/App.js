/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import type { Node } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { Button, Linking, Text } from "react-native";
import axios from "axios";

const App: () => Node = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://news.ycombinator.com/news");
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <AppWrapper>
      <Button
        color="red"
        title="Fetch News"
        onPress={async () => {
          await Linking.openURL("https://news.ycombinator.com/news");
        }}
      />
      <Text>{JSON.stringify(data)}</Text>
    </AppWrapper>
  );
};

export default App;

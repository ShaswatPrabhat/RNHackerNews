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
import { Linking, Text } from "react-native";
import axios from "axios";
import { Button } from "@rneui/themed";

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
        type="outline"
        title="Bubu?"
        onPress={async () => {
          await Linking.openURL("https://news.ycombinator.com/news");
        }}
      />
      <Text>{JSON.stringify(data)}</Text>
    </AppWrapper>
  );
};

export default App;

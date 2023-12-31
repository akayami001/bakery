import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView>
      <Animatable.Image
        source={require("../assets/Spinner-2.gif")}
        className="h-96 w-96"
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        className="text-lg my-10 text-white font-bold text-center"
        animation="slideInUp"
        iterationCount={1}
      >
        Waiting for Restaurant to accept the order.
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

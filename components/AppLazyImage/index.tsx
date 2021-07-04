import React from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  View,
} from "react-native";

interface Props extends ImageBackgroundProps {
  style: {
    width: string | number;
    height: string | number;
  };
  imageStyle: {
    borderRadius?: number;
  };
}

const AppLazyImage: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...props.style,
        borderRadius: props.imageStyle.borderRadius,
      }}
    >
      <ImageBackground {...props}>{props.children}</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1E4E8",
  },
});

export default AppLazyImage;

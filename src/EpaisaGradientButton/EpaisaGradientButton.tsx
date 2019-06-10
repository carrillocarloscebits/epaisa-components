import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextMontserrat from '../TextMontserrat/TextMontserrat';
export interface EpaisaGradientButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  colors: string[];
  radius?: number;
  fontSize?: number;
  height?: number;
  title?: string;
  width?: string | number;
  textColor?: string;
}

const EpaisaGradientButton = (props: EpaisaGradientButtonProps) => {
  let {
    disabled,
    onPress,
    height,
    colors,
    radius,
    fontSize,
    title,
    textColor,
    ...others
  } = props;
  height = height || 40;
  fontSize = fontSize || 16;
  const styles = {
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: radius || 0,
      elevation: 2,
    },
    buttonText: {
      fontSize: fontSize,
      // fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: textColor || '#ffffff',
      marginVertical: (height - fontSize) / 2,
      backgroundColor: 'transparent',
    },
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={disabled ? ['gray', 'gray'] : colors || ['#114B8C', '#0079AA']}
      style={styles.linearGradient}
    >
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
        activeOpacity={0.6}
        {...others}
      >
        <TextMontserrat style={styles.buttonText} weight={'500'}>
          {title}
        </TextMontserrat>
      </TouchableOpacity>
    </LinearGradient>
  );
};
// Later on in your styles..

// eslint-disable-next-line react/display-name
export default React.memo(EpaisaGradientButton);

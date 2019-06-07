import React, { useState, useEffect } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
export interface EpaisaSimpleInputProps extends TextInputProps {
  textColor?: string;
  IconLeft?: any;
  reset?: (func: Function) => void;
  label?: string;
  style?: any;
  iconAlwaysVisible?: boolean;
  onIconClick?: () => void;
  setValue?: (func: Function) => void;
  height?: number;
  textAlign?: string;
  hideUnderline?: boolean;
}

const EpaisaSimpleInput = (props: EpaisaSimpleInputProps) => {
  const {
    textColor,
    onFocus,
    onBlur,
    IconLeft,
    onChangeText,
    value,
    reset,
    label,
    style,
    iconAlwaysVisible,
    onIconClick,
    setValue,
    hideUnderline,
    ...others
  } = props;
  const [focus, setFocus] = useState(false);
  const [textValue, setTextValue] = useState(value || '');
  const [labelAnimation] = useState(new Animated.Value(0));
  // 1 for up, 0 for down
  useEffect(() => {
    labelAnimation.setValue(+(focus || textValue === ''));
  }, []);

  useEffect(() => {
    labelAnimation.setValue(+(focus || textValue === ''));
    if (reset) {
      reset(() => {
        setTextValue('');
      });
    }
    if (setValue) {
      setValue((value: string) => {
        setTextValue(value);
        labelAnimation.setValue(+(focus || textValue === ''));
        if (onChangeText) {
          onChangeText(value);
        }
      });
    }
  }, []);

  useEffect(
    () => {
      Animated.timing(labelAnimation, {
        toValue: +(focus || textValue !== ''),
        duration: 200,
        // easing: Easing.bounce
      }).start();
    },
    [focus]
  );

  // Animated Style
  const labelStyle = {
    position: 'absolute',
    // fontFamily: 'Montserrat-SemiBold',
    fontWeight: '400',
    left: (style || {}).paddingLeft || 0,
    // paddingLeft: style,
    top: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    }),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: '#6b6b6b',
  };
  const borderBottomWidth = hideUnderline ? 0 : 2;
  const height = props.height || 30;
  return (
    <View>
      {label && (
        <View style={{ height: 16 }}>
          <Animated.Text numberOfLines={1} style={[labelStyle]}>
            {label}
          </Animated.Text>
        </View>
      )}
      <View style={{ position: 'relative' }}>
        <TextInput
          {...others}
          style={[
            {
              color: textColor || '#333',
              fontWeight: '400',
              borderBottomColor: textColor,
              borderBottomWidth,
              height,
              paddingLeft: 0,
              paddingBottom: 2,
              paddingTop: 0,
            },
            style,
          ]}
          onChangeText={text => {
            if (onChangeText) {
              onChangeText(text);
            }
            setTextValue(text);
          }}
          onFocus={e => {
            if (onFocus) {
              onFocus(e);
            }
            setFocus(true);
          }}
          onBlur={e => {
            if (onBlur) {
              onBlur(e);
            }
            setFocus(false);
          }}
          value={textValue}
        />
        {iconAlwaysVisible && (
          <TouchableOpacity
            onPress={() => {
              if (onIconClick) {
                onIconClick();
              }
            }}
            style={{
              height: height - borderBottomWidth,
              width: height,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <IconLeft />
          </TouchableOpacity>
        )}
        {focus && (
          <View
            style={{
              height: height - borderBottomWidth,
              width: height,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setTextValue('');
                if (onIconClick) {
                  onIconClick();
                }
              }}
            >
              {IconLeft ? (
                <IconLeft />
              ) : (
                  <Image
                    source={require('./assets/icons/clear.png')}
                    style={{ width: height * 0.6, height: height * 0.6 }}
                  />
                )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default EpaisaSimpleInput;

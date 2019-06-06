import React from 'react';
import { Text, TextProps } from 'react-native';
interface PropTypes extends TextProps {
  weight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  children: any;
  style?: any;
}

const TextMontserrat = (props: PropTypes) => {
  let { style, children, weight } = props;
  style = style || { fontWeight: 'normal' };
  let appliedWeight;
  switch (weight || 'normal') {
    case 'normal':
      appliedWeight = 'Regular';
      break;
    case 'bold':
      appliedWeight = 'Bold';
      break;
    case '100':
      appliedWeight = 'Thin';
      break;
    case '200':
      appliedWeight = 'ExtraLight';
      break;
    case '300':
      appliedWeight = 'Light';
      break;
    case '400':
      appliedWeight = 'Regular';
      break;
    case '500':
      appliedWeight = 'Medium';
      break;
    case '600':
      appliedWeight = 'SemiBold';
      break;
    case '700':
      appliedWeight = 'Bold';
      break;
    case '800':
      appliedWeight = 'Bold';
      break;
    case '900':
      appliedWeight = 'Bold';
      break;
    default:
      appliedWeight = 'Regular';
      break;
  }

  // eslint-disable-next-line no-unused-vars
  const { fontWeight, ...customStyle } = style;

  const newTextStyle = {
    text: {
      ...customStyle,
      fontFamily: `Montserrat-${appliedWeight}`,
    },
  };

  return (
    <Text {...props} style={newTextStyle.text}>
      {children}
    </Text>
  );
};

export default TextMontserrat;

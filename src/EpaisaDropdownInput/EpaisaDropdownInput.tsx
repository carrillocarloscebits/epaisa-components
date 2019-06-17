import React, { useState } from 'react';
import {
  TextInputProps,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import EpaisaSimpleInput from '../EpaisaSimpleInput/EpaisaSimpleInput';
interface EpaisaDropdownInputProps extends TextInputProps {
  textColor?: string;
  IconLeft?: React.ComponentClass;
  label?: string;
  style: any;
  options: string[];
  height: number;
  onChangeText: any;
}

let changeValue: Function;
const EpaisaDropdownInput = (props: EpaisaDropdownInputProps) => {
  const { value, options, onChangeText, ...others } = props;
  const [v, setV] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownIcon = () => {
    return (
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Image
          style={{ width: 14, height: 8 }}
          source={require('./assets/dropdown.png')}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <EpaisaSimpleInput
        value={value}
        setValue={c => (changeValue = c)}
        onChangeText={onChangeText}
        editable={false}
        iconAlwaysVisible={true}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          fontWeight: 'bold',
          fontSize: 20,
        }}
        textAlign="center"
        IconLeft={dropdownIcon}
        {...others}
      />
      {showDropdown && (
        <View
          style={{
            backgroundColor: '#EEEEEE',
            width: '100%',
            position: 'absolute',
            top: 30,
            zIndex: 20,
            elevation: 2,
          }}
        >
          {(options || []).map((option, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                changeValue(option);
                setV(option);
                setShowDropdown(false);
              }}
              style={{
                width: '100%',
                height: 40,
                backgroundColor: v === option ? '#EEEEEE' : '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20 }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
export default EpaisaDropdownInput;

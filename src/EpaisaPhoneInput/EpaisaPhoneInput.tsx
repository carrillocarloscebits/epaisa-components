import React, { useState } from 'react';
import { TextInputProps, View, Image, TouchableOpacity } from 'react-native';
import EpaisaSimpleInput from './../EpaisaSimpleInput/EpaisaSimpleInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextMontserrat from './../TextMontserrat/TextMontserrat';
import CountryPicker from './components/CountryPicker/CountryPicker';
import flags from './api/flags';
type Country = {
  alpha2Code: string;
  callingCodes: string[];
  name: string;
};
export interface EpaisaPhoneInputProps extends TextInputProps {
  textColor?: string;
  IconLeft?: React.ComponentClass;
  label?: string;
  style?: any;
  height: number;
  fontSize: number;
  onChangeCountry?: (data: Country) => void;
  defaultCountry: Country;
  disabled: boolean;
}

let openModal = null;
let closeModal = null;
const EpaisaPhoneInput = (props: EpaisaPhoneInputProps) => {
  const {
    value,
    onChangeCountry,
    fontSize,
    defaultCountry,
    disabled,
    ...others
  } = props;
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    defaultCountry
  );
  return (
    <View
      style={{
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <EpaisaSimpleInput
        value={value}
        editable={false}
        iconAlwaysVisible={true}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          fontWeight: 'bold',
          fontSize: 20,
        }}
        textAlign="center"
        IconLeft={() => <View />}
        {...others}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
        disabled={disabled}
        onPress={() => openModal()}
      >
        <Image
          style={{ width: wp('7.4%'), height: hp('4%') }}
          source={flags[selectedCountry.alpha2Code]}
        />
        <View>
          <TextMontserrat
            weight={'bold'}
            style={{
              fontSize: fontSize,
              color: others.textColor,
              marginTop: hp('0.1%'),
            }}
          >
            +{selectedCountry.callingCodes[0]}
          </TextMontserrat>
        </View>
      </TouchableOpacity>

      <CountryPicker
        onSelect={data => {
          setSelectedCountry(data);
          if (onChangeCountry) {
            onChangeCountry(data);
          }
        }}
        value={selectedCountry}
        isTablet={false}
        openModal={ref => (openModal = ref)}
        closeModal={ref => (closeModal = ref)}
      />
    </View>
  );
};
export default EpaisaPhoneInput;
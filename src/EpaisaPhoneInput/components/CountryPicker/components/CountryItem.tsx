import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import flags from '../../../api/flags';
interface ICountryCode {
  selected?: boolean;
  callingCode: number | string;
  onPress: any;
  alpha2Code: string;
  name?: string;
}
const CountryItem = (props: ICountryCode) => {
  const { name, callingCode, selected, onPress, alpha2Code } = props;
  const renderCheckmark = (selected: boolean) => {
    if (selected) {
      return (
        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 25 }}>
          <Icon name={'check'} size={25} color={'#174285'} />
        </View>
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <Image
            source={flags[alpha2Code]}
            style={{
              width: 30,
              height: 25,
              marginRight: 15,
              marginVertical: 10,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              color: selected ? '#174285' : '#5d6770',
              fontSize: 16,
            }}
          >
            {name} (+{callingCode})
          </Text>
        </View>
        {renderCheckmark(selected)}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CountryItem;

import React, { Fragment, useState, useEffect } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  SectionList,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryItem from './components/CountryItem';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  letterIndexes as letterIndexesData,
  sections as sectionsdata,
} from '../../api/sections';
import { countries as countriesData } from '../../api/countries';
import { value } from 'react-native-extended-stylesheet';

interface ICountryPicker {
  isTablet: boolean;
  openModal?: Function;
  closeModal?: Function;
  onSelect?: (data: any) => void;
  value?: any;
}
const getItemLayout = sectionListGetItemLayout({
  // The height of the row with rowData at the given sectionIndex and rowIndex
  getItemHeight: () => 36,
  getSeparatorHeight: () => 12,
});
let flatListRef = null;
const CountryPicker = (props: ICountryPicker) => {
  const { modalContainer, modalHeader, modalHeaderText } = styles;
  const { isTablet, closeModal, openModal, onSelect, value } = props;

  const [visible, setVisible] = useState(false);
  const [searchStr, setSearchStr] = useState('');

  const [sections, setSections] = useState(sectionsdata);
  const [countries, setCountries] = useState(countriesData);
  const [dataToShow, setDataToShow] = useState(sectionsdata);
  const [letterIndexes, setLetterIndexes] = useState(letterIndexesData);

  useEffect(() => {
    openModal(() => {
      setVisible(true);
    });
    closeModal(() => {
      setVisible(false);
    });
  }, []);

  const getLettersArr = (data: any) => {
    const letters = [];

    for (let key in data) {
      letters.push(data[key]);
    }
    return letters;
  };

  const handleSearch = term => {
    let matchedItemsArray = [];
    if (term === '') {
      setSearchStr('');
      setDataToShow(sections);
    } else {
      countries.map(item => {
        if (item.name.toLowerCase().includes(term.toLowerCase())) {
          matchedItemsArray.push(item);
        }
      });
      setSearchStr(term);
      setDataToShow([
        {
          title: `Results for "${term}"`,
          data: matchedItemsArray,
        },
      ]);
    }
  };

  const [country, setCountry] = useState({
    callingCodes: value.callingCodes,
    name: value.name,
    alpha2Code: value.alpha2Code,
  });
  return (
    <Modal
      visible={visible}
      //swipe={150}
      //swipeDirection={'down'}
      //onSwipe={this._toggleModal}
      onRequestClose={() => setVisible(false)}
    >
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#174285' }} />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor:
              Platform.OS === 'ios' && isTablet ? 'rgba(0,0,0,0.4)' : '#52565F',
          }}
        >
          <View style={modalContainer}>
            <View style={modalHeader}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    marginVertical: width > 400 ? 25 : 15,
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={[
                      modalHeaderText,
                      isTablet
                        ? {
                            fontSize: wp('5.5%'),
                            width: '100%',
                            textAlign: 'center',
                          }
                        : {
                            fontSize: hp('3.7%'),
                            width: '100%',
                            textAlign: 'center',
                          },
                    ]}
                  >
                    Select Country/region code
                  </Text>
                  <TouchableOpacity
                    style={{
                      right: wp(isTablet ? '1%' : '4%'),
                      position: 'absolute',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => setVisible(false)}
                  >
                    <Icon
                      name={'close'}
                      size={width > 400 ? 30 : 24}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  width: '94%',
                  backgroundColor: 'white',
                  marginBottom: 25,
                  borderRadius: 12,
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name={'search'} size={25} color={'#174285'} />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <TextInput
                    placeholderTextColor={'#174285'}
                    placeholder="Search..."
                    style={{
                      fontSize: 20,
                      marginVertical:
                        Platform.OS == 'ios' && isTablet ? hp('1%') : 0,
                    }}
                    value={searchStr}
                    onChangeText={str => handleSearch(str)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSearchStr('');
                    setDataToShow(sections);
                  }}
                  style={{
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name={'close'} size={20} color={'#174285'} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 20,
                flex: 1,
                marginBottom: 48,
              }}
            >
              <CountryItem
                onPress={() => {}}
                selected={true}
                alpha2Code={country.alpha2Code}
                name={country.name}
                callingCode={country.callingCodes[0]}
              />
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <SectionList
                  keyboardShouldPersistTaps="handled"
                  ref={ref => (flatListRef = ref)}
                  sections={dataToShow}
                  keyExtractor={(item, index) => `${item.name}_${index}`}
                  getItemLayout={getItemLayout}
                  renderSectionHeader={({ section: { title } }) => (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#aaaaaa',
                      }}
                    >
                      {title}
                    </Text>
                  )}
                  renderItem={({
                    item,
                    item: { name, callingCodes, alpha2Code },
                  }) => (
                    <CountryItem
                      name={name}
                      alpha2Code={alpha2Code}
                      callingCode={callingCodes[0]}
                      onPress={() => {
                        // this._selectCountryCode(item)
                        setCountry({
                          alpha2Code: item.alpha2Code,
                          callingCodes: item.callingCodes,
                          name: item.name,
                        });
                        if (onSelect) {
                          onSelect({
                            alpha2Code: item.alpha2Code,
                            callingCodes: item.callingCodes,
                            name: item.name,
                          });
                        }
                        setVisible(false);
                        setDataToShow(sections);
                        // alert(JSON.stringify(item));
                      }}
                    />
                  )}
                  // getItemLayout={this.getItemLayout}
                />
                <ScrollView
                  style={{
                    position: 'absolute',
                    right: 0,
                    paddingHorizontal: 10,
                    width: 35,
                    flex: 1,
                    backgroundColor: 'white',
                  }}
                >
                  {getLettersArr(letterIndexes).map(({ letter, index }) => (
                    <TouchableWithoutFeedback
                      key={`letter_${letter}_${index}`}
                      onPress={() => {
                        flatListRef.scrollToLocation({
                          itemIndex: 0,
                          sectionIndex: index,
                        });
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#174285',
                        }}
                      >
                        {letter}
                      </Text>
                    </TouchableWithoutFeedback>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    </Modal>
  );
};

export default CountryPicker;
const width = Dimensions.get('window').width;
const styles = {
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalHeader: {
    width: '100%',
    backgroundColor: '#174285',
    alignItems: 'center',
    position: 'relative',
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: 'grey',
    shadowOpacity: 1,
  },
  modalCloseButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderText: {
    color: 'white',
    fontSize: width > 400 ? 24 : 18,
    fontWeight: 'bold',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

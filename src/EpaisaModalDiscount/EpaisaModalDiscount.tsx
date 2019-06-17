import React from 'react';
import EpaisaModalCard from './../EpaisaModalCard/EpaisaModalCard';
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EpaisaDropdownInput from './../EpaisaDropdownInput/EpaisaDropdownInput';
import EpaisaSimpleInput from './../EpaisaSimpleInput/EpaisaSimpleInput';
import EpaisaGradientButton from './../EpaisaGradientButton/EpaisaGradientButton';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextMontserrat from './../TextMontserrat/TextMontserrat';
export interface EpaisaModalDiscountProps {
  isTablet: boolean;
  openModal: any;
  closeModal: any;
  maxDiscount: number;
  addDiscount({ type: string, discount: number }): void;
}
const EpaisaModalDiscount = (props: EpaisaModalDiscountProps) => {
  const { isTablet, addDiscount, maxDiscount } = props;
  const openModal = open => {
    props.openModal(open);
  };
  const closeModal = close => {
    props.closeModal(close);
  };
  const dropdownOptions = ['%', '₹'];
  const errorColor = '#D0021B';
  return (
    <EpaisaModalCard
      width={isTablet ? wp('35') : wp('70')}
      headerTitle={'Discount'}
      open={openModal}
      close={closeModal}
      headerFontSize={isTablet ? hp('4') : wp('5.4')}
      headerHeight={isTablet ? hp('5.4') : hp('5.4')}
    >
      <View style={{ padding: isTablet ? hp('4') : hp('3.5') }}>
        <Formik
          initialValues={{
            type: dropdownOptions[0],
            discount: '',
          }}
          onSubmit={values => {
            addDiscount({
              type: values.type,
              discount: +values.discount,
            });
          }}
          validationSchema={yup.object().shape({
            type: yup.string().required(),
            discount: yup
              .number()
              .required()
              .when('type', {
                is: '%',
                then: yup.number().max(100),
                otherwise: yup.number().max(maxDiscount),
              }),
          })}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleSubmit,
            setFieldValue,
            setTouched,
          }) => {
            return (
              <View>
                <View
                  style={{ flexDirection: 'row', marginBottom: hp('0.2%') }}
                >
                  <View style={{ width: '30%' }}>
                    <EpaisaDropdownInput
                      height={isTablet ? hp('5.5') : hp('4.5')}
                      style={{ fontSize: isTablet ? hp('3.5') : wp('4.5') }}
                      textColor={
                        !isValid && touched.type ? errorColor : '#174285'
                      }
                      value={values.type}
                      options={dropdownOptions}
                      onChangeText={(val: string) => {
                        setFieldValue('type', val);
                        setTouched({ type: true, discount: true });
                      }}
                    />
                  </View>

                  <View style={{ width: '70%' }}>
                    <EpaisaSimpleInput
                      keyboardType="numeric"
                      autoFocus={true}
                      onIconClick={() => {
                        if (values.discount) {
                          setFieldValue('discount', '');
                        }
                      }}
                      height={isTablet ? hp('5.5') : hp('4.5')}
                      textColor={
                        !isValid && touched.discount ? errorColor : '#174285'
                      }
                      value={values.discount}
                      onChangeText={(val: string) => {
                        setFieldValue('discount', val);
                        setTouched({ type: true, discount: true });
                      }}
                      style={{
                        fontSize: isTablet ? hp('3') : wp('4.5'),
                        fontWeight: 'bold',
                        borderLeftColor:
                          !isValid && touched.discount ? errorColor : '#174285',
                        borderLeftWidth: 2,
                        paddingLeft: isTablet ? hp('4') : hp('3'),
                      }}
                    />
                  </View>
                </View>
                {errors.discount && (
                  <View
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <TextMontserrat
                      weight="900"
                      style={{
                        color: errorColor,
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: isTablet ? hp('2.0') : hp('1.50'),
                      }}
                    >
                      Enter a valid discount amount
                    </TextMontserrat>
                  </View>
                )}
                <View
                  style={{
                    marginTop: isTablet
                      ? hp('4') / (errors.discount ? 2.4 : 1)
                      : hp('3.5') / (errors.discount ? 2.4 : 1),
                    zIndex: -1,
                    paddingHorizontal: isTablet ? hp('2') : hp('2'),
                  }}
                >
                  <EpaisaGradientButton
                    disabled={!isValid}
                    radius={50}
                    onPress={handleSubmit}
                    colors={['#114B8C', '#0079AA']}
                    height={isTablet ? hp('6') : hp('6')}
                    fontSize={isTablet ? hp('3') : hp('2.5')}
                    title={'ADD'}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </EpaisaModalCard>
  );
};

export default EpaisaModalDiscount;

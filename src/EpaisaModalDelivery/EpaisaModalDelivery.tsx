import React from 'react';
import EpaisaModalCard from './../EpaisaModalCard/EpaisaModalCard';
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EpaisaSimpleInput from './../EpaisaSimpleInput/EpaisaSimpleInput';
import EpaisaGradientButton from './../EpaisaGradientButton/EpaisaGradientButton';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextMontserrat from './../TextMontserrat/TextMontserrat';
export interface EpaisaModalDeliveryProps {
  isTablet: boolean;
  openModal: any;
  closeModal: any;
  addDelivery({ delivery: number }): void;
}

const EpaisaModalDelivery = (props: EpaisaModalDeliveryProps) => {
  const { isTablet, addDelivery } = props;
  const openModal = open => {
    props.openModal(open);
  };
  const closeModal = close => {
    props.closeModal(close);
  };
  const errorColor = '#D0021B';
  return (
    <EpaisaModalCard
      width={isTablet ? wp('35') : wp('70')}
      headerTitle={'Delivery Charge'}
      open={openModal}
      close={closeModal}
      headerFontSize={isTablet ? hp('4') : wp('5.4')}
      headerHeight={isTablet ? hp('5.4') : hp('5.4')}
    >
      <View style={{ padding: isTablet ? hp('4') : hp('3.5') }}>
        <Formik
          initialValues={{
            delivery: '',
          }}
          onSubmit={values => {
            addDelivery({
              delivery: +values.delivery,
            });
          }}
          validationSchema={yup.object().shape({
            delivery: yup.number().required(),
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
                  <View style={{ width: '100%', position: 'relative' }}>
                    <TextMontserrat
                      weight="900"
                      style={{
                        color:
                          !isValid && touched.delivery ? errorColor : '#174285',
                        fontSize: isTablet ? hp('3') : wp('4.5'),
                        position: 'absolute',
                        left: isTablet ? hp('4') : hp('3'),
                        top: 1,
                      }}
                    >
                      ₹
                    </TextMontserrat>
                    <EpaisaSimpleInput
                      keyboardType="numeric"
                      autoFocus={true}
                      onIconClick={() => {
                        if (values.delivery) {
                          setFieldValue('delivery', '');
                        }
                      }}
                      height={isTablet ? hp('5.5') : hp('4.5')}
                      textColor={
                        !isValid && touched.delivery ? errorColor : '#174285'
                      }
                      value={values.delivery}
                      onChangeText={(val: string) => {
                        setFieldValue('delivery', val);
                        setTouched({ delivery: true });
                      }}
                      style={{
                        fontSize: isTablet ? hp('3') : wp('4.5'),
                        fontWeight: 'bold',
                        paddingLeft: isTablet ? hp('8') : hp('6'),
                      }}
                    />
                  </View>
                </View>
                {errors.delivery && (
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
                      Enter a valid delivery amount
                    </TextMontserrat>
                  </View>
                )}
                <View
                  style={{
                    marginTop: isTablet
                      ? hp('4') / (errors.delivery ? 2.4 : 1)
                      : hp('3.5') / (errors.delivery ? 2.4 : 1),
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

export default EpaisaModalDelivery;

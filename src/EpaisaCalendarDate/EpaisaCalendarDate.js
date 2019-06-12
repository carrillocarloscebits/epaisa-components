//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import TextMontserrat from './../TextMontserrat/TextMontserrat';
// create a component
class EpaisaCalendarDate extends Component {
  render() {
    const {
      active,
      closeModal,
      minDate,
      maxDate,
      dateSelected,
      onDayPress,
      handleCancel,
      handleOk,
      isTablet,
    } = this.props;
    return (
      <Modal
        visible={active}
        onRequestClose={closeModal}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={closeModal}
            style={styles.backgroundClose}
          />
          <View style={{ width: isTablet ? wp('45%') : wp('80%') }}>
            <Calendar
              cheque={true}
              current={dateSelected.format('YYYY-MM-DD')}
              minDate={minDate.format('YYYY-MM-DD')}
              maxDate={maxDate ? maxDate.format('YYYY-MM-DD') : null}
              markedDates={{
                [dateSelected.format('YYYY-MM-DD')]: {
                  selected: true,
                  selectedColor: '#174285',
                },
              }}
              onDayPress={day => {
                onDayPress(moment(day.dateString, 'YYYY-MM-DD'));
              }}
            />
            <View style={styles.footer}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleCancel}>
                  <TextMontserrat weight={'600'} style={styles.button}>CANCEL</TextMontserrat>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOk}>
                  <TextMontserrat weight={'600'} style={styles.button}>OK</TextMontserrat>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundClose: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  footer: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: hp('10%'),
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: isTablet ? hp('2%') : hp('3%'),
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: isTablet ? wp('2%') : wp('5%'),
  },
  button: {
    fontSize: isTablet ? hp('3.4%') : wp('4%'),
    color: '#174285',
    fontWeight: '600',
  },
});

//make this component available to the app
export default EpaisaCalendarDate;

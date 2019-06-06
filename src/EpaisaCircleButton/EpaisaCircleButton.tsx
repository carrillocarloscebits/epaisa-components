import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as epaisa_names from './api/epaisa_names';
const images = {
  [`${epaisa_names.RUPAY}`]: require(`./assets/icons/rupay.png`),
  [`${epaisa_names.RUPAY}_DISABLED`]: require(`./assets/icons/rupay_disabled.png`),

  [`${epaisa_names.MASTERCARD}`]: require(`./assets/icons/mastercard.png`),
  [`${epaisa_names.MASTERCARD}_DISABLED`]: require(`./assets/icons/mastercard_disabled.png`),

  [`${epaisa_names.MAESTRO}`]: require(`./assets/icons/maestro.png`),
  [`${epaisa_names.MAESTRO}_DISABLED`]: require(`./assets/icons/maestro_disabled.png`),

  [`${epaisa_names.DINERS}`]: require(`./assets/icons/diners.png`),
  [`${epaisa_names.DINERS}_DISABLED`]: require(`./assets/icons/diners_disabled.png`),

  [`${epaisa_names.VISA}`]: require(`./assets/icons/visa.png`),
  [`${epaisa_names.VISA}_DISABLED`]: require(`./assets/icons/visa_disabled.png`),

  [`${epaisa_names.DISCOVER}`]: require(`./assets/icons/discover.png`),
  [`${epaisa_names.DISCOVER}_DISABLED`]: require(`./assets/icons/discover_disabled.png`),

  [`${epaisa_names.FREECHARGE}`]: require(`./assets/icons/freecharge.png`),
  [`${epaisa_names.FREECHARGE}_MAIN`]: require('./assets/icons/freecharge_main.png'),
  [`${epaisa_names.FREECHARGE}_DISABLED`]: require(`./assets/icons/freecharge_disabled.png`),

  [`${epaisa_names.CITRUS}`]: require(`./assets/icons/citrus.png`),
  [`${epaisa_names.CITRUS}_MAIN`]: require('./assets/icons/citrus_main.png'),
  [`${epaisa_names.CITRUS}_DISABLED`]: require(`./assets/icons/citrus_disabled.png`),

  [`${epaisa_names.POCKETS}`]: require(`./assets/icons/pockets.png`),
  [`${epaisa_names.POCKETS}_MAIN`]: require('./assets/icons/pockets_main.png'),
  [`${epaisa_names.POCKETS}_DISABLED`]: require(`./assets/icons/pockets_disabled.png`),

  [`${epaisa_names.M_PESA}`]: require(`./assets/icons/mpesa.png`),
  [`${epaisa_names.M_PESA}_MAIN`]: require('./assets/icons/mpesa_main.png'),
  [`${epaisa_names.M_PESA}_DISABLED`]: require(`./assets/icons/mpesa_disabled.png`),

  [`${epaisa_names.OLA_MONEY}`]: require(`./assets/icons/olamoney.png`),
  [`${epaisa_names.OLA_MONEY}_MAIN`]: require('./assets/icons/olamoney_main.png'),
  [`${epaisa_names.OLA_MONEY}_DISABLED`]: require(`./assets/icons/olamoney_disabled.png`),

  [`${epaisa_names.MOBIKWIK}`]: require(`./assets/icons/mobikwik.png`),
  [`${epaisa_names.MOBIKWIK}_MAIN`]: require('./assets/icons/mobikwik_main.png'),
  [`${epaisa_names.MOBIKWIK}_DISABLED`]: require(`./assets/icons/mobikwik_disabled.png`),

  [`${epaisa_names.SPLIT}`]: require(`./assets/icons/split.png`),
  [`${epaisa_names.SPLIT}_MAIN`]: require('./assets/icons/split_main.png'),
  [`${epaisa_names.SPLIT}_DISABLED`]: require(`./assets/icons/split_disabled.png`),

  [`${epaisa_names.AADHAARPAY}`]: require(`./assets/icons/aadhaarpay.png`),
  [`${epaisa_names.AADHAARPAY}_MAIN`]: require('./assets/icons/aadhaarpay_main.png'),
  [`${epaisa_names.AADHAARPAY}_DISABLED`]: require(`./assets/icons/aadhaarpay_disabled.png`),

  [`${epaisa_names.CHEQUE}`]: require(`./assets/icons/cheque.png`),
  [`${epaisa_names.CHEQUE}_MAIN`]: require('./assets/icons/cheque_main.png'),
  [`${epaisa_names.CHEQUE}_DISABLED`]: require(`./assets/icons/cheque_disabled.png`),

  [`${epaisa_names.WALLETS}`]: require(`./assets/icons/wallets.png`),
  [`${epaisa_names.WALLETS}_MAIN`]: require('./assets/icons/wallets_main.png'),
  [`${epaisa_names.WALLETS}_DISABLED`]: require(`./assets/icons/wallets_disabled.png`),

  [`${epaisa_names.UPI}`]: require('./assets/icons/upi.png'),
  [`${epaisa_names.UPI}_MAIN`]: require('./assets/icons/upi_main.png'),
  [`${epaisa_names.UPI}_DISABLED`]: require(`./assets/icons/upi_disabled.png`),

  [`${epaisa_names.UPI_QR}`]: require(`./assets/icons/upiqr.png`),
  [`${epaisa_names.UPI_QR}_MAIN`]: require('./assets/icons/upiqr_main.png'),
  [`${epaisa_names.UPI_QR}_DISABLED`]: require(`./assets/icons/upiqr_disabled.png`),

  [`${epaisa_names.OTHERS}`]: require(`./assets/icons/others.png`),
  [`${epaisa_names.OTHERS}_DISABLED`]: require(`./assets/icons/others_disabled.png`),

  [`${epaisa_names.EMI}`]: require(`./assets/icons/emi.png`),
  [`${epaisa_names.EMI}_DISABLED`]: require(`./assets/icons/emi_disabled.png`),

  [`${epaisa_names.EMI_PAYMENTS}`]: require(`./assets/icons/emi.png`),
  [`${epaisa_names.EMI_PAYMENTS}_MAIN`]: require('./assets/icons/emi_main.png'),
  [`${epaisa_names.EMI_PAYMENTS}_DISABLED`]: require(`./assets/icons/emi_disabled.png`),

  [`${epaisa_names.CASH}`]: require(`./assets/icons/cash.png`),
  [`${epaisa_names.CASH}_MAIN`]: require('./assets/icons/cash_main.png'),
  [`${epaisa_names.CASH}_DISABLED`]: require(`./assets/icons/cash_disabled.png`),

  [`${epaisa_names.TENDERING}`]: require(`./assets/icons/tendering.png`),
  [`${epaisa_names.TENDERING}_DISABLED`]: require(`./assets/icons/tendering_disabled.png`),

  [`${epaisa_names.CARD}`]: require(`./assets/icons/card.png`),
  [`${epaisa_names.CARD}_MAIN`]: require('./assets/icons/card_main.png'),
  [`${epaisa_names.CARD}_DISABLED`]: require(`./assets/icons/card_disabled.png`),

  [`${epaisa_names.CASH_POS}`]: require(`./assets/icons/cashpos_disabled.png`),
  [`${epaisa_names.CASH_POS}_DISABLED`]: require(`./assets/icons/cashpos.png`),

  [`${epaisa_names.UPI_PAYMENTS}`]: require(`./assets/icons/upi_payments.png`),
  [`${epaisa_names.UPI_PAYMENTS}_MAIN`]: require('./assets/icons/upi_payments_main.png'),
  [`${epaisa_names.UPI_PAYMENTS}_DISABLED`]: require(`./assets/icons/upi_payments_disabled.png`),

};

interface PropTypes extends TouchableOpacityProps {
  size?: number
  loading?: boolean
  disabled?: boolean
  onPress?(): void
  main: boolean
  selected: boolean
  iconName:
  'MasterCard' |
  'Maestro' |
  'DinersClub' |
  'Visa' |
  'Discover' |
  'Rupay' |
  'Mobikwik' |
  'm-Pesa' |
  'OLAMoney' |
  'Pockets' |
  'Citrus' |
  'Freecharge' |
  'UPIQR' |
  'UPI' |
  'Tendering' |
  'Cheque' |
  'Split' |
  'AadhaarPay' |
  'OtherPayments' |
  'UpiPayments' |
  'DigitalWalletPayments' |
  'EmiPayments' |
  'EMI' |
  'CashPayments' |
  'CashPosPayments' |
  'CardPayments'
}
const EpaisaPaymentButton = (props: PropTypes) => {
  const { disabled, loading, onPress, size, iconName, main, selected, ...others } = props;
  const name = `${iconName}${disabled || loading ? '_DISABLED' : ''}${!selected && !(disabled || loading) ? '_MAIN' : ''}`.toString()
  return (
    <TouchableOpacity
      // disabled={(DISABLED && this.props.container) || this.props.loading}
      disabled={disabled || loading}
      onPress={() => {
        if (onPress) {
          onPress()
        }
      }}
      activeOpacity={0.6}
      {...others}
    >
      <Image
        style={{
          width: size || 60,
          height: size || 60,
        }}
        resizeMode="contain"
        source={images[name]}
      />
    </TouchableOpacity>
  )
}
export default EpaisaPaymentButton;
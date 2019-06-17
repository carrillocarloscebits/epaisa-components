// Type definitions for epaisa-components
// Project: https://github.com/carrillocarloscebits/epaisa-components
// Definitions by: Carlos E Carrillo 
// TypeScript Version: 3.5.1

import * as React from "react";
import { ViewStyle, TextStyle, TextProps } from "react-native";

import { TextMontserratProps } from "../src/TextMontserrat/TextMontserrat";
import { EpaisaGradientButtonProps } from "../src/EpaisaGradientButton/EpaisaGradientButton";
import { EpaisaCircleButtonProps } from "../src/EpaisaCircleButton/EpaisaCircleButton";
import { EpaisaSimpleInputProps } from "../src/EpaisaSimpleInput/EpaisaSimpleInput";
import { EpaisaOutlineButtonProps } from "../src/EpaisaOutlineButton/EpaisaOutlineButton";
import { EpaisaPhoneInputProps } from "../src/EpaisaPhoneInput/EpaisaPhoneInput";
import { EpaisaModalDiscountProps } from "../src/EpaisaModalDiscount/EpaisaModalDiscount";
import { EpaisaModalDeliveryProps } from "../src/EpaisaModalDelivery/EpaisaModalDelivery";
import { EpaisaModalCardProps } from "../src/EpaisaModalCard/EpaisaModalCard";
import { EpaisaDropdownInputProps } from "../src/EpaisaDropdownInput/EpaisaDropdownInput";
interface EpaisaOtpInputsProps {
    cleanErrors: Function;
    borderColors: string;
    ref: Function;
    invalid: boolean
    data: string[];
    onChangeText(otp: number): void;
    onComplete(otp: number): void;
}

interface EpaisaCalendarDateProps {
    cheque: boolean;
    current: string;
    minDate: string | null;
    maxDate: string | null;
    markedDates: {
        [key: string]: {
            selected: boolean,
            selectedColor: string,
        },
    }
    onDayPress: Function;
}
export declare const TextMontserrat: React.SFC<TextMontserratProps>
export declare const EpaisaGradientButton: React.SFC<EpaisaGradientButtonProps>
export declare const EpaisaCircleButton: React.SFC<EpaisaCircleButtonProps>
export declare const EpaisaSimpleInput: React.SFC<EpaisaSimpleInputProps>
export declare const EpaisaOutlineButton: React.SFC<EpaisaOutlineButtonProps>
export declare const EpaisaPhoneInput: React.SFC<EpaisaPhoneInputProps>
export declare const EpaisaOtpInputs: React.SFC<EpaisaOtpInputsProps>
export declare const EpaisaCalendarDate: React.SFC<EpaisaCalendarDateProps>
export declare const EpaisaModalDelivery: React.SFC<EpaisaModalDeliveryProps>
export declare const EpaisaModalDiscount: React.SFC<EpaisaModalDiscountProps>
export declare const EpaisaModalCard: React.SFC<EpaisaModalCardProps>
export declare const EpaisaDropdownInput: React.SFC<EpaisaDropdownInputProps>
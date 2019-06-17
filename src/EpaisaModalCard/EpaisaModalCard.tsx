import React, { useState, useEffect } from 'react';
import { Modal, ModalProps, View, TouchableOpacity, Image } from 'react-native';
import TextMontserrat from './../TextMontserrat/TextMontserrat';
export interface EpaisaModalCardProps extends ModalProps {
  children: React.Component | any;
  headerTitle?: string;
  onClose?: () => void;
  close?: (func: Function) => void;
  open?: (func: Function) => void;
  width?: 'string' | number;
  headerFontSize: number;
  headerHeight: number | string;
}

const EpaisaModalCard = (props: EpaisaModalCardProps) => {
  let {
    children,
    headerTitle,
    onClose,
    width,
    close,
    open,
    headerFontSize,
    headerHeight,
  } = props;
  const [visible, setVisible] = useState(false);

  headerFontSize = headerFontSize || 24;
  headerHeight = headerHeight || 40;
  const onRequestClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  const onRequestOpen = () => {
    setVisible(true);
    // if (onClose) {
    //   onClose();
    // }
  };
  useEffect(() => {
    if (close) {
      close(onRequestClose);
    }
    if (open) {
      open(onRequestOpen);
    }
  }, []);

  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      onRequestClose={onRequestClose}
      visible={visible}
    >
      <TouchableOpacity
        onPress={onRequestClose}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View
        style={{
          top: 0,
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            width: width || '70%',
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={onRequestClose}
            style={{
              zIndex: 10,
              position: 'absolute',
              right: 0,
              top: 0,
              paddingVertical: 12,
              paddingHorizontal: 12,
            }}
          >
            <Image
              style={{
                width: headerFontSize * 0.75,
                height: headerFontSize * 0.75,
              }}
              source={require('./assets/close.png')}
            />
          </TouchableOpacity>
          {/* Header */}
          {headerTitle && (
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#979797',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <TextMontserrat
                style={{
                  marginVertical: (+headerHeight - headerFontSize) / 2,
                  fontSize: headerFontSize,
                  color: '#47525D',
                }}
                weight={'800'}
              >
                {headerTitle}
              </TextMontserrat>
            </View>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default EpaisaModalCard;

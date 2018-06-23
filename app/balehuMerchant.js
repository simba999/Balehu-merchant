import MainStack from './navigators/mainstack';
import React from 'react';
import {StatusBar, View} from 'react-native';
import styled, {ThemeProvider} from "styled-components/native";
import Theme from '../theme';

export default function balehuMerchant()
{
  return (
    <View style={{flex:1}}>
      <StatusBar
        backgroundColor="rgba(12,52,61,1)"
        barStyle="light-content"
        />
        <ThemeProvider theme={Theme}>
        <MainStack/>
        </ThemeProvider>
    </View>
    )
}

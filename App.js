import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "wheat",
  },
  blueView: {
    flex: 3,
    backgroundColor: "mintcream",
  },
});

/* 0
expo init rn_weather_app으로 시작
npm start로 테스트
Expo Go어플에서 QR code를 찍어서 테스트
expo cli 설치해야함
*/

/* #0.5
css stylesheet적용하려면 const styles에 관련객체추가
css랑 유사하나 완전히 같지 않음
부모의 요소 상속하지않음
요소 옆에 style={style.객체이름}를적어야함
*/

/* #1.0
  flexDirection은 기본적으로 Column
  flex옵션으로 비율조절
  backgroundColor로 배경색조절
  flex박스 권장
  flex는 자리경쟁, 큰 비율일 수록 큰자리 차지
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Loader";
import * as Location from "expo-location";
import { render } from "react-dom";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "89d78baaa49d2a47daab6636fedde4c7";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch {
      Alert.alert("Can't find you.", "So sad");
    }

    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loader></Loader>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

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
*

/* #1.0
  flexDirection은 기본적으로 Column
  flex옵션으로 비율조절
  backgroundColor로 배경색조절
  flex박스 권장
  flex는 자리경쟁, 큰 비율일 수록 큰자리 차지
*/

/* #1.1
import {StyleSheet, Text, View} from "react-native";
*/

/*
API 기능들 expo공홈에서 가져다 써라
*/

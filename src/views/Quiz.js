import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import quizStyle from '../assets/css/quizStyle';

export default Quiz = () => {
  let isDarkMode = useDarkMode();

  const [darkMode, setDarkMode] = useState(false);

  const _setDarkMode = async () => {
    setDarkMode(Boolean(await AsyncStorage.getItem('darkMode')))
  };

  _setDarkMode();

  Platform.OS !== 'android' ? (isDarkMode = darkMode) : false;

  return (
    <View style={isDarkMode ? quizStyle.containerDark : quizStyle.container}>
      <View style={quizStyle.buttonContainer}>
        <TouchableOpacity
          style={isDarkMode ? quizStyle.buttonDark : quizStyle.button}>
          <View style={quizStyle.buttonImageContainer}>
            <Image
              style={quizStyle.buttonImage}
              source={require('../assets/img/ujian.png')}
            />
          </View>
          <View style={quizStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? quizStyle.buttonTextDark : quizStyle.buttonText
              }>
              Ujian
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode ? quizStyle.buttonDark : quizStyle.button}>
          <View style={quizStyle.buttonImageContainer}>
            <Image
              style={quizStyle.buttonImage}
              source={require('../assets/img/latihan.png')}
            />
          </View>
          <View style={quizStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? quizStyle.buttonTextDark : quizStyle.buttonText
              }>
              Latihan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Onboarding from 'react-native-onboarding-swiper';

import logoEstudy from '../../assets/images/logo1.png';
import logoGive from '../../assets/images/logo2.png';
import nextIcon from '../../assets/images/icons/next.png';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 20
            }}
        />
    );
}


const Next = ({...props}) => (
    <RectButton {...props}>
        <Image style={styles.nextIcon} source={nextIcon} />
    </RectButton>
);

const Done = ({...props}) => (
    <RectButton {...props}>
        <Image style={styles.nextIcon} source={nextIcon} />
    </RectButton>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
          titleStyles={styles.title}
          subTitleStyles={styles.subtitle}
          showSkip={false}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          DotComponent={Dots}
          onDone={() => navigation.replace("Landing")}
          pages={[
            {
              backgroundColor: '#8257E5',
              image: <Image style={styles.imgBack} source={logoEstudy} />,
              title: '01.',
              subtitle: 'Encontre vários \n professores para \n ensinar você',
            },
            {
              backgroundColor: '#24824E',
              image: <Image style={styles.imgBack} source={logoGive} />,
              title: '02.',
              subtitle: 'Ou dê aulas \n sobre o que você\n mais conhece',
            }
        ]}
      />
     );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title:{
    fontSize: 40,
    color: '#DBD9E4',
    justifyContent: "flex-start",
  },
  subtitle:{
    fontSize: 24
  },
  nextIcon: {
    maxWidth: 50,
    marginRight: 20
  },
  imgBack: {
    width: '100%',
    resizeMode: 'contain',
  }
});
import React, { useEffect, useState } from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './style';

import landingImg from '../../assets/images/landing.png';
import stydyIcon from  '../../assets/images/icons/study.png';
import giveclassIcon from  '../../assets/images/icons/give-classes.png';
import HeartIcon from  '../../assets/images/icons/heart.png';

function Landing(){
    const { navigate } = useNavigation();
    
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }
    
    function handleNavigateToGiveStudyPages(){
        navigate('Study');
    }   

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}> o que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToGiveStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={stydyIcon} />

                    <Text style={styles.buttonText}> Estudar </Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecundary]}>
                    <Image source={giveclassIcon} />

                    <Text style={styles.buttonText}> Dar aulas </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={HeartIcon} />
            </Text>

        </View>
    )
}

export default Landing;
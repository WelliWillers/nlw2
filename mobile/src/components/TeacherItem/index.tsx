import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoritIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './style';

export interface Teacher {
    "id": number,
    "avatar": string,
    "bio": string,
    "cost": number,
    "name": string,
    "subject": string,
    "whatsapp": string
};

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {

    const [isFavorited, setIsFavorited] = useState(favorited);

    function handlerLinkWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handlerToggleFavorited(){
        
        const favorites = await AsyncStorage.getItem('favorites');
        
        let favoritesArray = [];

        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorited){
            const favoritIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoritIndex, 1);
            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar}} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}> {teacher.bio}  </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Pre??o/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={handlerToggleFavorited}
                        style={[
                            styles.favoriteButton, 
                            isFavorited ? styles.favorited : {}
                        ]}>
                        { isFavorited 
                            ? <Image source={unfavoritIcon} /> 
                            : <Image source={heartOutlineIcon} /> 
                        }                    
                    </RectButton>
                    <RectButton onPress={handlerLinkWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
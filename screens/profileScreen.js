import React from 'react';
import { FlatList, YellowBox, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, SimpleLineIcons } from '@expo/vector-icons'; 
import Hr from '../components/hr';
import ProfileLabels from '../components/pefileLabels';
import { Images } from '../global/Images';
import { Layout } from '../global/Layout';
import { Colors } from '../global/Colors';

const INSTA_PHOTOS = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        profilePic: "https://i.pinimg.com/originals/c1/6a/19/c16a197f01ff36a7cad65a5e6ed1cb53.jpg"
    },
    {
        id: "bd7acea-c1b1-46c2-aed5-3ad53abb28ba",
        profilePic: "https://i.pinimg.com/originals/4d/26/63/4d26639142569afbe67753e4fbfe1f67.jpg"
    },
    {
        id: "bd7acbea-cb1-46c2-aed5-3ad53abb28ba",
        profilePic: "https://www.delhi-magazine.com/wp-content/uploads/2020/05/Penelope-Cruz-most-beautiful-hollywood-celebrity-in-2020-1-e1589313367307.jpg"
    },
    {
        id: "bd7acbea-c1b1-46c2-ed5-3ad53abb28ba",
        profilePic: "https://i.pinimg.com/originals/1f/46/e4/1f46e4ec7e076eeeae78854f7b4a4c14.jpg"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3d53abb28ba",
        profilePic: "https://i.pinimg.com/564x/9f/92/7a/9f927af0f8cde5d139899864e2350a7b.jpg"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2ba",
        profilePic: "https://i.pinimg.com/originals/cf/d8/14/cfd8145834892690fbe2335050e3d17d.jpg"
    }
];

export default function ProfileScreen({ navigation }) {

    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ])

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.instaPhotoContainer}>
                <Image source={{uri: item.profilePic}} style={styles.instaPics}/>
            </TouchableOpacity>
        )
    }

    const CoverPhoto = (
        <View style={{height: 150}}> 
            <Image
                style={styles.userPicture}
                source={{
                uri: 'https://img.wallpapersafari.com/desktop/1440/900/21/27/CvlnLY.jpg',
                }}
            />
        </View>
    )

    const ProfileDetails = (
        <View>
            <Text style={styles.heading}>Anna, 19</Text>
            <ProfileLabels 
                icon={<Entypo name="graduation-cap" size={Layout.IconSize.medium} color={Colors.DoveGrey} />}
                labelText={"University of San Francisco"}
            />
            <ProfileLabels 
                icon={<SimpleLineIcons name="location-pin" size={Layout.IconSize.medium} color={Colors.DoveGrey} />}
                labelText={"1 mile away"}
            />
            <Hr />
            <Text style={styles.heading3}>{"Moved from East Coast &  just want to meet some new people"}</Text>
            <Hr />
        </View>
    )

    const InstaPictures = (
        <View>
            <View style={styles.instaContainer}>
                <Text style={styles.heading2}>Recent Instagram Photos</Text>
                <View style={styles.carousalDotContainer}>
                    <FontAwesome name="circle" size={Layout.IconSize.small} color={Colors.Mandy} />
                    <FontAwesome name="circle" size={Layout.IconSize.small} color={Colors.Mercury} />
                </View>
            </View>
            <FlatList
                data={INSTA_PHOTOS}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )

    const Footer = (
        <View style={styles.footerContainer}>
            <View style={styles.footerIconContainer}>
                <Image source={Images.cross} style={styles.crossIcon}/>
            </View>
            <View style={[styles.footerIconContainer, styles.starIconContainer]}>
                <Image source={Images.star} style={styles.starIcon}/>
            </View>
            <View style={styles.footerIconContainer}>
                <Image source={Images.heart} style={styles.heartIcon}/>
            </View>
        </View>
    )



    


    return(
        <ScrollView style={styles.container}> 
            {CoverPhoto}
            {ProfileDetails}
            {InstaPictures}
            {Footer}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Alabaster,
    },
    userPicture: {
        height: "100%",
        width: "100%"
    },
    footerContainer: {
        flexDirection: "row", 
        justifyContent: "center"
    },
    footerIconContainer: {
        width: 100, 
        height: 100, 
        padding: 20, 
        margin: 10, 
        borderRadius: 50, 
        backgroundColor: "#fff", 
        justifyContent: "center", 
        alignItems: "center"
    },
    starIconContainer: {
        width: 70, 
        height: 70, 
        borderRadius: 35
    },
    crossIcon: {
        height: 40, width: 40
    },
    starIcon: {
        height: 35, width: 35
    },
    heartIcon: {
        height: 50, width: 50
    },
    carousalDotContainer: {
        flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10
    },
    instaPhotoContainer: {
        padding: 10, width: `${100/3}%`, height: 120
    },
    instaPics: {
        flex:1, borderRadius: 12
    },
    heading: {
        fontSize: 28, paddingLeft: 15, paddingVertical: 10
    },
    heading2: {
        fontSize: 24, paddingLeft: 15, paddingVertical: 10
    },
    heading3: {
        padding: 15, fontSize: 14
    },
    instaContainer: {
        flexDirection: "row", justifyContent: "space-between"
    }
  });
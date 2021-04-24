/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   Button,
   StyleSheet,

   Image,
 
   View,
 } from 'react-native';
 
 

 
 const PhotoPage = ({route,navigation}) => {
    const { path } = route.params;
    const handleBack = () => {

        navigation.navigate('Camerapage',{
            'g':'g'
        })
      }
   return (
     <View style={StyleSheet.absoluteFill}>
         <Image source={{uri: "file://" + path}} style={StyleSheet.absoluteFill} resizeMode="cover" />
         <Button title="back"   onPress={handleBack} />
   </View>
   );
 };
 
 
 export default PhotoPage;
 
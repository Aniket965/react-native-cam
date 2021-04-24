/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useRef,useEffect, useState} from 'react';

 import {
   Button,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 
 import { Camera, useCameraDevices } from 'react-native-vision-camera'
 import { useFocusEffect } from '@react-navigation/native';
import { useIsForeground } from './useIsForeground';


 
 const CameraPage = ( { componentId , navigation}) => {
 
   const camera = useRef<Camera>(null)
   const devices = useCameraDevices()
   const isForeground = useIsForeground();


   const [isActive,setIsActive] = useState(false)
   const device = devices.back

   useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

        setIsActive(true);
      return () => {
        // Do something when the screen is unfocused

        setIsActive(false);
      };
    }, [])
  );

 


   const handleClick = async () => {
     const photo = await camera.current.takePhoto({    
     })
     navigation.navigate('photopage',{
         path:photo.path
      })
   }
 
   if (device == null) return <View><Text>Loading...</Text></View>;
   return (
     <View style={StyleSheet.absoluteFill}>
         <Camera
          ref={camera}
           style={StyleSheet.absoluteFill}
           device={device}
           isActive={isActive && isForeground}
         />
      
       <Button title="click"   onPress={handleClick} />
    
   </View>
   );
 };
 
 
 export default CameraPage;
 
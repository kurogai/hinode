import { Home } from './Home';
import { Launch } from './Launch';
import { Downloads } from './Downloads';
import { Gallery } from './Gallery';
import { Definitions } from './Definitions';
import Swiper from 'react-native-swiper';
import BottonNav from '../components/BottonNav';
import { useRef, useState } from 'react';
export const _Index = (props)=>{
    const swiper = useRef(null);
    const [_swiper,_setSwiper] = useState(0);

    return (
    <>
      <Swiper ref={swiper => {
          _setSwiper(swiper);
      }} loop={false} showsPagination={false} index={2}>
        <Launch navigator={props.navigation}/>
        <Gallery navigator={props.navigation}/>
        <Home navigator={props.navigation}/>
        <Downloads navigator={props.navigation}/>
        <Definitions navigator={props.navigation}/>
      </Swiper>
      <BottonNav swiper={_swiper}/>
    </>
    );
}
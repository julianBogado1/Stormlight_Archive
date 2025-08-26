import React, { useContext } from 'react';
import {TopBar} from './TopBar';
import { Background } from './Background';
import '../styles/Landing.css';
import { PropsContext } from '../App';


export const Landing  = ()=> {
const props = useContext(PropsContext);;
    return (
        <>
            <TopBar banner={props.banner} buttonString={props.buttonString} />
            <Background />
        </>
    );
}
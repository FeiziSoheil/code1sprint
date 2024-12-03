import React from 'react';
import Header from '../../Components/Header/Header';
import Skills from '../../Components/Skills/Skills';
import Plan from '../../Components/Plan/Plan';
import Slider from '../../Components/ExpWork/ExpWork';
import MoreQuiz from "../../Components/MoreQueiz/MoreQueiz";


export default function Home() {
    return (
        <>
            <Header />
            <Skills />
            <Plan/>
            <Slider />
            <MoreQuiz/>
        </>
    );
}

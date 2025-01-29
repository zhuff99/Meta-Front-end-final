import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PizzaM from '../../../assets/food/PizzaMargherita.jpg';
import Risotto from '../../../assets/food/RisottoallaMilanese.jpg';
import Tiramisu from '../../../assets/food/Tiramisu.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={PizzaM} name="Greek Salad" price="$15.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Risotto}name="Bruschetta" price="$14.99" description="Bread, mango, green onions"/>
            <SpecialCard image={Tiramisu} name="Lemon Dessert" price="$6.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}
import Carousel from './SpecialsCarousel';
import PizzaM from '../../../assets/food/PizzaMargherita.jpg';
import Risotto from '../../../assets/food/RisottoallaMilanese.jpg';
import Tiramisu from '../../../assets/food/Tiramisu.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1 className="text-center text-4xl font-bold">This week's specials</h1>
            </article>

            <section className="specials-cards">
                <SpecialCard image={PizzaM} name="Pizza Margherita" price="$15.99" description="Classic Neapolitan pizza with fresh tomatoes, mozzarella, basil, and olive oil. Our most popular Dish."/>
                <SpecialCard image={Risotto} name="Risotto Milanese" price="$16.99" description="Creamy rice dish cooked with saffron and Parmesan cheese. Topped with salt and olive oil."/>
                <SpecialCard image={Tiramisu} name="Tiramisu" price="$8.50" description="Layers of coffee-soaked ladyfingers, mascarpone cheese, cocoa powder, and a hint of espresso."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}

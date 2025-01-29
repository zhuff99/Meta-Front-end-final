import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
    
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>
    
            <section className="testimonials-cards">
                <TestimonialCard name="Sophia Martinez" description="Little Lemon's food transported me straight to the Mediterranean! The flavors were incredible." />
                <TestimonialCard name="Liam O'Connor" description="From the cozy atmosphere to the outstanding dishes, this place is a gem! We loved it!" />
                <TestimonialCard name="Emily Zhang" description="I could taste the freshness in every bite. Easily one of my favorite dining spots now." />
                <TestimonialCard name="Noah Patel" description="Such a warm and welcoming place. Their hummus and pita were out of this world! I can't wait to go back!" />
                <TestimonialCard name="Olivia Davis" description="Perfect spot for a dinner date. The ambiance and the food were equally amazing." />
                <TestimonialCard name="Ethan Wilson" description="I stopped by after work, and it was exactly what I needed. Highly recommend the falafel!" />
                <TestimonialCard name="Isabella Garcia" description="I’ve never had baklava like this before—so crispy and perfectly sweet." />
                <TestimonialCard name="Benjamin Lee" description="The service was top-notch, and the flavors in the lamb kebabs were unforgettable." />
            </section>
    
            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}
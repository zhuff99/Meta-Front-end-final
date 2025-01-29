import Sun from '../../../../assets/hamburger.png';
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Sun} className="icon" alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}
export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon is a quaint, family-owned restaurant nestled in the heart of Chicago's vibrant West Loop. Known for its cozy ambiance, the eatery features soft lemon-yellow walls adorned with local artwork. The menu boasts a fresh, Mediterranean-inspired cuisine with a special focus on lemon-infused dishes, from zesty lemon chicken to refreshing lemon sorbet. The intimate setting, combined with the warm, welcoming service, makes Little Lemon a hidden gem for both locals and visitors seeking a taste of Chicago with a citrus twist.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}
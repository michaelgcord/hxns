import photo from "../assets/about.jpg"
import NavMenu from "../components/NavMenu"

const About = () => {
    return (
        <div className="main-container">
            <NavMenu />
            <div className="about">
                <img src={photo} alt="" width={500} style={{margin: '30px 0 40px'}}/>
                <div style={{textAlign: 'center'}}>
                    Professional button-presser, dilly-dallier, and life-lover.
                </div>
            </div>
        </div>
    )
}

export default About
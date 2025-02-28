import photo from "../assets/about.jpg"
import NavMenu from "../components/NavMenu"

const About = () => {
    return (
        <div className="main-container">
            <NavMenu />
            <div className="about">
                <img src={photo} alt="" width={500} style={{margin: '30px 0 40px'}}/>
                <div style={{textAlign: 'center'}}>
                    I was born on October 8, 1996 in San Fernnando City, La Union, Philippines. My parents came to America when I was 6 months old. Little did they know they’d be importing over one of the most brilliant and eclectic minds to come out of the Year of the Rat. For over a decade, I’ve been making music under the moninker HXNS. Although I’ve found much success in the music industry, I’ve always felt the urge to dip my little toes into different sects of the arts: photography, film, you name it. I’ve come to realize that I am a creator at heart – I just need to make something, anything... I have to scratch that itch in my brain. The medium is just that – the medium. It’s all me. It’s always been me. True, beautiful, real. I am eternal.
                </div>
            </div>
        </div>
    )
}

export default About
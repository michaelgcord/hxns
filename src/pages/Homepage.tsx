import photo from "../assets/homepage.jpg"
import { Link } from "react-router-dom"

const Homepage = () => {
    const quotes = [
        "Like a drake and josh theme song... I found a way. ",
        "Bad b****es love Hans. ",
        "Jajabooboo. ",
    ]

    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="homepage-title unselectable">
                <span className="title">
                {quotes.map((element, index) => {
                    return (
                        <span key={index} className='pre'>{element}</span>
                    )
                })}
                </span>
                <span className="title">
                {quotes.map((element, index) => {
                    return (
                        <span key={index} className='pre'>{element}</span>
                    )
                })}
                </span>                
            </div>
            <img src={photo} alt="" height={500} style={{padding: "80px 0"}}/>
            <div className="homepage-sub-header">
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/timeline">TIMELINE</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/discography">DISCOGRAPHY</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/experiences">EXPERIENCES</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/syncs-ads">SYNCS/ADS</Link>
                </div>
            </div>                
        </div>
    )
}

export default Homepage

/*
import { Link } from 'react-router-dom'
import Collage from './Collage'
import photo from '../../assets/images/4.png'

const Homepage = () => {
    //todo, add a space after jajabooboo

    const quotes = [
        "Like a drake and josh theme song... I found a way. ",
        "Bad bitches love Hans. ",
        "Jajabooboo.",
    ]

    return (
        <>
        <div className="homepage-overlay">
            <div className="homepage-title unselectable">
                <span className="title">
                {quotes.map((element) => {
                    return (
                        <span className='pre'>{element}</span>
                    )
                })}
                </span>
                <span className="title">
                {quotes.map((element, index) => {
                    return (
                        <span key={index} className='pre'>{element}</span>
                    )
                })}
                </span>                
            </div>
            <div className='homepage-filler'></div>
            <div className="homepage-sub-header">
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/timeline">TIMELINE</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/releases">RELEASES</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/events">EVENTS</Link>
                </div>
                <div className="homepage-sub-header-item unselectable">
                    <Link to="/syncs">SYNCS</Link>
                </div>
            </div>
        </div>   
        <Collage/>
        </>
    )
}

export default Homepage
*/
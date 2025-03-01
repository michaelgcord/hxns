import { ReactNode, useEffect, useState } from "react"
import { Link } from 'react-router-dom'

interface CardProps {
    direction: string
    embed: ReactNode | null
    title: string
    date: string
    height: number
    description: string | null
    dots: Array<string>
    check: boolean
    show_date: string | null
}

interface DotProps {
    name: string
}

const Dot = ({name} : DotProps) => {
    let route = "/"
    let color
    if (name === "Discography") {
        color = "#ff0000"
        route = "/discography"
    } else if (name === "Experiences") {
        color = "#015bef"
        route = "/experiences"
    } else if (name === "Syncs/Ads") {
        color = "#f97700"
        route = "/syncs-ads"
    }
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        {isHovering
            ?  <div style={{fontSize: '12px', paddingRight: '4px', height: '10px', marginTop: '-9px'}}>{name}</div>
            : <></>
        }
        <Link to={route} 
            onMouseEnter={() => {setIsHovering(true)}} 
            onMouseLeave={() => {setIsHovering(false)}} 
            className="card-content-dot" style={{backgroundColor: color}}>
        </Link>             
        </div>
    )
}

const Card = ({direction, embed, title, date, height, description, dots, check, show_date} : CardProps) => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    const coverHeight = height + 30

    useEffect(() => {
        if (check) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [check])

    return (
    <div className="card-item ">
        <div onClick={toggle} className="card-dot"/>
        <div className="card-line" style={{
            left: direction === 'left'
                ? "13%"
                : "52%"
        }}/>
        <div className="card-content" style={{
            height: 'fit-content',
            left: direction === 'left'
                ? "-223%"
                : "87%"
        }}>
            <div>{embed}</div>
            <strong className="card-title">{title}</strong>
            {show_date
                ? <div className="card-date">{show_date}</div>
                : <div className="card-date">{date}</div>
            }
            <div className="card-description">{description}</div>
            <div style={{
                display: 'flex',
                width: '100%',
            }}>
                <div className="card-spacer"></div>
                <div>
                    {dots.map((item, index) => {
                        return (
                            <div key={index}>
                                <Dot name={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="card-cover" style={{
            height: coverHeight,
            left: direction === 'left'
                ? show
                    ? "-497%"
                    : "-225%"
                : show
                    ? "324%"
                    : "52%"
        }}/>
    </div>
    )
}

export default Card
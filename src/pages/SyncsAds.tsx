import { ReactNode } from "react"
import NavMenu from "../components/NavMenu"

interface AdsProps {
    name: string | null
    date: string | null
    anchor: string | null
    // video: Array<ReactNode> | null
}

interface SyncProps {
    name: string | null
    date: string | null
    song: string | null
    anchor: string
}

const Sync = ({name, date, song, anchor} : SyncProps) => {
    return (
        <>
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', opacity: '10%', margin: '30px 0'}}></div>
            <div style={{fontWeight: '700', fontSize: '18px', cursor: 'pointer'}}><a href={anchor}>{name}</a></div>
            <div style={{fontSize: '14px', fontWeight: '400', marginTop: '-6px'}}>{date}</div>
            <div style={{fontWeight: '700', fontSize: '16px'}}>{song}</div>                
        </>
    )
}

const Ad = ({name, date, anchor} : AdsProps) => {
    return (
        <>
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', opacity: '10%', margin: '30px 0'}}></div>
            <div style={{fontWeight: '700', fontSize: '18px', lineHeight: '20px', marginBottom: '3px'}}>
                {anchor
                    ? <a style={{cursor: "pointer"}} href={anchor}>{name}</a>
                    : <div>{name}</div>
                }
            </div>
            <div style={{fontSize: '14px', fontWeight: '400', marginTop: '-6px'}}>{date}</div>
        </>
    )
}

const SyncsAds = () => {
    const syncs = [
        {
            name: "Run The World, Ep. 208 “No Regrets”",
            date: "July 14, 2023",
            song: "1080p",
            anchor: "https://www.imdb.com/title/tt27845762/?ref_=ttep_ep_8",
        },
        {
            name: "Reasonable Doubt, Ep. 102 “Family Feud”",
            date: "September 27, 2022",
            song: "1080p",
            anchor: "https://www.imdb.com/title/tt18484516/?ref_=ttep_ep_2",
        },
        {
            name: "Bel Air, Ep. 110 “Where To?”",
            date: "March 31, 2022",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt18250866/?ref_=ttep_ep_10",
        },
        {
            name: "Spontaneous (2020)",
            date: "October 2, 2020 (US Release)",
            song: "Blood Type (HXNS Remix)",
            anchor: "https://www.imdb.com/title/tt5774062/?ref_=ext_shr_lnk",
        },                                                
        {
            name: "Insecure, Ep. 401 “Lowkey Feelin’ Myself”",
            date: "April 12, 2020",
            song: "Reaching",
            anchor: "https://www.imdb.com/title/tt8956954/",
        },
        {
            name: "Dear White People, Ep. 305 “Chapter V”",
            date: "August 2,  2019",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt8598404/?ref_=ttep_ep_5",
        },
        {
            name: "Queen of the South, Ep. 404 “La Maldicion”",
            date: "June 27, 2019",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt1064899/?ref_=ext_shr_lnk",
        },
    ]

    const ads = [
        {
            name: "RHUDE SS25 Social Promo (unreleased)",
            date: "July 2024",
            anchor: null,
        },
        {
            name: "TOMBOGO x White Claw x Highsnobiety",
            date: "September 8, 2023",
            anchor: null,
        },
        {
            name: "Red Bull Streetstyle: Caitlyn Schrepfer",
            date: "Feb 12, 2022",
            anchor: "https://vimeo.com/676701560",
        },                                        
        {
            name: "AACI: Youth In Technology Animated Spots",
            date: "Feb 1, 2022",
            anchor: "https://vimeo.com/672501008",
        },
        {
            name: "Porsche - Drive2Extremes: Behind the Scenes #2 - The Driving Force",
            date: "June 18, 2021",
            anchor: "https://www.youtube.com/watch?v=KqB4dVfbJFs&ab_channel=Porsche"
        },
        {
            name: "RepairPal Estimator Video",
            date: "Sep 10, 2021",
            anchor: "https://vimeo.com/601989108",
        },
        {
            name: "RepairPal Dealership Video",
            date: "July 6, 2021",
            anchor: "https://vimeo.com/571898703",
        },
        {
            name: "RepairPal Shop Video",
            date: "Mar 4, 2021",
            anchor: "https://vimeo.com/519822139",
        },                
    ]

    return (
        <div className="main-container" style={{paddingBottom: '200px'}}>
            <NavMenu/>
            <div style={{fontSize: '48px', fontWeight: '700', margin: '20px 0 30px'}}>Syncs / Ads</div>            
            <div style={{display: 'flex', justifyContent: 'center', width: '800px'}}>
                <div style={{width: '350px', flexGrow: '1', padding: '0 20px 0 0'}}>
                    <div style={{}}><i>Syncs</i></div>
                    <i></i>
                    {syncs.map((item) => {
                        return (
                            <div key={item.name}>
                                <Sync
                                    name={item.name}
                                    date={item.date}
                                    song={item.song}
                                    anchor={item.anchor}
                                />
                            </div>
                        )
                    })}
                </div>
                <div style={{width: '350px', flexGrow: '1', padding: '0 0 0 20px'}}>
                    <div style={{}}><i>Ads</i></div>
                    {ads.map((item) => {
                            return (
                                <div key={item.name}>
                                    <Ad
                                        name={item.name}
                                        date={item.date}
                                        anchor={item.anchor}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default SyncsAds
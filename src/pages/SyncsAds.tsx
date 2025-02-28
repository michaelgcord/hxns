import { ReactNode } from "react"
import NavMenu from "../components/NavMenu"

interface AdsProps {
    name: string | null
    date: string | null
    video: Array<ReactNode> | null
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

const Ad = ({name, date, video} : AdsProps) => {
    return (
        <>
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', opacity: '10%', margin: '30px 0'}}></div>
            <div style={{fontWeight: '700', fontSize: '18px'}}>{name}</div>
            <div style={{fontSize: '14px', fontWeight: '400', marginTop: '-6px'}}>{date}</div>
            <div>
                {video ? video.map((item, index) => {
                    return (
                        <div style={{paddingTop: '10px'}} key={index}>
                            {item}
                        </div>
                    )
                }) : <></>}
            </div>
        </>
    )
}

const SyncsAds = () => {
    const syncs = [
        {
            name: "Insecure, Ep. 401 “Lowkey Feelin’ Myself”",
            date: "April 12, 2020",
            song: "Reaching",
            anchor: "https://www.imdb.com/title/tt8956954/",
        },
        {
            name: "Bel Air, Ep. 110 “Where To?”",
            date: "March 31, 2022",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt18250866/?ref_=ttep_ep_10",
        },
        {
            name: "Dear White People, Ep. 305 “Chapter V”",
            date: "August 2,  2019",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt8598404/?ref_=ttep_ep_5",
        },
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
            name: "Queen of the South, Ep. 404 “La Maldicion”",
            date: "June 27, 2019",
            song: "Starchild",
            anchor: "https://www.imdb.com/title/tt1064899/?ref_=ext_shr_lnk",
        },
        {
            name: "Spontaneous (2020)",
            date: "October 2, 2020 (US Release)",
            song: "Blood Type (HXNS Remix)",
            anchor: "https://www.imdb.com/title/tt5774062/?ref_=ext_shr_lnk",
        },                                                
    ]

    const ads = [
        {
            name: "RHUDE SS25 Social Promo (unreleased)",
            date: "July 2024",
            video: null,
        },
        {
            name: "TOMBOGO x White Claw x Highsnobiety",
            date: "September 8, 2023",
            video: null,
        },
        {
            name: "Porsche - Drive2Extremes: Behind the Scenes #2 - The Driving Force",
            date: "June 18, 2021",
            video: [<iframe width="560" height="315" src="https://www.youtube.com/embed/KqB4dVfbJFs?si=FjCyOAOsQCqvXgh_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>],
        },
        {
            name: "RepairPal",
            date: "2021-2023",
            video: [
                <iframe src="https://player.vimeo.com/video/601989108?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="309" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Meet the new RepairPal Estimator"></iframe>,
                <iframe src="https://player.vimeo.com/video/571898703?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="309" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="How can RepairPal help my dealership grow?"></iframe>,
                <iframe src="https://player.vimeo.com/video/519822139?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="309" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="How can RepairPal help my shop grow?"></iframe>                
            ],
        },
        {
            name: "AACI: Youth In Technology Animated Spots",
            date: "Feb 1, 2022",
            video: [<iframe src="https://player.vimeo.com/video/672501008?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="880" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Youth in Technology Animated Spots"></iframe>],
        },
        {
            name: "Red Bull Streetstyle: Caitlyn Schrepfer",
            date: "Feb 12, 2022",
            video: [<iframe src="https://player.vimeo.com/video/676701560?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="309" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Red Bull - Streetstyle"></iframe>],
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
                                        video={item.video}
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
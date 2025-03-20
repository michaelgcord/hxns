import { ReactNode } from "react"
import NavMenu from "../components/NavMenu"

interface EntryProps {
    name: string | null
    date: string | null
    anchor: string | null
    description: string | null
    video: ReactNode | null
}

const Entry = ({name, date, anchor, description, video} : EntryProps) => {
    return (
        <>
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', opacity: '10%', margin: '30px 0'}}></div>
            <div style={{width: '100%', textAlign: 'left', fontWeight: '800', fontSize: '24px'}}>
                {anchor 
                    ? <a style={{cursor: 'pointer'}} href={anchor}>{name}</a>
                    : <>{name}</>
                }
            </div>
            <div style={{width: '100%', textAlign: 'left', fontWeight: '700', fontSize: '12px', margin: '-5px 0 18px'}}>{date}</div>
            <div style={{width: '100%', textAlign: 'left', fontSize: '12px', marginBottom: '20px', lineHeight: '15px'}}>{description}</div>
            <div>{video}</div>
        </>
    )
}

const Experiences = () => {
    const data = [
        {
            name: "Cheesin' for Charity",
            date: "May 2019 - Current",
            anchor: "https://www.cheesin4charity.com/",
            description: "Co-produced and co-wrote the charity track “Cheesin'” alongside Cautious Clay, reaching out to our networks to curate a roster of emerging artists. Partnered with Slowplay, Republic Records, and the Recording Academy to formalize the campaign and rollout, raising over $175K for MusiCares COVID Relief. As of January 2024, 100% of future profits from the track will be going to the MusiCares Wildfire Disaster Relief.",
            video: null
        },
        {
            name: "Safariii Bazaar January 2025",
            date: "January 26, 2025",
            anchor: null,
            description: "Closing DJ set for the Oakland art collective’s monthly night market.",
            video: null
        },
        {
            name: "TOMBOGO New York Fashion Week 2024",
            date: "July 2024 - Sep 2024",
            anchor: "https://www.youtube.com/watch?v=Z7_V_LyugyY",
            description: "Led music production, working with designers and musicians to craft a soundscape highlighting the collection’s themes of futurism, technology, and modularity. Curated and DJed a live set, collaborating with production teams to synchronize music, lighting, and timing for a cohesive and impactful experience.",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/Z7_V_LyugyY?si=1nMpCCAlbSdHaurz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        },
        {
            name: "Kota Beat Tape 2 Release Party",
            date: "July 18, 2024",
            anchor: null,
            description: "DJ set at the release party for Dakota Lim’s second beat tape.",
            video: null
        },
        {
            name: "Prod. Davis Seminar: HXNS",
            date: "October 19, 2023",
            anchor: null,
            description: "I was invited by UC Davis’ (my alma mater!) music production club to discuss my journey navigating the music industry and production techniques.",
            video: null
        },
        {
            name: "Dekopon! Magazine Issue 3",
            date: "August 2023",
            anchor: "https://www.dekoponmagazine.com/product/preorder-dekopon-magazine-issue-03",
            description: "Modeled and provided wardrobe.",
            video: null
        }, 
        {
            name: "TOMBOGO Paris Fashion Week 2023",
            date: "May 2023 - June 2023",
            anchor: null,
            description: "Collaborated closely with TOMBOGO's lead designer and a team of musicians and audio engineers to produce original compositions and arrange the soundtrack for the brand's debut at Paris Fashion Week.",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/McJDf8A_JpM?si=Y1wQbnbdxaBoYwKG&amp;start=346" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        }, 
        {
            name: "Elujay - Ratrace (Music Video)",
            date: "Dec 2021 - Jan 2022",
            anchor: "https://www.youtube.com/watch?v=FC0yrSRM3ZY",
            description: "Provided wardrobe and styling consultation for Elujay’s music video for his single Ratrace, which currently sits at 128K views on YouTube.",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/FC0yrSRM3ZY?si=e5HuLyXRZ_qHcKol" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        }, 
        {
            name: "Styling Consultant for Cautious Clay",
            date: "Nov 18, 2022",
            anchor: "https://www.the-independent.com/arts-entertainment/music/features/cautious-clay-interview-b2228154.html",
            description: "Provided styling consulting for photoshoot featured in The Independent.",
            video: null
        }, 
        {
            name: "Madeintheurl: Talkintheurl S1E5: HXNS",
            date: "March 14, 2021",
            anchor: "https://www.youtube.com/watch?v=3Q51L9dGfkc",
            description: "An interview with Chris Chance, award-winning copywriter and founder of Madeintheurl.",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/3Q51L9dGfkc?si=UexEP3niIJgQfdCo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        }, 
        {
            name: "Concert For A Cause",
            date: "June 26, 2020",
            anchor: null,
            description: "Performed on the keys/synth alongside artists Eileen Shoji and Coldwaterchris for a digital fundraiser in support of Challenger Slate candidates Elisha Crader and Lacei Amodei for Hayward City Council campaign.",
            video: null
        }, 
        {
            name: "Elujay & Friends @ The New Parish",
            date: "February 8, 2019",
            anchor: null,
            description: "Performed an opening DJ set in support of Elujay.",
            video: null
        }, 
        {
            name: "Tom Misch US DJ Tour @ 1015 Folsom",
            date: "June 3, 2017",
            anchor: null,
            description: "Performed an opening DJ set in support of Tom Misch at one of SF’s most iconic venues.",
            video: null
        }, 
        {
            name: "HGMNY & First Ear Present: Soulection’s Zikomo & Kronika @ F8",
            date: "April 8, 2017",
            anchor: null,
            description: "Performed a DJ set in support of Soulection’s Zikomo & Kronika.",
            video: null
        },  
        {
            name: "HGMNY & First Ear Present: Flamingosis @ F8",
            date: "Dec 10, 2016",
            anchor: null,
            description: "My debut DJ set at F8 in support of Flamingosis.",
            video: null
        },                                                                                                               
    ]

    return (
        <div className="main-container">
            <NavMenu/>
            <div style={{fontSize: '48px', fontWeight: '700', margin: '20px 0 30px'}}>Experiences</div>
            <div className="experiences">
                {data.map((item) => {
                    return (
                        <div key={item.name} className="entry">
                            <Entry 
                                name={item.name}
                                date={item.date}
                                anchor={item.anchor}
                                description={item.description}
                                video={item.video}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experiences
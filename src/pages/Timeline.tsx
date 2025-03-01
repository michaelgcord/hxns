import NavMenu from "../components/NavMenu"
import Card from "../components/Card"
import { useState } from "react"
import { Switch } from "@radix-ui/themes";

const Timeline = () => {
    const data = [
        {
            title: "AACI: Youth In Technology Animated Spots",
            date: "Feb 1, 2022",
            embed: <iframe frameBorder="0" src="https://player.vimeo.com/video/672501008?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Youth in Technology Animated Spots"></iframe>,    
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "whatsitgonnabe",
            date: "November 25, 2018",
            embed: <iframe loading="lazy" frameBorder="0" width="100%" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535492533&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Porsche - Drive2Extremes: Behind the Scenes #2 - The Driving Force",
            date: "June 18, 2021",
            embed: <iframe frameBorder="0" width="100%" src="https://www.youtube.com/embed/KqB4dVfbJFs?si=FjCyOAOsQCqvXgh_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>,
            height: 234,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "JEMS!, Elujay & J.Robb - STORMBLUS",
            date: "September 20, 2024",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/45CzTjXCs6MtH5oEFNAu2e?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Siaira Shawn - Different",
            date: "October 11, 2024",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6p9vIo0rUf8P6ZDVsn5B0A?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,           
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Siaira Shawn - Sleep Better",
            date: "October 11, 2024",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/2lpffYbr7naUYD68eQBilf?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Bazzi - Somewhere In Between",
            date: "May 24, 2024",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/7LBq9YOFtOoSeGFtlrxHEN?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Adanna Duru - Ur A Bitch",
            date: "Feb 2, 2023",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4aZu2npZvVghVTnPxD2uWe?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay - Fishtown",
            date: "August 18, 2023",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/3wi4hGGGZZYvkC0SRTU8cq?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay - Burning Up Slow",
            date: "September 28, 2022",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/7FKt5TmdwOaeBGJcejChUw?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Elujay & HXNS - 1080P",
            date: "August 27, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/2HauR0k2KEwPHKE5HTXQKY?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 233,
            description: "Featured in Hulu’s Reasonable Doubt & Starz’s Run the World",
            dots: ["Discography", "Syncs/Ads"]
        },
        {
            title: "Phabo - The Phabo Show (feat. Alex Vaughn)",
            date: "July 16, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/75y79gETt48VW0kz8Jxorg?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay - Karma & Friends",
            date: "April 15, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/1ugvFLfVoBSIyLam35yATm?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay - High Risk Travel",
            date: "June 25, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/7amF28uDwTmWvTovscM5hH?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay & Saba - Strange Love",
            date: "June 1, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/0dgehlr08kKoyl2nG7Dhv4?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay - Why Is Your Clay So Cautious?",
            date: "June 25, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/2QokcoxHFBjJ5WYBzlHUcP?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Salem Ilese - Romeo & Juliet",
            date: "May 21, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4MJ7iAgcQPrLPto0dePe0R?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Har - Take Off (feat. HXNS)",
            date: "March 11, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6r0Za4t5XhD7TNCDHz9XDy?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Healy - Everything’s Fine",
            date: "January 13, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/1hQM22L8FSThJB5drLpfQs?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "SIR HANS - LIANA",
            date: "December 19, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6IEOdEbUDQHuEnFa1igq7P?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Elujay & J.Robb - Lady (feat. Kyle Dion)",
            date: "December 3, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/05jASrXO0rxvbhI1CJRtEz?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Siaira Shawn & HXNS - Islands (HXNS Remix)",
            date: "October 28, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/04uJPwa8HTztqFbR8DPBtb?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Ruel - say it over (feat. Cautious Clay)",
            date: "October 1, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4jSE5cAaa5rwTyhDSXfwQN?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "HXNS & Lucid Monday - okaywegetit",
            date: "September 28, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/2cBQwDBcQjk2m49wzfeFZH?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "LLusion, Cautious Clay & HXNS - Sad4good",
            date: "August 21, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6iQffhfYAtLKvgyr2flNK7?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "James Vincent McMorrow - Headlights",
            date: "May 15, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/30ip6JBD07Pf1eBfHqXosG?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious Clay, Remi Wolf & Sophie Meiers - Cheesin’ (feat. Still Woozy, Claud, Melanie Faye & HXNS)",
            date: "April 22, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6lIRYe72fn1pf7TNqfI0ul?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 280,
            description: "Charity track with 100% of net proceeds going to The Recording Academy’s MusiCares COVID & LA Fire Relief Funds",
            dots: ["Discography", "Experiences"]
        },
        {
            title: "Cautious Clay, Raedio & Alex Isley - Reaching",
            date: "April 10, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4eLhCEYdlCTfSUXqUWsYoT?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 233,
            description: "Featured in HBO’s Insecure",
            dots: ["Discography", "Syncs/Ads"]
        },
        {
            title: "Kyle Dion - Time Heals, Just Not Quick Enough",
            date: "February 28, 2020",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/6SX6R1LaIIGquncM8UZYS0?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Sophie Meiers - come ovr",
            date: "November 14, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/01PN1v5FRjaIZsjzK0c6DV?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Berel - Before You Go",
            date: "October 15, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/1lZwzcyn8sTPnI0Wk5Xh4t?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Sophie Meiers - x-ray vision",
            date: "August 28, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/10zrF631IEJn7uKmVqGqjB?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "E SENS - BOBOS MOTEL",
            date: "July 22, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/37bA7S1fgKIiplXcmaSKmG?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Jarami - Post Mates (feat. Cautious Clay)",
            date: "July 16, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/2zMaLos1Y3SF5kkODAG8QW?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Elujay - Champagne Galore",
            date: "February 1, 2019",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4m86x5hD8IHUYsuxiUPbsz?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Elujay - Starchild",
            date: "May 11, 2018",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/4Ku4jFPD4J7UxdjG0xpjPf?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 247,
            description: "Featured in Peacock’s Bel Air, Netflix’s Dear White People & USA Network’s Queen of the South",
            dots: ["Discography", "Syncs/Ads"]
        },
        {
            title: "Cautious Clay - Blood Type (HXNS Remix)",
            date: "November 16, 2017",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/7CgGaeMSlcsZGimw32JAOC?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 230,
            description: "Featured in Paramount Pictures’ Spontaneous",
            dots: ["Discography", "Syncs/Ads"]
        },
        {
            title: "Cautious Clay - Silos (HXNS Remix)",
            date: "November 16, 2017",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/5TAkI1vR0Zatnz0N0hoYpx?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Abhi The Nomad & goodboy noah - Terminal",
            date: "December 17, 2021",
            embed: <iframe frameBorder="0" src="https://open.spotify.com/embed/track/1SbqsL5hQ9oIAM3W0JVLbb?utm_source=generator" width="100%" height="152"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
            height: 218,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Cautious clay - blood type (HXNS remix)",
            date: "July 17, 2018",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/473209011&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "luh",
            date: "March 23, 2018",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/418614140&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "oooooohhh",
            date: "August 28, 2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339888669&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "sunday, august 27",
            date: "August 27, 2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339756151&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Slide (w/ j.robb)",
            date: "May 16,  2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323004511&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Tee",
            date: "April 10, 2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317102858&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Wishes",
            date: "February 14, 2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307798100&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Closer (feat. Chase Thomas)",
            date: "January 18, 2017",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303452856&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Sunday nov. 20",
            date: "Nov 20, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294023752&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },      
        {
            title: "November rain",
            date: "Nov 19, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293886712&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Precious",
            date: "October 26, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290193705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Sunday oct. 2",
            date: "October 2, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285732779&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Underneath it all (demo)",
            date: "Aug 30, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280695248&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Crazy",
            date: "July 20, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274596325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Study break",
            date: "June 8, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268191664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "showstoppin",
            date: "May 24, 2016",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265801548&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Lightheaded",
            date: "October 29, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230732221&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "LIFTED",
            date: "Aug 24, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220762552&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Days spent",
            date: "August 16, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219586986&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Rockdaboat",
            date: "August 16, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219583872&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        }, 
        {
            title: "U & I",
            date: "August 10, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218646496&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "Playground",
            date: "July 22, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215812412&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "You could bet that",
            date: "June 3, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208716164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "Pch",
            date: "May 6, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204289545&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "Money (feat. Masego)",
            date: "April 30, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203375668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "Chill with me",
            date: "March 13, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195790924&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "round$",
            date: "February 21, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/192392259&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },     
        {
            title: "5k double feature",
            date: "February 9, 2015",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/190346245&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },      
        {
            title: "Midnight",
            date: "December 30, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183847685&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "One-off vacation",
            date: "December 24, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182946980&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Wavezzz",
            date: "December 13, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181303225&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Ride",
            date: "December 8, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180659878&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Places",
            date: "December 2, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179584616&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },      
        {
            title: "Player",
            date: "November 28, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179111967&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Good evening",
            date: "November 20, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177925453&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Blue",
            date: "November 4, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175415797&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Work",
            date: "October 31, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174680920&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Yikes",
            date: "October 27, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174191753&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Retrace",
            date: "October 22, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173400160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },   
        {
            title: "Do not",
            date: "September 18, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168257142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },  
        {
            title: "San Francisco",
            date: "July 10, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158197530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },
        {
            title: "Sunday",
            date: "June 29, 2014",
            embed: <iframe loading="lazy" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/156593887&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
            height: 220,
            description: null,
            dots: ["Discography"]
        },           
    ]

    const sorted_data = data.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

    const [check, setCheck] = useState(false)

    const toggleCheck = () => {
        setCheck(!check)
    }

    return (
        <div className="main-container">
            <NavMenu/>
            <div style={{fontSize: '48px', fontWeight: '700', margin: '20px 0 30px'}}>History of Hans</div>   
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Switch size="1" onCheckedChange={toggleCheck} />
                <div style={{paddingLeft: '13px', fontSize: '14px'}}>Gimme everything</div>
            </div>
            <div>
                <div className="timeline-line">
                    {sorted_data.map((item, index) => {
                        return (
                            <Card 
                                direction={index % 2 === 0 ? 'left' : 'right'} 
                                embed={item.embed} 
                                title={item.title} 
                                date={item.date}
                                height={item.height}
                                description={item.description}
                                dots={item.dots}
                                check={check}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline
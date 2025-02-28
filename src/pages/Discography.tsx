import NavMenu from "../components/NavMenu"

const Discography = () => {
    return (
        <div className="main-container">
            <NavMenu></NavMenu>
            <div style={{fontSize: '48px', fontWeight: '700', margin: '20px 0 30px'}}>Discography</div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{height: '600px', width: '500px', padding: '10px'}}>
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EFHfs6M9G6RmO?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div style={{height: '600px', width: '500px', padding: '10px'}}>
                    <iframe width="100%" height="100%" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1975364548&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>                    
                </div>
            </div>
        </div>
    )
}

export default Discography
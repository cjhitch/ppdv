// Credentials for youtube - added in 
const youTubeCreds = {
    key: 'AIzaSyA54SI8UXryZuA4xbFhu6YzCXYnSGCPFuU',
    playListId: ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'],
}

const youTubeUrl = {
    URL: 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId='+youTubeCreds.playListId[0]+'&key='+youTubeCreds.key
};

const options = {
    part: 'snippet',
    key: youTubeCreds.key,
    maxResults: 20,
    playlistId: youTubeCreds.playListId
};

const tubeItems = {
    videoIds: [],
    titles: [],
}

const selOptions = () => {
    const select = document.querySelector('select#vid_id');
    select.innerHTML = tubeItems.titles.map((el, index) => {
        return `<option id="${index}">${el}</option>`
    })
    select.addEventListener('change', () => {
        const index = select.selectedIndex;
        mainVid(tubeItems.videoIds[index])
    })
}

const mainVid = (loadVid) => {
    document.querySelector('#main-video-player-0').innerHTML = `
        <div class="">
            <iframe class="" width="1050px" height="600px" src="https://www.youtube-nocookie.com/embed/${loadVid}?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
        </div>
    `
}

const retrieveVideos = () => {
    $.getJSON(youTubeUrl.URL, options, (data) => {
        data.items.forEach(el => {
            tubeItems.videoIds.push(el.snippet.resourceId.videoId)
            tubeItems.titles.push(el.snippet.title)
        })
        selOptions();
    });
}

retrieveVideos();
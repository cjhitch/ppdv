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
    firstVid: '',
    titles: [],
}

const selOptions = () => {
    const select = document.querySelector('select#vid_id');
    select.innerHTML = tubeItems.titles.map((el, index) => {
        return `<option id="${index}">${el}</option>`
    })
}

const mainVid = (firstVid) => {
    document.querySelector('#main-video-player-0').innerHTML = `
        <div class="">
            <iframe class="" width="1050px" height="600px" src="https://www.youtube-nocookie.com/embed/${firstVid}?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
        </div>
    `
}

const retrieveVideos = () => {
    $.getJSON(youTubeUrl.URL, options, (data) => {
        tubeItems.firstVid = data.items[0].snippet.resourceId.videoId;
        data.items.forEach(el => {
            tubeItems.titles.push(el.snippet.title)
        })
        selOptions();
        mainVid(tubeItems.firstVid);
    });
}

retrieveVideos();
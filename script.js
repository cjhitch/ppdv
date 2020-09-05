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

const retrievePlayer = {
    retrieveVideos: function(){
        $.getJSON(youTubeUrl.URL, options, function(data){
            tubeItems.firstVid = data.items[0].snippet.resourceId.videoId;
            data.items.forEach(el => {
                tubeItems.titles.push(el.snippet.title)
            })
            playMainVideo.mainVid(tubeItems.firstVid);
        });
    },
};

const playMainVideo = {
    mainVid: function(firstVid){
        document.querySelector('#main-video-player-0').innerHTML = `<div class="">
            <iframe class="" width="1050px" height="600px" src="https://www.youtube-nocookie.com/embed/${firstVid}?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
        </div>`
    },
}

retrievePlayer.retrieveVideos();
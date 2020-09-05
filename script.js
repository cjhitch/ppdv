const youTubeCreds = {
    key: 'AIzaSyA54SI8UXryZuA4xbFhu6YzCXYnSGCPFuU',
    playListId: ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'],
    firstVid: '',
}

const options = {
    part: 'snippet',
    key: youTubeCreds.key,
    maxResults: 20,
    playlistId: youTubeCreds.playListId
};

const youTubeUrl = {
    vidIds: '',
    vidUrls: '',
    URL: 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId='+youTubeCreds.playListId[0]+'&key='+youTubeCreds.key
};

const retrievePlayer = {
    retrieveVideos: function(){
        $.getJSON(youTubeUrl.URL, options, function(data){
            youTubeCreds.firstVid = data.items[0].snippet.resourceId.videoId;
            console.log(data.items);
            playMainVideo.mainVid(youTubeCreds.firstVid);
        });
    },
};

const playMainVideo = {
    mainVid: function(firstVid){
        $('#main-video-player-0').html(
            `<div class="aspect-ratio">
                <iframe class="" width="auto" height="600px" src="https://www.youtube-nocookie.com/embed/'${firstVid}?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`
        );
    },
}

retrievePlayer.retrieveVideos();
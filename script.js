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
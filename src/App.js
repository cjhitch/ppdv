import React, { useState } from 'react';
import './App.css';

const App = () => {
	const key = 'AIzaSyA54SI8UXryZuA4xbFhu6YzCXYnSGCPFuU';
	const plId = ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'];

	const [yTUrl, setYTUrl] = useState()

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

	return <div className="App">
		<h1>
			Select a Video:
		</h1>
		<select name="vid_id" id="vid_id">

		</select>
	</div>;
}

export default App;

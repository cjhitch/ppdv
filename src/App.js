import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const key = 'AIzaSyAMHI33eUcYvtAPUEr8vEHvEYVKqGjrysY';
	const plId = ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'];

	const [value, setValue] = useState('');
	const [titles, setTitles] = useState([]);
	const [videoIds, setVideoIds] = useState([]);
	const [vidIndex, setVidIndex] = useState(0);

	const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${plId}&key=${key}`;

        // async function to set the fatch and get json data back from the api
        const asyncFetch = async () => {
            let response = await fetch(URL);
			// get data from response
			let data = await response.json();
			// array to for push in data
			const dataTitles = [];
			const dataIds = [];
			// return the data to the calling function
			data.items.forEach(el => {
				// push to array
				dataTitles.push(el.snippet.title)
				dataIds.push(el.snippet.resourceId.videoId)
			})
			// set state with array data
			setTitles(dataTitles);
			setVideoIds(dataIds);
			setValue(dataTitles[0])
        };
				
		useEffect(()=>{
			asyncFetch()
			.then( () => {
				console.log('Request succeeded with JSON response');
				}
			)
			// catch any errors and log them in the console
			.catch(err => console.log(`Fetch Error: ${err}`));
			// intentionally empty - this code should only ever run once at page load
			// eslint-disable-next-line
		},[])
		
		const changeHandler = (e) => {
			setValue(e.target.value)
			setVidIndex(e.target.selectedIndex)
		}

	return <div className="App">
		<h1>
			Select a Video:
		</h1>
		<select
		value={value}
		onChange={(e) => changeHandler(e)}
		name="vid_id"
		id="vid_id">
				{titles.map((title, index) => 
					<option key={`${videoIds[index]}-${index}`}>{title}</option>
				)}
		</select>
		<h2>
			Selected Video: 
		</h2>
		<div id="main-video-player-0">
			`<iframe title="Learning Python" className="" width="1050px" height="600px" src={`https://www.youtube-nocookie.com/embed/${videoIds[vidIndex]}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>`
		</div>
	</div>;
}

export default App;

import React, {useEffect, useState} from 'react';
import PageTemplate from '../../components/pageTemplate/PageTemplate'
import FeaturedVideo from '../../components/featuredVideo/FeaturedVideo';
import './Tutorials.scss';

const Tutorials = () => {

    const key = 'AIzaSyAMHI33eUcYvtAPUEr8vEHvEYVKqGjrysY';
	const plId = ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'];

	const [value, setValue] = useState('');
    const [titles, setTitles] = useState([]);
    const [descs, setDescs] = useState('');
	const [videoIds, setVideoIds] = useState([]);
	const [vidIndex, setVidIndex] = useState(0);

	const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${plId}&key=${key}`;

        // async function to set the fatch and get json data back from the api
        const asyncFetch = async () => {
            const response = await fetch(URL);
			// get data from response
			const data = await response.json();
            // return the data to the calling function
            return data;
        };
				
		useEffect(()=>{
            asyncFetch()
			.then(data => {
				console.log('Request succeeded with JSON response');
                // array to for push in data
                const dataTitles = [];
                const dataDescs = [];
                const dataIds = [];
                data.items.forEach(el => {
                    // push to array
                    dataTitles.push(el.snippet.title)
                    dataDescs.push(el.snippet.description)
                    dataIds.push(el.snippet.resourceId.videoId)
                })
                // set state with array data
                setTitles(dataTitles);
                setDescs(dataDescs);
                setVideoIds(dataIds);
                setValue(dataTitles[0])
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

    return (
        <PageTemplate >
            <FeaturedVideo
            video={videoIds[vidIndex]}
            value={value}
            changeHandler={changeHandler}
            title={titles[vidIndex]}
            desc={descs[vidIndex]}
            titles={titles}
            />
        </PageTemplate>
    )
}

export default Tutorials;
import React, {useEffect, useState} from 'react';
import PageTemplate from '../../components/pageTemplate/PageTemplate'
import FeaturedVideo from '../../components/featuredVideo/FeaturedVideo';
import MoreVideos from '../../components/moreVideos/MoreVideos';
import Vid from '../../components/vid/Vid';
import './Tutorials.scss';

const Tutorials = () => {

    const key = 'AIzaSyAMHI33eUcYvtAPUEr8vEHvEYVKqGjrysY';
	const plId = ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'];

	const [value, setValue] = useState('');
    const [titles, setTitles] = useState([]);
    const [descs, setDescs] = useState('');
    const [thumbs, setThumbs] = useState([]);
	const [videoIds, setVideoIds] = useState([]);
    const [vidIndex, setVidIndex] = useState(0);
    const [pagiIndex, setPagiIndex] = useState(0);

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
				console.log('Request succeeded with JSON response', data);
                // array to for push in data
                const dataTitles = [];
                const dataDescs = [];
                const dataIds = [];
                const dataThumbs = [];
                data.items.forEach(el => {
                    // push to array
                    dataTitles.push(el.snippet.title)
                    dataDescs.push(el.snippet.description)
                    dataIds.push(el.snippet.resourceId.videoId)
                    dataThumbs.push(el.snippet.thumbnails.maxres.url)
                })
                // set state with array data
                setTitles(dataTitles);
                setDescs(dataDescs);
                setVideoIds(dataIds);
                setThumbs(dataThumbs)
                setValue(dataTitles[0])
				}
			)
			// catch any errors and log them in the console
			.catch(err => console.log(`Fetch Error: ${err}`));
			// intentionally empty - this code should only ever run once at page load
			// eslint-disable-next-line
		},[])
		
		const selChangeHandler = (e) => {
			setValue(e.target.value)
			setVidIndex(e.target.selectedIndex)
        }
        
        const vidChangeHandler = index => {
            if (index !== vidIndex) {
                setVidIndex(index)
                setValue(titles[index])
            }
        }

    return (
        <PageTemplate>
            <FeaturedVideo
            video={videoIds[vidIndex]}
            value={value}
            changeHandler={selChangeHandler}
            title={titles[vidIndex]}
            desc={descs[vidIndex]}
            titles={titles}
            />
            <MoreVideos>
                {
                titles.map((el, index) => (
                    <Vid changeHandler={vidChangeHandler} key={index} index={index} title={el} src={thumbs[pagiIndex+index]} desc={descs[pagiIndex+index]} />
                ))}    
            </MoreVideos>
        </PageTemplate>
    )
}

export default Tutorials;
import React, {useEffect, useState} from 'react';
import PageTemplate from '../../components/pageTemplate/PageTemplate'
import FeaturedVideo from '../../components/featuredVideo/FeaturedVideo';
import MoreVideos from '../../components/moreVideos/MoreVideos';
import Vid from '../../components/vid/Vid';
import './Tutorials.scss';

const Tutorials = () => {

    const key = 'AIzaSyA54SI8UXryZuA4xbFhu6YzCXYnSGCPFuU';
	const plId = ['PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'];

	const [value, setValue] = useState('');
    const [titles, setTitles] = useState([]);
    const [descs, setDescs] = useState('');
    const [thumbs, setThumbs] = useState([]);
	const [videoIds, setVideoIds] = useState([]);
    const [vidIndex, setVidIndex] = useState(0);
    const [moreVids, setMoreVids] = useState([0,1,2]);
    const [activeBub, setActiveBub] = useState(Math.floor(moreVids[0]/3));
    const bubs = Math.ceil(titles.length/3)

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
        
        // update active bubble whenever more vids changes
        useEffect(() => {
            setActiveBub(Math.floor(moreVids[0]/3))
        },[moreVids])
        
        // when a select is selected - update the featured vid - update the more vids array
		const selChangeHandler = (e) => {
            setValue(e.target.value)
            setVidIndex(e.target.selectedIndex)
            const page = 3*(Math.ceil((e.target.selectedIndex+1)/3))
            setMoreVids([page-3, page-2, page-1])
        }
        
        // handler for when a more videos link is clicked on
        const vidChangeHandler = e => {
			setValue(titles[e.target.closest('article').id])
			setVidIndex(e.target.closest('article').id)
        }
        
        // prev link handler
        const prevClickHandler = () => {
            if (moreVids[2] > 2) {
                setMoreVids([moreVids[0]-3,moreVids[1]-3,moreVids[2]-3])
            }
        }
        
        // next link handler
        const nextClickHandler = () => {
            if (moreVids[0]+3 < titles.length){
                setMoreVids([moreVids[0]+3,moreVids[1]+3,moreVids[2]+3])
            }
        }

        // handler for when one of the pagination links are clicked
        const pagiHandler = i => {
            const page = 3*i
            setMoreVids([page-3, page-2, page-1])
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
            <MoreVideos prevClickHandler={prevClickHandler} nextClickHandler={nextClickHandler} 
            pagi={bubs} active={activeBub} pagiHandler={pagiHandler}>
                <Vid changeHandler={vidChangeHandler} key={moreVids[0]} index={moreVids[0]} title={titles[moreVids[0]]} src={thumbs[moreVids[0]]} desc={descs[moreVids[0]]} link={videoIds[moreVids[0]]} />
                { titles[moreVids[1]] === undefined ? '' :
                <Vid changeHandler={vidChangeHandler} key={moreVids[1]} index={moreVids[1]} title={titles[moreVids[1]]} src={thumbs[moreVids[1]]} desc={descs[moreVids[1]]} link={videoIds[moreVids[0]]} />
                }
                { titles[moreVids[2]] === undefined ? '' :
                <Vid changeHandler={vidChangeHandler} key={moreVids[2]} index={moreVids[2]} title={titles[moreVids[2]]} src={thumbs[moreVids[2]]} desc={descs[moreVids[2]]} link={videoIds[moreVids[0]]} />
                }
            </MoreVideos>
        </PageTemplate>
    )
}

export default Tutorials;
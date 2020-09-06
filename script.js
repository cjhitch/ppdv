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


        // async function to set the fatch and get json data back from the api
        const asyncFetch = async (type, options) => {
            // url for the api
            const url = `https://complex-woolen-isthmus.glitch.me/api/${type}?accessToken=5b1064585f4ab8706d275f90`;
            // check if the fetch is using options.body - if so stringify the data and send through with the options
            if (options.body) {
                options.body = JSON.stringify(task);
            }
            // run the response
            let response = await fetch(url, options);
            // there's no data returned on the delete method
            if (options.method != 'DELETE') {
                // get data from response
                let data = await response.json();
                // return the data to the calling function
                return data;
            }
        };
                // options for get fetch
                const get =  {
                    method: 'GET'
                };

                // create this as a function so it can be called again when items have been added, deleted, or updated
                const getFetch = () => {
                    // run the async function when the program starts
                    asyncFetch('lists', get)
                        .then(data => {
                            console.log('Request succeeded with JSON response', data);
                            // new event for when data is done being collect
                            const event = new Event('data_collected');
                            // attach the data to the DTO
                            event.data = data;
                            // dispatch the event
                            document.dispatchEvent(event);
                            }
                        )
                        // catch any errors and log them in the console
                        .catch(err => console.log(`Fetch Error: ${err}`));
                };
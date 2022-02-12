import React from 'react'
import ReactDOM from 'react-dom'
const { useState, useEffect, useRef } = React;
const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
const utm = "?utm_source=scrimba_degree&utm_medium=referral"
var API_KEY = 'NpRvp4rxQt7jYkbu95fWvCMrZKxyQKlWcNZfzeopGfI';


const loadData = (options) => {
  fetch(options.url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){ 
       if (options.onSuccess) options.onSuccess(data)
    })
}

const App = (props) => {
  let [photos, setPhotos] = useState([]);
  
  // CHALLENGE:
  // Using hooks to query unpslash web app with API calls to render js related images
  let [query, setQuery] = useState("javascript");
  const queryInput = useRef(null);
// Number of images requested on each API call is 21. Each API call ereturns new images even with page reloads.
  const numberOfPhotos = 21;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    loadData({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res);
      }
    });
  }, [query, url]);

  const searchPhotos = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  
  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>
      <div className="grid">
      { query ?
          photos.map(photo => {
          return (
            <div key={photo.id} className="item">
              <img
                className="img"
                src={photo.urls.regular}
              />
              <div className="caption">
                <span className="credits">Photo by 
                  <a href={photo.user.links.html + utm}>   {photo.user.name} 
                  </a>
                  <span> on </span> 
                  <a href={"https://unsplash.com" + utm}>
                    Unsplash
                  </a>
                </span>
              </div>
            </div>
            );
        }) : ""}
      </div>
    </div>
  );
};

// ADDED IN OAGE NAME AND EMOJI: own name and emoji Added to the website
ReactDOM.render(<App name="React" emoji="🔥"/>, document.getElementById("root"));

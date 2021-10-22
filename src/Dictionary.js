import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000011f3a95352ee9423984930bd02bf4905d";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            suggested words : sunset, wine, yoga, horse
          </div>
        </section>
        <Result result={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

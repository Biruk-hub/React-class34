import { useEffect, useState } from "react";

function RandomJoke() {
  const APIURL = "http://api.icndb.com/jokes/random";
  const [joke, setJoke] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((result) => {
        setJoke(() => result.value.joke);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (hasError) {
    return "Something went wrong with grabbing your joke. Please try again later.";
  } else if (isLoading) {
    return "Loading...";
  } else {
    return joke;
  }
}

export default RandomJoke;

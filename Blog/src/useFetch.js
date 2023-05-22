import { useEffect, useState } from "react";

import(useEffect);

const useFetch = (url) => {
  const abortCont = new AbortController();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url, {signal : abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Data Could not be fetched");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('Fetch aborted')
          }else{
            setIsPending(false);
            setError(err.message);
          }
          
        });
    }, 1000);
    return ()=> abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;

let fetcher
export default fetcher = (url:any) => fetch(url).then((res) => res.json())
let poster
export default poster = (url:any, {arg}:any) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(arg)
}).then((res) => res.json())
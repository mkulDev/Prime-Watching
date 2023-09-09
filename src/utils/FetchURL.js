const baseURL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchAPI = async (url) => {
  const data = await fetch(`${baseURL}/${url}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))
  return data
}

document.cookie = 'cookieName=cookieValue; SameSite=Lax'

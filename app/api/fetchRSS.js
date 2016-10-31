export default function fetchRSS(url) {
  const google_api = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q='
  const api_request_url = google_api + url

  return fetch(api_request_url).then((res) => res.json())
}

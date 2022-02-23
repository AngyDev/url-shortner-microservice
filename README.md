# Url Shortner Microservice

- You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://tomorrowdevs.com', short_url : 1}

- When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

- If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

Create Redis container `docker run -p 6379:6379 --name redis-app redis`

### API:

POST: http://localhost:3000/api/shorturl

GET: http://localhost:3000/api/shorturl/:shortUrl

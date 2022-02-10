const express = require("express");
const redisClient = require("./redis-client");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

// Create an endpoint to set a key value pair.
app.post('/setValue', async (req, res) => {
  if (req.body.key && req.body.value) {
      try {
          await redisClient.setAsync(req.body.key, req.body.value)
          res.send('Success')
      } catch (e) {
          res.json(e)
      }
  } else {
      res.status(400).json({ error: 'Wrong input.' })
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

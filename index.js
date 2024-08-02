require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData = {
  "login": "KishanWebDev",
  "id": 157677184,
  "node_id": "U_kgDOCWX2gA",
  "avatar_url": "https://avatars.githubusercontent.com/u/157677184?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/KishanWebDev",
  "html_url": "https://github.com/KishanWebDev",
  "followers_url": "https://api.github.com/users/KishanWebDev/followers",
  "following_url": "https://api.github.com/users/KishanWebDev/following{/other_user}",
  "gists_url": "https://api.github.com/users/KishanWebDev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/KishanWebDev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/KishanWebDev/subscriptions",
  "organizations_url": "https://api.github.com/users/KishanWebDev/orgs",
  "repos_url": "https://api.github.com/users/KishanWebDev/repos",
  "events_url": "https://api.github.com/users/KishanWebDev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/KishanWebDev/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kishan Rai",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Frontend Developer | Code Enthusiast | Web Development Explorer",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 5,
  "created_at": "2024-01-25T06:09:37Z",
  "updated_at": "2024-07-17T11:14:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('kishandotcom')

})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at kishan webdev</h1>')
})

app.get('/kishanWebDev', (req, res) => {
  res.send("Hii Kishan \n  Welcome in the World of <B>Krypton</B>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

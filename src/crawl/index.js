const axios = require('axios')

const crawlWebAsUtf8 = url =>
  axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log('crawl error', err.message))

module.exports = {
  crawlWebAsUtf8
}

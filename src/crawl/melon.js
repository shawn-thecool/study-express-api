const cheerio = require('cheerio')
const uuidv4 = require('uuid/v4')
const { crawlWebAsUtf8 } = require('./index')

const crawlMelonNewIndex = () =>
  crawlWebAsUtf8('https://www.melon.com/new/index.htm').then(data => {
    const $ = cheerio.load(data)
    const now = new Date()
    const results = []
    $('table tr').each(function(idx, el) {
      const rank = Number(
        $(el)
          .find('.rank')
          .text()
          .trim()
      )
      const img = $(el)
        .find('img')
        .attr('src')
      const song = $(el)
        .find('.wrap_song_info .rank01 span a')
        .text()
        .trim()
      const name = $(el)
        .find('.wrap_song_info .rank02 span a')
        .text()
        .trim()
      results.push({
        id: uuidv4(),
        rank: rank,
        hit: 0,
        img: img,
        song: song,
        name: name,
        youtube: `https://www.youtube.com/results?search_query=${name}+${song}`,
        careatedAt: now,
        updatedAt: null
      })
    })
    return results.filter(({ name }) => !!name)
  })

module.exports = {
  crawlMelonNewIndex
}

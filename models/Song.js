const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
    default: null
  },
  year_released: {
    type: String,
    default: null
  },
  good_for: {
    type: String,
    default: null
  },
  genre: {
    type: String,
    default: null
  },
  spotify_link: {
    type: String, 
    default: null
  },
  apple_music_link: {
    type: String, 
    default: null
  }

})

module.exports = mongoose.model('Song', songSchema)


/*
Schema for the JSON output
{
#     'title': string, 
#     'artist': string, 
#     'album': string, 
#     'released': string, 
      'good_for': string, 
      'genre': string
# }


*/
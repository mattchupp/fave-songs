const express = require('express')
const cors = require('cors')
const router = express.Router()
const Song = require('../models/Song')


// Get all Songs
// route /api/v1/songs
router.get('/', cors(), async (req, res) => {
  try {
    const songs = await Song.find()
    res.json(songs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Get single ticket
// route -> /api/v1/songs/:id
router.get('/:id', getSong, (req, res) => {
  res.send(res.song)
})


// Create new song
router.post('/', async (req, res) => {
  const song = new Song ({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    year_released: req.body.year_released,
    good_for: req.body.good_for, 
    genre: req.body.genre
  })

  try {
    const newSong = await song.save()
    res.status(201).json(newSong)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})



// Updating a ticket
router.patch('/:id', getSong, async (req, res) => {
  if (req.body.title != null) {
    res.song.title = req.body.title
  }
  if (req.body.artist != null) {
    res.song.artist = req.body.artist
  }
  if (req.body.album != null) {
    res.song.album = req.body.album
  }
  if (req.body.year_released != null) {
    res.song.year_released = req.body.year_released
  }
  if (req.body.good_for != null){
    res.song.good_for = req.body.good_for
  }
  if (req.body.genre != null){
    res.song.genre = req.body.genre
  }
  // !** needs work **!
  if (req.body.links.spotify != null) {
    res.song.links.spotify = req.body.links.spotify
  }
  // !** needs work **!
  if (req.body.links.apple_music != null) {
    res.song.links.apple_music = req.body.links.apple_music
  }

  try {
    const updatedSong = await res.song.save()
    res.json(updatedSong)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


// Deleting a ticket
router.delete('/:id', getSong, async (req, res) => {
  try {
    await res.song.remove()
    res.json({ message: 'Deleted Song'})
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})



// Middleware function
async function getSong(req, res, next) {
  let song
  try {
    song = await Song.findById(req.params.id)
    if(song == null) {
      return res.status(404).json({ message: 'Cannot find ticket'})
    }
  } catch (err){
    return res.status(500).json({ message: err.message })
  }

  res.song = song
  next()
}




module.exports = router

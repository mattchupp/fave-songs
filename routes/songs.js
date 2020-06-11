const express = require('express')
const cors = require('cors')
const router = express.Router()
const Song = require('../models/Song')

// Get all Songs
router.get('/', cors(), async (req, res) => {
  try {
    const songs = await Song.find()
    res.json(songs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Get single ticket
router.get('/:id', getSong, (req, res) => {
  res.send(res.song)
})

/*
// Create new ticket
router.post('/', async (req, res) => {
  const ticket = new Ticket ({
    ticket_title: req.body.ticket_title,
    ticket_description: req.body.ticket_description,
    ticket_creator: req.body.ticket_creator,
  })

  try {
    const newTicket = await ticket.save()
    res.status(201).json(newTicket)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating a ticket
router.patch('/:id', getTicket, async (req, res) => {
  if (req.body.ticket_title != null) {
    res.ticket.ticket_title = req.body.ticket_title
  }
  if (req.body.ticket_description != null) {
    res.ticket.ticket_description = req.body.ticket_description
  }
  if (req.body.ticket_creator != null) {
    res.ticket.ticket_creator = req.body.ticket_creator
  }
  if (req.body.ticket_owner != null) {
    res.ticket.ticket_owner = req.body.ticket_owner
  }
  if (req.body.ticket_status != null){
    res.ticket.ticket_status = req.body.ticket_status
  }
  if (req.body.date_created != null){
    res.ticket.date_created = req.body.date_created
  }

  try {
    const updatedTicket = await res.ticket.save()
    res.json(updatedTicket)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting a ticket
router.delete('/:id', getTicket, async (req, res) => {
  try {
    await res.ticket.remove()
    res.json({ message: 'Deleted ticket'})
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

*/

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

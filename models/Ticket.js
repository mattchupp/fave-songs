const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  ticket_title: {
    type: String,
    required: true
  },
  ticket_description: {
    type: String,
    required: true
  },
  ticket_creator: {
    type: String,
    required: true
  },
  ticket_owner: {
    type: String,
    default: 'Unassigned'
  },
  ticket_status: {
    type: String,
    default: 'Open'
  },
  date_created: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('Ticket', ticketSchema)

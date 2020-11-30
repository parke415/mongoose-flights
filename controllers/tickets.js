const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  res.render('tickets/new', {title: 'New Ticket'});
}

function create(req, res) {

}
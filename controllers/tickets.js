const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  delete: deleteTicket
};

function newTicket(req, res) {
  res.render('tickets/new', {title: 'New Ticket', id: req.params.id});
}

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, (err, ticket) => {
      res.redirect(`/flights/${req.params.id}`);
  })
}

function deleteTicket(req, res) {
  Ticket.deleteOne({_id: req.params.ticketId}, (err, ticket) => {
    res.redirect(`/flights/${req.params.flightId}`);
  });
}
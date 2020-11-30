const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const DEFAULT_DATE = new Flight().departs.toISOString().slice(0, 16);
const AIRPORTS = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'];

module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, (err, flights) => res.render('flights/index', {title: 'Flight Schedule', flights}));
}

function show(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    const unavailable = [];
    flight.destinations.forEach(destination => unavailable.push(destination.airport));
    const available = AIRPORTS.filter(airport => flight.airport !== airport && !unavailable.includes(airport));
    Ticket.find({flight: flight._id}, function(err, tickets) {
      const testTicket1 = new Ticket;
      testTicket1.seat = 'A15';
      testTicket1.price = 399;
      const testTicket2 = new Ticket;
      testTicket2.seat = 'A20';
      testTicket2.price = 405;
      const testTickets = [testTicket1, testTicket2];
      res.render('flights/show', {title: `${flight.airline} Airlines — Flight ${flight.flightNo}`, flight, tickets: testTickets, available, DEFAULT_DATE});
    });
  });
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'New Flight', DEFAULT_DATE});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(err => {
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
  });
}
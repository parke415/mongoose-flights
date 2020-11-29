const Flight = require('../models/flight');

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
  Flight.findById(req.params.id, (err, flight) => res.render('flights/show', {title: `${flight.airline} Airlines — Flight ${flight.flightNo}`, flight}));
}

function newFlight(req, res) {
  res.render('flights/new', {title: 'New Flight', date: new Flight().departs.toISOString().slice(0, 16)});
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(err => {
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
  });
}
const Flight = require('../models/flight');

module.exports = {
  index,
  // show,
  // new: newFlight,
  // create,
  // delete: deleteFlight,
  // edit,
  // update
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    // res.redirect('/flights');
    res.redirect(`/flights/${flight._id}`);
  });
}
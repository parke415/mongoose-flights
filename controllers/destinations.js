const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    if (err) res.redirect(`/flights/${flight._id}`);
    flight.destinations.push(req.body);
    flight.save(err => {res.redirect(`/flights/${flight._id}`)});
  });
}
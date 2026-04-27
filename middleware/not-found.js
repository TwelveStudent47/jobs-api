const notFound = (req, res) => res.status(401).send("Route does not exist");

module.exports = notFound;
const Book = require('./book.model')

const getBooks = (req, res) => {
  // aggregate test
  Book.aggregate()
    .lookup({ from: 'members', localField: 'id', foreignField: 'id', as: 'members' })
    .exec((err, actors) => (err ? res.status(500).json(err) : res.status(200).json(actors)))
}

const getBookById = (req, res) => {
  Book.findOneByName(req.params.name)
    .then(books => res.status(200).json(books))
    .catch(error => res.status(500).json(error))
}

const createBook = (req, res) => {
  Book.createOne(req.body)
    .then(book => res.status(200).json(book))
    .catch(error => res.status(500).json(error))
}

module.exports = {
  getBooks,
  getBookById,
  createBook
}

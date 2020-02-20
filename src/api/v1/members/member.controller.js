const Member = require('./member.model')

const getMembers = (req, res) => {
  Member.findAll()
    .then(members => res.status(200).json(members))
    .catch(error => res.status(500).json(error))
}

const getMemberById = (req, res) => {
  Member.findOneByName(req.params.name)
    .then(members => res.status(200).json(members))
    .catch(error => res.status(500).json(error))
}

const createMember = (req, res) => {
  Member.createOne(req.body)
    .then(member => res.status(200).json(member))
    .catch(error => res.status(500).json(error))
}

module.exports = {
  getMembers,
  getMemberById,
  createMember
}

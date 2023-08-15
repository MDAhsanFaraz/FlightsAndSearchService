const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');
class AirportRespository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;
const { CityRepository } = require('../repository/index');

class CityService {
	constructor() {
		this.cityRepository = new CityRepository();//creating a new obj of class CityRepositiory 
	}

	async createCity(data) {
		try {
			const city = await this.cityRepository.createCity(data);
			return city;
		}
		catch (error) {
			console.log("Something went wrong at service layer");
			throw { error };
		}
	}

	async deleteCity(cityId) {
		try {
			const response = this.cityRepository.deletecity(cityId);
			return response;
		}
		catch (error) {
			console.log("Something went wrong at service layer");
			throw { error };
		}
	}


	async updateCity(cityId,data) {
		try {
			const city=await this.cityRepository.updateCity(cityId,data);
			return city;
		}
		catch (error) {
			console.log("Something went wrong at service layer");
			throw { error };
		}
	}
	async getCity(data) {
		try {
			const city=await this.cityRepository.getCity(cityId);
			return city;
		}
		catch (error) {
			console.log("Something went wrong at service layer");
			throw { error };
		}
	}
}
module.exports=CityService;
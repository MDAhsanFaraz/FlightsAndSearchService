const { City } = require('../models/index')
class CityRepository {
    async createCity({ name }) // in db{name,cityid,etc..}//directly destructring the object
    {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("Something went wrong in the repositiory layer");;
            throw{error};
        }
    }

    async deletecity(cityId) {
        try {
            await City.destory(
                {
                    where:
                    {
                        id: cityId
                    }
                });
                return true;
        }
        catch(error)
        {
            console.log("Something went wrong in the repositiory layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};            
        }
    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports = CityRepository;
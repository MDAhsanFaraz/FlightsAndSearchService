const { City } = require('../models/index')
class CityRepository 
{
  async createCity({ name }) 
  {
    try 
    {
      const city = await City.create({ name });
      return city;
    }
    catch (error) 
    {
      throw{error};
    }
  }
  async deletecity({cityid})
  {
    try
    {
      await City.destory(
        {
        where:
        {
          id:cityid
        }
      });
    }
    catch
    {
      throw{error};
    }
  }
}
module.exports=CityRepository;
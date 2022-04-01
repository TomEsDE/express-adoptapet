import petService from '../service/pet';

class PetController {
  async root(req, res) {
    try {
      console.log('pet!');
      return res.status(200).send(createHtml());
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      console.log('show >> params.petType: ', req.params?.petType);
      const result = await petService.show(req.params.petType, req.params.pet);

      if (result) return res.status(200).send(result);
      else return res.status(404).json('not found');
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

export default new PetController();

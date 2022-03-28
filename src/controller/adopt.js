import userService from '../service/adopt';

class AdoptController {
  async createUser(req, res) {
    try {
      console.log('createuser >> req.body: ', req.body);
      const id = await userService.createUser(req.body);
      console.log('after createuser >> id: ', id);

      if (!id) throw new Error('Error createUser');

      return res.status(200).json({ id: id });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getUser(req, res) {
    try {
      console.log('getuser >> params.id: ', req.params?.id);
      const result = await userService.getUser(req.params.id);
      console.log('after getuser', result);

      if (result) return res.status(200).json(result);
      else return res.status(404).json('not found');
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

export default new AdoptController();

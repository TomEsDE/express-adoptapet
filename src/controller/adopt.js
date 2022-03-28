import userService from '../service/animals';

class AdoptController {
  async root(req, res) {
    try {
      console.log('root');
      return res.status(200).send(createIndex());
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

function createIndex() {
  let indexHtml = `<h1>Adopt a Pet!</h1>`;
  indexHtml += `<p>Browse through the links to find your new furry friend</p>`;
  indexHtml += `<ul>
      <li><a href='/animals/dogs'>Dogs</a></li>
      <li><a href='/animals/cats'>Cats</a></li>
      <li><a href='/animals/rabbits'>Rabbits</a></li>
    </ul>`;

  return indexHtml;
}

export default new AdoptController();

import pets from '../model/pets';

class AnimalsService {
  async show(petType) {
    let indexHtml = `<h1>List of pets</h1><ul>`;

    console.log(pets[petType]);

    const petAr = pets[petType];
    // <li></li>

    petAr.forEach((pet) => {
      indexHtml += `
          <li>
            <a href='/animals/${petType}/${pet.name}'>${pet.name}</a>
          </li>`;
    });

    indexHtml += `</ul>`;

    return indexHtml;
  }
}

export default new AnimalsService();

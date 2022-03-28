import pets from '../model/pets';

class PetService {
  async show(petType, petName) {
    let indexHtml = `<h1>List of pets</h1><ul>`;

    console.log(pets[petType]);

    const pet = pets[petType].find((pet) => pet.name === petName);
    // <li></li>

    indexHtml += `
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Breed: ${pet.breed}</p>
            <p>${pet.description}</p>`;

    indexHtml += `</ul>`;

    return indexHtml;
  }
}

export default new PetService();

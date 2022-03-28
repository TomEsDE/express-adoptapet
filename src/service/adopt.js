class AdoptService {
  createUser(userDto) {
    const { username, email, validated } = userDto;

    return user.createUser(username, email, validated);
  }

  getUser(id) {
    return user.getUser(id);
  }

  async getUser(id) {
    const userDB = await user.getUser(id);

    console.log('userDB', userDB.id);
    userDB.favourites = await user.getUserFavourites(userDB.id);

    return userDB;
  }
}

export default new AdoptService();

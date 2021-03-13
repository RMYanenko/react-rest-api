export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters() {
    return this.getResource(
      '/characters?page=5&pageSice=10'
    );
  }

  getCharacter(id) {
    return this.getResource(
      `/characters/${id}`
    );
  }

  getAllBooks(){
    return this.getResource(
        `/books/`
    );
  }
  getBook(id){
    return this.getResource(
        `/books/${id}`
    );
  }
  getAllHouses(){
    return this.getResource(
        `/houses/`
    )
  }
  getHouse(id){
    return this.getResource(
        `/houses/{id}`
    )
  }

}

// const got = new GotService();

// got.getAllCharacters().then((res) => {
//   res.forEach((item) => {
//     console.log(item.name);
//   });
// });

// got.getCharacter(202).then((res) => console.log(res));
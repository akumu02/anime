import axios from "axios";

export class SearchAnime {
  allCharacters = async () => {
    const characters = await characterApi.get(
      "https://api.jikan.moe/v4/characters"
    );
    return characters;
  };

  charactersByPage = async (pageNumber: number) => {
    const characters = await characterApi.get(
      `https://api.jikan.moe/v4/characters?page=${pageNumber}&order_by=favorites&sort=desc`
    );

    return characters;
  };

  characterById = async (characterId: number) => {
    const character = await characterApi.get(
      `https://api.jikan.moe/v4/characters/${characterId}/full`
    );

    return character;
  };
}

const characterApi = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

export default characterApi;

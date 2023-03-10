import { OptionCard } from "./OptionCard";
import characterApi from "../api/searchAnime";
import { SearchAnime } from "../api/searchAnime";

import imgCharacter from "../assets/kakashi.jpg";
// import imgPhrase from "../assets/reigen.jpg";
import {
  opLogo,
  narutoLogo,
  gurrenlLogo,
  cgeassLogo,
  shingekiLogo,
  dnoteLogo,
  smoonLogo,
  fmetalLogo,
} from "../assets/index";

import {
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  TitlePage,
  TitlePageContainer,
  // Separator,
  CardStats,
  ButtonText,
  CharacterCardTextTitle,
  // ImageContainer,
  LogoImage,
} from "./CardStyles";
import { useEffect, useInsertionEffect, useState } from "react";
import { AxiosResponse } from "axios";

const characterDesc = "The option to know the anime character you are today";
// const phraseDesc = "The option to get an anime phrase for today";

export const CardView = () => {
  const [optionCharacter, setoptionCharacter] = useState({
    title: "Character",
    id: "1",
    img: imgCharacter,
    desc: characterDesc,
  });
  const [characterTitle, setCharacterTitle] = useState("Character");
  const [characterImage, setCharacterImage] = useState(imgCharacter);
  const [characterDescription, setCharacterDescription] =
    useState(characterDesc);
  const [buttonTextDesc, setButtonTextDesc] = useState("Get!");
  const [isAnimeTitle, setIsAnimeTitle] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const getPageNumber = (characters: AxiosResponse<any, any>) => {
    const totalPages = characters.data.pagination.last_visible_page;
    const maxPage = Math.round((totalPages * 8) / 100);
    const pageNumber = Math.floor(Math.random() * maxPage);

    return pageNumber;
  };

  const getRandomCharacter = (characters: AxiosResponse<any, any>) => {
    const character =
      characters.data.data[
        Math.floor(Math.random() * characters.data.data.length)
      ];
    return character;
  };

  const getCharacter = async () => {
    // setLoading(true);
    setCharacterImage(
      "https://media.tenor.com/G6W5nikD-xsAAAAC/popteamepic-now-loading.gif"
    );
    setCharacterDescription("");
    setCharacterTitle("");

    try {
      const searchAnime = new SearchAnime();

      const allCharacters = await searchAnime.allCharacters();
      const pageNumber = getPageNumber(allCharacters);
      let charactersByPage: AxiosResponse<any, any>;

      charactersByPage = await searchAnime.charactersByPage(pageNumber);

      const {
        mal_id: characterId,
        about: desc,
        data: characterInfo,
        name,
        images,
      } = getRandomCharacter(charactersByPage);

      const characterByid = await searchAnime.characterById(characterId);
      const characterData = characterByid.data.data;
      const title = characterData.anime
        ? characterData.anime[0]?.anime?.title
        : characterData.manga[0]?.manga?.title;
      // const mangaTitle = characterByid?.data.data.manga[0]?.manga?.title;

      setCharacterTitle(`${name} from ${title}`);

      setoptionCharacter({
        title: name,
        id: "1",
        img: images.jpg.image_url,
        desc: name,
      });
      setCharacterDescription(desc);
      setCharacterImage(images.jpg.image_url);
      setIsAnimeTitle(true);
      setButtonTextDesc("Get another!");
    } catch (error) {
      console.log("Error");
      setIsAnimeTitle(false);
      setCharacterTitle("Character");
      setCharacterImage(imgCharacter);
      setCharacterDescription(characterDesc);
      setButtonTextDesc("Get!");
    }

    // setTimeout(async () => {
    //   setLoading(false);
    // }, 3000);
  };

  useEffect(() => {
    const value = characterTitle ? false : true;
    setLoading(value);
  }, [characterTitle]);

  return (
    <>
      <TitlePageContainer>
        <TitlePage>Your Anime uwu</TitlePage>
      </TitlePageContainer>

      {/* <CardContainer> */}
      {/* <Card
          title={"Character"}
          id="1"
          img={imgCharacter}
          desc={characterDesc}
        /> */}
      <OptionCard option={optionCharacter}>
        {() => (
          <>
            <CardImage background={characterImage} />
            <CardTextWrapper>
              {isAnimeTitle ? (
                <CharacterCardTextTitle>
                  {characterTitle}
                </CharacterCardTextTitle>
              ) : (
                <CardTextTitle>{characterTitle}</CardTextTitle>
              )}
              <CardTextBody>{characterDescription}</CardTextBody>
            </CardTextWrapper>
            <CardStats>
              {loading ? (
                <></>
              ) : (
                <ButtonText onClick={getCharacter}>{buttonTextDesc}</ButtonText>
              )}
            </CardStats>
          </>
        )}
      </OptionCard>
      <LogoImage background={opLogo} />
      {/* <ImageContainer>
        <LogoImage background={opLogo} />
      </ImageContainer> */}
      {/* <Separator />
        <Card title={"Phrase"} id="2" img={imgPhrase} desc={phraseDesc} /> */}
      {/* </CardContainer> */}
    </>
  );
};

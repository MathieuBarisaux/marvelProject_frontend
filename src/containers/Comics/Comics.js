import "./Comics.scss";

import axios from "axios";
import { useEffect, useState } from "react";

// ** Components **
import SearchBar from "../../components/SearchBar/SearchBar";
import ComicSheet from "../../components/ComicSheet/ComicSheet";

const Comics = () => {
  const [allComics, setAllComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [searchComics, setSearchComics] = useState("");

  const [paging, setPaging] = useState(0);

  useEffect(() => {
    const callServer = async () => {
      const skip = paging * 100;

      let nameComics = "";
      if (searchComics) {
        nameComics = `&title=${searchComics}`;
      }

      const response = await axios.get(
        `https://marvelprojectback.herokuapp.com/comics?&skip=${skip}${nameComics}`
      );

      setAllComics(response.data.results);

      setIsLoading(false);
    };
    callServer();
  }, [paging, searchComics]);

  return (
    <div>
      <div className="Comics">
        <SearchBar
          placeholder={"Search your favorite comics"}
          value={searchComics}
          setValue={setSearchComics}
          setPaging={setPaging}
        />

        <div className="Comics__title container">
          <h1>House of Ideas, since 1940's</h1>
        </div>

        <div className="shadow_left"></div>
        <div className="shadow_right"></div>
        <div className="Comics__container">
          {isLoading === false &&
            allComics.map((item) => {
              return <ComicSheet item={item} key={item._id} />;
            })}
        </div>
        {searchComics === "" && (
          <div className="Comics__paging">
            {paging > 0 && (
              <>
                {paging > 1 && (
                  <>
                    <i
                      className="fas fa-angle-left"
                      onClick={() => {
                        setPaging(0);
                      }}
                    ></i>
                    <p>...</p>
                  </>
                )}
                <p
                  onClick={() => {
                    setPaging(paging - 1);
                  }}
                >
                  {paging}
                </p>
              </>
            )}

            <div className="Comics__paging__currentPage">
              <p>{paging + 1}</p>
            </div>

            {paging < 14 && (
              <>
                <p
                  onClick={() => {
                    setPaging(paging + 1);
                  }}
                >
                  {paging + 2}
                </p>
                <p>...</p>
                <i
                  className="fas fa-angle-right"
                  onClick={() => {
                    setPaging(14);
                  }}
                ></i>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comics;

import API from "./request/API";
import { useEffect, useState } from "react";
import MovieRow from "./Components/MovieRow/MovieRow";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            //Pega a Lista do API.JS
            let list = await API.getHomeList();
            setMovieList(list);
        };

        loadAll();
    }, []);

    return (
        <div className="homePage">
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} item={item.items} />
                ))}
            </section>
        </div>
    );
};

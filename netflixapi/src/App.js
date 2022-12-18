import API from "./request/API";
import { useEffect, useState } from "react";
import MovieRow from "./Components/MovieRow/MovieRow";
import "./App.css";
import FeatureMovie from "./Components/Feature/FeatureMovie";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setfeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            //Pega a Lista do API.JS
            let list = await API.getHomeList();
            setMovieList(list);
            let originals = list.filter((i) => i.slug === "originals");
            let randomChosen = Math.floor(
                Math.random() * (originals[0].items.results.length - 1)
            );
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await API.getMovieInfo(chosen.id, "tv");
            setfeatureData(chosenInfo);
        };
        loadAll();
    }, []);

    return (
        <div className="homePage">
            {featureData && <FeatureMovie item={featureData} />}
            <section className="lists">
                <div>
                    {movieList.map((item, key) => (
                        <MovieRow
                            key={key}
                            title={item.title}
                            items={item.items}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

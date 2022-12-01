const API_KEY = "e7d2d1c181c828f4c9b5d3df76307afb";
const API_BASE = "https://api.themoviedb.org/3";

const fetchMain = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: await fetchMain(
                    `/discover/tv?with_network=213?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "trending",
                title: "Recomendados",
                items: await fetchMain(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await fetchMain(
                    `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "action",
                title: "Ação",
                items: await fetchMain(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await fetchMain(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "horror",
                title: "Terror",
                items: await fetchMain(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "Romance",
                title: "Romance",
                items: await fetchMain(
                    `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await fetchMain(
                    `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
                ),
            },
        ];
    },
};

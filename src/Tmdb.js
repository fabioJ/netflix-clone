const API_KEY = "484452d1d2702190dbb19f3c30a0e9e5";
const API_BASE = "https://api.themoviedb.org/3";

//https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=484452d1d2702190dbb19f3c30a0e9e5

/*
- Originais netflix
- Recomendados (trending)
- Top rated
- ação
- comédia
- terror
- romance
- documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const TMDBList = {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "action",
                title: "Ação",
                items: basicFetch(`/discover/movie?language=pt-BR&with_genres=28&api_key=${API_KEY}`),
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: basicFetch(`/discover/movie?language=pt-BR&with_genres=35&api_key=${API_KEY}`),
            },
            {
                slug: "horror",
                title: "Terror",
                items: basicFetch(`/discover/movie?language=pt-BR&with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: basicFetch(`/discover/movie?language=pt-BR&with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: basicFetch(`/discover/movie?language=pt-BR&with_genres=99&api_key=${API_KEY}`)
            }
        ]
    }

}

export default TMDBList;
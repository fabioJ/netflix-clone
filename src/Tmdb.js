const API_KEY = "484452d1d2702190dbb19f3c30a0e9e5";
const API_BASE = "https://api.themoviedb.org/3";

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

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: []
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: []
            },
            {
                slug: "action",
                title: "Ação",
                items: []
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: []
            },
            {
                slug: "horror",
                title: "Terror",
                items: []
            },
            {
                slug: "romance",
                title: "Romance",
                items: []
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: []
            }
        ]
    }

}
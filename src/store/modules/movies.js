import axios from 'axios';
import { base_url, api_key } from '../../shared/keys';

const state = {
    search: null,
    movies: [],
    pages: null,
    page: 1,
    status: 'success'
};

const getters = {
    search: (state) => state.search,
    movies: (state) => state.movies,
    pages: (state) => state.pages,
    page: (state) => state.page,
    status: (state) => state.status,
};

const actions = {
    async fetchMovies({ commit }, { value, page }) {
        commit('setStatus', 'pending');
        commit('setSearch', value);

        try {
            const response = await axios.get(base_url + `?api_key=${ api_key }&query=${ encodeURI(value) }&page=${ page  }`)

            commit('setMovies', response.data.results);
            commit('setPages', response.data.total_pages);
            commit('setPage', response.data.page);

            commit('setStatus', 'success');
        } catch (error) {
            commit('setStatus', 'error');
        }
    }
};

const mutations = {
    setSearch: (state, search) => state.search = search,
    setMovies: (state, movies) => state.movies = movies,
    setPages: (state, pages) => state.pages = pages,
    setPage: (state, page) => state.page = page,
    setStatus: (state, status) => state.status = status
};

export default {
    state,
    getters,
    actions,
    mutations
};

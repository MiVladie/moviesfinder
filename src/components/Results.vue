<template>    
    <v-main v-if="search != null" class="main mt-6">
        <div v-if="status === 'pending'" class="center">
            <v-progress-circular color="primary" indeterminate />
        </div>

        <div v-else-if="status === 'error'" class="message">
            <h2>{{ errorMessage }}</h2>

            <v-btn
                @click="onTryAgainHandler"
                class="mt-4"
                color="primary"
                dark rounded>
                {{ errorButton }}
            </v-btn>
        </div>

        <div v-else-if="movies.length !== 0">
            <h2>{{ successMessage }}<i>{{ search }}</i></h2>

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="movie of movies" :key="movie.id">
                    <Movie
                        class="ma-3"
                        button="Read more"
                        :title="movie.title"
                        :overview="movie.overview"
                        :rating="movie.vote_average"
                        :release="movie.release_date || 'Unknown date'"
                        :poster="movie.poster_path != null ? img_base_url + movie.poster_path : getImageUrl('no_poster.png')"
                        :backdrop="movie.backdrop_path != null ? img_base_url + movie.backdrop_path : getImageUrl('no_poster.png')" />
                </v-flex>
            </v-layout>

            <v-pagination
                v-if="pages !== 1"
                class="my-4"
                color="primary"
                v-model="page"
                @input="onSelectPageHandler"
                :length="pages"
                :total-visible="7" />
        </div>

        <h2 v-else class="message">{{ noDataMessage }}<i>{{ search }}</i></h2>
    </v-main>
</template>

<script>
    import Movie from './Movie';
    
    import { img_base_url } from '../shared/keys';
    import { getImageUrl } from '../shared/utility';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Results',
        components: {
            Movie
        },
        methods: {
            onSelectPageHandler(page) {
                window.scrollTo(0, 0);
                
                this.fetchMovies({ value: this.search, page: page })
            },
            onTryAgainHandler() {
                this.fetchMovies({ value: this.search, page: this.page })
            },
            ...mapActions(['fetchMovies']),
            getImageUrl
        },
        computed: mapGetters(['search', 'movies', 'pages', 'page', 'status']),
        props: ['successMessage', 'noDataMessage', 'errorMessage', 'errorButton'],
        data: () => ({
            img_base_url
        })
    }
</script>

<style scoped>
    .main {
        width: 80vw;
        max-width: 1920px;

        margin: auto;
    }

    .main .center {
        display: flex;
        justify-content: center;
    }

    .main .message {
        text-align: center;
    }
</style>

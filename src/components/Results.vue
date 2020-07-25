<template>    
    <v-main class="mt-6" style="width: 80vw; max-width: 1920px; margin: auto;">
        <div v-if="loading" style="display: flex; justify-content: center;">
            <v-progress-circular indeterminate color="primary" />
        </div>

        <div v-else-if="error" style="text-align: center">
            <h2>Oops! An error has occured. Please, try again.</h2>

            <v-btn
                class="mt-4"
                @click="onSearchHandler(data.page)"
                color="primary"
                dark rounded>
                Try again
            </v-btn>
        </div>

        <div v-else-if="data != null && data.results.length !== 0">            
            <h2>Your search result for: <i>{{ search }}</i></h2>

            <v-layout style="overflow-x: hidden;" justify-center row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="movie of data.results" :key="movie.id">
                    <Movie
                        class="ma-3"
                        :title="movie.title"
                        :overview="movie.overview"
                        :rating="movie.vote_average"
                        :release="movie.release_date"
                        :poster="movie.poster_path"
                        :backdrop="movie.backdrop_path" />
                </v-flex>
            </v-layout>

            <v-pagination
                v-if="data.total_pages !== 1"
                class="my-4"
                color="primary"
                v-model="data.page"
                @input="onSearchHandler"
                :length="data.total_pages"
                :total-visible="7" />
        </div>

        <h2 v-else-if="data != null && data.results.length === 0" style="text-align: center;">No results for: <i>{{ search }}</i></h2>
    </v-main>
</template>

<script>
import Movie from './Movie';

export default {
    name: 'Results',
    components: {
        Movie
    },
    methods: {
        onSearchHandler(page) {
            window.scrollTo(0,0);
            this.$emit('onPageSelect', page)
        }
    },
    props: ['data', 'search', 'loading', 'error']
}
</script>

<style>

</style>
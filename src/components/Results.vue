<template>    
    <v-container class="mt-6">
        <v-layout v-if="loading" justify-center>
            <v-progress-circular indeterminate color="primary" />
        </v-layout>

        <v-layout v-else-if="error" justify-center align-center>
            <v-col style="text-align: center;">
                <h2>Oops! An error has occured. Please, try again.</h2>
                <v-btn
                    @click="onSearchHandler(data.page)"
                    color="primary"
                    dark rounded>
                    Try again
                </v-btn>
            </v-col>
        </v-layout>

        <v-layout v-else-if="data != null && data.results.length !== 0" justify-center row wrap>
            <v-flex xs12 class="mx-3">
                <h2>Your search result for: <i>{{ search }}</i></h2>
            </v-flex>

            <v-flex v-for="movie of data.results" xs10 sm5 md4 lg3 :key="movie.id">
                <Movie
                    :title="movie.title"
                    :overview="movie.overview"
                    :rating="movie.vote_average"
                    :release="movie.release_date"
                    :poster="movie.poster_path"
                    :backdrop="movie.backdrop_path" />
            </v-flex>

            <v-flex v-if="data.total_pages !== 1" xs12 class="my-4">
                <v-pagination @input="onSearchHandler" color="primary" v-model="data.page" :length="data.total_pages" :total-visible="7" />
            </v-flex>
        </v-layout>

        <v-layout v-else-if="data != null && data.results.length === 0" justify-center align-center>
            <v-col style="text-align: center;">
                <h2>No results for: <i>{{ search }}</i></h2>
            </v-col>
        </v-layout>
    </v-container>
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
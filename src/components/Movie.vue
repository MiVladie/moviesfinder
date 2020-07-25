<template>
    <v-layout justify-center>
        <v-card outlined width="250px" class="ma-3">
            <v-img class="white--text align-end" gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)" height="300px" v-bind:src="poster != null ? this.img_base_url + poster : getImageUrl('no_poster.png')">
                <v-card-title class="title" style="line-height: 1.25em; text-shadow: 0 0 2px black">{{ title }}</v-card-title>
            </v-img>
            <v-card-subtitle>Rating: {{ rating }}/10</v-card-subtitle>
            <v-card-text class="text--primary">{{ release || 'Unknown date' }}</v-card-text>    
            <v-card-actions>
                <v-dialog v-model="dialog" max-width="600">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" color="primary">More info</v-btn>
                    </template>

                    <v-card>
                        <v-img height="300px" v-bind:src="backdrop != null ? this.img_base_url + backdrop : getImageUrl('no_poster.png')" />
                        <v-card-title class="headline">{{ title }}</v-card-title>
                        <v-card-text class="text--primary"><i>{{ release || 'Unknown date' }}</i></v-card-text> 
                        <v-card-text>{{ overview }}</v-card-text>
                        <v-card-subtitle>Rating: {{ rating }}/10</v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script>
export default {
    name: 'Movie',
    props: ['title', 'overview', 'rating', 'release', 'poster', 'backdrop'],
    methods: {
    getImageUrl(img) {
        return require(`../assets/images/${ img }`)
        }
    },
    data: () => ({
        dialog: false,
        img_base_url: 'http://image.tmdb.org/t/p/original'
    })
}
</script>

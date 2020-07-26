<template>
    <v-card outlined @click="dialog = true" hover>
        <v-img class="white--text align-end" height="450" gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)" :src="poster">
            <v-card-title class="title">
                {{ title }}
            </v-card-title>
        </v-img>
        <v-card-text style="height: 6em; overflow: hidden">{{ overview.substring(0, 95) }}{{ overview.length > 95 ? '...' : '' }}</v-card-text>  
        <v-card-text class="text--primary"><i>{{ release }}</i></v-card-text>  
        <v-card-actions>
            <v-btn
                @click.stop="dialog = true"
                color="primary"
                text>
                {{ button }}
            </v-btn>
        </v-card-actions>

        <Modal
            v-if="this.dialog"
            :dialog="this.dialog"
            @onClose="dialog = false"
            :backdrop="backdrop"
            :title="title"
            :overview="overview"
            :release="release"
            :rating="rating" />
    </v-card>
</template>

<script>
import Modal from './Modal';

export default {
    name: 'Movie',
    components: {
        Modal
    },
    props: ['title', 'overview', 'rating', 'release', 'poster', 'backdrop', 'button'],
    data: () => ({
        dialog: false
    })
}
</script>

<style scoped>
    .title {
        line-height: 1.25em;
        text-shadow: 0 0 2px black;
    }
</style>

<template>
    <v-card outlined @click="dialog = true" hover>
        <v-img class="white--text align-end" height="450" gradient="rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)" :src="poster != null ? this.img_base_url + poster : getImageUrl('no_poster.png')">
            <v-card-title
                class="title"
                style="line-height: 1.25em; text-shadow: 0 0 2px black">
                {{ title }}
            </v-card-title>
        </v-img>
        <v-card-text style="height: 6em; overflow: hidden">{{ overview.substring(0, 95) }}{{ overview.length > 95 ? '...' : '' }}</v-card-text>  
        <v-card-text class="text--primary"><i>{{ release || 'Unknown date' }}</i></v-card-text>  
        <v-card-actions>
            <v-btn
                @click.stop="dialog = true"
                color="primary"
                text>
                Read more
            </v-btn>
        </v-card-actions>

        <Modal
            v-if="this.dialog"
            :dialog="this.dialog"
            @onClose="dialog = false"
            :backdrop="backdrop || poster ? this.img_base_url + (backdrop || poster) : getImageUrl('no_poster.png')"
            :title="title"
            :overview="overview"
            :release="release"
            :rating="rating" />
    </v-card>
</template>

<script>
import Modal from './Modal';

import { img_base_url } from '../shared/keys';
import { getImageUrl } from '../shared/utility';

export default {
    name: 'Movie',
    components: {
        Modal
    },
    props: ['title', 'overview', 'rating', 'release', 'poster', 'backdrop'],
    methods: {
        getImageUrl
    },
    data: () => ({
        dialog: false,
        img_base_url
    })
}
</script>

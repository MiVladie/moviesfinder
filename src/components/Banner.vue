<template>
    <v-parallax :src="getImageUrl('background.jpg')" class="background" :style="[search == null ? { height: '100vh' } : { height: '60vh' }]">
        <div style="text-align: center; max-width: 80vw">
            <h1 style="color: white; line-height: 1.15em;">
                {{ title }}
            </h1>

            <p class="mt-2" style="color: white">
                {{ description }}
            </p>

            <v-text-field
                v-model="value"
                :label="label"
                class="mt-8"
                style="max-width: 500px; margin: auto"
                background-color="white"
                height="55"
                hide-details
                prepend-inner-icon="mdi-magnify"
                @keyup.enter="onSubmitHandler"
                solo rounded />

            <v-btn
                class="mt-2"
                :disabled="this.value.trim().length === 0"
                @click="onSubmitHandler"
                color="white"
                dark text rounded>
                {{ button }}
            </v-btn>
        </div>
    </v-parallax>
</template>

<script>
    import { getImageUrl } from '../shared/utility';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Banner',
        props: ['title', 'description', 'label', 'button'],
        methods: {
            onSubmitHandler() {
                this.fetchMovies({ value: this.value.trim(), page: 1 });
                this.value = '';
            },
            ...mapActions(['fetchMovies']),
            getImageUrl
        },
        computed: mapGetters(['search']),
        data: () => ({
            value: ''
        })
    }
</script>

<style scoped>
    .background {
        display: flex;
        justify-content: center;
        align-items: center;

        transition: height 0.5s;
    }
</style>

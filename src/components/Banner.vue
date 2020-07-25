<template>
    <v-parallax :src="getImageUrl('background.jpg')" height="600" style="display: flex; justify-content: center; align-items: center;">
        <div style="text-align: center">
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
                background-color="white"
                height="55"
                hide-details
                prepend-inner-icon="mdi-magnify"
                @keyup.enter="onSubmit"
                solo rounded />

            <v-btn
                class="mt-2"
                :disabled="this.value.trim().length === 0"
                @click="onSubmit"
                color="primary"
                dark text rounded>
                {{ button }}
            </v-btn>
        </div>
    </v-parallax>
</template>

<script>
import { getImageUrl } from '../shared/utility';

export default {
    name: 'Banner',
    props: ['title', 'description', 'label', 'button'],
    methods: {
        onSubmit() {
            if(this.value.trim().length === 0)
            return;

            this.$emit('onSubmit', this.value.trim());
            this.value = '';
        },
        getImageUrl
    },
    data: () => ({
        value: ''
    })
}
</script>

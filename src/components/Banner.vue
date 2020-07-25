<template>
    <v-parallax :src="getImageUrl('background.jpg')" height="600">
      <v-layout align-center justify-center>
        <v-col style="text-align: center; max-width: 600px" >
          <h1
            style="color:white">
            {{ title }}
          </h1>
          
          <p
            style="color:white">
            {{ description }}
          </p>

          <v-text-field
            v-model="value"
            :label="label"
            background-color="white"
            height="55"
            prepend-inner-icon="mdi-magnify"
            @keyup.enter="onSubmit"
            solo rounded />

          <v-btn
            :disabled="this.value.trim().length === 0"
            @click="onSubmit"
            color="primary"
            dark text rounded>
            {{ button }}
          </v-btn>
        </v-col>
      </v-layout>
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

<template>
    <v-dialog v-model="dialog" max-width="600" @click:outside="onCloseHandler">
        <v-card>
            <v-img :src="backdrop" max-height="337.5" />
            <v-card-title class="headline">{{ title }}</v-card-title>
            <v-card-text class="text--primary"><i>{{ release }}</i></v-card-text> 
            <v-card-text>{{ overview }}</v-card-text>
            <v-card-subtitle>Rating: {{ rating }}/10</v-card-subtitle>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onCloseHandler">Done</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'Modal',
    props: ['backdrop', 'title', 'overview', 'rating', 'release', 'dialog'],
    methods: {
        onCloseHandler() {
            this.$emit('onClose');
        }
    }
}
</script>

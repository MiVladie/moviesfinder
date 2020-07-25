<template>
  <v-app id='app'>
    <Banner
      title="Search for your favourite movies."
      description="What movie are you searching for?"
      label="Start typing.."
      button="Search"
      @onSubmit="onSearchHandler" />

    <Results
      :data="this.data"
      :search="this.search"
      :loading="this.loading"
      :error="this.error"
      @onPageSelect="onPageSelectHandler" />
  </v-app>
</template>

<script>
import Banner from './components/Banner'
import Results from './components/Results';

import { base_url } from './shared/keys';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    Banner,
    Results
  },
  methods: {
    async onSearchHandler(value) {
      this.loading = true;
      this.error = false;

      const url = base_url + `&query=${ encodeURI(value) }`;

      try {
        const response = await axios.get(url);

        this.search = value;
        this.loading = false;
        this.data = response.data;
      } catch (err) {
        this.loading = false;
        this.data = null;
        this.error = true;

        console.log(err)
      }
    },
    async onPageSelectHandler(page) {
      this.error = false;
      this.loading = true;
      this.page = page;

      const url = base_url + `&query=${ encodeURI(this.search) }&page=${ this.page }`;

      try {
        const response = await axios.get(url);

        this.loading = false;
        this.data = response.data;
      } catch (err) {
        this.loading = false;
        this.data = null;
        this.error = true;

        console.log(err)
      }
    }
  },
  data: () => ({
    search: '',
    loading: false,
    data: null,
    error: false,
    page: 1
  })
};
</script>

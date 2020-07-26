<template>
    <v-app id='app'>
        <Banner
            title="Search for your favourite movies."
            description="What movie are you searching for?"
            label="Start typing.."
            button="Search" />

        <Results
            successMessage="Your search result for: "
            noDataMessage="No results for: "
            errorMessage="Oops, an error has occured! Please, try again"
            errorButton="Try again" />
    </v-app>
</template>

<script>
    import Banner from './components/Banner'
    import Results from './components/Results';

    export default {
        name: 'App',
        components: {
            Banner,
            Results
        }
    };
</script>

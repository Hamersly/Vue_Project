<template>
    <v-container>
        <v-row>
            <v-col
                    cols="12"

            >
                <v-card
                        class="mx-auto"

                >
                    <v-container>
                    <v-row align="center" justify="center">
                        <v-img
                                :src="ad.imageSrc"
                                aspect-ratio="1"
                                contain
                                class="mb-1"
                                max-width="600"
                                max-height="600"
                        ></v-img>
                    </v-row>
                    </v-container>
                    <v-card-title class="mb-5">
                        <h1 class="text--primary">{{ad.title}}</h1>
                    </v-card-title>

                    <v-card-subtitle class="mb-5">
                        <p>{{ad.description}}</p>
                    </v-card-subtitle>

                    <v-card-actions class="d-flex justify-end" >
                        <v-btn class="warning">Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            ad () {
                const id = this.id
                return this.$store.getters.adById(id)
            }
        }
    }
</script>

<style scoped>

</style>
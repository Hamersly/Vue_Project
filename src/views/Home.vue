<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-carousel>
                    <v-carousel-item
                            v-for="ad in promoAds"
                            :key="ad.id"
                            :src="ad.imageSrc"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    >
                        <div class="car-link">
                            <v-btn class="primary" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row >
            <v-col
                cols="12"
                sm="6"
                md="4"
                    v-for="ad in ads"
                    :key="ad.id"
            >
                <v-card
                        class="mx-auto"
                        max-width="500"

                >
                    <v-img
                            :src="ad.imageSrc"
                            height="200px"

                    ></v-img>

                    <v-card-title style="justify-content: center">
                        {{ ad.title}}
                    </v-card-title>

                    <v-card-subtitle style="justify-content: center">
                        {{ ad.description }}
                    </v-card-subtitle>

                    <v-card-actions style="justify-content: center" >
                        <v-btn outlined :to="'/ad/' + ad.id">Open</v-btn>

                        <v-btn
                                color="primary"
                                raised
                        >
                            Buy
                        </v-btn>


                    </v-card-actions>


                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // @ is an alias to /src

    export default {
        computed: {
            promoAds () {
                return this.$store.getters.promoAds
            },
            ads () {
                return this.$store.getters.ads
            }
        }
    }
</script>
<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0,0,0,.3);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
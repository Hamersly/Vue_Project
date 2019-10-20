<template>

    <div>
    <v-container fluid>
        <div class="d-flex flex-nowrap">
                <v-carousel>
                    <v-carousel-item
                            v-for="ad in ads"
                            :key="ad.id"
                            :src="ad.imageSrc"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
        </div>
    </v-container>
    <v-container >
            <div class="d-flex flex-wrap justify-center">
            <div
                    class="ma-3"
                    v-for="ad in ads"
                    :key="ad.id"
            >
                <v-card
                        class="mx-auto"
                        max-width="344"
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
                        <v-btn outlined>Open</v-btn>

                        <v-btn
                                color="primary"
                                raised
                        >
                            Buy
                        </v-btn>


                    </v-card-actions>


                </v-card>
            </div>
            </div>
    </v-container>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        data () {
            return {
                ads: [
                    {
                        title: 'First ad',
                        description: 'Hello, i am description',
                        promo: false,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        id: '123'
                    },
                    {
                        title: 'Second ad',
                        description: 'Hello, i am description',
                        promo: true,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        id: '1234'
                    },
                    {
                        title: 'Third ad',
                        description: 'Hello, i am description',
                        promo: true,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        id: '12345'
                    },
                ]
            }
        },
        name: 'home',
        components: {}
    }
</script>

<template>
    <v-container >
        <v-row>
            <v-col
                    cols="12"
                    sm="6"
                    offset-sm="3"
            >
                <h1 class="text--secondary mb-3">My ads</h1>

                    <v-card

                            class="mx-auto elevation-10 mb-5 justify-lg"
                            outlined
                            v-for="ad in myAds" :key="ad.id"
                    >

                        <v-list-item>
                            <v-container fluid>
                            <v-row>
                                <v-col cols="3"
                                       offset-sm="0"

                                >
                            <v-img

                                    :src="ad.imageSrc"
                            ></v-img>
                                </v-col>
                                <v-col cols="7">
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">{{ad.title}}</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                                </v-col>
                                    <v-col cols="1">
                            <v-card-actions>
                                <v-btn
                                        class="info mt-8"
                                        :to="'/ad/' + ad.id"

                                >Open
                                </v-btn>
                            </v-card-actions>
                                </v-col>
                            </v-row>
                            </v-container>
                        </v-list-item>-

                    </v-card>
<!--                <v-card-->
<!--                        class="mx-auto"-->
<!--                        max-width="344"-->
<!--                        outlined-->
<!--                >-->
<!--                    <v-list-item three-line>-->
<!--                        <v-list-item-content>-->
<!--                            <div class="overline mb-4">OVERLINE</div>-->
<!--                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>-->
<!--                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>-->
<!--                        </v-list-item-content>-->

<!--                        <v-list-item-avatar-->
<!--                                tile-->
<!--                                size="80"-->
<!--                                color="grey"-->
<!--                        ></v-list-item-avatar>-->
<!--                    </v-list-item>-->

<!--                    <v-card-actions>-->
<!--                        <v-btn text>Button</v-btn>-->
<!--                        <v-btn text>Button</v-btn>-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed: {
            myAds () {
                return this.$store.getters.myAds
            }
        }
    }
</script>

<style scoped>

</style>
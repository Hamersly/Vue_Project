<template>
    <v-container>
        <v-row>
            <v-col
                    cols="12"
                    sm="6"
                    offset-sm="3"
            >
                <h1 class="text--secondary mb-3">Create new add</h1>

                <v-form
                        ref="form"
                        v-model="valid"
                        validation
                >
                    <v-text-field
                            name="title"
                            v-model='title'
                            label="Ad title"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    ></v-text-field>
                    <v-textarea
                            clearable
                            clear-icon="mdi-cancel"
                            v-model="description"
                            label="Description"
                            name="description"
                            type="text"
                            :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                </v-form>
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                        >
                            <v-btn
                                    :loading="loading3"
                                    :disabled="loading3"
                                    color="warning"
                                    class="ma-2 white--text mb-6"
                                    @click="loader = 'loading3'"
                            >
                                Upload
                                <v-icon right dark>mdi-cloud-upload</v-icon>
                            </v-btn>
                            <v-img
                                    src=""
                                    class="grey lighten-2"
                                    max-width="500"
                                    max-height="300"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                        >
                            <v-switch
                                    v-model="promo"
                                    label="Add to promo?"
                                    color="primary"
                            ></v-switch>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                        >
                          <v-btn
                                  class="success ml-2"
                                  @click="createAd"
                                  :disabled="!valid"
                          >Create ad
                          </v-btn>
                        </v-col>
                    </v-row>
                </v-container>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                loader: null,
                loading3: false,
                title: '',
                description: '',
                promo: false,
                valid: false

            }
        },
        methods: {
            createAd() {
                if (this.$refs.form.validate()) {
                    //logic
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://images11.popmeh.ru/upload/img_cache/5b3/5b322ef45b5f766fd0d2f04023e98610_fitted_800x3000.jpg'
                    }
                    this.$store.dispatch('createAd', ad)
                }
            }
        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            },
        },
    }
</script>

<style scoped>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
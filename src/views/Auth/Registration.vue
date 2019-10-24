<template>
    <v-container>
        <v-row class="align-center, mt-10" >
            <v-col cols="12" sm="6" offset-sm="3" class="align-center">

                <v-card >
                    <v-toolbar color="#E0E0E0" >
                        <v-toolbar-title>
                            <h3>Registration form</h3>
                        </v-toolbar-title>

                    </v-toolbar>

                    <v-list>
                        <v-container>
                            <v-form
                                    ref="form"
                                    v-model="valid"
                                    validation
                            >
                                <v-text-field
                                        prepend-icon="mdi-account"
                                        name="email"
                                        v-model='email'
                                        label="Email"
                                        type="email"
                                        :rules="emailRules"
                                ></v-text-field>
                                <v-text-field
                                        prepend-icon="mdi-lock"
                                        v-model="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        :counter="6"
                                        :rules="passwordRules"
                                ></v-text-field>
                                <v-text-field
                                        prepend-icon="mdi-lock"
                                        v-model="confirmPassword"
                                        label="Confirm Password"
                                        name="confirm-password"
                                        type="password"
                                        :counter="6"
                                        :rules="confirmPasswordRules"
                                ></v-text-field>
                            </v-form>
                        </v-container>
                        <v-container>
                            <v-btn
                                    color="primary"
                                    @click="onSubmit"
                                    style="margin-left: 20px"
                                    :disabled="!valid"
                            >Create account</v-btn>
                        </v-container>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return{
                email: '',
                password: '',
                valid: false,
                confirmPassword: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v == this.password || 'Password should match'
                ],
            }
        },
        methods: {
            onSubmit() {
                // if (this.$refs.form.validate()) {
                //     const user = {
                //         email: this.email,
                //         password: this.password
                //     }
                //        console.log(user)
                // }
            }
        }
    }
</script>

<style scoped>

</style>
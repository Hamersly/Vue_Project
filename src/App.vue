<template>
    <v-app id="inspire">
        <v-navigation-drawer
                temporary
                v-model="drawer"
                app

        >
            <v-list>
                <v-list-item
                    v-for="link of links"
                    :key="link.title"
                    :to="link.url"

                >
                    <v-list-item-icon>
                        <v-icon >{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
                app

        >
            <v-toolbar dark color="primary"
                       >
                <v-app-bar-nav-icon
                    @click="drawer = !drawer"
                    class="d-md-none"
                ></v-app-bar-nav-icon>

                <v-toolbar-title>
                    Ad aplication
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items class="d-none d-md-block">
                    <v-btn v-for="link of links"
                           :key="link.title"
                           :to="link.url"
                           text>
                        <v-icon left size="25">{{ link.icon}}</v-icon>
                        {{ link.title }}</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-card>




        <v-content>
            <router-view> </router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                drawer: false,
                links: [
                    {title: 'Login', icon: 'mdi-lock', url: '/login'},
                    {title: 'Registration', icon: 'mdi-face', url: '/registration'},
                    {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
                    {title: 'New ad', icon: 'mdi-note-plus-outline', url: '/new'},
                    {title: 'My abs', icon: 'mdi-format-list-bulleted', url: '/list'}
                ]
            }
        }
    }
</script>

<style>

</style>

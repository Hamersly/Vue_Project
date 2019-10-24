<template>
    <v-container>
        <v-row>
            <v-col cols="12"
                   sm="6"
                   offset-sm="3"
            >
                <h1 class="text--secondary">Orders</h1>
                <v-list
                        subheader
                        two-line
                        flat
                >
                    <v-list-item-group
                            v-for="order in orders"
                            :key="order.id"
                    >
                        <v-list-item>

                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="order.done"
                                            color="primary"
                                            @change="markDone(order)"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                            <div class="my-2">
                                <v-btn
                                        :to="'/ad/'+order.adid"
                                        color="primary"
                                >Open</v-btn>
                            </div>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return{
                orders: [
                    {
                        id: 'fds3',
                        name: 'Maksim',
                        phone: '8-800-2000-600',
                        adid: '123',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone(order) {
                order.done = true
            }
        }
    }
</script>

<style scoped>

</style>
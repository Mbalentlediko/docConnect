<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Products</h2>
        </div>
        <div class="row gap-2 justify-content-center my-2" v-if="services">
            <Card v-for="service in services" :key="service.serviceID">
                <!-- <template #cardHeader>
                    {{ service.serviceURL }}
                    <img :src="service.prodURL" loading="lazy" class="img-fluid" :alt="service.prodName">
                </template> -->
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ service.service_name }}</h5>
                    <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ service.price }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <router-link :to="{ name: 'service', params: { id: service.serviceID } }">
                            <button class="btn btn-success">View</button>
                        </router-link>
                        <button class="btn btn-dark">Select service</button>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>

    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
const store = useStore()
const services = computed(
    () => store.state.services
)
onMounted(() => {
    store.dispatch('fetchServices')
}) 
</script>

<style scoped></style>
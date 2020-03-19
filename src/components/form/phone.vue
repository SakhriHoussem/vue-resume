<template>
    <b-form-group
            label="Phone Number :"
            label-for="phone"
    >
        <b-form-input
                id="phone"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="text"
                placeholder="your phone number"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    export default {
        name: 'phone',
        props: ['text']
    }
</script>
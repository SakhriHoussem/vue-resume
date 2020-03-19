<template>
    <b-form-group
            label="Email :"
            label-for="email"
    >

        <b-form-input
                placeholder="Your Email"
                id="email"
                v-model="text"
        >
        </b-form-input>
    </b-form-group>
</template>
<script>
    export default {
       name: "email",
       props: ['text']
    }
</script>
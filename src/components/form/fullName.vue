<template>
    <b-form-group
            label="Full Name:"
            label-for="full-name"
    >
        <b-form-input
                id="full-name"
                v-model="text"
                type="text"
                required
                placeholder="Enter your Full Name"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    export default {
        name: 'fullName',
        props: ['text']
    }
</script>
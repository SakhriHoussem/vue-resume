<template>
    <b-form-group
            label="Desired job :"
            label-for="desired-job"
    >
        <b-form-input
                id="desired-job"
                v-model="text"
                type="text"
                required
                placeholder="Enter your Desired Job"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    export default {
        name: 'job',
        props: ['text']
    }
</script>
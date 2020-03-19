<template>
    <b-form-group
            label="Resume :"
            label-for="resume"
    >
        <b-form-textarea
                id="resume"
                v-model="text"
                placeholder="write your resume..."
                rows="3"
                max-rows="6"
        ></b-form-textarea>
    </b-form-group>
</template>
<script>
    export default {
        name: 'resume',
        props: ['text']
    }
</script>
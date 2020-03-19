<template>
    <div>
        <label for="links">add your links:</label>
        <b-form-tags
                input-id="links"
                separator=" ,;"
                v-model="text"
                class="mb-2"
                :tag-validator="tagValidator"
        ></b-form-tags>
    </div>
</template>

<script>
    export default {
        name: 'links',
        props: ['text'],
        methods: {
            tagValidator(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            }
        }
    }
</script>

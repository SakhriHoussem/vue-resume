<template>
    <b-tab title="Interests">
        <div>
            <label for="intersts">add your Interests:</label>
            <b-form-tags
                    input-id="intersts"
                    separator=" ,;"
                    v-model="array"
                    class="mb-2"
            ></b-form-tags>
        </div>
    </b-tab>
</template>

<script>
    export default {
        name: 'interest',
        props: {
            array: Array
        }
    }
</script>
<template>
    <b-tab title="Language">
        <b-row>
            <b-col>
                <b-input
                        id="full-name"
                        type="text"
                        required
                        placeholder="Enter your Language"
                ></b-input>
            </b-col>
            <b-col>
                <b-form-select :options="options"></b-form-select>
            </b-col>
        </b-row>
    </b-tab>
</template>

<script>
    export default {
        name: 'language',
        props: {
            options: Array[Object]
        }
    }
</script>
<template>
    <b-row>
        <b-col cols="12">
            <label>add your Social media:</label>
        </b-col>
        <b-col>
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col>
            <b-input
                    id="full-name"
                    v-model="text"
                    type="text"
                    required
                    placeholder="Enter your Full Name"
            ></b-input>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name:'social',
        props: {
            text: String,
            selected: {default: null},
            options: Array[Object],
        }
    }
</script>
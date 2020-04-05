<template>
    <div>
        <hr v-if="items.length">
        <h5 v-if="items.length">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
            {{title}}
        </h5>
        <b-row v-for="(item, index) in items"
               :key="index" class="hover"
               @mouseover="showByIndex = item"
               @mouseout="showByIndex = null"
        >
            <b-col cols="4">
                <span class="text-capitalize">
                    {{ item.name }}
                </span>
            </b-col>
            <b-col cols="8" class="pt-1">
                <b-button
                        v-show="showByIndex === item"
                        class="close mr-2 ml-2 small"
                        aria-label="close" type="button"
                        @click="removeStateElm(state, item)"
                        v-b-tooltip.hover
                        :title="$t('toggles.delete')"
                >x</b-button>
                <b-progress
                        variant="dark"
                        :value="item.level"
                        :max="100"
                        show-progress
                >
                </b-progress>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'unstyled-table',
        props: {
            items: {type: Array},
            title: {type: String, required: true},
            icon:  {type: String},
            state: {type: String, required: true},
        },
        data () {
            return {
                showByIndex: null
            }
        },
        methods: {
            removeStateElm(state, elm ) {
                this.$store.commit('removeStateElm', {
                    field: state,
                    elm: elm
                });
            },
        }
    }
</script>

<style scoped>
    .hover:hover{
        background-color: #14798d;
        border-radius: 3px;
    }
</style>

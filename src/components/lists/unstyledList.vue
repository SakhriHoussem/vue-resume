<template>
    <div>
        <hr v-if="items.length">
        <h5 v-if="items.length">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
            {{title}}
        </h5>
        <ul class="list-unstyled p-0">
            <li class="text-capitalize hover pl-1 pr-1" @mouseover="showByIndex = item" @mouseout="showByIndex = null" v-for="(item, index) in items" :key="index">
                <b-button
                        v-show="showByIndex === item"
                        class="close mr-2 ml-2 small"
                        aria-label="close" type="button"
                        @click="removeStateElm(state, item)"
                        v-b-tooltip.hover
                        variant="none"
                        :title="$t('toggles.delete')"
                >
                    <font-awesome-icon icon="times" />
                </b-button>
                <span v-if="typeof item === 'object'">{{ item.name }}<small>({{item.level}})</small></span>
                <span v-else>{{ item }}</span>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'unstyled-list',
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
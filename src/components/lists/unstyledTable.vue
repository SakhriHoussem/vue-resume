<template>
    <div>
        <hr v-if="items.length">
        <h5 v-if="items.length">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
            {{title}}
        </h5>
        <draggable
                v-model="items"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                :group="state"
        >
            <transition-group
                    type="transition"
                    :name="!drag ? 'flip-list' : null"
            >
                <b-row v-for="(item, index) in items"
                       :key="index" class="hover"
                       @mouseover="showByIndex = item"
                       @mouseout="showByIndex = null"
                       v-b-tooltip.hover
                       :title="$t('toggles.move')"
                >
                    <b-col cols="4">
                <span class="text-capitalize">
                    {{ item.name }}
                </span>
                    </b-col>
                    <b-col cols="8">
                        <b-button
                                v-show="showByIndex === item"
                                class="close mr-2 ml-2 small"
                                aria-label="close" type="button"
                                @click="removeStateElm(state, item)"
                                variant="none"
                                v-b-tooltip.hover
                                :title="$t('toggles.delete')"
                        >
                            <font-awesome-icon icon="times" />
                        </b-button>
                        <div class="pt-1">
                            <b-progress
                                    variant="dark"
                                    :value="item.level"
                                    :max="100"
                                    show-progress
                            >
                            </b-progress>
                        </div>
                    </b-col>
                </b-row>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'unstyled-table',
        components: {
            draggable,
        },
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
        computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
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
        cursor: pointer;
    }
</style>

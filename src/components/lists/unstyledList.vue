<template>
    <div>
        <hr v-if="items.length">
        <h5 v-if="items.length">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
            {{title}}
        </h5>
        <ul class="list-unstyled p-0">
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
                    <li class="text-capitalize hover pl-1 pr-1"
                        @mouseover="showByIndex = item"
                        @mouseout="showByIndex = null"
                        v-for="(item, index) in items"
                        :key="index"
                        v-b-tooltip.hover
                        :title="$t('toggles.move')"
                    >
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
                        <span v-if="typeof item === 'object'"> {{ item.name }} <small>  ( {{item.level}} ) </small></span>
                        <span v-else>{{ item }}</span>

                    </li>
                </transition-group>
            </draggable>
        </ul>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'unstyled-list',
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
                showByIndex: null,
                drag: null
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
        cursor: grab;
    }
    .hover:active{
        cursor: grabbing;
    }
</style>
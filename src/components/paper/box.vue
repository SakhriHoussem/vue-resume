<template>
    <div>
        <div v-if="item">
            <h3 class="text-info">
                <font-awesome-icon :icon="icon" />
                {{title}}
            </h3>
            <div
                    class="box"
                    @mouseover="showByIndex = item"
                    @mouseout="showByIndex = null"
            >
                <b-button v-show="showByIndex === item"
                          class="close p-1 small"
                          aria-label="close" type="button"
                          @click="removeItem"
                          v-b-tooltip.hover
                          :title="$t('toggles.delete')" variant="none"
                >
                    <font-awesome-icon size="lg" icon="times" />
                </b-button>
                <b-button v-show="showByIndex === item"
                          class="close p-1 small"
                          aria-label="edit"
                          :href="'#'+state"
                          @click="setTabIndex(0)"
                          v-b-tooltip.hover
                          :title="$t('toggles.edit')" variant="none"
                >
                    <font-awesome-icon icon="edit" />
                </b-button>
                <vue-markdown :source="item"></vue-markdown>
            </div>
        </div>


        <div v-show="items.length">
            <h3 class="text-info">
                <font-awesome-icon :icon="icon" />
                {{title}}
            </h3>
            <draggable v-model="items"
                       v-bind="dragOptions"
                       @start="drag = true"
                       @end="drag = false"
                       handle=".handle"
                       :group="state"
            >
                <transition-group
                        type="transition"
                        :name="!drag ? 'flip-list' : null"
                >
                    <div
                            @mouseover="showByIndex = elm"
                            @mouseout="showByIndex = null"
                            :data-identifier="elm.id"
                            class="box"
                            v-for="elm in items"
                            :key="elm.id"
                    >
                        <h4 class="m-0 text-capitalize">
                            <b-button
                                    v-show="showByIndex === elm && items.length>1"
                                    class="handle p-2 close small"
                                    aria-label="close" type="button"
                                    variant="none"
                                    v-b-tooltip.hover
                                    :title="$t('toggles.move')"
                            >
                                <font-awesome-icon icon="bars" />
                            </b-button>
                            {{ elm.role }}
                            {{ elm.name }}
                            {{ elm.degree }}
                            <b-button
                                    v-show="showByIndex === elm"
                                    class="close p-1 pt-2 small"
                                    aria-label="close" type="button"
                                    @click="removeStateElmByID(state, elm.id)"
                                    v-b-tooltip.hover
                                    :title="$t('toggles.delete')" variant="none"
                            >
                                <font-awesome-icon size="lg" icon="times" />
                            </b-button>
                            <b-button v-show="showByIndex === elm"
                                      class="close p-1 pt-2 small"
                                      aria-label="edit" type="button"
                                      v-b-tooltip.hover
                                      :href="'#'+state"
                                      :title="$t('toggles.edit')" variant="none"
                                      @click="editMe(state, elm, tabIndex)"
                            >
                                <font-awesome-icon icon="edit" />
                            </b-button>
                            <small class="float-right text-muted mt-2 ">
                                {{ fromTo(elm.fromTo, elm.isCurrentJob, $t('labels.current')) }}
                            </small>
                        </h4>
                        <span class="text-muted text-capitalize"> {{ elm.company }}{{ elm.link }}{{ elm.school }}</span>
                        <vue-markdown :source="elm.description"></vue-markdown>
                        <b-badge variant="info" class="mr-2" v-for="tag in elm.tags" :key="tag">{{ tag }}</b-badge>
                    </div>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import draggable from 'vuedraggable'

    export default {
        name: 'box',
        components: {
            VueMarkdown,
            draggable,
        },
        props: {
            item: {type: String, default: null},
            icon:  {type: String, default: null},
            state: {type: String},
            title: {type: String, required: true},
            items: {type: Array, default: () => []},
            tabIndex: {type: Number, default: 1},
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
            removeItem() {
                this.$store.commit('updateStateField', {field: this.state, value: null})
            },
            setTabIndex(index) {
                this.$store.commit('setTabIndex', {index: index})
            },
            removeStateElmByID(state, id ) {
                this.$store.dispatch('removeStateElmByID', {
                    field: state,
                    id: id
                });
            },
            fromTo( array, current = false, currentTxt = 'current') {

                if ( !current && Array.isArray(array ) ) {
                    if ( array [0] === array [1] ) {
                        return array[0].split('-').join(' ') + " - " + currentTxt
                    }
                    return array[0].split('-').join(' ') + " - " + array[1].split('-').join(' ')
                }

                if ( current ) {
                    if ( Array.isArray(array) ) { return array[0].split('-').join(' ') + " - " + currentTxt }
                    return array + ' - ' + currentTxt;
                }

            },
            editMe(state,data,tabIndex) {
                this.$store.commit('saveStateBackup', {field: state, value: data});
                this.$store.commit('editStateElm', {field: state, value: data});
                this.setTabIndex(tabIndex);
            },
        }
    }
</script>

<style scoped>
    .box{
        margin: 5px;
        background-color: rgba(0, 0, 0, 0.02);
        padding: 5px;
        border-radius: 5px;
    }
    .box small {
        font-size: .90rem;
    }
    .box p,.box ul{
        margin: 0;
    }
    .close {
        font-size: 1rem !important;
    }
    .box:hover{
        background-color: rgba(0, 0, 0, 0.05);
    }
    .handle {
        float: left;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .handle:hover {
        cursor: grab;
    }
    .handle:active {
        cursor: grabbing;
    }
</style>
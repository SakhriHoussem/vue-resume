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
                          class="close mr-2 ml-2 small"
                          aria-label="close" type="button"
                          @click="removeItem"
                          v-b-tooltip.hover
                          :title="$t('toggles.delete')" variant="none"
                >
                    <font-awesome-icon icon="times" />
                </b-button>
                <b-button v-show="showByIndex === item"
                          class="close mr-2 ml-2 p-0 small"
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
            <div
                    @mouseover="showByIndex = elm"
                    @mouseout="showByIndex = null"
                    :data-identifier="elm.id"
                    class="box"
                    v-for="(elm, index) in items"
                    :key="index"
            >
                <h4 class="m-0 text-capitalize">
                    {{ elm.role }}
                    {{ elm.name }}
                    {{ elm.degree }}
                    <b-button
                            v-show="showByIndex === elm"
                            class="close mr-2 ml-2 small"
                            aria-label="close" type="button"
                            @click="removeStateElmByID(state, elm.id)"
                            v-b-tooltip.hover
                            :title="$t('toggles.delete')" variant="none"
                    >
                        <font-awesome-icon icon="times" />
                    </b-button>
                    <b-button v-show="showByIndex === elm"
                              class="close mr-2 ml-2 p-0 small"
                              aria-label="edit" type="button"
                              v-b-tooltip.hover
                              :href="'#'+state"
                              :title="$t('toggles.edit')" variant="none"
                              @click="editMe(state, elm, tabIndex)"
                    >
                        <font-awesome-icon icon="edit" />
                    </b-button>
                    <small class="float-right text-muted mt-2 ">
                        {{ fromTo(elm.fromTo) }}
                    </small>
                </h4>
                <span class="text-muted text-capitalize"> {{ elm.company }}{{ elm.link }}{{ elm.school }}</span>
                <vue-markdown :source="elm.description"></vue-markdown>
                <b-badge variant="info" class="mr-2" v-for="tag in elm.tags" :key="tag">{{ tag }}</b-badge>
            </div>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    export default {
        name: 'box',
        components: {
            VueMarkdown,
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
                showByIndex: null
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
                this.$store.commit('removeStateElmByID', {
                    field: state,
                    id: id
                });
            },
            fromTo( array ) {
                if (array [0] === array [1]) {
                    return array[0].split('-').join(' ') + " - " + 'Current'
                }
                return array[0].split('-').join(' ') + " - " + array[1].split('-').join(' ')
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
</style>
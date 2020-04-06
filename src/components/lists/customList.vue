<template>
    <ul class="list-unstyled m-0">
        <li v-if="item" class="hover" >
            <font-awesome-icon :icon="icon" />
            <b-link target="_blank" class="text-white" :href="action + item"> {{item}} </b-link>
        </li>

        <li v-else-if="items"
            @mouseover="showByIndex = elm"
            @mouseout="showByIndex = null"
            v-for="elm in items" :key="elm"
            class="hover"
        >
            <b-button
                    v-show="showByIndex === elm"
                      class="close mr-2 ml-2 small text-lowercase"
                      aria-label="close" type="button"
                      @click="removeStateElm(state, elm)"
                      v-b-tooltip.hover
                      variant="none"
                      :title="$t('toggles.delete')"
            >
                <font-awesome-icon icon="times" />
            </b-button>
            <font-awesome-icon v-if="icon" :icon="icon" />
            <font-awesome-icon v-else-if="elm.icon" :icon="['fab', elm.icon]" />

            <b-link target="_blank" v-if="elm.url" class="text-white" :href="elm.url"> {{ elm.pseudo }} </b-link>
            <b-link target="_blank" v-else class="text-white" :href="elm"> {{ elm }} </b-link>


        </li>
    </ul>
</template>

<script>
    export default {
        name: 'custom-list',
        props: {
            items: {type: Array, default: null},
            item: {type: String, default: null},
            icon:  {type: String, default: null},
            state: {type: String},
        },
        data () {
            return {
                showByIndex: null
            }
        },
        computed: {
            action: function () {
                if(this.icon === 'at') {
                    return 'mailto:'
                } else if (this.icon=== 'phone') {
                    return 'tel:'
                } else {
                    return ''
                }
            },
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
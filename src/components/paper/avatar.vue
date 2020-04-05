<template>
    <div>
        <div v-if="image"
             id="img-avatar"
             @mouseover="showByIndex = image"
             @mouseout="showByIndex = null"
        >
            <div class="bg-white">
                <b-button
                        class="close"
                        aria-label="close" type="button"
                        v-b-tooltip.hover
                        :title="$t('toggles.delete')" variant="none"
                        @click="image = null"
                        v-show="showByIndex === image"
                >
                    <font-awesome-icon icon="times" />
                </b-button>
                <b-button v-show="showByIndex === image"
                          class="close"
                          aria-label="edit" type="button"
                          v-b-tooltip.hover
                          :title="$t('toggles.edit')" variant="none"
                          @click="$refs.file.click()"
                >
                    <font-awesome-icon icon="edit" />
                </b-button>
            </div>
            <b-img
                    :src="image"
                    :alt="alt"
                    thumbnail center
            >
            </b-img>
        </div>
        <b-avatar  v-else
                   button @click="$refs.file.click()"
                   size="10rem" variant="dark"
                   v-b-tooltip.hover
                   :title="$t('toggles.change')">
            <font-awesome-icon icon="camera-retro" />
        </b-avatar>

        <input type="file"
               ref="file"
               id="input-image"
               v-show="false"
               @change="onFileChange"
               accept="image/*"
        >
    </div>
</template>

<script>

    export default {
        name: 'avatar',
        props: {
            alt: {default : 'avatar'}
        },
        data () {
            return {
                image: "",
                showByIndex: null,
            }
        },
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) this.image ="";
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => this.image = e.target.result ;
                reader.readAsDataURL(file);
            },
        }
    }
</script>
<style scoped>
    button[class*="b-avatar"] {
        padding: 0 !important;
    }
    #img-avatar div button{
        padding: 3px;
    }
    #img-avatar div {
        padding: 3px;
        position: absolute;
        right: 30px;
        top: 30px;
        border-radius: 5px;
    }
</style>
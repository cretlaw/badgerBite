<template>
    <div>
    
        <div class="container">
            <div class="gallery">
                <div v-for="(img, index) in collection">
                    <img :src="img" @click="modalView(img)" alt="project name" width="100%" height="auto" class="gallery-img" :id="'imgID' + (index + 1)"
                    />
                </div>
            </div>
        </div>
        <div v-if="isImgClicked">
            <div>
                <img id="myImg" :src="imgPath" alt="">
                <div id="myModal" :style="modalStyle" class="modal">
                    <span @click="closeModal" class="close">&times;</span>
                    <img class="modal-content" :src="imgPath" id="imgId">
                    <div id="caption"></div>
                </div>
            </div>
        </div>
    
    </div>

</template>

<script>
    export default {
        data() {
            return {
                collectionImgs: []
                imgPath: '',
                isImgClicked: false,
                modalStyle: '#',
            }

        },
        //TODO:Might need to change this to use a db might be security issue at exposing directory in frontend
        beforeCreate() {
            let vm = this
            //TODO:need to link this to router
            axios.get('http://localhost:8080/getProjectImgs')
                .then(result => {
                    vm.collectionImgs = result.data.slice(0)
                    console.log(vm.collectionImgs)

                })
            
                
        }

        methods: {
            //TODO: Add project name to modal
            //TODO: See if it's possible to hook-up to mongoDB without using node if so migrate image paths
            modalView: function (imagePath) {

                this.isImgClicked = true
                this.imgPath = imagePath
                this.modalStyle = 'display:block'
            },

            closeModal: function () {
                //  When the user clicks on <span> (x), close the modal
                this.modalStyle = 'display:none'
                this.isImgClicked = false
            }
        }
    }
</script>
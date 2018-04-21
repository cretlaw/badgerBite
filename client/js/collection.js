function init() {

    

    Vue.component('footer-component', {
        template: ` <div>
    <footer class="footer">
        <div v-if="!phoneClick && !emailClick">
            <div class="social-media-buttons">

                <div class="social-media-button facebook">
                    <a href="#yourFBUrlGoesHere">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="social-media-button instagram">
                    <a href="#yourInstagramUrlGoesHere">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="social-media-button envelope">

                    <a v-on:click="emailPopulate" id="email">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="social-media-button phone">
                    <div>
                        <a v-on:click="phonePopulate">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="phoneClick">

            <div class="footerInfo">{{phone}}</div>
            <button @click="toggleButtons" type="button" class="btn btn-light footerToggleBtn">
                Toggle Back
            </button>

        </div>

        <div v-if="emailClick">

            <div class="footerInfo">{{email}}</div>
            <button @click="toggleButtons" type="button" class="btn btn-light footerToggleBtn">
                Toggle Back
            </button>

        </div>
    </footer>

</div>`,

        data: function () {
            return {
                phone: '123-456-7891',
                email: 'someemail@email.com',
                phoneClick: false,
                emailClick: false
            }
        },
        methods: {
            phonePopulate: function () {

                this.phoneClick = true

            },

            emailPopulate: function () {
                this.emailClick = true
            },
            toggleButtons: function () {
                this.phoneClick = false
                this.emailClick = false
            }
        }
    })


    Vue.component('collection-display', {
        template: `<div>
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

    </div>`,

    props:['collection'],

        data: function () {
            return {
                imgPath: '',
                isImgClicked: false,
                modalStyle: '#',
            }
        },

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



    })

    new Vue({
        el: '#imgVue',
        data: {
            collectionImgs: [],

        },

        beforeCreate() {
            let vm = this

            axios.get('http://localhost:8080/getProjectImgs')
                .then(result => {
                    vm.collectionImgs = result.data.slice(0)
                    console.log(vm.collectionImgs)

                })
            
                
        }


    })

}
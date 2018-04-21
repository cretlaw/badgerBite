function init() {

 let imagesApp =  new Vue({
        el: '#imgVue',
        data: {
            collectionImg: [],
            imgPath: '',
            isImgClicked: false,
            modalStyle: '#',
            phone:'123-456-7891',
            email:'someemail@email.com',
            phoneClick:false,
            emailClick: false 
        },

        beforeCreate() {
            let vm = this

            axios.get('http://localhost:8080/getProjectImgs')
                .then(result => {
                    vm.collectionImg = result.data.slice(0)
                })

        },

        methods: {
            //TODO: Add project name to modal
            modalView: function (imagePath) {

                this.isImgClicked = true
                this.imgPath = imagePath
                this.modalStyle = 'display:block'
            },

            closeModal: function () {
                //  When the user clicks on <span> (x), close the modal
                this.modalStyle = 'display:none'
                this.isImgClicked = false
            },

            phonePopulate: function(){

                this.phoneClick = true
        
            },

            emailPopulate: function(){
                this.emailClick =true
            },
            toggleButtons: function(){
                this.phoneClick = false
                this.emailClick = false
            }

        }
    })

}


<script type="text/javascript">
alert("hello bosss");
var imageUploader = {

    imageFile: null,

    /**
     * Trigger this object by setting up basic events.
     */
    init: function() {

        document.getElementById("uploadImage").onclick = this.uploadImage.bind(this);

        document.getElementById("file").onchange = function(event) {
            this.imageFile = event.target.files[0];
            document.getElementById("fileInfo").innerHTML = "File Name: " + this.imageFile.name + "<br> Image type: " + this.imageFile.type;

            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.onload = function() {
                    this.displayImage(img);
                }.bind(this)
                img.src = event.target.result;
            }.bind(this);
            reader.readAsDataURL(this.imageFile);
        }.bind(this);
    },
    /**
     * Basic image display as per the uploaded image.
     */
    displayImage: function(img) {
        document.getElementById("uploadedImage").src = img.src;
    },

    /**
     * Upload basic image or file to server.
     */
    uploadImage: function() {

        var data = new FormData();
        data.append("file", this.imageFile);
        this.uploadToServer(data);

    }
}

/**
 * Trigger the app.
 */
imageUploader.init();
</script>

function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $('#current_img')
          .attr('src', e.target.result)
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
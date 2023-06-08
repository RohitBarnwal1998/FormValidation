
$("#Contact_form").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email: true

        },
        phone:{
            number: true, 
            minlength: 10,
            maxlength: 12
        }
    },
    messages: {
        required: "Please Enter Your Name",
        minlength:"Name at least 2 characters"
      },
      email:" Please Enter Your Mail",
      phone: "Please Enetr Your Valid Phone No.",
      subject: "Please Enetr Your Valid Subject or Topic",
      message: "Please Enetr Your Message",
 
    submitHandler: function(form) {
      form.submit();
    }
   });
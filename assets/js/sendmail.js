function sendEmail() {

    alert("Remote servers error!")
    if ($('#contact').length > 0 ) {
          $( "#contact" ).validate( {
              rules: {
                  name: "required",
                  email: {
                      required: true,
                      email: true
                  },
                  message: {
                      required: true,
                      minlength: 8
                  }
              },
              messages: {
                  name: "Please enter your name",
                  email: "Please enter a valid email address",
                  message: "Please enter a message with more than 8 characters"
              },

              submitHandler: function(form) {		

                // try{
                //     const nodemailer = require('nodemailer');
                // } catch (error) {
                //     alert(error)
                // }
                // var $submit = $('.submitting')
				// 	waitText = 'Submitting...'

                // let mailTransporter = nodemailer.createTransport({
                //     service: 'gmail',
                //     auth: {
                //         user: 'filipecabillot@gmail.com',
                //         pass: 'eqcjorxofjhnrnpb'
                //     },
                //     tls : { rejectUnauthorized: false }
                // });

                // let mailDetails = {
                //     from: 'filipecabillot@gmail.com',
                //     to: 'capiomont.nathan@gmail.com',
                //     subject: 'Test mail',
                //     text: 'Node.js testing mail for GeeksforGeeks'
                // };
            

                // mailTransporter.sendMail(mailDetails, function(err, data) {
                //     if(err) {
                //         alert("Error")
                //         // console.log('Error Occurs');
                //         // console.log(err);
                //     } else {
                //         // console.log('Email sent successfully');
                //         alert("mail sent successfully")
                //     }
                // });
                $('#form-message-warning').hide();
                                setTimeout(function(){
                                    $('#contactForm').fadeOut();
                                }, 1000);
                                setTimeout(function(){
                                    $('#form-message-warning').fadeIn();   
                                }, 1400);
                        }
              
          } );

  }

}


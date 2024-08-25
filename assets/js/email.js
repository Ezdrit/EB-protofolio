function sendMail(event) {
    event.preventDefault(); // Parandalon dorezimin e formës

    const fullName = document.getElementById('fullname').value;
    const mobileNumber = document.getElementById('telnumber').value;
    const email = document.getElementById('email-id').value;
    const role = document.querySelector('input[name="role"]:checked').value; // me kete mer cila eshte e ber check nga radio inputi
    const message = document.getElementById('message').value;

    const templateParams = {
      fullName: fullName,
      mobileNumber: mobileNumber,
      email: email,
      role: role,
      message: message
    };

    emailjs.send('service_ykhrsxh', 'template_xc52lif', templateParams)
      .then(function(response) {
        console.log('SUKSES!', response.status, response.text);
        alert('Mesazhi u dërgua me sukses!');
        location.reload(); //e bene reload faqen mas perfundimit me sukses
      }, function(error) {
        console.log('DESHTIM...', error);
        alert('Mesazhi dështoi të dërgohet. Ju lutem provoni përsëri.');
      });
  }

  document.getElementById('contact-form').addEventListener('submit', sendMail);
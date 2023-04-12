const bot = '5654615260:AAEdjdl7DyugDJ1DxtiuGQe4St-Hhklb-U8';
const id = '679365126';


const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Construct the message to send
    const telegramMessage = `New message from ${name} (${email}) Subject: ${subject} - ${message}`;

    const url = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${id}&text=${telegramMessage}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('Message sent successfully!');
                // Hide the loading and error messages, show the success message
                form.querySelector('.loading').style.display = 'none';
                form.querySelector('.error-message').style.display = 'none';
                form.querySelector('.sent-message').style.display = 'block';
            } else {
                console.error('Failed to send message:', data.description);
                // Hide the loading and success messages, show the error message
                form.querySelector('.loading').style.display = 'none';
                form.querySelector('.sent-message').style.display = 'none';
                form.querySelector('.error-message').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            // Hide the loading and success messages, show the error message
            form.querySelector('.loading').style.display = 'none';
            form.querySelector('.sent-message').style.display = 'none';
            form.querySelector('.error-message').style.display = 'block';
        });

    // Show the loading message
    form.querySelector('.loading').style.display = 'block';
});

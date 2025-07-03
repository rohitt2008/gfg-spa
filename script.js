function changeContent(page){
  var contentDiv = document.getElementById('content');
  switch (page){
    case 'home':
      contentDiv.innerHTML = `
        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is the main page of our SPA.
				</p>
				<p>
					Explore the different sections using
					the navigation menu.
				</p>
      `;
    break;
    case 'about':
      contentDiv.innerHTML = `
        	<h2>About Us</h2>
				<p>
					This is the about page content. Learn more 
					about our purpose and team.
				</p>
				<p>
					We're passionate about creating engaging and
					informative SPAs.
				</p>
      `;
      break;
    case 'contact':
      contentDiv.innerHTML = `
        <h2>Contact Us</h2>
  <p>feel free to Contact us</p>
  <form>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" placeholder="Your Name" required>

    <label for="email">Email:</label>
    <input type="text" name="email" id="email" placeholder="Your Email" required>

    <label for="message">Message:</label>
    <textarea name="message" id="message" placeholder="YOur Message" rows="4" required></textarea>
    <button type="submit">Send Message</button>

  </form>
      `;
    break;
    default:
      contentDiv.innerHTML = `<h2>page not found!</h2>`;
  }
}
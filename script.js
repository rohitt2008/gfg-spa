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
    case 'problems':
      contentDiv.innerHTML = `
        <h1>Total Solved Questions:</h1>
        <p id="solved-count"></p>
        <h2>Problems</h2>
        <ul>
          <li>
            <input type="checkbox" class="solved-checkbox" data-id="two-sum">
      <a href="https://practice.geeksforgeeks.org/problems/two-sum/0" target="_blank">Two Sum</a>
          </li>
          <li>
            <input type="checkbox" class= "solved-checkbox" data-id="binary-search">
      <a href="https://practice.geeksforgeeks.org/problems/binary-search/1" target="_blank">Binary Search</a>
          </li>
          <li>
      <input type="checkbox" class="solved-checkbox" data-id="reverse-array">
      <a href="https://practice.geeksforgeeks.org/problems/reverse-array/0" target="_blank">Reverse Array</a>
          </li>
          <li>
            <input type="checkbox" class="solved-checkbox" data-id="merge-sorted-arrays">
      <a href="https://practice.geeksforgeeks.org/problems/merge-sorted-arrays/0" target="_blank">Merge Sorted Arrays</a>
          </li>
          <li>
            <input type="checkbox" class="solved-checkbox" data-id="find-duplicates">
      <a href="https://practice.geeksforgeeks.org/problems/find-duplicates/0" target="_blank">Find Duplicates</a>
          </li>
        </ul>
      ` 
      addSolvedTracker();
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
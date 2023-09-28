document.addEventListener('click', function(event) {
    const ul = document.getElementById("menu");
    const input = document.getElementById('search');
    
    if (!ul.contains(event.target) && event.target !== input) {
      ul.style.display = "none"
      input.style = "border-radius: 1rem; border: 0.1rem solid #787878"
      input.style = "padding: 1rem 0.9rem 1rem 1rem";
         enterBtn.style.display = "none"
      
    }
  });
  
  function searchMenu() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName('li');
      enterBtn = document.getElementById('enterButton');
  
    // Check if there are no matching list items
    let noMatches = true;
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block"
           enterBtn.style.display = "block";
        noMatches = false; // At least one match found
      } else {
          enterBtn.style.display = "block"
        li[i].style.display = "none";
      }
    }
  
    // Show the ul only if there are matches
    if (!noMatches) {
      ul.style.display = "block"
      input.style = "border-radius: 1rem 1rem 0 0; border: 0.1rem solid #787878"
        enterBtn.style.display = "block";
    } else {
      ul.style.display = "none"
      input.style = "border-radius: 1rem; border: 0.1rem solid #787878"; // Hide the ul if no matches
    }
  }
  
  // Call searchMenu initially to hide the ul if there are no li elements
  searchMenu();
  
  // Add a click event listener to the search input to show the ul when clicked
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('click', function(event) {;
    event.stopPropagation(); // Prevent the click event from reaching the document click listener
    searchMenu(); // Call the searchMenu function when the input is clicked
  });
  
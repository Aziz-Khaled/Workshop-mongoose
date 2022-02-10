import React from 'react';
import '../App.css';
function NavBar() {
  return <div>
           <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
    <div class="wrapper">
      <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Gallery</a></li>
<li><a href="#">Feedback</a></li>
</ul>
</div>
<div class="content">
      <div class="title">
Fullscreen Overlay Navigation Bar</div>
<p>
with HTML and CSS Neon Effect</p>
</div>

  </div>;
}

export default NavBar;

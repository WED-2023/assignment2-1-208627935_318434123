<template>
  <!-- <div>
      <h5>AboutPage</h5>
  </div> -->
    <div>
     <div id="about_page" class="aboutClass" >
        <div class="aboutClass-inner">
        
          <h1 class="headline">About Us Website</h1>
          <div class="aboutSec">
    
            <p id="about_para">
              On this website you can search for new or old recipes,<br>
              you can register on the site and enjoy a culinary experience via the Internet. <br>
              plus you can create your own new recipes, and add them to your favorites.<br><br>
      
              Hope You Enjoy!
              <br>
            </p>
  
            <div style="display: inline-block;">
              <div style="display: inline;">
                <p style="color:crimson;">Link To Our First Game</p>
              </div>
              <div class="linkes" style="display: inline;">
  
                <!-- <a href="https://web-development-environments-2022.github.io/assignment2-315450569_316586908/">
                  <img class="pacManIc" src="../images/pacMan-removebg-preview.png" >
                </a> -->
              </div>
            </div>
  
          </div>
          <h1 id="contact" class="headline" style="text-align:center">Contact Our Team</h1>
  
          <!-- <div class="div0">
            <div class="div1Tal">
              <div class="div2Tal">
                <img id="tal" src="../images/tal.jpeg" alt="tal" >
                <div class="div3">

                <h2>Tal Ben Hamou</h2>
                <p class="id">315450569</p>
                <p>Tal 27 years old, a third year student.</p>
                <p>benhatal@post.bgu.ac.il</p>
                <div style="text-align: right; padding-right: 60px;color:lightseagreen">
                  <label>My First Website</label>
                </div>
                <div class="socialLogo">
                  <a href="	https://www.instagram.com/tal.ben.hamo/">
                  <img class="socialMedia" src="../images/instaLogo.png" alt="Instagram">
                  </a>
                
                  <a href="https://www.facebook.com/tal.benhamou.71">
                  <img class="socialMedia" src="../images/facebookLogo.png" alt="Facebook">
                  </a>
                  <a href="https://web-development-environments-2022.github.io/315450569/">
                    <img class="linkWeb" src="../images/43-512.webp" >
                  </a>
              
                </div>

                </div>
              </div>
            </div> -->
          
            <!-- <div class="div1">
              <div class="div2">
                <img id="ido" src="../images/ido.jpeg" alt="ido">
                <div class="div3">

                <h2>Ido Cohen</h2>
                <p class="id">316586908</p>
                <p>Ido 26 years old, a third year student.</p>
                <p>ido3@post.bgu.ac.il</p>
                <div style="text-align: right; padding-right: 60px;color:lightseagreen">
                  <label>My First Website</label>
                </div>
                <div class="socialLogo">
                  <a href="https://www.instagram.com/idocohen32/">
                  <img class="socialMedia" src="../images/instaLogo.png" alt="Instagram">
                  </a>
                
                  <a href="https://www.facebook.com/ido.cohen.560">
                  <img class="socialMedia" src="../images/facebookLogo.png" alt="Facebook">
                  </a>
                  <a href="https://web-development-environments-2022.github.io/316586908/">
                    <img class="linkWeb" src="../images/43-512.webp" >
                  </a>
                </div>

                </div>
              </div>
            </div> -->
          <!-- </div> -->
              </div>
     </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "about"
  }
  </script>
  
  <style>
  .pacManIc{
    width: 100px;
    height: 100px;
  }
  .pacManIc:hover{
    zoom: 1.15;
  }
  .socialMedia{
    width: 100px;
    height: 100px;
  }
  .linkWeb{
    width: 100px;
    height: 100px;
  }
  .div0 {
      background-color: #232323;
      display: flex;
    justify-content: center;
  }
  
  .div1 {
      float: left;
    margin-right: 190px;
      width: 48%;
      margin-bottom: 16px;
      padding: 11px;
  }
  
  .div1Tal {
      float: left;
    margin-left: 400px;
      width: 48%;
      margin-bottom: 16px;
      padding: 11px;
  }
  
  
  .div2 {
    display: inline-block;
      box-shadow: 0px 8px 10px 3px rgba(255, 255, 255, 0.2);
      margin: 4px;
  }
  
  .div2Tal {
    display: inline-block;
      box-shadow: 0px 8px 10px 3px rgba(255, 255, 255, 0.2);
      margin: 4px;
  }
  
  .aboutSec {
      padding: 55px;
      text-align: center;
      background-color: #232323;
      color: white;
  }
  
  .div3 {
      padding: 0 10px;
      color: aliceblue;
      background-color: #232323;
  }
  
  .div3::after, .row::after {
      content: "";
      clear: both;
      display: table;
  }
  
  .id {
      color: rgb(114, 144, 176);
  }
  
  #ido, #tal {
      float: left;
      width:  475px;
      height: 500px;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      overflow: auto;
      display: inline;
      margin: 0 auto;
  }
  
  .headline{
      color: rgb(255, 79, 79);
  }
  
  #about_page{
  
      width: 100%; 
      height: 100%; 
      max-width: 100%;
      max-height: 100%;
      overflow: auto; 
      /* background-color: rgb(243, 243, 243);  */
      background-color: rgba(1, 22, 11, 0.4); 
    }
  
  .aboutClass-inner {
  
      position: relative;
      margin: auto;
  
      width: 100%;
      max-width: 100%;
    }
  
        
  #about_para{
      font-family:Arial, Helvetica, sans-serif;
      font: bold;
      font-size: larger;
  
  }
  </style>
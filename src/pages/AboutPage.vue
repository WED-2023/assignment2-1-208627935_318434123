<template>
    <div>
     <div id="about_page" class="aboutClass" >
        <div class="aboutClass-inner">
        
          <div class="aboutSec">
            <div id="text_div">
            <h1 class="headline">About Our Website</h1>
            <p id="about_para">
              
              <br>
              Welcome to Recipes, your go-to platform for discovering, creating, and sharing recipes. Our mission is to bring together food enthusiasts from all around the world to share their love for cooking.<br>
              <br>
              <u><b>We doing it by:</b></u><br>
             
              <ul class="list_object">
                <li class="list-line">Save Your Favorite Recipes</li>
                <li class="list-line">Find recipes you love and save them to your personal collection. Never lose track of your favorite dishes again.</li>
                <li class="list-line">Create Your Own Recipes</li>
              </ul>
        


              Have a recipe you want to share with the world? Create your own recipes and add them to our ever-growing database.<br>
              <br>
              Family Recipes<br>
              <br>
              Preserve your cherished family recipes. Add them to your personal collection and share them with your family members.<br>
              <br>
              Join Our Community<br>
              Our community is made up of food lovers, professional chefs, and home cooks. Connect with others, share your culinary creations, and get inspired.<br>
              <br>
              Our Mission<br>
              We believe that cooking is a universal language that brings people together. Our mission is to make cooking fun, easy, and accessible for everyone.<br>
              <br>
            </p>
  
            <div style="display: inline-block;">
              <div style="display: inline;">
                <a id="last-project-link" href="https://wed-2023.github.io/208627935/">Link To Our Michael jorden site</a>
              </div>
            </div>
          </div>
          </div>
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
  .aboutSec {
      padding: 0px;
      font-weight: 800; 
      font-size: 1em; 

      color: rgb(0, 242, 255);
  }
  
  .headline{
      font-weight: 900; 
      color: rgb(0, 242, 255);
      text-align: center;
  }
  
  #about_page{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
   
  
    }
  
  .aboutClass-inner {
      margin-top: 3rem;
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      background: url('@/assets/love_cocking.jpg') no-repeat center center fixed;
      background-size: cover;
  
    }
  
        
  #about_para{
      font-family:Arial, Helvetica, sans-serif;
      font: bold;
      font-size: larger;
      text-align: left;
  
  }
  .list-line{
    text-align: left;

  }
  .list_object{
    text-align: center;
  }
  #last-project-link{
    font-weight: 900; 
    font-size: 2em; 
    color: #ffffff; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
    padding: 10px; 
    display: inline-block; /* Ensures background color wraps around the text */
    cursor: pointer;
    font-size: 25px;
    margin-left: 35rem;
  }
  #text_div{
    margin-right: 10em;
    margin-left: 10em;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }
  </style>
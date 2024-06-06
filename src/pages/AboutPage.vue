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
                <a id="last-project-link" href="https://wed-2023.github.io/208627935/">Link To Our Micheal jorden site</a>
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
      color: green;
      text-align: center;
  }
  
  #about_page{
  
      width: 100%; 
      height: 100%; 
      max-width: 100%;
      max-height: 100%;
      overflow: auto; 
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
      text-align: left;
  
  }
  .list-line{
    text-align: left;

  }
  .list_object{
    text-align: center;
  }
  #last-project-link{
    color: green;
    cursor: pointer;
    font-size: 25px;
    margin-left: 23rem;
  }
  #text_div{
    margin-right: 10em;
    margin-left: 10em;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }
  </style>
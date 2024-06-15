<template>
  <div class="login_page_container">
    <div class="image-section"></div>
    <div class="login-container">
      <login></login>
    </div>
  </div>
</template>

<script>
import login from '../components/login'
export default {
  components: {
    login
  }
}
</script>

<style>
.login_page_container{
  display: flex;
}
  .image-section {
    flex: 2;
    background: url('@/assets/login_image.jpg') no-repeat center center;
    background-size: cover;
  }
  .login-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: rgba(22, 8, 219, 0.966);
    opacity: 50%;
    box-sizing: border-box;
  }
</style>

<template>
<div id="app">
  <div class="top">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img src="/ordinary.png">
        </div>
      </router-link>
      <div class="title">
        <h1>HIKE PROVO</h1>
      </div>
    </div>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Add Hike</router-link>
        <router-link to="/gallery">Gallery</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/katecgammon/finalProjectCS260.git">https://github.com/katecgammon/finalProjectCS260.git</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #B2AC88;
  color: black;
}

.title {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title h1 {
  padding-left: 50px;
  font-size: 30px;
}

.navbar {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 350px;
  background-color: #B2AC88;
  color: black;
}

.navbar a {
  padding-right: 20px;
  padding-left: 20px;
  text-decoration: none;
}
.navbar a:visited {
  text-decoration: none; 
  color: black;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>

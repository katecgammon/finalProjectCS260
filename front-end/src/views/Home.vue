<template>
<div class="home">
  <section class="hike-gallery">
    <div class="hike" v-for="hike in hikes" :key="hike.id">
      <img :src="hike.path" />
      <div class="words">
        <h2>{{hike.title}}</h2>
        <h4>{{hike.location}}</h4>
        <h4>{{hike.difficulty}}</h4>
        <p>{{hike.description}}</p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     hikes: [],
    }
  },
  created() {
    this.getHikes();
  },
  methods: {
    async getHikes() {
      try {
        let response = await axios.get("/api/hikes");
        this.hikes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.hike h2 {
  font-style: italic;
  font-size: 19px;
}

.hike h4 {
  font-size: 16px;
}

p {
  font-size: 14px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.hike-gallery {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
}
.words {
  padding-left: 20px;
}

.hike {
  margin: 0 0 1.5em;
  display: flex;
  flex-direction: row;
  row-gap: 1.5rem;
  width: 100%;
}

.hike img {
  width: 500px;
  padding-bottom: 40px;
}



/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .hike-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .hike-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .hike-gallery {
    column-count: 2;
  }
}
</style>

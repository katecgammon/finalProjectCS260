<template>
<div class="home">
  <section class="hike-gallery">
    <div class="hike" v-for="hike in hikes" :key="hike.id">
      <h2>{{hike.title}}</h2>
      <h4>{{hike.location}}</h4>
      <h4>{{hike.difficulty}}</h4>
      <p>{{hike.description}}</p>
      <img :src="hike.path" />
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
.image h2 {
  font-style: italic;
}
p {
  font-size: 12px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.hike-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
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

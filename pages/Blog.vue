<template>
  <div>
    <div class="header">
      <h1>My Website</h1>
      <p>A website created by me.</p>
    </div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li v-for="blog in sortedBlogs" :key="blog.id">
              <div class="blog-details">
                <h2>{{ blog.attributes.blogtitle }}</h2>
                <h6>{{ blog.attributes.date }}</h6>
                <p>{{ blog.attributes.content }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        blogs: {
          data: []
        },
      };
    },
    computed: {
      sortedBlogs() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.blogs.data.sort((a, b) => {
          // Assuming your date format is ISO string, otherwise modify accordingly
          return new Date(a.attributes.date) - new Date(b.attributes.date);
        });
      },
    },
    mounted() {
      axios.get('http://localhost:1337/api/blogs').then(response => {
        this.blogs = response.data;
        // eslint-disable-next-line no-console
        console.log(response);
      }).catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    },
  };
</script>
<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .container {
    margin-left: 7%;
    margin-right: 6%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  li {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 5px;
  }

  h6 {
    font-size: 1em;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    line-height: 1.5;
  }

  h5 {
    color: white;
    font-size: 50%;
    text-align: center;
    margin: auto;
  }

  .blog-details {
    margin: 0 auto;
    max-width: 600px;
  }
</style>
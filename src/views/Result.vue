<template>
  <div class="result">
    <!-- survey heading section -->
    <div class="heading">
      <h1>{{ title }}</h1>
      <h3>{{ description }}</h3>
    </div>

    <!-- pie charts -->
    <PieChart
      v-for="result in results"
      v-bind:key="result.id"
      :question="result.question"
      :items="result.items"
      :id="result.id"
    />
  </div>
</template>

<script>
import PieChart from "@/components/Result/PieChart.vue";
import axios from "axios";

export default {
  name: "Result",
  components: {
    PieChart
  },
  data() {
    return {
      //response data
      title: "",
      description: "",
      results: [],
      //indicator for loading and fetching error
      loading: true,
      error: false
    };
  },
  mounted() {
    // fetching data from api
    axios
      .get("https://run.mocky.io/v3/b460d16c-562a-4057-9752-999ed54f7cc3")
      .then(response => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.results = response.data.results;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style scoped lang="scss">
.result {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  // image section
  .frontImg {
    margin: 20px 0;
    box-shadow: 0 0.125em 0.275em 0 rgba(0, 0, 0, 0.125);
    border-radius: 15px;
    height: 240px;
    background-image: url(../assets/front.png);
    background-size: 100% 100%;
  }
  // heading section
  .heading {
    text-align: left;
    margin: 20px 0;
    padding: 20px;
    padding-top: 10px;
    box-shadow: 0 0.125em 0.275em 0 rgba(0, 0, 0, 0.125);
    background-color: white;
    border-top: 15px solid #6c7c1c;
    border-radius: 15px;
    h1 {
      font-size: 2.4em;
    }
    h3 {
      color: gray;
    }
  }
  // submit button
  .submit {
    display: inline-block;
    background-color: #4caf50;
    box-shadow: 0 8px 0 #999;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    outline: none;
    border: none;
    color: white;
    margin: 20px;
    padding: 15px 25px;
    border-radius: 10px;
    &:hover {
      background-color: #3e8e41;
    }
    &:active {
      box-shadow: 0 5px #666;
      background-color: #3e8e41;
      transform: translateY(4px);
    }
  }
}
@media (max-width: 1024px) {
  .result {
    width: 100%;
  }
}
</style>
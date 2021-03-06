<template>
  <!-- results page -->
  <div class="result">
    <h1 class="loading" v-if="loading">Loading...</h1>
    <h1 class="loading" v-if="error">
      An error occured when loading survey data, please contact agriview.
    </h1>

    <!-- survey heading section -->
    <div class="heading" v-if="!loading">
      <div class="voteCount">
        <p>Total Response: {{ invalidCount + validCount }}</p>
        <p>Invalid Response: {{ invalidCount }}</p>
        <p>Actual Response: {{ validCount }}</p>
      </div>
      <h1>{{ title }}</h1>
      <h3>{{ description }}</h3>
    </div>

    <div v-for="result in results" v-bind:key="result.id">
      <!-- pie charts -->
      <ResultPieChart
        v-if="result.items.length === 1"
        :question="result.question"
        :items="result.items"
        :id="result.id"
      />
      <!-- bar charts -->
      <ResultBarChart
        v-if="result.items.length !== 1"
        :question="result.question"
        :items="result.items"
        :id="result.id"
      />
    </div>
  </div>
</template>

<script>
import ResultPieChart from "@/components/Result/ResultPieChart.vue";
import ResultBarChart from "@/components/Result/ResultBarChart.vue";
import axios from "axios";

export default {
  name: "Result",
  components: {
    ResultPieChart,
    ResultBarChart
  },
  props: {
    surveyID: String,
    securityKey: String
  },
  data() {
    return {
      //response data
      resultSet: [],
      title: "",
      description: "",
      results: [],
      //indicator for loading and fetching error
      loading: true,
      error: false,
      validCount: 0,
      invalidCount: 0
    };
  },
  methods: {
    //security check
    securityCheck() {
      if (this.securityKey.match(/kyle/)) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    // fetching data from api
    axios
      // .get(`/report/${surveyid}`)
      .get("https://run.mocky.io/v3/4447104c-a9ec-4274-9d04-c09629c1c7b9")
      .then(response => {
        // set to loading
        this.loading = true;
        // assigning respnse to corresponding data
        // all the results set
        this.resultSet = response.data;
        // result title and description
        this.title = this.resultSet[0].surveyName;
        this.description = this.resultSet[0].description;
        // array of quesitons and vote conunts
        this.results = [];
        // assign template for each question
        // iteratate each question
        for (const question of this.resultSet[0].questions) {
          if (question.items.length !== 0) {
            // temp to represent each question
            let temp = {};
            // set id and body for each question
            temp.id = question.id;
            temp.question = question.body;
            // iterate the items to put them in the temp
            temp.items = [];
            for (let item of question.items) {
              // temp for each item
              let tempItem = {};
              tempItem.name = item.name;
              tempItem.result = {};
              // iterate the options
              for (let option of item.options) {
                tempItem.result[option] = 0;
              }
              temp.items.push(tempItem);
            }
            this.results.push(temp);
          }
        }
        // retrive indivual user vote date
        for (const indivdual of this.resultSet) {
          if (indivdual.isCompleted) {
            // count completedd vote
            this.validCount++;
            for (const question of indivdual.questions) {
              // iterate through each question,
              if (question.items.length !== 0) {
                let allItemChecked = 1;
                // for non-compulsory question,check if all item is being answered
                if (!question.isCompulsory) {
                  for (const item of question.items) {
                    if (!item.answer) allItemChecked = 0;
                  }
                }
                if (allItemChecked)
                  for (const item of question.items) {
                    let i = this.results.findIndex(e => e.id === question.id);
                    let j =
                      this.results[i].items.findIndex(
                        e => e.name === item.name
                      ) || 0;
                    if (item.answer) {
                      let k = item.answer;
                      this.results[i].items[j].result[k] += 1;
                    }
                  }
              }
            }
          } else {
            // count non-completedd vote
            this.invalidCount++;
          }
        }
      })
      .catch(() => {
        // when there is an error, show error message
        this.error = true;
      })
      .finally(() => {
        // finish loading
        this.loading = false;
      });
  }
};
</script>

<style lang="scss">
body {
  background-color: #f0f2e8;
}
// result page styling
.result {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  // image section
  .loading {
    margin-top: 100px;
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
    .voteCount {
      float: right;
      margin-top: 2%;
      margin-right: 20%;
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
    // hover and active effect
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
// responsive design
@media (max-width: 1024px) {
  .result {
    width: 100%;
  }
}
</style>

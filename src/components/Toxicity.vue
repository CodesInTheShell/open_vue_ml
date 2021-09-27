<template>
    <div>
      <br/><br/>
        Enter a sentence to check for toxicity. Note that getting the answer might take a few seconds.
      <br/><br/>
      <div>
        <label id="sentence_lable" for="passage">Enter the sentence here:</label>
        <textarea v-model="sentence" name="sentence" id="sentence" cols="80" rows="2">
        </textarea>
      </div>
      <button type="button" class="btn btn-success mb-1" @click="predict">Get answer</button>
      <br/><br/>
      <div id="answer" v-if="answer !== ''">
        Sentence is classified as: {{answer}}
      </div>
      <div id="no_answer" v-if="no_answer === true">
        Can't find the answer, please try again!
      </div>
    </div>
</template>

<script>
require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');
const threshold = 0.5;

export default {
    name: 'Toxicity',
    data () {
      return {
        answer: '',
        sentence: '',
        no_answer: false
      }
    },
    methods: {
      predict () {
        console.log('running toxicity');
        (async () => {
          const model = await toxicity.load(threshold);
          const answers = await model.classify(this.sentence);
          if (answers.length > 0) {
            this.answer = answers[0].label
            this.no_answer = false
          }
          else {
            this.answer = ''
            this.no_answer = true
          }
        })();
      }
    }
}
</script>

<style scoped>
#answer {
  color: brown;
  font-size: 30px;
}
</style>
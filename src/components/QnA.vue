<template>
    <div>
      <br/><br/>
        Enter a question and a passage to that question to find the answer. Note that getting the answer might take a few seconds.
      <br/><br/>
      <div>
        <label id="question_lable" for="question">Enter your question here: </label>
        <input v-model="question" id="question" type="text">
        <br/><br/>
        <label id="passage_lable" for="passage">Enter the passage here:</label>
        <textarea v-model="passage" name="passage" id="passage" cols="80" rows="5">
        </textarea>
      </div>
      <button type="button" class="btn btn-success mb-1" @click="predict">Get answer</button>
      <br/><br/>
      <div id="answer" v-if="answer !== ''">
        The answer is: {{answer}}
      </div>
      <div id="no_answer" v-if="no_answer === true">
        Can't find the answer, please try again!
      </div>
    </div>
</template>

<script>
const qna = require('@tensorflow-models/qna');

export default {
    name: 'qna',
    data () {
      return {
        answer: '',
        question: 'Who is the CEO of Google?',
        passage: "'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.'",
        no_answer: false
      }
    },
    methods: {
      predict () {
        console.log('running qna');
        (async () => {
          const model = await qna.load();
          const answers = await model.findAnswers(this.question, this.passage);
          if (answers.length > 0) {
            this.answer = answers[0].text
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
#question {
  margin: 5px;
  width: 600px;
}
#passage {
  margin: 5px;
  width: 600px;
}
#question_lable {
  margin: 5px;
  padding: 5px;
}
#answer {
  color: brown;
  font-size: 30px;
}
</style>
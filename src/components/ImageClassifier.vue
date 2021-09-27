<template>
  <div >
    <br/><br/>
    Choose an image file to classify. Note that getting the predictions might take a few seconds.
    <br/><br/>
    <div>
      <input type="file" @change="onFileChange" />
      <br/><br/>
      <button v-if="url" type="button" class="btn btn-success mb-1" @click="predict">Classify Image</button>
      <div class="row">
        <div class="col-6 p-4">Image</div>
        <div class="col-6 p-4">Results</div>
      </div>
      <div class="row">
        <div id="preview" class="col-6 p-4">
          <img id="img" v-if="url" :src="url" @click="predict"/>        
        </div>
        <div class="col-6 p-4">
          <pre id="prediction_results"  v-if="showPredictions === true">{{ prediction_results }}</pre>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const mobilenet = require('@tensorflow-models/mobilenet');

export default {
  name: 'ObjectDetector',
  data () {
    return {
      url: null,
      showPredictions: true,
      prediction_results: ''
    }
  },
  methods: {
    predict () {
      (async () => {
        const img = document.getElementById('img');

        // Load the model.
        const model = await mobilenet.load();

        // Classify the image.
        const predictions = await model.classify(img);

        console.log('Predictions: ');
        console.log(predictions);
        var results = []
        for (let i=0; i<predictions.length; i++) {
          results.push({Class: predictions[i].className, Score: predictions[i].probability})
        }
        this.prediction_results = results
      })();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.predict()
    }
  }
}
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  width: 600px;
  height: 400px;
}

#prediction_results {
  width: 600px;
  height: 300px;
}
</style>
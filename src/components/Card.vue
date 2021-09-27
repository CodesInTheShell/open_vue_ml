<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="machineLearning.srcImgLink" alt="Img src tensorflow org">
    <div class="card-body">
      <h5 class="card-title">{{machineLearning.title}}</h5>
      <p class="card-text">{{machineLearning.subTitle}}</p>
      <div class="btn btn-primary" @click="gotoPredictor">Try it out!</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Card',
  props: ['machineLearning'],
  data () {
    return {
      
    }
  },
  methods: {
    gotoPredictor () {
      console.log('model: ', this.machineLearning.model)
      this.$router.push( '/prediction/'+this.machineLearning.model)
    }
  }
}
</script>

<style scoped>

</style>
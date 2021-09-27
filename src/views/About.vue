<template>
  <div class="about">
    <Nav/>
    <h1>Welcome to our site <span class="username">{{username}}</span></h1>
    <p>In this site, you can find pre-trained javascript tensorflow js models that you can try, check it out below.</p>
    <div class="flex-row pb-4 pt-4 d-flex justify-content-evenly">
      <div class="col6">
        <card :machineLearning="machineLearnings[0]"/>
      </div>
      <div class="col6">
        <card :machineLearning="machineLearnings[1]"/>
      </div>
    </div>
    <div class="flex-row pb-4 pt-4 d-flex justify-content-evenly">
      <div class="col6">
        <card :machineLearning="machineLearnings[2]"/>
      </div>
      <div class="col6">
        <card :machineLearning="machineLearnings[3]"/>
      </div>
    </div>
    <Footer/>
    
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue'
import { mapState } from "vuex";


export default {
  name: 'about',
  components: {
    Nav,
    Card,
    Footer
  },
  beforeMount () {
    if (this.$store.state.username === '') {
      let user = localStorage.getItem('user')
      this.$store.dispatch('updateUserName', user);
    }
  },
  computed : {
    ...mapState({
            username: "username"
        })
  },
  data () {
    return {
      machineLearnings: 
        [
          {
            title: 'Object Detector',
            subTitle: 'Object detection model that describe objects in the image by tensorflow js.',
            srcImgLink: 'https://www.tensorflow.org/site-assets/images/marketing/icon/tile_model_shapes.png',
            model: 'object_detector'
          },
          {
            title: 'Image Classification',
            subTitle: 'Classify images with labels using ImageNet database MobileNet by tensorflow js.',
            srcImgLink: 'https://www.tensorflow.org/site-assets/images/marketing/icon/tile_model_image.png',
            model: 'image_classifier'
          },
          {
            title: 'Question and Answer',
            subTitle: 'Answers a given question.',
            srcImgLink: 'https://www.tensorflow.org/site-assets/images/marketing/icon/tile_model_question.png',
            model: 'qna'
          }
          ,
          {
            title: 'Toxicity detector',
            subTitle: 'Indentify the toxicity of a given sentence.',
            srcImgLink: 'https://www.tensorflow.org/site-assets/images/marketing/icon/tile_model_faces.png',
            model: 'toxicity'
          }
        ]  
    }
  }
}
</script>

<style scoped>
.username {
  color: brown;
  font-size: 60px;
}
</style>
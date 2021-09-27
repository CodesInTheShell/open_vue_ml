<template>
  <div class="about">
    <Nav/>
    <h1>Try something cool below <span class="username">{{username}}</span></h1>
    <object-detector v-if="model === 'object_detector'"/> 
    <image-classifier v-if="model === 'image_classifier'"/>
    <qn-a v-if="model === 'qna'"/>
    <toxicity v-if="model === 'toxicity'"/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ImageClassifier from '@/components/ImageClassifier.vue'
import ObjectDetector from '@/components/ObjectDetector.vue'
import QnA from '@/components/QnA.vue'
import Toxicity from '@/components/Toxicity.vue'
import { mapState } from "vuex";
import Footer from '@/components/Footer.vue'

export default {
  name: 'Prediction',
  components: {
    Nav,
    ImageClassifier,
    ObjectDetector,
    QnA,
    Toxicity,
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
      model: this.$route.params.model
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
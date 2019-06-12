<template lang="pug">
  div.p-3
    div {{outputText}}
    div
      b-button(@click="back" variant="warning") 戻る
    div.p-3
      img(:src="output" width="550")
</template>

<script lang="ts">
import Vue from 'vue'
import ImageModule from '../store/image'
export default Vue.extend({
  data() {
    return {
      output: '',
      outputText: ''
    }
  },
  mounted() {
    this.output = ImageModule.getImageInfo.url
    this.outputText = this.output
      ? '画像が生成されました。保存して共有しましょう！'
      : '画像が生成されていません。'
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
})
</script>

<template lang="pug">
  b-container(fluid).p-3
    b-row
      b-col
        div.p-3 最近話題のやつです。厳重なバリデーションチェックもシェア機能も、ブラウザバリデーションもないです。簡単なジョークグッズだと思ってください。
           | <br> なお、本アプリを利用して生じたいかなる損害に関しても、責任を負いかねますので、ご了承願います。

    b-row
      b-col(md=4)
        b-form.w-100
          b-form-group(label="タイトル" label-for="title")
            b-form-input#title(v-model="title")
          b-form-group(label="中身" label-for="content")
            b-form-textarea#content(v-model="content")
          b-form-group(label="著者" label-for="auther")
            b-form-input#auther(v-model="auther")
          b-form-group(label="色" label-for="color")
            b-form-radio(v-for="colorCode in colorCodeList" :key="colorCode" :value="colorCode" v-model="color")
              span(:style="{'background-color': colorCode, 'color': colorCode}") ________________
          div
            b-button.mr-2(@click="generate" variant="primary") 生成
            b-button(@click="reset") リセット
          div.mt-3 {{outputText}}
      b-col.output(ref="printEl" md=8)
        work-words(:color-code="colorCode" :title="title" :content="content" :auther="auther" :colorCode="color" )
</template>

<script>
import WorkWords from '../components/image/WorkWords.vue'
import ImageModule from '../store/image'

export default {
  components: {
    WorkWords
  },
  data() {
    return {
      title: '',
      content: '',
      auther: '',
      color: '#1d53c1',
      output: null,
      outputText: ''
    }
  },
  computed: {
    colorCodeList() {
      return ['#1d53c1', '#027c6c', '#00699e', '#109321', '#017c9b']
    }
  },
  methods: {
    async generate() {
      const el = this.$refs.printEl
      const options = {
        type: 'dataURL'
      }
      const output = await this.$html2canvas(el, options).catch(() => null)
      if (!output) {
        this.outputText = '画像の生成に失敗しました。'
      }
      ImageModule.setImage({ url: output })
      this.$router.push('/generated')
    },
    reset() {
      this.title = ''
      this.content = ''
      this.auther = ''
      this.output = null
      this.outputText = ''
    }
  }
}
</script>

<style lang="sass" scoped>
.output
  min-width: 550px;
  max-width: 550px;
  width: 550px;

.work-words
  letter-spacing: 5px;
</style>

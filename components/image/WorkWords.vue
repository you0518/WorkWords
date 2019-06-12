<template lang="pug">
  .write-contents-body.m-1.w-100.d-flex.align-items-start(:style="{color:colorCode}")
    .mr-4.ml-4
      h3.work-words {{title || 'はたらく言葉たち'}}
    .text-body.d-flex.flex-grow-1.justify-content-center.align-items-center.p-5(:style="{'border-color':colorCode}")
      .text-content.text-left(:style="{color:colorCode}") {{content || 'はたらきたくなることばをここへ。'}}
      .auther(:style="{color:colorCode}") {{auther || '著者'}}
</template>

<script>
export default {
  props: {
    colorCode: {
      type: String,
      default: '#0000F0'
    },
    title: {
      type: String,
      default: 'はたらく言葉たち'
    },
    content: {
      type: String,
      default: 'はたらきたくなることばをここへ。'
    },
    auther: {
      type: String,
      default: '著者'
    }
  }
}
</script>

<style lang="sass" scoped>
.write-contents-body > *
  writing-mode: vertical-rl;
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

.work-words
 letter-spacing: 5px;

.text-body
  position: relative;
  border: 25px solid;
  width: 50%;
  min-height: 666px;
  white-space: pre-wrap;

  box-sizing: border-box;

.text-content
  max-height: 462px;
  font-size: 18px;
  font-weight: bold;
  line-heigt: 40px;
  letter-spacing: 3px;

.auther
  position: absolute;
  font-size: 12px;
  left: 15px;
  bottom: 17px;
</style>

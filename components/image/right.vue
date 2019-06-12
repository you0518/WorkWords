<template lang="pug">
  .write-contents
    .write-contents-body.w-100.d-flex.flex-row-reverse.align-items-start(:style="{color:colorCode}")
      .ml-4
        h3.work-words Words that Work
      .text-body.d-flex.flex-grow-1.justify-content-center.align-items-center.p-5(:style="{'border-color':colorCode}")
        .text-content.text-left(:style="{color:colorCode}") If we wait around for education reform in this country, our children will become adults!
        .auther(:style="{color:colorCode}") アパレルメーカー
</template>

<script>
export default {
  props: {
    colorCode: {
      type: String,
      default: '#0000F0'
    }
  }
}
</script>

<style lang="sass" scoped>
.work-words
  letter-spacing: 1px;
  writing-mode: vertical-rl;
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

.text-body
  font-family: "游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  position: relative;
  border: 25px solid;
  height: 90vh;
  width: 50%;
  min-height: 666px;
  box-sizing: border-box;

.text-content
  max-height: 462px;
  font-size: 18px;
  font-weight: bold;
  line-heigt: 40px;
  letter-spacing: 1px;

.auther
  position: absolute;
  font-size: 12px;
  left: 15px;
  bottom: 17px;
</style>

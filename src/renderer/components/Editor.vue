<template>
  <div class="Editor">
    <div class="Editor-Input">
      <codemirror v-model="prettify" :options="editorOptions"></codemirror>
    </div>

    <div class="Editor-Output">
      <tree-view :data="value" :options="viewOptions"></tree-view>
    </div>
  </div>
</template>

<script>
  import VueJsonPretty from 'vue-json-pretty'
  require('codemirror/addon/lint/lint.css')
  require('codemirror/addon/lint/lint.js')
  require('codemirror/mode/javascript/javascript.js')
  require('codemirror/addon/lint/json-lint.js')

  export default {
    name: 'Editor',
    components: {
      VueJsonPretty
    },
    data () {
      return {
        prettify: '',
        value: '',
        viewOptions: {
          maxDepth: 1,
          rootObjectKey: 'root'
        },
        editorOptions: {
          tabSize: 2,
          mode: 'application/ld+json',
          theme: 'duotone-dark',
          lineNumbers: true,
          line: true,
          lineWrapping: true,
          lint: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers']
        }
      }
    },
    watch: {
      prettify: function (val) {
        this.value = JSON.parse(this.prettify)
      }
    }
  }
</script>

<style lang="scss">
  .Editor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;

    @media screen and (min-width: 700px) {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
    }
  }

  .Editor-Input,
  .Editor-Output {
    width: 100%;
    height: 50%;
    overflow: scroll;

    @media screen and (min-width: 700px) {
      width: 50%;
      height: 100%;
    }
  }

  .Editor-Input {
    position: relative;
    width: 100%;
    border-right: 1px solid #1C1924;
  }

  .Editor-Output {
    width: 100%;
    padding: 10px;
    background: #23202C;
    color: rgba(225, 225, 225, 0.7);
    line-height: 1.7;
    padding: 35px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .CodeMirror {
    height: 100vh;
    padding: 10px;
    padding-top: 35px;
  }

  .tree-view-item {
    font-size: 13px !important;
    font-weight: 600 !important;
  }

  .tree-view-item-value-string {
    white-space: pre-wrap !important;
  }
</style>

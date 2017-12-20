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
  require('codemirror/mode/javascript/javascript.js')
  require('codemirror/addon/lint/lint.css')
  require('codemirror/addon/lint/lint.js')
  require('codemirror/addon/lint/json-lint.js')
  require('codemirror/theme/duotone-dark.css')

  export default {
    name: 'Editor',
    data () {
      return {
        prettify: '{\n\t\n}',
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

  // Overrides
  .CodeMirror {
    height: 100vh;
    padding: 10px;
    padding-top: 35px;
    font-size: 13px;
  }

  .tree-view-item {
    font-size: 13px !important;
    font-weight: 600 !important;
  }

  .tree-view-item-value-string {
    white-space: pre-wrap !important;
  }

  .tree-view-item-key-with-chevron {
    color: #B5B2BD;
  }

  .tree-view-item-key {
    color: #777180;
  }

  .tree-view-item-hint,
  .tree-view-item-value-string {
    color: #B9B5C3 !important;
  }

  .CodeMirror-lint-tooltip {
    background: #211E29 !important;
    color: #FFF;
    padding: 10px;
    border: 0;
    border-left: 5px solid lighten(#211E29, 20%);
    border-radius: 0;
  }
</style>

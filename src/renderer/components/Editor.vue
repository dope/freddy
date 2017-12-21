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
    border-right: 1px solid rgba(black, 0.8);
  }

  .Editor-Output {
    width: 100%;
    padding: 10px;
    background: #211E29;
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
    white-space: pre-wrap;
  }

  .CodeMirror-lint-tooltip {
    background: #211E29;
    color: #FFF;
    padding: 10px;
    border: 0;
    border-left: 5px solid lighten(#211E29, 20%);
    border-radius: 0;
  }

  .tree-view-item-leaf {
    position: relative;

    &:after {
      top: 0;
      left: -13px;
      position: absolute;
      width: 1px;
      height: 100%;
      background: lighten(#211E29, 10%);
      content: "";
    }
  }

  .CodeMirror-gutters,
  .CodeMirror {
    background: #292533;
    line-height: 1.5;
  }

  .CodeMirror-gutters {
    border-right: 0;
  }

  .CodeMirror-linenumber {
    color: rgba(white, 0.2) !important;
  }

  .CodeMirror-line {
    color: #5B5765 !important;
  }

  .cm-property {
    color: #868290 !important;
  }

  .cs-number,
  .cm-atom,
  .cm-string {
    color: #ACA8B6 !important;
  }

  .cm-s-default .cm-number {
    color: #ACA8B6 !important;
  }

  .tree-view-item-key {
    color: #B1ADC3;
    font-weight: 300;
  }

  .tree-view-item-key-with-chevron {
    color: #9F8DE5;
    font-weight: 600 !important;
  }

  .tree-view-item-leaf {
    color: #9187BA;
  }

  .tree-view-item-value-number,
  .tree-view-item-value-string {
    color: #fec38f
  }
</style>

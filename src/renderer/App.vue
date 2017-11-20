<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
  import Editor from './components/Editor'
  export default {
    name: 'freddy',
    components: {
      Editor
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
  }

  body:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background: transparent;
    z-index: 1;
    content: "";
    -webkit-app-region: drag;
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  input[type="text"],
  button,
  textarea {
    -webkit-app-region: no-drag;
  }

</style>

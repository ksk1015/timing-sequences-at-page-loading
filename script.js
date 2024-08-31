setLog(
  `${
    document.currentScript
      ? document.currentScript.src.split('?name=')[1]
      : 'head-module'
  } script`
)

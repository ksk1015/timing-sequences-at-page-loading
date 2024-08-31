setLog(
  `${
    document.currentScript
      ? document.currentScript.src.split('?name=')[1].replace('-', ' ')
      : 'head module'
  } script`
)

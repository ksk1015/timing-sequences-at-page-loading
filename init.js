const logs = []
const setLog = (name) => {
  logs.push({ name, time: performance.now() })
}
window.addEventListener('load', () => {
  setLog('load')
  requestAnimationFrame(() => {
    const table = document.createElement('table')
    table.innerHTML = `
    <tbody>
      ${logs
        .map(
          ({ name, time }, i) =>
            `<tr><td>${i + 1} ${name}</td><td>${time.toFixed(
              2
            )}ms</td></tr>`
        )
        .join('')}
    </tbody>
  `
    document.body.appendChild(table)
  })
})
requestAnimationFrame(() => {
  setLog('requestAnimationFrame 1')
  requestAnimationFrame(() => {
    setLog('requestAnimationFrame 2')
  })
})
document.addEventListener('DOMContentLoaded', () => {
  setLog('DOMContentLoaded')
})
document.addEventListener('readystatechange', () => {
  setLog('readyState: ' + document.readyState)
})
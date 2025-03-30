;((w, d, u) => {
  const s = d.createElement('script')
  s.async = true
  s.src = `${u}?${Date.now() / 60000 || 0}`
  const h = d.getElementsByTagName('script')[0]
  h.parentNode.insertBefore(s, h)
})(
  window,
  document,
  'https://cdn.bitrix24.com/b25912303/crm/site_button/loader_1_4nmenc.js'
)

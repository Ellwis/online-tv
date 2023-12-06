export const textSpliter = (text: string) => {
  return text.length > 30 ? text.slice(0, 20) + '...' : text
}
export const titleSelector = (item: string) => {
  switch (item) {
    case '/irib':
      return 'صدا و سیما'
    case '/satellite':
      return 'ماهواره'
    case '/movies':
      return "فیلم وسریال"
    case '/religious':
      return "مذهبی"
    case '/sport':
      return "ورزشی"
    case '/ayas':
      return "اختصاصی آیاس"
    default:
      return ''
  }
}

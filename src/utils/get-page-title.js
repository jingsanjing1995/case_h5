import defaultSettings from '@/utils/settings'

const title = defaultSettings.title || 'AIS'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}
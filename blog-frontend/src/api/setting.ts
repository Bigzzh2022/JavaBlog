import api from './index'

export interface SiteSettings {
  siteName: string
  siteDescription: string
  logo: string
  icp: string
  allowRegister: boolean
  commentAudit: boolean
  pageSize: number
  summaryLength: number
  smtpServer: string
  smtpPort: string
  emailAccount: string
  emailPassword: string
  senderName: string
  analyticsCode: string
  customCss: string
  customJs: string
}

export const settingApi = {
  getSettings() {
    return api.get<SiteSettings>('/settings')
  },

  updateSettings(settings: Partial<SiteSettings>) {
    return api.put('/settings', settings)
  },

  getSetting(key: string) {
    return api.get<string>(`/settings/${key}`)
  },

  setSetting(key: string, value: string) {
    return api.put(`/settings/${key}`, value)
  }
} 
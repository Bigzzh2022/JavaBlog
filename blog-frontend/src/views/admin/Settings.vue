<template>
  <div class="system-settings">
    <el-tabs>
      <!-- 基本设置 -->
      <el-tab-pane label="基本设置">
        <el-card>
          <el-form
            ref="basicFormRef"
            :model="basicSettings"
            label-width="120px"
          >
            <el-form-item label="网站名称">
              <el-input v-model="basicSettings.siteName" />
            </el-form-item>
            <el-form-item label="网站描述">
              <el-input
                v-model="basicSettings.siteDescription"
                type="textarea"
                :rows="3"
              />
            </el-form-item>
            <el-form-item label="网站Logo">
              <el-upload
                class="logo-uploader"
                :show-file-list="false"
                :on-success="handleLogoSuccess"
              >
                <img
                  v-if="basicSettings.logo"
                  :src="basicSettings.logo"
                  class="logo"
                />
                <el-icon v-else class="logo-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="ICP备案号">
              <el-input v-model="basicSettings.icp" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveBasicSettings">
                保存设置
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>

      <!-- 内容设置 -->
      <el-tab-pane label="内容设置">
        <el-card>
          <el-form
            ref="contentFormRef"
            :model="contentSettings"
            label-width="120px"
          >
            <el-form-item label="评论审核">
              <el-switch v-model="contentSettings.commentAudit" />
            </el-form-item>
            <el-form-item label="允许注册">
              <el-switch v-model="contentSettings.allowRegister" />
            </el-form-item>
            <el-form-item label="每页文章数">
              <el-input-number
                v-model="contentSettings.pageSize"
                :min="1"
                :max="50"
              />
            </el-form-item>
            <el-form-item label="文章摘要长度">
              <el-input-number
                v-model="contentSettings.summaryLength"
                :min="50"
                :max="500"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveContentSettings">
                保存设置
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>

      <!-- 邮件设置 -->
      <el-tab-pane label="邮件设置">
        <el-card>
          <el-form
            ref="emailFormRef"
            :model="emailSettings"
            label-width="120px"
          >
            <el-form-item label="SMTP服务器">
              <el-input v-model="emailSettings.smtpServer" />
            </el-form-item>
            <el-form-item label="SMTP端口">
              <el-input v-model="emailSettings.smtpPort" />
            </el-form-item>
            <el-form-item label="邮箱账号">
              <el-input v-model="emailSettings.emailAccount" />
            </el-form-item>
            <el-form-item label="邮箱密码">
              <el-input
                v-model="emailSettings.emailPassword"
                type="password"
                show-password
              />
            </el-form-item>
            <el-form-item label="发件人名称">
              <el-input v-model="emailSettings.senderName" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveEmailSettings">
                保存设置
              </el-button>
              <el-button @click="testEmailSettings">发送测试邮件</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>

      <!-- 其他设置 -->
      <el-tab-pane label="其他设置">
        <el-card>
          <el-form
            ref="otherFormRef"
            :model="otherSettings"
            label-width="120px"
          >
            <el-form-item label="统计代码">
              <el-input
                v-model="otherSettings.analyticsCode"
                type="textarea"
                :rows="4"
              />
            </el-form-item>
            <el-form-item label="自定义CSS">
              <el-input
                v-model="otherSettings.customCss"
                type="textarea"
                :rows="4"
              />
            </el-form-item>
            <el-form-item label="自定义JS">
              <el-input
                v-model="otherSettings.customJs"
                type="textarea"
                :rows="4"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveOtherSettings">
                保存设置
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const basicSettings = reactive({
  siteName: '我的博客',
  siteDescription: '这是一个基于 Vue 3 的博客系统',
  logo: '',
  icp: ''
})

const contentSettings = reactive({
  commentAudit: true,
  allowRegister: true,
  pageSize: 10,
  summaryLength: 200
})

const emailSettings = reactive({
  smtpServer: '',
  smtpPort: '',
  emailAccount: '',
  emailPassword: '',
  senderName: ''
})

const otherSettings = reactive({
  analyticsCode: '',
  customCss: '',
  customJs: ''
})

const handleLogoSuccess = (res: any) => {
  basicSettings.logo = res.url
}

const saveBasicSettings = () => {
  // 实现保存基本设置逻辑
  ElMessage.success('保存成功')
}

const saveContentSettings = () => {
  // 实现保存内容设置逻辑
  ElMessage.success('保存成功')
}

const saveEmailSettings = () => {
  // 实现保存邮件设置逻辑
  ElMessage.success('保存成功')
}

const testEmailSettings = () => {
  // 实现发送测试邮件逻辑
  ElMessage.success('测试邮件已发送')
}

const saveOtherSettings = () => {
  // 实现保存其他设置逻辑
  ElMessage.success('保存成功')
}
</script>

<style scoped>
.system-settings {
  padding: 20px;
}

.logo-uploader {
  width: 120px;
  height: 120px;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.logo-uploader:hover {
  border-color: var(--el-color-primary);
}

.logo-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style> 
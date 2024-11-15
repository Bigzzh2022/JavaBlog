<template>
  <div class="settings">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <el-menu
            :default-active="activeMenu"
            @select="handleMenuSelect"
          >
            <el-menu-item index="profile">
              <el-icon><User /></el-icon>
              <span>个人资料</span>
            </el-menu-item>
            <el-menu-item index="account">
              <el-icon><Lock /></el-icon>
              <span>账号安全</span>
            </el-menu-item>
            <el-menu-item index="notification">
              <el-icon><Bell /></el-icon>
              <span>消息通知</span>
            </el-menu-item>
            <el-menu-item index="privacy">
              <el-icon><Lock /></el-icon>
              <span>隐私设置</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>

      <el-col :span="18">
        <el-card>
          <!-- 个人资料设置 -->
          <div v-if="activeMenu === 'profile'">
            <h2>个人资料</h2>
            <el-form
              ref="profileForm"
              :model="profileData"
              label-width="100px"
            >
              <el-form-item label="头像">
                <el-upload
                  class="avatar-uploader"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <img v-if="profileData.avatar" :src="profileData.avatar" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
              </el-form-item>

              <el-form-item label="用户名">
                <el-input v-model="profileData.username" />
              </el-form-item>

              <el-form-item label="个人简介">
                <el-input
                  v-model="profileData.bio"
                  type="textarea"
                  :rows="4"
                />
              </el-form-item>

              <el-form-item label="邮箱">
                <el-input v-model="profileData.email" />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="updateProfile">
                  保存修改
                </el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 账号安全设置 -->
          <div v-if="activeMenu === 'account'">
            <h2>修改密码</h2>
            <el-form
              ref="passwordForm"
              :model="passwordData"
              label-width="100px"
            >
              <el-form-item label="当前密码">
                <el-input
                  v-model="passwordData.oldPassword"
                  type="password"
                  show-password
                />
              </el-form-item>

              <el-form-item label="新密码">
                <el-input
                  v-model="passwordData.newPassword"
                  type="password"
                  show-password
                />
              </el-form-item>

              <el-form-item label="确认新密码">
                <el-input
                  v-model="passwordData.confirmPassword"
                  type="password"
                  show-password
                />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="updatePassword">
                  修改密码
                </el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 消息通知设置 -->
          <div v-if="activeMenu === 'notification'">
            <h2>消息通知</h2>
            <el-form label-width="200px">
              <el-form-item label="新评论通知">
                <el-switch v-model="notificationSettings.comment" />
              </el-form-item>

              <el-form-item label="点赞通知">
                <el-switch v-model="notificationSettings.like" />
              </el-form-item>

              <el-form-item label="新关注通知">
                <el-switch v-model="notificationSettings.follow" />
              </el-form-item>

              <el-form-item label="系统消息通知">
                <el-switch v-model="notificationSettings.system" />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="saveNotificationSettings">
                  保存设置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock, Bell, Plus } from '@element-plus/icons-vue'
import { userApi } from '@/api/user'
import { ElMessage } from 'element-plus'

const activeMenu = ref('profile')

const profileData = reactive({
  username: '',
  avatar: '',
  bio: '',
  email: ''
})

const passwordData = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const notificationSettings = reactive({
  comment: true,
  like: true,
  follow: true,
  system: true
})

const handleMenuSelect = (key: string) => {
  activeMenu.value = key
}

const handleAvatarSuccess = (res: any) => {
  profileData.avatar = res.url
}

const updateProfile = async () => {
  try {
    await userApi.updateProfile(profileData)
    ElMessage.success('个人资料更新成功')
  } catch (error) {
    ElMessage.error('更新失败')
  }
}

const updatePassword = async () => {
  if (passwordData.newPassword !== passwordData.confirmPassword) {
    ElMessage.error('两次输入的密码不一致')
    return
  }

  try {
    await userApi.updatePassword({
      oldPassword: passwordData.oldPassword,
      newPassword: passwordData.newPassword
    })
    ElMessage.success('密码修改成功')
  } catch (error) {
    ElMessage.error('密码修改失败')
  }
}

const saveNotificationSettings = async () => {
  try {
    await userApi.updateSettings({ notifications: notificationSettings })
    ElMessage.success('通知设置已保存')
  } catch (error) {
    ElMessage.error('保存失败')
  }
}
</script>

<style scoped>
.settings {
  padding: 20px;
}

.avatar-uploader {
  width: 100px;
  height: 100px;
  border: 1px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 
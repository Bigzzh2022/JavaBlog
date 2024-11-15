<template>
  <div class="about">
    <el-row :gutter="20" justify="center">
      <el-col :span="16">
        <el-card class="about-card">
          <template #header>
            <div class="about-header">
              <el-avatar :size="100" :src="profile.avatar" />
              <h1>{{ profile.name }}</h1>
              <p class="subtitle">{{ profile.title }}</p>
            </div>
          </template>

          <div class="about-content">
            <el-divider>个人简介</el-divider>
            <p class="bio">{{ profile.bio }}</p>

            <el-divider>技能标签</el-divider>
            <div class="skills">
              <el-tag
                v-for="skill in profile.skills"
                :key="skill"
                :type="getRandomTagType()"
                class="skill-tag"
              >
                {{ skill }}
              </el-tag>
            </div>

            <el-divider>工作经历</el-divider>
            <el-timeline>
              <el-timeline-item
                v-for="exp in profile.experience"
                :key="exp.company"
                :timestamp="exp.period"
                placement="top"
              >
                <el-card>
                  <h4>{{ exp.company }}</h4>
                  <p>{{ exp.position }}</p>
                  <p class="description">{{ exp.description }}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>

            <el-divider>联系方式</el-divider>
            <div class="contact-info">
              <el-descriptions :column="2">
                <el-descriptions-item label="邮箱">
                  <el-link type="primary" :href="'mailto:' + profile.email">
                    {{ profile.email }}
                  </el-link>
                </el-descriptions-item>
                <el-descriptions-item label="GitHub">
                  <el-link type="primary" :href="profile.github" target="_blank">
                    {{ profile.github }}
                  </el-link>
                </el-descriptions-item>
                <el-descriptions-item label="微信">
                  {{ profile.wechat }}
                </el-descriptions-item>
                <el-descriptions-item label="所在地">
                  {{ profile.location }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const profile = {
  name: '张三',
  title: '全栈开发工程师',
  avatar: 'https://example.com/avatar.jpg',
  bio: '热爱技术，专注于Web开发和系统架构设计。5年+开发经验，擅长前后端开发，对新技术充满热情。',
  skills: [
    'Vue.js', 'React', 'TypeScript', 'Node.js', 'Java',
    'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Kubernetes'
  ],
  experience: [
    {
      company: 'XX科技有限公司',
      position: '高级前端开发工程师',
      period: '2022-至今',
      description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。'
    },
    {
      company: 'YY互联网公司',
      position: '全栈开发工程师',
      period: '2020-2022',
      description: '参与企业级应用开发，负责前后端功能实现和性能优化。'
    }
  ],
  email: 'example@email.com',
  github: 'https://github.com/example',
  wechat: 'wxid_example',
  location: '深圳'
}

const tagTypes = ['', 'success', 'warning', 'info']
const getRandomTagType = () => {
  return tagTypes[Math.floor(Math.random() * tagTypes.length)]
}
</script>

<style scoped>
.about {
  padding: 40px 20px;
}

.about-card {
  margin-bottom: 20px;
}

.about-header {
  text-align: center;
  padding: 20px 0;
}

.about-header h1 {
  margin: 20px 0 10px;
}

.subtitle {
  color: var(--el-text-color-secondary);
  font-size: 1.1em;
}

.about-content {
  padding: 20px 0;
}

.bio {
  font-size: 1.1em;
  line-height: 1.8;
  color: var(--el-text-color-regular);
  text-align: justify;
}

.skills {
  margin: 20px 0;
}

.skill-tag {
  margin: 5px;
}

.description {
  color: var(--el-text-color-secondary);
  margin-top: 10px;
}

.contact-info {
  margin-top: 20px;
}
</style> 
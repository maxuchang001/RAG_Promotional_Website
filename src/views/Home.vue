<template>
  <div>
    <el-container class="main">
      <el-main>
        <h1>芯片设计文档的 85% 精度 RAG</h1>
        <p>无需代码，快速实现芯片设计文档的智能解析与处理</p>
        <el-button type="primary" icon="el-icon-video-camera">30 秒解说视频</el-button>

        <el-row :gutter="20" class="card-section">
          <el-col :span="8" v-for="(card, i) in cards" :key="i">
            <el-card>
              <h3>{{ card.title }}</h3>
              <p>{{ card.desc }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <el-aside width="260px" class="aside">
        <el-card>
          <div>
            <el-button type="primary" block style="width: 100%;">获取演示</el-button>
          </div>
          <div style="margin-top: 10px;">
            <el-button block style="width: 100%;">开始试用</el-button>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;">
          <h3>价格</h3>
          <p><strong>$12,000</strong></p>
          <span>SaaS 版本/本地许可</span>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">

const cards = [
  { title: '芯片设计文档', desc: '支持多种芯片设计文档格式，包含 PDF、Word、Markdown 等，通过支持的 RAG 技术，实现场景化智能理解。精度高达 85%。' },
  { title: '使用案例演示', desc: '通过典型示例演示，展示不同场景下的应用效果，涵盖从小型团队到大型企业。' },
  { title: '准确性验证', desc: '采用严格的准确性验证机制，确保信息提取与问答质量。' },
  { title: '应用场景', desc: '支持多个细分场景，包括验证、测试、设计文档管理等。' },
];
</script>

<style scoped>
.main {
  padding: 20px;
}
.card-section {
  margin-top: 30px;
}
.aside {
  padding: 10px;
}
</style>

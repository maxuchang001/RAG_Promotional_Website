<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <!-- <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav> -->

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">AI-driven IC design verification acceleration solution</h1>
      <div class="case-meta">Chip design / 7nm/5nm Process Support</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">Overview of the scenario</h2>
        <p class="section-desc">
          This solution uses AI algorithms to automatically identify potential problems in chip design, shortening the traditional verification cycle by 40%, especially for 7nm and 5nm advanced process technologies. The system works seamlessly with Cadence and Synopsys' leading EDA toolchains to deliver end-to-end intelligence in the design process.
        </p>
      </section>

      <!-- 核心优势 -->
      <section class="case-section">
        <h2 class="section-title">Core Benefits:</h2>
        <div class="advantages-list">
          <div class="advantage-item">
            <div class="advantage-icon">⏱️</div>
            <div class="advantage-text">Reduce time costs by reducing validation cycles by 40%.</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🎯</div>
            <div class="advantage-text">The accuracy rate of problem identification is 98.7%, reducing manual troubleshooting</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🔄</div>
            <div class="advantage-text">It supports multiple process nodes and is compatible with 7nm/5nm advanced processes</div>
          </div>
        </div>
      </section>

      <!-- 技术细节 -->
      <section class="case-section">
        <h2 class="section-title">Technical details</h2>
        <ul class="tech-details">
          <li>AI model: Design pattern-aware network based on the Transformer architecture</li>
          <li>Toolchain support: Cadence Virtuoso, Synopsys IC Compiler II, etc.</li>
          <li>Deployment mode: On-premise server or cloud SaaS mode is optional</li>
          <li>Typical Case: A 5nm Mobile Processor Design Project Improves Verification Efficiency by 42%</li>
        </ul>
      </section>

      <!-- 联系咨询 -->
      <section class="contact-section">
        <div class="contact-card">
          <h3 class="contact-title">Get detailed program information</h3>
          <button class="contact-btn">Contact a technical advisor</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 可在此处添加页面交互逻辑
</script>

<style scoped>
/* 页面样式 */
.case-detail-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
}

/* 导航样式 */
.case-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.back-link {
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.nav-title {
  font-size: 16px;
  color: #666;
}

/* 标题样式 */
.case-header {
  margin-bottom: 40px;
}

.case-title {
  font-size: 32px;
  margin-bottom: 12px;
  color: #333;
}

.case-meta {
  color: #888;
  font-size: 14px;
}

/* 内容区域 */
.case-content {
  line-height: 1.8;
}

.case-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 20px;
  margin-bottom: 16px;
  color: #222;
  padding-bottom: 8px;
  border-bottom: 2px solid #eef2f7;
}

.section-desc {
  color: #555;
  margin-bottom: 20px;
}

/* 优势列表 */
.advantages-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.advantage-item {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.advantage-icon {
  font-size: 24px;
  margin-bottom: 12px;
  color: #007bff;
}

/* 技术细节 */
.tech-details {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
}

.tech-details li {
  margin-bottom: 10px;
}

/* 联系区域 */
.contact-section {
  margin-top: 60px;
}

.contact-card {
  background-color: #eef2f7;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
}

.contact-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.contact-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: #0056b3;
}
</style>
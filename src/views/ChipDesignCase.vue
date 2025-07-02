<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav>

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">AI 驱动芯片设计验证加速方案</h1>
      <div class="case-meta">Chip design / 7nm/5nm 工艺支持</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">方案概述</h2>
        <p class="section-desc">
          本方案通过 AI 算法自动识别芯片设计中的潜在问题，将传统验证周期缩短 40%，特别适用于 7nm 和 5nm 先进制程工艺。
          系统可与 Cadence、Synopsys 主流 EDA 工具链无缝协同，实现设计流程的端到端智能化。
        </p>
      </section>

      <!-- 核心优势 -->
      <section class="case-section">
        <h2 class="section-title">核心优势</h2>
        <div class="advantages-list">
          <div class="advantage-item">
            <div class="advantage-icon">⏱️</div>
            <div class="advantage-text">验证周期缩短 40%，降低时间成本</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🎯</div>
            <div class="advantage-text">问题识别准确率达 98.7%，减少人工排查</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🔄</div>
            <div class="advantage-text">支持多工艺节点，兼容 7nm/5nm 先进制程</div>
          </div>
        </div>
      </section>

      <!-- 技术细节 -->
      <section class="case-section">
        <h2 class="section-title">技术细节</h2>
        <ul class="tech-details">
          <li>AI 模型：基于 Transformer 架构的设计模式识别网络</li>
          <li>工具链支持：Cadence Virtuoso、Synopsys IC Compiler II 等</li>
          <li>部署方式：本地服务器/云端 SaaS 两种模式可选</li>
          <li>典型案例：某 5nm 移动处理器设计项目验证效率提升 42%</li>
        </ul>
      </section>

      <!-- 联系咨询 -->
      <section class="contact-section">
        <div class="contact-card">
          <h3 class="contact-title">获取详细方案资料</h3>
          <button class="contact-btn">联系技术顾问</button>
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
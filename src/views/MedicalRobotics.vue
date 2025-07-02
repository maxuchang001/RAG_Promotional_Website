<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav>

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">医疗机器人精准手术协同系统</h1>
      <div class="case-meta">Medical robotics / 亚毫米级精度</div>
      <div class="case-badge">通过 FDA 临床验证阶段</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">方案概述</h2>
        <p class="section-desc">
          本系统是一款 AI 辅助的医疗机器人精准手术协同平台，通过多模态影像融合、实时导航和智能控制技术，
          实现亚毫米级手术精度（误差 &lt;0.1mm）。系统支持医生实时接管，具备完整的安全冗余机制，
          目前已通过 FDA 临床验证阶段，适用于神经外科、骨科、泌尿外科等多种手术场景。
        </p>
      </section>

      <!-- 技术原理 -->
      <section class="case-section">
        <h2 class="section-title">技术原理</h2>
        <div class="tech-principle">
          <div class="principle-item">
            <div class="principle-icon">📡</div>
            <div class="principle-content">
              <h3 class="principle-title">多模态影像融合</h3>
              <p class="principle-desc">
                融合 CT、MRI、超声等多种影像数据，构建三维立体模型，为手术提供精准解剖结构信息
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🧠</div>
            <div class="principle-content">
              <h3 class="principle-title">AI 路径规划</h3>
              <p class="principle-desc">
                基于深度学习算法，自动规划最佳手术路径，避开重要神经和血管，减少手术创伤
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🤖</div>
            <div class="principle-content">
              <h3 class="principle-title">精准运动控制</h3>
              <p class="principle-desc">
                采用高精度机械臂和微纳级传感器，实现亚毫米级操作精度，稳定执行复杂手术动作
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🔄</div>
            <div class="principle-content">
              <h3 class="principle-title">实时反馈调节</h3>
              <p class="principle-desc">
                术中实时监测手术器械位置和组织状态，动态调整操作参数，确保手术安全
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 手术流程 -->
      <section class="case-section">
        <h2 class="section-title">手术流程</h2>
        <div class="surgery-steps">
          <div class="step-item" :class="{ 'active-step': currentStep >= 1 }">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">术前规划</h3>
              <p class="step-desc">
                导入患者影像数据，AI 自动识别解剖结构，生成个性化手术方案，医生可进行调整确认
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 2 }">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">设备准备</h3>
              <p class="step-desc">
                手术机器人系统定位和校准，安装专用手术器械，连接患者监测设备
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 3 }">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">机器人操作</h3>
              <p class="step-desc">
                系统按照预设方案执行手术操作，实时显示手术视野和器械位置，精度控制在 0.1mm 以内
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 4 }">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">医生实时监控</h3>
              <p class="step-desc">
                主刀医生全程监控手术过程，可随时手动接管系统，确保手术安全可控
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 5 }">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3 class="step-title">术后评估</h3>
              <p class="step-desc">
                系统自动生成手术报告，包括操作路径、组织损伤情况和术后建议
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术参数 -->
      <section class="case-section">
        <h2 class="section-title">技术参数</h2>
        <div class="tech-specs">
          <div class="specs-group">
            <h3 class="group-title">精度指标</h3>
            <ul class="specs-list">
              <li><span class="specs-label">定位精度:</span> &lt;0.08mm</li>
              <li><span class="specs-label">重复精度:</span> &lt;0.05mm</li>
              <li><span class="specs-label">角度误差:</span> &lt;0.05°</li>
            </ul>
          </div>
          <div class="specs-group">
            <h3 class="group-title">操作范围</h3>
            <ul class="specs-list">
              <li><span class="specs-label">工作空间:</span> 直径 600mm 半球形区域</li>
              <li><span class="specs-label">自由度:</span> 7+1 轴（机械臂+工具）</li>
              <li><span class="specs-label">最大负载:</span> 5kg</li>
            </ul>
          </div>
          <div class="specs-group">
            <h3 class="group-title">安全特性</h3>
            <ul class="specs-list">
              <li><span class="specs-label">紧急停止:</span> 三级安全机制</li>
              <li><span class="specs-label">力反馈:</span> 触觉反馈系统</li>
              <li><span class="specs-label">故障安全:</span> 冗余设计，双电源备份</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 临床数据 -->
      <section class="case-section">
        <h2 class="section-title">临床数据</h2>
        <div class="clinical-data">
          <div class="data-item">
            <div class="data-value">96.8%</div>
            <div class="data-label">手术成功率</div>
          </div>
          <div class="data-item">
            <div class="data-value">78%</div>
            <div class="data-label">术后并发症减少率</div>
          </div>
          <div class="data-item">
            <div class="data-value">65%</div>
            <div class="data-label">手术时间缩短</div>
          </div>
          <div class="data-item">
            <div class="data-value">83%</div>
            <div class="data-label">患者恢复速度提升</div>
          </div>
        </div>
      </section>

      <!-- 医生评价 -->
      <section class="case-section">
        <h2 class="section-title">医生评价</h2>
        <div class="doctor-reviews">
          <div class="review-item">
            <div class="review-header">
              <img src="https://picsum.photos/seed/doctor1/100/100" alt="张教授" class="doctor-avatar" />
              <div class="doctor-info">
                <h3 class="doctor-name">张教授</h3>
                <div class="doctor-title">神经外科主任医师</div>
              </div>
            </div>
            <div class="review-content">
              "这套系统在脑肿瘤切除手术中表现出色，精度远超传统手术方式，能够最大程度保护周围神经组织。
              我们已经使用该系统完成了50多例手术，患者术后恢复情况明显优于传统手术组。"
            </div>
          </div>
          <div class="review-item">
            <div class="review-header">
              <img src="https://picsum.photos/seed/doctor2/100/100" alt="李医生" class="doctor-avatar" />
              <div class="doctor-info">
                <h3 class="doctor-name">李医生</h3>
                <div class="doctor-title">骨科副主任医师</div>
              </div>
            </div>
            <div class="review-content">
              "在脊柱手术中，系统的导航功能非常精确，大大减少了手术风险。特别是对于复杂病例，
              AI辅助规划提供了多种可选方案，帮助我们做出更优的手术决策。患者的术后疼痛明显减轻，恢复时间缩短。"
            </div>
          </div>
        </div>
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
import { ref, onMounted } from 'vue'

// 手术步骤动画
const currentStep = ref(0)

onMounted(() => {
  // 模拟步骤动画
  let stepIndex = 1
  const interval = setInterval(() => {
    if (stepIndex <= 5) {
      currentStep.value = stepIndex
      stepIndex++
    } else {
      clearInterval(interval)
    }
  }, 1000)
})
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
  margin-bottom: 12px;
}

.case-badge {
  display: inline-block;
  background-color: #4caf50;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
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

/* 技术原理 */
.tech-principle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.principle-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.principle-icon {
  font-size: 32px;
  color: #007bff;
  min-width: 40px;
  text-align: center;
}

.principle-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.principle-desc {
  color: #555;
  font-size: 14px;
}

/* 手术流程 */
.surgery-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-item {
  display: flex;
  gap: 16px;
  opacity: 0.6;
  transition: opacity 0.5s;
}

.active-step {
  opacity: 1;
}

.step-number {
  background-color: #007bff;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.step-desc {
  color: #555;
  font-size: 14px;
}

/* 技术参数 */
.tech-specs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.specs-group {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
}

.group-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
}

.specs-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.specs-list li {
  margin-bottom: 8px;
  font-size: 14px;
}

.specs-label {
  font-weight: 600;
  display: inline-block;
  min-width: 100px;
  color: #333;
}

/* 临床数据 */
.clinical-data {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.data-item {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  min-width: 150px;
}

.data-value {
  font-size: 32px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 8px;
}

.data-label {
  color: #555;
  font-size: 14px;
}

/* 医生评价 */
.doctor-reviews {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-item {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.review-header {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.doctor-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.doctor-name {
  font-size: 16px;
  font-weight: bold;
}

.doctor-title {
  font-size: 14px;
  color: #666;
}

.review-content {
  color: #555;
  font-size: 14px;
  line-height: 1.8;
  font-style: italic;
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
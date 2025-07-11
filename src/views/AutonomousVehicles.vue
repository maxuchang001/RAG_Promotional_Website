<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <!-- <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav> -->

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">自动驾驶全栈感知与决策方案</h1>
      <div class="case-meta">Autonomous vehicles / L4 级方案</div>
      <div class="case-badge">通过 ISO 26262 功能安全认证</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">方案概述</h2>
        <p class="section-desc">
          本方案为 L4 级自动驾驶提供全栈感知与决策支持，可覆盖城市道路、高速公路等多场景，支持 12 路摄像头与激光雷达融合感知，
          已通过 ISO 26262 功能安全认证，确保自动驾驶系统的高可靠性。系统采用模块化设计，可根据不同车型和应用场景进行定制化配置。
        </p>
      </section>

      <!-- 技术架构 -->
      <section class="case-section">
        <h2 class="section-title">技术架构</h2>
        <div class="architecture-diagram">
          <div class="layer">
            <div class="layer-title">传感器层</div>
            <div class="component">12路摄像头</div>
            <div class="component">激光雷达</div>
            <div class="component">毫米波雷达</div>
            <div class="component">超声波传感器</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">感知层</div>
            <div class="component">目标检测</div>
            <div class="component">语义分割</div>
            <div class="component">多传感器融合</div>
            <div class="component">场景理解</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">决策层</div>
            <div class="component">路径规划</div>
            <div class="component">行为决策</div>
            <div class="component">运动控制</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">执行层</div>
            <div class="component">转向控制</div>
            <div class="component">加速控制</div>
            <div class="component">制动控制</div>
          </div>
        </div>
      </section>

      <!-- 核心优势 -->
      <section class="case-section">
        <h2 class="section-title">核心优势</h2>
        <div class="advantages-list">
          <div class="advantage-item">
            <div class="advantage-icon">👁️</div>
            <div class="advantage-text">360° 全向感知，探测距离达 200 米</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">⚙️</div>
            <div class="advantage-text">实时处理速度 &lt;50ms，响应迅速</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🌧️</div>
            <div class="advantage-text">全天候工作能力，支持雨、雪、雾等恶劣天气</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🔒</div>
            <div class="advantage-text">功能安全设计，符合 ISO 26262 ASIL-D 等级</div>
          </div>
        </div>
      </section>

      <!-- 系统演示 -->
      <section class="case-section">
        <h2 class="section-title">系统演示</h2>
        <div class="demo-container">
          <div class="demo-video">
            <!-- 视频占位图 -->
            <div class="video-placeholder">
              <div class="play-button">▶️</div>
              <div class="video-info">系统运行演示视频</div>
            </div>
          </div>
          <div class="demo-info">
            <h3 class="demo-title">多传感器融合效果</h3>
            <p class="demo-desc">
              本视频展示了系统在城市道路环境下的实时运行效果，包括目标检测、轨迹预测和决策规划等功能。
              系统能够准确识别行人、车辆、交通标志和信号灯，并做出安全合理的驾驶决策。
            </p>
            <ul class="demo-features">
              <li>实时目标检测与跟踪</li>
              <li>复杂场景下的路径规划</li>
              <li>动态障碍物避让策略</li>
              <li>交通规则自动遵守</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 安全认证 -->
      <section class="case-section">
        <h2 class="section-title">安全认证</h2>
        <div class="certifications">
          <div class="certification-item">
            <div class="certification-logo">ISO 26262</div>
            <div class="certification-desc">功能安全认证（ASIL-D 等级）</div>
          </div>
          <div class="certification-item">
            <div class="certification-logo">ISO 9001</div>
            <div class="certification-desc">质量管理体系认证</div>
          </div>
          <div class="certification-item">
            <div class="certification-logo">ISO 14001</div>
            <div class="certification-desc">环境管理体系认证</div>
          </div>
        </div>
        <p class="certification-note">
          我们的系统经过严格测试和验证，符合国际安全标准，确保在各种情况下都能提供可靠的自动驾驶功能。
          通过冗余设计和故障安全机制，系统能够在发生故障时安全停车，最大限度降低风险。
        </p>
      </section>

      <!-- 实际应用案例 -->
      <section class="case-section">
        <h2 class="section-title">实际应用案例</h2>
        <div class="case-studies">
          <div class="study-item">
            <div class="study-image">
              <img src="https://picsum.photos/seed/av1/400/200" alt="自动驾驶出租车服务" />
            </div>
            <div class="study-content">
              <h3 class="study-title">自动驾驶出租车服务</h3>
              <p class="study-desc">
                在某一线城市部署的自动驾驶出租车服务，累计安全行驶超过 100 万公里，
                日均服务乘客超过 5000 人次，高峰期接单响应速度提升 30%。
              </p>
            </div>
          </div>
          <div class="study-item">
            <div class="study-image">
              <img src="https://picsum.photos/seed/av2/400/200" alt="物流配送场景" />
            </div>
            <div class="study-content">
              <h3 class="study-title">物流配送场景</h3>
              <p class="study-desc">
                应用于城市物流配送，实现 24 小时不间断运输，配送效率提升 40%，
                运营成本降低 35%，特别适合商超补货、快递末端配送等场景。
              </p>
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
// 页面交互逻辑
import { ref } from 'vue'

const isVideoPlaying = ref(false)

const toggleVideoPlay = () => {
  isVideoPlaying.value = !isVideoPlaying.value
  // 实际项目中这里应该有真实的视频播放逻辑
}
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
  background-color: #007bff;
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

/* 技术架构图 */
.architecture-diagram {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.layer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 8px;
}

.layer-title {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.component {
  background-color: #eef2f7;
  padding: 6px 12px;
  border-radius: 4px;
  margin: 4px;
  font-size: 14px;
  color: #555;
}

.connection {
  height: 40px;
  width: 2px;
  background-color: #ddd;
  margin: 0 auto;
}

/* 核心优势 */
.advantages-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.advantage-item {
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  gap: 12px;
}

.advantage-icon {
  font-size: 24px;
  color: #007bff;
  min-width: 30px;
  text-align: center;
}

/* 系统演示 */
.demo-container {
  display: flex;
  gap: 30px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.demo-video {
  flex: 1;
  min-width: 400px;
}

.video-placeholder {
  background-color: #333;
  height: 240px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  position: relative;
}

.play-button {
  font-size: 48px;
  margin-bottom: 12px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.video-placeholder:hover .play-button {
  opacity: 1;
}

.video-info {
  font-size: 14px;
  opacity: 0.8;
}

.demo-info {
  flex: 1;
}

.demo-title {
  font-size: 18px;
  margin-bottom: 12px;
}

.demo-desc {
  margin-bottom: 16px;
  color: #555;
}

.demo-features {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
}

.demo-features li {
  margin-bottom: 8px;
}

/* 安全认证 */
.certifications {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.certification-item {
  flex: 1;
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.certification-logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.certification-desc {
  font-size: 14px;
  color: #666;
}

.certification-note {
  color: #555;
  font-size: 14px;
  line-height: 1.6;
}

/* 实际应用案例 */
.case-studies {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.study-item {
  display: flex;
  gap: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.study-image {
  flex: 1;
  min-width: 300px;
}

.study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.study-content {
  flex: 2;
  padding: 20px;
}

.study-title {
  font-size: 18px;
  margin-bottom: 12px;
}

.study-desc {
  color: #555;
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
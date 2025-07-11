<template>
  <div class="case-detail-page">
    <!-- Page Header -->
    <div class="case-header">
      <h1 class="case-title">Full-Stack Perception and Decision Solution for Autonomous Vehicles</h1>
      <div class="case-meta">Autonomous vehicles / L4 Solution</div>
      <div class="case-badge">ISO 26262 Functional Safety Certified</div>
    </div>

    <!-- Main Content -->
    <div class="case-content">
      <!-- Solution Overview -->
      <section class="case-section">
        <h2 class="section-title">Solution Overview</h2>
        <p class="section-desc">
          This solution provides full-stack perception and decision support for L4 autonomous driving, covering urban roads, highways, and more. It supports fusion perception from 12 cameras and LiDAR, and has passed ISO 26262 functional safety certification to ensure high reliability. The system uses modular design and can be customized for different vehicle models and application scenarios.
        </p>
      </section>

      <!-- Technical Architecture -->
      <section class="case-section">
        <h2 class="section-title">Technical Architecture</h2>
        <div class="architecture-diagram">
          <div class="layer">
            <div class="layer-title">Sensor Layer</div>
            <div class="component">12 Cameras</div>
            <div class="component">LiDAR</div>
            <div class="component">Millimeter-Wave Radar</div>
            <div class="component">Ultrasonic Sensors</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">Perception Layer</div>
            <div class="component">Object Detection</div>
            <div class="component">Semantic Segmentation</div>
            <div class="component">Multi-Sensor Fusion</div>
            <div class="component">Scene Understanding</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">Decision Layer</div>
            <div class="component">Path Planning</div>
            <div class="component">Behavior Decision</div>
            <div class="component">Motion Control</div>
          </div>
          <div class="connection"></div>
          <div class="layer">
            <div class="layer-title">Execution Layer</div>
            <div class="component">Steering Control</div>
            <div class="component">Acceleration Control</div>
            <div class="component">Braking Control</div>
          </div>
        </div>
      </section>

      <!-- Key Advantages -->
      <section class="case-section">
        <h2 class="section-title">Key Advantages</h2>
        <div class="advantages-list">
          <div class="advantage-item">
            <div class="advantage-icon">👁️</div>
            <div class="advantage-text">360° omnidirectional perception, detection range up to 200 meters</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">⚙️</div>
            <div class="advantage-text">Real-time processing speed &lt;50ms, fast response</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🌧️</div>
            <div class="advantage-text">All-weather capability, supports rain, snow, fog, and other harsh conditions</div>
          </div>
          <div class="advantage-item">
            <div class="advantage-icon">🔒</div>
            <div class="advantage-text">Functional safety design, meets ISO 26262 ASIL-D level</div>
          </div>
        </div>
      </section>

      <!-- System Demo -->
      <section class="case-section">
        <h2 class="section-title">System Demo</h2>
        <div class="demo-container">
          <div class="demo-video">
            <!-- Video Placeholder -->
            <div class="video-placeholder">
              <div class="play-button">▶️</div>
              <div class="video-info">System Operation Demo Video</div>
            </div>
          </div>
          <div class="demo-info">
            <h3 class="demo-title">Multi-Sensor Fusion Effects</h3>
            <p class="demo-desc">
              This video shows the system's real-time operation in urban road environments, including object detection, trajectory prediction, and decision planning. The system accurately identifies pedestrians, vehicles, traffic signs, and signals, and makes safe and reasonable driving decisions.
            </p>
            <ul class="demo-features">
              <li>Real-time object detection and tracking</li>
              <li>Path planning in complex scenarios</li>
              <li>Dynamic obstacle avoidance strategies</li>
              <li>Automatic compliance with traffic rules</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Safety Certifications -->
      <section class="case-section">
        <h2 class="section-title">Safety Certifications</h2>
        <div class="certifications">
          <div class="certification-item">
            <div class="certification-logo">ISO 26262</div>
            <div class="certification-desc">Functional Safety Certification (ASIL-D Level)</div>
          </div>
          <div class="certification-item">
            <div class="certification-logo">ISO 9001</div>
            <div class="certification-desc">Quality Management System Certification</div>
          </div>
          <div class="certification-item">
            <div class="certification-logo">ISO 14001</div>
            <div class="certification-desc">Environmental Management System Certification</div>
          </div>
        </div>
        <p class="certification-note">
          Our system has undergone rigorous testing and validation, meeting international safety standards to ensure reliable autonomous driving in all conditions. Through redundancy design and fail-safe mechanisms, the system can safely stop in case of failure, minimizing risk.
        </p>
      </section>

      <!-- Real-World Case Studies -->
      <section class="case-section">
        <h2 class="section-title">Real-World Case Studies</h2>
        <div class="case-studies">
          <div class="study-item">
            <div class="study-image">
              <img src="https://picsum.photos/seed/av1/400/200" alt="Autonomous Taxi Service" />
            </div>
            <div class="study-content">
              <h3 class="study-title">Autonomous Taxi Service</h3>
              <p class="study-desc">
                Deployed in a major city, the autonomous taxi service has safely driven over 1 million kilometers, serving more than 5,000 passengers daily. Peak order response speed increased by 30%.
              </p>
            </div>
          </div>
          <div class="study-item">
            <div class="study-image">
              <img src="https://picsum.photos/seed/av2/400/200" alt="Logistics Delivery Scenario" />
            </div>
            <div class="study-content">
              <h3 class="study-title">Logistics Delivery Scenario</h3>
              <p class="study-desc">
                Applied to urban logistics delivery, enabling 24/7 continuous transport, improving delivery efficiency by 40%, and reducing operating costs by 35%. Especially suitable for supermarket restocking and last-mile delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="contact-section">
        <div class="contact-card">
          <h3 class="contact-title">Get Detailed Solution Materials</h3>
          <button class="contact-btn">Contact Technical Consultant</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVideoPlaying = ref(false)

const toggleVideoPlay = () => {
  isVideoPlaying.value = !isVideoPlaying.value
  // In a real project, add actual video play logic here
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
<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <!-- <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav> -->

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">Financial risk control and compliance automation solutions</h1>
      <div class="case-meta">Fin - reg compliance / Full process automation</div>
      <div class="case-badge">Adaptation to Basel III/GDPR regulations</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">Overview of the scenario</h2>
        <p class="section-desc">
          This solution covers the whole process of anti-money laundering, data reporting, and KYC (customer identity verification) of financial institutions, automatically identifies suspicious transactions based on AI algorithms, intelligently generates compliance reports, and fully adapts to international regulatory requirements such as Basel III and GDPR. The system supports real-time monitoring and early warning, and audit logs are automatically generated, helping financial institutions significantly reduce compliance costs and improve risk control efficiency.
        </p>
      </section>

      <!-- 监管法规地图 -->
      <section class="case-section">
        <h2 class="section-title">Regulatory adaptation</h2>
        <div class="regulations-map">
          <div class="regulation-item" :class="{ active: isRegulationActive('basel') }" @click="toggleRegulation('basel')">
            <div class="regulation-icon">🏦</div>
            <div class="regulation-name">Basel III</div>
            <div class="regulation-desc">Capital adequacy, liquidity risk, leverage regulation</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('gdpr') }" @click="toggleRegulation('gdpr')">
            <div class="regulation-icon">🔒</div>
            <div class="regulation-name">GDPR</div>
            <div class="regulation-desc">Personal Data Protection & Privacy Regulations</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('aml') }" @click="toggleRegulation('aml')">
            <div class="regulation-icon">🚫💸</div>
            <div class="regulation-name">Anti-Money Laundering Regulations</div>
            <div class="regulation-desc">Customer identification, suspicious transaction reporting</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('kyc') }" @click="toggleRegulation('kyc')">
            <div class="regulation-icon">👤</div>
            <div class="regulation-name">KYC compliance</div>
            <div class="regulation-desc">Customer authentication and continuous monitoring</div>
          </div>
        </div>
      </section>

      <!-- 风控流程 -->
      <section class="case-section">
        <h2 class="section-title">Risk control process</h2>
        <div class="risk-control-flow">
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 1 }">
            <div class="stage-number">1</div>
            <div class="stage-title">Data acquisition</div>
            <div class="stage-content">
              <p>Real-time access to multi-source data, including transaction records, customer information, external risk data, etc</p>
              <ul>
                <li>Trading system interface</li>
                <li>Customer relationship management system</li>
                <li>Third-Party Data Services</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 2 }">
            <div class="stage-number">2</div>
            <div class="stage-title">Risk identification</div>
            <div class="stage-content">
              <p>The AI model automatically analyzes and identifies suspicious transaction patterns and risk points</p>
              <ul>
                <li>Abnormal transaction detection</li>
                <li>Customer profiling analysis</li>
                <li>Risk score calculations</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 3 }">
            <div class="stage-number">3</div>
            <div class="stage-title">Compliance Review</div>
            <div class="stage-content">
              <p>Automate compliance checks to ensure your business is compliant</p>
              <ul>
                <li>Regulatory rule matching</li>
                <li>Sanctions list screening</li>
                <li>Conflict of Interest Detection</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 4 }">
            <div class="stage-number">4</div>
            <div class="stage-title">Early warning disposal</div>
            <div class="stage-content">
              <p>Hierarchical early warning of risk events, supporting manual intervention and automatic processing</p>
              <ul>
                <li>Risk level classification</li>
                <li>Automatic freezing mechanism</li>
                <li>Investigation process management</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 5 }">
            <div class="stage-number">5</div>
            <div class="stage-title">Audit report</div>
            <div class="stage-content">
              <p>Automatically generate compliance audit reports to support regulatory submissions</p>
              <ul>
                <li>Regulatory report generation</li>
                <li>Audit log archiving</li>
                <li>Compliance metrics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术架构 -->
      <section class="case-section">
        <h2 class="section-title">Technical architecture</h2>
        <div class="tech-architecture">
          <div class="layer" :class="{ 'active-layer': currentLayer === 1 }" @click="setActiveLayer(1)">
            <div class="layer-title">Data layer</div>
            <div class="layer-content">
              <ul>
                <li>Multi-source data collection</li>
                <li>Data cleansing and integration</li>
                <li>Real-time data storage</li>
                <li>Historical data warehouse</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 2 }" @click="setActiveLayer(2)">
            <div class="layer-title">Engine layer</div>
            <div class="layer-content">
              <ul>
                <li>Rules Engine</li>
                <li>Machine learning models</li>
                <li>Real-time computing engine</li>
                <li>Graph computing platform</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 3 }" @click="setActiveLayer(3)">
            <div class="layer-title">Application layer</div>
            <div class="layer-content">
              <ul>
                <li>Anti-Money Laundering System</li>
                <li>KYC management system</li>
                <li>Risk monitoring platform</li>
                <li>Compliance reporting system</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 4 }" @click="setActiveLayer(4)">
            <div class="layer-title">Access layer</div>
            <div class="layer-content">
              <ul>
                <li>API Gateway</li>
                <li>Front-end applications</li>
                <li>Mobile app</li>
                <li>Reports & Visualizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 功能优势 -->
      <section class="case-section">
        <h2 class="section-title">Functional benefits</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🕒</div>
            <div class="feature-title">Real-time monitoring</div>
            <div class="feature-desc">24×7 hours of uninterrupted transaction monitoring, millisecond response speed</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🧠</div>
            <div class="feature-title">AI intelligent analysis</div>
            <div class="feature-desc">Deep learning-based risk identification model with an accuracy rate of more than 99.5%</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔄</div>
            <div class="feature-title">Adaptive rules</div>
            <div class="feature-desc">Automatically learn the latest regulatory requirements and automatically update rules</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <div class="feature-title">Visual analytics</div>
            <div class="feature-desc">Multi-dimensional risk analysis reports support interactive queries</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📈</div>
            <div class="feature-title">Performance optimization</div>
            <div class="feature-desc">The processing capacity reaches 10,000+ transactions per second, and supports horizontal scaling</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔐</div>
            <div class="feature-title">Safe and reliable</div>
            <div class="feature-desc">Compliant with ISO 27001 Information Security Management System standard</div>
          </div>
        </div>
      </section>

      <!-- 客户案例 -->
      <section class="case-section">
        <h2 class="section-title">Customer stories</h2>
        <div class="customer-cases">
          <div class="case-item">
            <div class="case-logo">A large commercial bank</div>
            <div class="case-content">
              <h3 class="case-title">Anti-money laundering system upgrade</h3>
              <p class="case-desc">
                After the deployment of this solution, the accuracy rate of suspicious transaction identification has been increased by 58%, the workload of manual review has been reduced by 70%, and the compliance rate of regulatory reporting has reached 100%, saving more than $2.15 million in compliance costs every year.
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">58%</div>
                  <div class="result-label">Recognition accuracy is improved</div>
                </div>
                <div class="result-item">
                  <div class="result-value">70%</div>
                  <div class="result-label">Fewer manual reviews</div>
                </div>
                <div class="result-item">
                  <div class="result-value">$2.15 million</div>
                  <div class="result-label">annual cost savings</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-item">
            <div class="case-logo">An international insurance company</div>
            <div class="case-content">
              <h3 class="case-title">Automate the KYC process</h3>
              <p class="case-desc">
                Through the introduction of the AI-driven KYC process, the customer identity verification time has been shortened from an average of 3 days to 2 hours, the conversion rate of customer account opening has increased by 22%, and the interception rate of at-risk customers has increased by 35%, achieving a win-win situation for compliance and experience.
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">93%</div>
                  <div class="result-label">Verification time is reduced</div>
                </div>
                <div class="result-item">
                  <div class="result-value">22%</div>
                  <div class="result-label">The conversion rate of account opening has increased</div>
                </div>
                <div class="result-item">
                  <div class="result-value">35%</div>
                  <div class="result-label">The risk interception rate has increased</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { ref, onMounted } from 'vue'

// 监管法规交互
const activeRegulations = ref(new Set())

const toggleRegulation = (regulation) => {
  if (activeRegulations.value.has(regulation)) {
    activeRegulations.value.delete(regulation)
  } else {
    activeRegulations.value.add(regulation)
  }
}

const isRegulationActive = (regulation) => {
  return activeRegulations.value.has(regulation)
}

// 风控流程动画
const currentFlowStage = ref(0)

// 技术架构层交互
const currentLayer = ref(0)

const setActiveLayer = (layer) => {
  currentLayer.value = layer === currentLayer.value ? 0 : layer
}

onMounted(() => {
  // 模拟流程动画
  let stepIndex = 1
  const interval = setInterval(() => {
    if (stepIndex <= 5) {
      currentFlowStage.value = stepIndex
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

/* 监管法规地图 */
.regulations-map {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.regulation-item {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid transparent;
}

.regulation-item.active {
  background-color: #eef2f7;
  border-color: #007bff;
}

.regulation-icon {
  font-size: 24px;
  margin-bottom: 8px;
  color: #007bff;
}

.regulation-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.regulation-desc {
  font-size: 14px;
  color: #555;
}

/* 风控流程 */
.risk-control-flow {
  display: flex;
  width: 100%;
  position: relative;
}

.flow-stage {
  flex: 1;
  text-align: center;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  opacity: 0.6;
  transition: all 0.5s;
  z-index: 1;
}

.active-stage {
  opacity: 1;
  background-color: #eef2f7;
}

.stage-number {
  background-color: #007bff;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 auto 12px;
}

.stage-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.stage-content {
  font-size: 14px;
  color: #555;
}

.stage-content ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.flow-connector {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ddd;
  z-index: 0;
}

/* 技术架构 */
.tech-architecture {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.layer {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.active-layer {
  background-color: #eef2f7;
}

.layer-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.layer-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  font-size: 14px;
  color: #555;
}

.active-layer .layer-content {
  max-height: 300px;
  transition: max-height 0.5s ease-in;
}

.layer-content ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.layer-connector {
  width: 2px;
  height: 20px;
  background-color: #ddd;
  margin: 0 auto;
}

/* 功能优势 */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.feature-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
  color: #007bff;
}

.feature-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: #555;
}

/* 客户案例 */
.customer-cases {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.case-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.case-logo {
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  font-weight: bold;
}

.case-content {
  padding: 16px;
}

.case-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.case-desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.case-results {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.result-item {
  background-color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: center;
}

.result-value {
  font-weight: bold;
  color: #007bff;
}

.result-label {
  font-size: 12px;
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
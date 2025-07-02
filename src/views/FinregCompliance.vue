<template>
  <div class="case-detail-page">
    <!-- 导航栏 -->
    <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← 返回场景列表</div>
      <div class="nav-title">技术应用场景</div>
    </nav>

    <!-- 页面标题 -->
    <div class="case-header">
      <h1 class="case-title">金融风控合规自动化解决方案</h1>
      <div class="case-meta">Fin - reg compliance / 全流程自动化</div>
      <div class="case-badge">适配 Basel III/GDPR 法规</div>
    </div>

    <!-- 核心内容 -->
    <div class="case-content">
      <!-- 方案概述 -->
      <section class="case-section">
        <h2 class="section-title">方案概述</h2>
        <p class="section-desc">
          本解决方案覆盖金融机构反洗钱、数据报送、KYC（客户身份验证）全流程，
          基于AI算法自动识别可疑交易，智能生成合规报告，完全适配Basel III、GDPR等国际法规要求。
          系统支持实时监控和预警，审计日志自动生成，帮助金融机构显著降低合规成本，提升风控效率。
        </p>
      </section>

      <!-- 监管法规地图 -->
      <section class="case-section">
        <h2 class="section-title">监管法规适配</h2>
        <div class="regulations-map">
          <div class="regulation-item" :class="{ active: isRegulationActive('basel') }" @click="toggleRegulation('basel')">
            <div class="regulation-icon">🏦</div>
            <div class="regulation-name">Basel III</div>
            <div class="regulation-desc">资本充足率、流动性风险、杠杆率监管</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('gdpr') }" @click="toggleRegulation('gdpr')">
            <div class="regulation-icon">🔒</div>
            <div class="regulation-name">GDPR</div>
            <div class="regulation-desc">个人数据保护与隐私法规</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('aml') }" @click="toggleRegulation('aml')">
            <div class="regulation-icon">🚫💸</div>
            <div class="regulation-name">反洗钱法规</div>
            <div class="regulation-desc">客户身份识别、可疑交易报告</div>
          </div>
          <div class="regulation-item" :class="{ active: isRegulationActive('kyc') }" @click="toggleRegulation('kyc')">
            <div class="regulation-icon">👤</div>
            <div class="regulation-name">KYC 合规</div>
            <div class="regulation-desc">客户身份验证与持续监控</div>
          </div>
        </div>
      </section>

      <!-- 风控流程 -->
      <section class="case-section">
        <h2 class="section-title">风控流程</h2>
        <div class="risk-control-flow">
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 1 }">
            <div class="stage-number">1</div>
            <div class="stage-title">数据采集</div>
            <div class="stage-content">
              <p>多源数据实时接入，包括交易流水、客户信息、外部风险数据等</p>
              <ul>
                <li>交易系统接口</li>
                <li>客户关系管理系统</li>
                <li>第三方数据服务</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 2 }">
            <div class="stage-number">2</div>
            <div class="stage-title">风险识别</div>
            <div class="stage-content">
              <p>AI模型自动分析，识别可疑交易模式和风险点</p>
              <ul>
                <li>异常交易检测</li>
                <li>客户画像分析</li>
                <li>风险评分计算</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 3 }">
            <div class="stage-number">3</div>
            <div class="stage-title">合规审查</div>
            <div class="stage-content">
              <p>自动化合规检查，确保业务符合相关法规要求</p>
              <ul>
                <li>监管规则匹配</li>
                <li>制裁名单筛查</li>
                <li>利益冲突检测</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 4 }">
            <div class="stage-number">4</div>
            <div class="stage-title">预警处置</div>
            <div class="stage-content">
              <p>风险事件分级预警，支持人工干预和自动处理</p>
              <ul>
                <li>风险等级分类</li>
                <li>自动冻结机制</li>
                <li>调查流程管理</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 5 }">
            <div class="stage-number">5</div>
            <div class="stage-title">审计报告</div>
            <div class="stage-content">
              <p>自动生成合规审计报告，支持监管报送</p>
              <ul>
                <li>监管报表生成</li>
                <li>审计日志存档</li>
                <li>合规指标追踪</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术架构 -->
      <section class="case-section">
        <h2 class="section-title">技术架构</h2>
        <div class="tech-architecture">
          <div class="layer" :class="{ 'active-layer': currentLayer === 1 }" @click="setActiveLayer(1)">
            <div class="layer-title">数据层</div>
            <div class="layer-content">
              <ul>
                <li>多源数据采集</li>
                <li>数据清洗与整合</li>
                <li>实时数据存储</li>
                <li>历史数据仓库</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 2 }" @click="setActiveLayer(2)">
            <div class="layer-title">引擎层</div>
            <div class="layer-content">
              <ul>
                <li>规则引擎</li>
                <li>机器学习模型</li>
                <li>实时计算引擎</li>
                <li>图计算平台</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 3 }" @click="setActiveLayer(3)">
            <div class="layer-title">应用层</div>
            <div class="layer-content">
              <ul>
                <li>反洗钱系统</li>
                <li>KYC管理系统</li>
                <li>风险监控平台</li>
                <li>合规报告系统</li>
              </ul>
            </div>
          </div>
          <div class="layer-connector"></div>
          <div class="layer" :class="{ 'active-layer': currentLayer === 4 }" @click="setActiveLayer(4)">
            <div class="layer-title">接入层</div>
            <div class="layer-content">
              <ul>
                <li>API网关</li>
                <li>前端应用</li>
                <li>移动端应用</li>
                <li>报表与可视化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 功能优势 -->
      <section class="case-section">
        <h2 class="section-title">功能优势</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🕒</div>
            <div class="feature-title">实时监控</div>
            <div class="feature-desc">7×24小时不间断交易监控，毫秒级响应速度</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🧠</div>
            <div class="feature-title">AI智能分析</div>
            <div class="feature-desc">基于深度学习的风险识别模型，准确率超过99.5%</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔄</div>
            <div class="feature-title">自适应规则</div>
            <div class="feature-desc">自动学习最新监管要求，规则自动更新</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <div class="feature-title">可视化分析</div>
            <div class="feature-desc">多维度风险分析报表，支持交互式查询</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📈</div>
            <div class="feature-title">性能优化</div>
            <div class="feature-desc">处理能力达每秒10,000+笔交易，支持水平扩展</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔐</div>
            <div class="feature-title">安全可靠</div>
            <div class="feature-desc">符合ISO 27001信息安全管理体系标准</div>
          </div>
        </div>
      </section>

      <!-- 客户案例 -->
      <section class="case-section">
        <h2 class="section-title">客户案例</h2>
        <div class="customer-cases">
          <div class="case-item">
            <div class="case-logo">某大型商业银行</div>
            <div class="case-content">
              <h3 class="case-title">反洗钱系统升级</h3>
              <p class="case-desc">
                部署本解决方案后，可疑交易识别准确率提升58%，人工审核工作量减少70%，
                监管报送合规率达到100%，每年节省合规成本超过1500万元。
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">58%</div>
                  <div class="result-label">识别准确率提升</div>
                </div>
                <div class="result-item">
                  <div class="result-value">70%</div>
                  <div class="result-label">人工审核量减少</div>
                </div>
                <div class="result-item">
                  <div class="result-value">1500万</div>
                  <div class="result-label">年节省成本</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-item">
            <div class="case-logo">某国际保险公司</div>
            <div class="case-content">
              <h3 class="case-title">KYC流程自动化</h3>
              <p class="case-desc">
                通过引入AI驱动的KYC流程，客户身份验证时间从平均3天缩短至2小时，
                客户开户转化率提升22%，风险客户拦截率提高35%，实现了合规与体验的双赢。
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">93%</div>
                  <div class="result-label">验证时间缩短</div>
                </div>
                <div class="result-item">
                  <div class="result-value">22%</div>
                  <div class="result-label">开户转化率提升</div>
                </div>
                <div class="result-item">
                  <div class="result-value">35%</div>
                  <div class="result-label">风险拦截率提高</div>
                </div>
              </div>
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
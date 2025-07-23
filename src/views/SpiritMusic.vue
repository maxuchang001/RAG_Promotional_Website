<template>
  <div class="case-detail-page">
    <!-- Navigation Bar -->
    <nav class="case-nav">
      <div class="back-link" @click="$router.back()">← Return to Scenario List</div>
      <div class="nav-title">AI Music Creation Platform</div>
    </nav>

    <!-- Page Title -->
    <div class="case-header">
      <h1 class="case-title">SpiritMusic Intelligent Voice Transformation Platform</h1>
      <div class="case-meta">AI Voice Transformation / Full-process Sound Processing</div>
      <div class="case-badge">Supports multi-style voice conversion and music generation</div>
    </div>

    <!-- Core Content -->
    <div class="case-content">
      <!-- Platform Overview -->
      <section class="case-section">
        <h2 class="section-title">Platform Overview</h2>
        <p class="section-desc">
          SpiritMusic covers the entire sound conversion process, from voice style migration and instrument separation to text-to-music and humming melody generation.
          Based on advanced AI algorithms, it enables voice conversion, music creation and audio optimization. The platform supports multi-scenario applications,
          with a massive built-in sound model and music style library, helping users easily realize sound creativity and significantly reducing creation thresholds and costs.
        </p>
      </section>

      <!-- Core Function Modules -->
      <section class="case-section">
        <h2 class="section-title">Core Function Modules</h2>
        <div class="regulations-map">
          <div class="regulation-item" :class="{ active: isFeatureActive('voiceConvert') }" @click="toggleFeature('voiceConvert')">
            <div class="regulation-icon">🔄</div>
            <div class="regulation-name">Voice Conversion</div>
            <div class="regulation-desc">Multi-style voice conversion, timbre adjustment, sound effect processing</div>
          </div>
          <div class="regulation-item" :class="{ active: isFeatureActive('text2music') }" @click="toggleFeature('text2music')">
            <div class="regulation-icon">📝→🎵</div>
            <div class="regulation-name">Text to Music</div>
            <div class="regulation-desc">Generate melodies, rhythms and complete tracks from text descriptions</div>
          </div>
          <div class="regulation-item" :class="{ active: isFeatureActive('croon2music') }" @click="toggleFeature('croon2music')">
            <div class="regulation-icon">🎤→🎵</div>
            <div class="regulation-name">Humming to Music</div>
            <div class="regulation-desc">Match hummed melodies with instruments and generate complete arrangements</div>
          </div>
          <div class="regulation-item" :class="{ active: isFeatureActive('proTools') }" @click="toggleFeature('proTools')">
            <div class="regulation-icon">🔧</div>
            <div class="regulation-name">Professional Toolset</div>
            <div class="regulation-desc">Vocal separation, reverb removal, audio optimization</div>
          </div>
        </div>
      </section>

      <!-- Voice Conversion Process -->
      <section class="case-section">
        <h2 class="section-title">Voice Conversion Process</h2>
        <div class="risk-control-flow">
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 1 }">
            <div class="stage-number">1</div>
            <div class="stage-title">Select Style</div>
            <div class="stage-content">
              <p>Choose target style from massive sound models, support custom parameter adjustment</p>
              <ul>
                <li>Celebrity voice library</li>
                <li>Cartoon character voices</li>
                <li>Stylized sound effects</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 2 }">
            <div class="stage-number">2</div>
            <div class="stage-title">Upload Audio</div>
            <div class="stage-content">
              <p>Support multiple format audio uploads, system automatically preprocesses</p>
              <ul>
                <li>MP3/WAV and other mainstream formats</li>
                <li>Automatic noise reduction</li>
                <li>Audio segment interception</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 3 }">
            <div class="stage-number">3</div>
            <div class="stage-title">AI Conversion</div>
            <div class="stage-content">
              <p>Intelligent algorithm real-time processing, accurate voice style migration</p>
              <ul>
                <li>Voiceprint feature extraction</li>
                <li>Style migration algorithm</li>
                <li>Real-time effect preview</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 4 }">
            <div class="stage-number">4</div>
            <div class="stage-title">Effect Optimization</div>
            <div class="stage-content">
              <p>Refined adjustment of conversion effects to meet personalized needs</p>
              <ul>
                <li>Pitch adjustment</li>
                <li>Rhythm matching</li>
                <li>Reverb effect addition</li>
              </ul>
            </div>
          </div>
          <div class="flow-connector"></div>
          <div class="flow-stage" :class="{ 'active-stage': currentFlowStage >= 5 }">
            <div class="stage-number">5</div>
            <div class="stage-title">Download & Share</div>
            <div class="stage-content">
              <p>High-quality export of conversion results, support multi-platform sharing</p>
              <ul>
                <li>Lossless audio export</li>
                <li>Community publishing</li>
                <li>Multiple format options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Functional Advantages -->
      <section class="case-section">
        <h2 class="section-title">Functional Advantages</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">High-fidelity Conversion</div>
            <div class="feature-desc">Voice conversion similarity reaches 98%, preserving original emotions and rhythms</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <div class="feature-title">Real-time Processing</div>
            <div class="feature-desc">Second-level response speed, supporting real-time preview and adjustment</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎭</div>
            <div class="feature-title">Multi-style Support</div>
            <div class="feature-desc">100+ voice style templates, covering celebrities, cartoons and other scenarios</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎵</div>
            <div class="feature-title">Music Creation</div>
            <div class="feature-desc">Text/humming to music, quickly generate original tracks</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🌐</div>
            <div class="feature-title">Community Ecosystem</div>
            <div class="feature-desc">Work sharing, interactive communication, building a creator community</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🆓</div>
            <div class="feature-title">Free Experience</div>
            <div class="feature-desc">Full-featured free trial, no hidden charges</div>
          </div>
        </div>
      </section>

      <!-- Platform Comparison -->
      <section class="case-section">
        <h2 class="section-title">Platform Comparison</h2>
        <div class="customer-cases">
          <div class="case-item">
            <div class="case-logo">SpiritMusic</div>
            <div class="case-content">
              <h3 class="case-title">Core Advantages</h3>
              <p class="case-desc">
                Voice conversion效果更贴合原音，拥有独立创作者社区，全功能免费试用。支持文本转音乐、
                哼唱创作等特色功能，处理速度比同类产品快3倍，音质损失率低于0.5%。
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">100%</div>
                  <div class="result-label">Free Function Coverage</div>
                </div>
                <div class="result-item">
                  <div class="result-value">98%</div>
                  <div class="result-label">Voice Similarity</div>
                </div>
                <div class="result-item">
                  <div class="result-value">3x</div>
                  <div class="result-label">Processing Speed Advantage</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-item">
            <div class="case-logo">Musicfy</div>
            <div class="case-content">
              <h3 class="case-title">Product Limitations</h3>
              <p class="case-desc">
                Voice conversion has obvious flaws, no independent community ecosystem, and most functions require payment. The basic version costs $9.99 per month,
                with professional functions as high as $69.99/month. Processing speed is slow and sound quality loss is significant.
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">$9.99+</div>
                  <div class="result-label">Minimum Monthly Cost</div>
                </div>
                <div class="result-item">
                  <div class="result-value">85%</div>
                  <div class="result-label">Voice Similarity</div>
                </div>
                <div class="result-item">
                  <div class="result-value">None</div>
                  <div class="result-label">Community Function</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Cases -->
      <section class="case-section">
        <h2 class="section-title">User Cases</h2>
        <div class="customer-cases">
          <div class="case-item">
            <div class="case-logo">Content Creators</div>
            <div class="case-content">
              <h3 class="case-title">Improved Short Video Production Efficiency</h3>
              <p class="case-desc">
                After using SpiritMusic's voice conversion function, video dubbing time was reduced from 2 hours to 10 minutes,
                content creation efficiency increased 12 times, average work interaction rate improved by 45%, and production costs decreased by 70%.
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">12x</div>
                  <div class="result-label">Efficiency Improvement</div>
                </div>
                <div class="result-item">
                  <div class="result-value">45%</div>
                  <div class="result-label">Interaction Rate Increase</div>
                </div>
                <div class="result-item">
                  <div class="result-value">70%</div>
                  <div class="result-label">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
          <div class="case-item">
            <div class="case-logo">Independent Musicians</div>
            <div class="case-content">
              <h3 class="case-title">Optimized Music Creation Process</h3>
              <p class="case-desc">
                Through text-to-music and voice conversion functions, the time to create an original song was reduced from 3 days to 4 hours,
                style experimentation costs decreased by 90%, work release cycle shortened by 67%, successfully obtaining cooperation intentions from 3 record companies.
              </p>
              <div class="case-results">
                <div class="result-item">
                  <div class="result-value">87%</div>
                  <div class="result-label">Time Reduction</div>
                </div>
                <div class="result-item">
                  <div class="result-value">90%</div>
                  <div class="result-label">Cost Reduction</div>
                </div>
                <div class="result-item">
                  <div class="result-value">3+</div>
                  <div class="result-label">Cooperation Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Consultation -->
      <section class="contact-section">
        <div class="contact-card">
          <h3 class="contact-title">Start Your Sound Creation Journey</h3>
          <button class="contact-btn">Free Trial</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Function module interaction
const activeFeatures = ref(new Set())

const toggleFeature = (feature) => {
  if (activeFeatures.value.has(feature)) {
    activeFeatures.value.delete(feature)
  } else {
    activeFeatures.value.add(feature)
  }
}

const isFeatureActive = (feature) => {
  return activeFeatures.value.has(feature)
}

// Conversion process animation
const currentFlowStage = ref(0)

onMounted(() => {
  // Simulate process animation
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
/* Page style */
.case-detail-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
}

/* Navigation style */
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

/* Title style */
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

/* Content area */
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

/* Function module style */
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

/* Conversion process */
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

/* Functional advantages */
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

/* Competitor comparison and user cases */
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

/* Contact area */
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

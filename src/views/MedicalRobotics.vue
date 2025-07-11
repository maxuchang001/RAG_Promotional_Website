<template>
  <div class="case-detail-page">
    <!-- Page Header -->
    <div class="case-header">
      <h1 class="case-title">Precision Surgical Collaboration System for Medical Robotics</h1>
      <div class="case-meta">Medical robotics / Sub-millimeter accuracy</div>
      <div class="case-badge">FDA Clinical Validation Stage</div>
    </div>

    <!-- Main Content -->
    <div class="case-content">
      <!-- Solution Overview -->
      <section class="case-section">
        <h2 class="section-title">Solution Overview</h2>
        <p class="section-desc">
          This system is an AI-powered medical robotics platform for precision surgical collaboration. It integrates multimodal image fusion, real-time navigation, and intelligent control technologies to achieve sub-millimeter surgical accuracy (error &lt;0.1mm). The system supports real-time physician takeover and features comprehensive safety redundancy. It has passed FDA clinical validation and is suitable for neurosurgery, orthopedics, urology, and other surgical scenarios.
        </p>
      </section>

      <!-- Technical Principles -->
      <section class="case-section">
        <h2 class="section-title">Technical Principles</h2>
        <div class="tech-principle">
          <div class="principle-item">
            <div class="principle-icon">📡</div>
            <div class="principle-content">
              <h3 class="principle-title">Multimodal Image Fusion</h3>
              <p class="principle-desc">
                Integrates CT, MRI, ultrasound, and other imaging data to build a 3D anatomical model for precise surgical guidance.
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🧠</div>
            <div class="principle-content">
              <h3 class="principle-title">AI Path Planning</h3>
              <p class="principle-desc">
                Uses deep learning algorithms to automatically plan optimal surgical paths, avoiding critical nerves and vessels, and minimizing trauma.
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🤖</div>
            <div class="principle-content">
              <h3 class="principle-title">Precision Motion Control</h3>
              <p class="principle-desc">
                Employs high-precision robotic arms and micro/nano sensors to achieve sub-millimeter operation accuracy and stable execution of complex surgical actions.
              </p>
            </div>
          </div>
          <div class="principle-item">
            <div class="principle-icon">🔄</div>
            <div class="principle-content">
              <h3 class="principle-title">Real-Time Feedback Adjustment</h3>
              <p class="principle-desc">
                Monitors instrument position and tissue status during surgery, dynamically adjusts parameters to ensure safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Surgical Workflow -->
      <section class="case-section">
        <h2 class="section-title">Surgical Workflow</h2>
        <div class="surgery-steps">
          <div class="step-item" :class="{ 'active-step': currentStep >= 1 }">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Preoperative Planning</h3>
              <p class="step-desc">
                Import patient imaging data, AI automatically identifies anatomical structures and generates a personalized surgical plan. Physicians can review and adjust.
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 2 }">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Device Preparation</h3>
              <p class="step-desc">
                Position and calibrate the robotic system, install surgical instruments, and connect patient monitoring devices.
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 3 }">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Robotic Operation</h3>
              <p class="step-desc">
                The system executes surgical actions according to the plan, displays real-time surgical view and instrument position, and maintains accuracy within 0.1mm.
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 4 }">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3 class="step-title">Physician Real-Time Monitoring</h3>
              <p class="step-desc">
                The lead surgeon monitors the entire process and can manually take over at any time to ensure safety and control.
              </p>
            </div>
          </div>
          <div class="step-item" :class="{ 'active-step': currentStep >= 5 }">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3 class="step-title">Postoperative Evaluation</h3>
              <p class="step-desc">
                The system automatically generates a surgical report including operation path, tissue damage, and postoperative recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Specifications -->
      <section class="case-section">
        <h2 class="section-title">Technical Specifications</h2>
        <div class="tech-specs">
          <div class="specs-group">
            <h3 class="group-title">Accuracy Metrics</h3>
            <ul class="specs-list">
              <li><span class="specs-label">Positioning Accuracy:</span> &lt;0.08mm</li>
              <li><span class="specs-label">Repeatability:</span> &lt;0.05mm</li>
              <li><span class="specs-label">Angular Error:</span> &lt;0.05°</li>
            </ul>
          </div>
          <div class="specs-group">
            <h3 class="group-title">Operating Range</h3>
            <ul class="specs-list">
              <li><span class="specs-label">Workspace:</span> 600mm diameter hemispherical area</li>
              <li><span class="specs-label">Degrees of Freedom:</span> 7+1 axes (robotic arm + tool)</li>
              <li><span class="specs-label">Max Payload:</span> 5kg</li>
            </ul>
          </div>
          <div class="specs-group">
            <h3 class="group-title">Safety Features</h3>
            <ul class="specs-list">
              <li><span class="specs-label">Emergency Stop:</span> Triple safety mechanism</li>
              <li><span class="specs-label">Force Feedback:</span> Haptic feedback system</li>
              <li><span class="specs-label">Fail-Safe:</span> Redundant design, dual power backup</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Clinical Data -->
      <section class="case-section">
        <h2 class="section-title">Clinical Data</h2>
        <div class="clinical-data">
          <div class="data-item">
            <div class="data-value">96.8%</div>
            <div class="data-label">Surgical Success Rate</div>
          </div>
          <div class="data-item">
            <div class="data-value">78%</div>
            <div class="data-label">Reduction in Postoperative Complications</div>
          </div>
          <div class="data-item">
            <div class="data-value">65%</div>
            <div class="data-label">Shorter Surgery Time</div>
          </div>
          <div class="data-item">
            <div class="data-value">83%</div>
            <div class="data-label">Faster Patient Recovery</div>
          </div>
        </div>
      </section>

      <!-- Doctor Reviews -->
      <section class="case-section">
        <h2 class="section-title">Doctor Reviews</h2>
        <div class="doctor-reviews">
          <div class="review-item">
            <div class="review-header">
              <img src="https://picsum.photos/seed/doctor1/100/100" alt="Dr. Zhang" class="doctor-avatar" />
              <div class="doctor-info">
                <h3 class="doctor-name">Dr. Zhang</h3>
                <div class="doctor-title">Chief Neurosurgeon</div>
              </div>
            </div>
            <div class="review-content">
              "This system performed exceptionally in brain tumor removal surgeries, with accuracy far surpassing traditional methods and maximum protection of surrounding nerves. We have completed over 50 surgeries with this system, and patient recovery is significantly better than the traditional group."
            </div>
          </div>
          <div class="review-item">
            <div class="review-header">
              <img src="https://picsum.photos/seed/doctor2/100/100" alt="Dr. Li" class="doctor-avatar" />
              <div class="doctor-info">
                <h3 class="doctor-name">Dr. Li</h3>
                <div class="doctor-title">Deputy Chief Orthopedic Surgeon</div>
              </div>
            </div>
            <div class="review-content">
              "In spinal surgeries, the system's navigation is highly precise and greatly reduces surgical risks. For complex cases, AI-assisted planning provides multiple options, helping us make optimal decisions. Patients experience less pain and recover faster."
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
import { ref, onMounted } from 'vue'

const currentStep = ref(0)

onMounted(() => {
  // Simulate step animation
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
.case-detail-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
}

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
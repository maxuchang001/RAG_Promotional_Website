<template>
  <div class="chip-design-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <h1>Intelligent Chip Design Document Management</h1>
        <p class="subtitle">
          Build an efficient and accurate platform for managing chip design
          documents.
        </p>
        <el-button type="primary" size="large"
          >Request&nbsp;a&nbsp;Demo</el-button
        >
      </div>
    </section>

    <!-- Key Features -->
    <section class="features-section">
      <h2 class="section-title">Key Features</h2>
      <el-row :gutter="24" class="feature-grid">
        <el-col
          v-for="feature in features"
          :key="feature.title"
          :xs="24"
          :sm="12"
          :md="6"
        >
          <div class="feature-box">
            <div class="icon-wrapper">
              <component :is="feature.icon" class="feature-icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </div>
        </el-col>
      </el-row>
    </section>

    <!-- Workflow -->
    <section class="workflow-section">
      <h2 class="section-title">How It Works</h2>
      <el-steps
        direction="vertical"
        :active="workflow.length"
        class="workflow-steps"
      >
        <el-step
          v-for="(step, i) in workflow"
          :key="i"
          :title="step.title"
          :description="step.desc"
        />
      </el-steps>
    </section>

    <!-- Benefits -->
    <section class="benefits-section">
      <h2 class="section-title">Why Choose Our Platform?</h2>
      <ul class="benefits-list">
        <li v-for="b in benefits" :key="b">{{ b }}</li>
      </ul>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-wrapper">
        <h2>Ready to get started?</h2>
        <el-button type="primary" size="large">Try&nbsp;It&nbsp;Free</el-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  DocumentChecked,
  Files,
  ChatDotSquare,
  Collection,
} from "@element-plus/icons-vue";

const features = [
  {
    icon: DocumentChecked,
    title: "Auto Classification",
    desc: "AI‑powered classification and tagging across 10+ doc types.",
  },
  {
    icon: Files,
    title: "Version Control",
    desc: "End‑to‑end change tracking with rollback.",
  },
  {
    icon: ChatDotSquare,
    title: "Smart Q&A",
    desc: "Retrieve design knowledge in natural language.",
  },
  {
    icon: Collection,
    title: "Structured Output",
    desc: "Export BOM, pin map, and timing tables in JSON or CSV.",
  },
];

const workflow = [
  { title: "Upload docs", desc: "Drag & drop or sync from Git." },
  { title: "AI parsing", desc: "LLM + vector store extracts key info." },
  { title: "Knowledge base", desc: "Instant semantic search & chat." },
  { title: "Collaboration", desc: "Role‑based comments and co‑editing." },
  { title: "Reporting", desc: "Generate spec summaries & PDFs." },
];

const benefits = [
  "Accelerate time‑to‑tape‑out with automated knowledge extraction.",
  "Reduce re‑spins by maintaining a single source of truth.",
  "Secure collaboration with fine‑grained ACLs.",
  "Seamless integration with Git, Confluence, and Jira.",
];
</script>

<style scoped>
/**** Layout ****/
.chip-design-page {
  padding: 32px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 32px;
}

/**** Hero ****/
.hero {
  background: linear-gradient(135deg, #3558ff, #5c7bff);
  border-radius: 16px;
  padding: 60px 20px;
  margin-bottom: 72px;
  color: #fff;
  text-align: center;
}
.hero-inner {
  max-width: 700px;
  margin: 0 auto;
}
.hero h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
}
.subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 28px;
}

/**** Key Features ****/
.feature-box {
  background: #f9fafc;
  border-radius: 14px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feature-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.06);
}
.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.feature-icon {
  font-size: 22px;
  color: var(--el-color-primary);
}
.feature-title {
  font-weight: 600;
  margin-bottom: 4px;
}
.feature-desc {
  font-size: 14px;
  color: #555;
  flex: 1 0 auto;
}

/**** Workflow ****/
.workflow-section {
  margin-top: 72px;
}
.workflow-steps {
  max-width: 540px;
  margin: 0 auto 48px auto;
}

/**** Benefits ****/
.benefits-section {
  margin-top: 72px;
}
.benefits-list {
  max-width: 760px;
  margin: 0 auto 48px auto;
  list-style: disc inside;
  line-height: 1.9;
  color: #444;
}

/**** CTA ****/
.cta-wrapper {
  text-align: center;
  padding: 80px 20px;
  background: #f5f7ff;
  border-radius: 16px;
}
.cta-wrapper h2 {
  margin-bottom: 24px;
}
</style>

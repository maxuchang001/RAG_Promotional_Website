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

    <!-- Features -->
    <section class="features-section">
      <h2 class="section-title">Key Features</h2>
      <el-row :gutter="24" class="feature-grid">
        <el-col
          v-for="feature in features"
          :key="feature.title"
          :xs="24"
          :sm="12"
          :md="8"
        >
          <el-card shadow="hover" class="feature-card">
            <component :is="feature.icon" class="feature-icon" />
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </el-card>
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
          v-for="(step, index) in workflow"
          :key="index"
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

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2 class="section-title">What Our Users Say</h2>
      <el-carousel height="180px" interval="6000" type="card">
        <el-carousel-item v-for="(t, i) in testimonials" :key="i">
          <div class="testimonial">
            <p class="quote">“{{ t.quote }}”</p>
            <p class="author">— {{ t.author }}, {{ t.role }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <el-collapse accordion>
        <el-collapse-item v-for="(faq, i) in faqs" :key="i" :title="faq.q">
          <p>{{ faq.a }}</p>
        </el-collapse-item>
      </el-collapse>
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

// Feature cards
const features = [
  {
    icon: DocumentChecked,
    title: "Auto Classification",
    desc: "AI-powered classification and tagging across 10+ doc types.",
  },
  {
    icon: Files,
    title: "Version Control",
    desc: "End-to-end change tracking with rollback.",
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

// Workflow
const workflow = [
  { title: "Upload docs", desc: "Drag & drop or sync from Git." },
  { title: "AI parsing", desc: "LLM + vector store extracts key info." },
  {
    title: "Knowledge base build",
    desc: "Semantic search & chat enabled instantly.",
  },
  { title: "Collaboration", desc: "Assign roles, comment inline, co-edit." },
  {
    title: "Reporting",
    desc: "Generate spec summaries and compliance PDFs.",
  },
];

// Benefits
const benefits = [
  "Accelerate time-to-tape-out with automated knowledge extraction.",
  "Reduce re-spins by maintaining a single source of truth.",
  "Secure collaboration with fine-grained ACLs.",
  "Seamless integration with Git, Confluence, and Jira.",
];

// Testimonials
const testimonials = [
  {
    quote: "Cut our spec search time by 70% and eliminated costly errors.",
    author: "Ada Lin",
    role: "Principal Design Engineer, Cirrus Logic",
  },
  {
    quote: "The AI Q&A is a game-changer for onboarding new team members.",
    author: "Michael Chen",
    role: "Director of Engineering, Cadence",
  },
];

// FAQs
const faqs = [
  {
    q: "What document formats are supported?",
    a: "PDF, Word, Markdown, schematic .sch, netlist, and more.",
  },
  {
    q: "Can I deploy on-prem?",
    a: "Yes, we offer both SaaS and private VPC/on-prem deployments.",
  },
  {
    q: "Does it integrate with Jira?",
    a: "Absolutely – create tickets from findings with one click.",
  },
];
</script>

<style scoped>
.chip-design-page {
  padding: 32px 20px;
  max-width: 1180px;
  margin: 0 auto;
  background: #fafbfc;
}

/* Shared */
.section-title {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 28px;
  color: #222;
}

/* Hero */
.hero {
  background: linear-gradient(120deg, #eaf0ff 0%, #f7faff 100%);
  border-radius: 16px;
  padding: 56px 20px 48px 20px;
  margin-bottom: 56px;
  box-shadow: 0 2px 12px rgba(80, 120, 255, 0.04);
}
.hero-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: #223;
}
.hero h1 {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 14px;
  color: #223;
}
.subtitle {
  font-size: 1.08rem;
  opacity: 0.93;
  margin-bottom: 24px;
  color: #4a4a4a;
}

/* Features */
.feature-card {
  text-align: center;
  border-radius: 12px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: box-shadow 0.18s, transform 0.18s;
  padding: 28px 16px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(80, 120, 255, 0.03);
}
.feature-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(80, 120, 255, 0.07);
}
.feature-icon {
  font-size: 20px;
  margin-bottom: 10px;
  color: #5c7bff;
}
.feature-title {
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 1.08rem;
}
.feature-desc {
  font-size: 14px;
  color: #555;
}

/* Workflow */
.workflow-steps {
  max-width: 540px;
  margin: 0 auto 40px auto;
}

/* Benefits */
.benefits-list {
  margin: 0 auto 40px auto;
  max-width: 760px;
  line-height: 2;
  list-style: disc inside;
  color: #444;
  font-size: 1rem;
}

/* Testimonials */
.testimonials-section {
  margin-bottom: 48px;
}
.testimonial {
  padding: 18px 24px;
  text-align: center;
}
.quote {
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #333;
}
.author {
  font-weight: 600;
  color: #5c7bff;
}

/* FAQ */
.faq-section {
  margin-bottom: 56px;
}

/* CTA */
.cta-wrapper {
  text-align: center;
  padding: 56px 20px;
  background: #f5f7ff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(80, 120, 255, 0.03);
}
.cta-wrapper h2 {
  margin-bottom: 20px;
}
</style>

<template>
  <div class="beginner-guide-page">
    <header class="hero">
      <h1>Beginner Guide: Build Your First RAG Application</h1>
      <p class="lead">
        Follow these steps to quickly get started with PlatformAI and deploy your first Retrieval-Augmented Generation (RAG) agent.
      </p>
    </header>

    <section class="steps">
      <div class="step">
        <h2>Step 1: Register and Login</h2>
        <p>Create your PlatformAI account and log in to access your dashboard.</p>
      </div>
      <div class="step">
        <h2>Step 2: Create a New Project</h2>
        <p>Click <strong>New Project</strong>, enter a project name, and select a use case template that fits your needs.</p>
      </div>
      <div class="step">
        <h2>Step 3: Import Your Data</h2>
        <p>Upload documents (PDF, Word, Markdown, etc.) or connect to your data source for ingestion.</p>
      </div>
      <div class="step">
        <h2>Step 4: Configure Your RAG Agent</h2>
        <p>Set up retrieval parameters, choose a model, and define output preferences for your agent.</p>
      </div>
      <div class="step">
        <h2>Step 5: Test and Deploy</h2>
        <p>Use the built-in playground to test your agent. Once satisfied, deploy it to production with a single click.</p>
      </div>
    </section>

    <el-alert
      type="info"
      show-icon
      :closable="false"
      style="margin-top:24px;"
      title="Need more help? See the full documentation or contact support for assistance."
    />
  </div>
</template>

<script setup>
// No logic needed for static guide
</script>

<style scoped>
.beginner-guide-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 24px 64px;
}
.hero {
  text-align: center;
  margin-bottom: 40px;
}
.hero h1 {
  font-size: 2rem;
  font-weight: 700;
}
.lead {
  margin-top: 12px;
  color: #555;
}
.steps {
  margin-top: 24px;
}
.step {
  margin-bottom: 28px;
}
.step h2 {
  font-size: 1.15rem;
  margin-bottom: 6px;
  color: #409EFF;
}
.step p {
  color: #444;
  margin: 0;
}
</style>
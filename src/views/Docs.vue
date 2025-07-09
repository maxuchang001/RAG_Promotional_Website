<template>
  <div class="docs-page">
    <section class="hero">
      <h1>Documentation Center</h1>
      <p class="lead">Quick start, API reference, and best practices to help you use PlatformAI efficiently.</p>
    </section>

    <section class="docs-list">
      <el-card class="doc-card" shadow="hover">
        <h2>Beginner Guide</h2>
        <p>Learn how to quickly get started and build your first RAG application on the platform.</p>
        <router-link to="/docs/beginner-guide">View Details</router-link>
      </el-card>
      <el-card class="doc-card" shadow="hover">
        <h2>API Reference</h2>
        <p>Detailed documentation of all API parameters, usage, and examples.</p>
        <router-link to="#">View Details</router-link>
      </el-card>
      <el-card class="doc-card" shadow="hover">
        <h2>FAQ</h2>
        <p>Find solutions to common questions and issues encountered by users.</p>
        <router-link to="#">View Details</router-link>
      </el-card>
    </section>
  </div>
</template>

<script setup>
// No dialog logic needed anymore
</script>

<style scoped>
.docs-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px 48px;
}
.hero {
  text-align: center;
  margin-bottom: 32px;
}
.hero h1 {
  font-size: 2.2rem;
  font-weight: 700;
}
.lead {
  margin-top: 8px;
  color: #666;
}
.docs-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.doc-card {
  flex: 1 1 260px;
  min-width: 260px;
  max-width: 320px;
  margin-bottom: 24px;
  text-align: left;
}
.doc-card h2 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.doc-card p {
  color: #555;
  margin-bottom: 12px;
}
</style>
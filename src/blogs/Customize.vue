<template>
  <div class="article-page">
    <!-- Hero -->
    <header class="hero">
      <h1>Why Customizing Dataset Agents Is Crucial for Optimal Performance</h1>
      <p class="meta">
        <span>Best Practices</span> ·
        <time datetime="2025-07-07">July 7, 2025</time> ·
        8&nbsp;min&nbsp;read
      </p>
      <p class="lead">
        Generic LLMs often miss domain‑specific context. Combining RAG with fine‑tuning
        yields a <strong>28&nbsp;% accuracy boost</strong> and delivers outcome‑driven agents.
      </p>
    </header>

    <!-- Real-World Use Case Chart -->
    <section class="img-section">
      <img src="../assets/img/image.png" alt="Real-World Use Case: Customization Accuracy Gain" class="center-img" />
      <div class="img-caption">
        <strong>Real-World Use Case:</strong> The Encryagent Platform delivers superior accuracy out of the box, with additional enhancements achieved through agent customization.
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <h2>Why RAG Alone Isn’t Enough</h2>
      <p>
        In enterprise settings, knowledge‑intensive tasks—from financial report analysis to
        regulatory compliance—demand accuracy, explainability, and up‑to‑date context that
        general‑purpose models struggle to deliver. Retrieval‑Augmented Generation (RAG)
        injects controllable knowledge, but without customization it can still miss crucial
        domain signals.
      </p>

      <h2>Fine‑Tuning Driven Customization</h2>
      <p>
        RAG and model fine‑tuning are complementary: RAG supplies current facts, while
        fine‑tuning teaches the model how to interpret and structure that information for a
        given domain.
      </p>

      <!-- Fine-Tuning Table -->
      <div class="table-scroll">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Fine-Tuning Scope</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Generator</td>
              <td>Trained on high-quality Q&amp;A pairs with supporting evidence</td>
              <td>Improves response structure and logical clarity</td>
            </tr>
            <tr>
              <td>Retriever</td>
              <td>/</td>
              <td>Enhances document matching precision</td>
            </tr>
            <tr>
              <td>Reranker</td>
              <td>Trained on "hard samples" (e.g., high-similarity but irrelevant texts)</td>
              <td>Boosts relevance of retrieved results</td>
            </tr>
            <tr>
              <td>Controller/Executor</td>
              <td>Trained for multi-turn dialogue, style alignment, or permission management</td>
              <td>Optimizes advanced agent behaviors</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="component-table">
        <li><strong>Generator</strong> — fine‑tune on high‑quality Q&A with citations to
          improve reasoning clarity.</li>
        <li><strong>Retriever</strong> — enhance recall and coverage with domain‑specific
          embeddings.</li>
        <li><strong>Reranker</strong> — train on “hard negatives” to boost relevance.</li>
        <li><strong>Controller / Executor</strong> — adapt to multi‑turn workflows and
          permission logic.</li>
      </ul>

      <h3>Real‑World Example</h3>
      <!-- Example Flowchart -->
      <section class="img-section">
        <img src="../assets/img/image2.png" alt="Standard vs Fine-Tuned RAG Agent Example" class="center-img" />
        <div class="img-caption">
          <strong>Example:</strong> Fine-tuned RAG agents deliver more precise, context-aware answers compared to standard RAG agents.
        </div>
      </section>
      <p>
        A manufacturing Q&A agent, fine‑tuned on MES reports, correctly interprets terms
        like “utilization” and automatically pulls quarterly KPI charts for Line B at the
        California plant—something a vanilla RAG would miss.
      </p>

      <h2>Prompt Engineering & Hyper‑Parameter Tuning</h2>
      <!-- Parameter Table -->
      <div class="table-scroll">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Adjustable Parameters</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Retriever</td>
              <td>Top-k retrieval chunks</td>
              <td>↑ Coverage / ↓ Efficiency</td>
            </tr>
            <tr>
              <td>Reranker</td>
              <td>Confidence threshold / rerank ratio</td>
              <td>Controls quality threshold for final content</td>
            </tr>
            <tr>
              <td>Generator</td>
              <td>Max tokens / Temperature</td>
              <td>Manages response length &amp; diversity</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Soft constraints—such as limiting answers to an internal policy database or forcing
        tabular output—require no retraining yet dramatically improve consistency. Further
        control the pipeline by adjusting top‑k retrieval, rerank thresholds, max tokens,
        and temperature.
      </p>

      <h2>Closed‑Loop Evaluation</h2>
      <!-- Customization & Evaluation Process Diagram -->
      <section class="img-section">
        <img src="../assets/img/image3.png" alt="Customization and Evaluation Process" class="center-img" />
        <div class="img-caption">
          <strong>Process:</strong> Typical workflow for integrating customization and evaluation in agent development.
        </div>
      </section>
      <p>
        Combine end‑to‑end metrics (accuracy, groundedness, user satisfaction) with
        component‑level metrics (recall, relevance, coherence) to locate bottlenecks and
        iteratively optimize.
      </p>

      <blockquote>
        <p>
          Building document‑based intelligent agents? Encryagent offers an end‑to‑end
          stack—fine‑tuning APIs, prompt engineering tools, and automated evaluation—to get
          you from prototype to reliable production.
        </p>
      </blockquote>
    </section>
  </div>
</template>

<script setup>
// Static article page – no additional logic required
</script>

<style scoped>
.article-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 24px 64px;
}

.hero {
  text-align: center;
  margin-bottom: 48px;
}

.hero h1 {
  font-size: 2.4rem;
  font-weight: 700;
}

.meta {
  color: #999;
  margin: 8px 0 16px;
}

.lead {
  font-size: 1.1rem;
  color: #555;
}

.content h2 {
  margin: 32px 0 16px;
  font-size: 1.4rem;
  font-weight: 600;
}

.content h3 {
  margin-top: 24px;
  font-size: 1.2rem;
  font-weight: 600;
}

.content p {
  margin-bottom: 16px;
  line-height: 1.7;
  color: #444;
}

.component-table {
  list-style: disc;
  padding-left: 20px;
}

.component-table li {
  margin-bottom: 8px;
}

blockquote {
  margin: 32px 0;
  padding: 24px;
  background: #f9f9f9;
  border-left: 4px solid #409eff;
  font-style: italic;
}

.img-section {
  margin: 32px 0;
  text-align: center;
}

.center-img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.img-caption {
  font-size: 0.98em;
  color: #666;
  margin-top: 8px;
}

.table-scroll {
  overflow-x: auto;
  margin: 24px 0;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 8px;
  background: #f7fafd;
}

.custom-table th,
.custom-table td {
  border: 1px solid #b7e0ef;
  padding: 8px 12px;
  text-align: left;
}

.custom-table th {
  background: #b7e0ef;
  color: #222;
}

.custom-table tbody tr:nth-child(odd) {
  background: #eaf6fb;
}
</style>

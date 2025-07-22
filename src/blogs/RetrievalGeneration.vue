<template>
  <div class="article-page">
    <!-- Hero -->
    <header class="hero">
      <h1>
        From Retrieval to Generation: A Practical Guide to Evaluation Metrics
        for RAG
      </h1>
      <p class="meta">
        <span>Engineering</span> ·
        <time datetime="2025-05-14">May 14, 2025</time> · 7&nbsp;min&nbsp;read
      </p>
      <p class="lead">
        Precision, recall, answer-correctness—what really matters? We break down
        evaluation strategies you can implement today.
      </p>
    </header>

    <!-- Main content -->
    <section class="content">
      <h2>Why Evaluate RAG Systems?</h2>
      <p>
        Retrieval-Augmented Generation (RAG) systems combine search and
        generative AI to answer complex queries. But how do you know if your
        system is truly effective? Robust evaluation is essential for tracking
        progress, comparing models, and ensuring reliable results.
      </p>
      <p>
        As RAG architectures become the backbone of enterprise knowledge management, their evaluation moves beyond simple accuracy. Stakeholders need to understand not just if answers are correct, but how reliable, explainable, and safe the system is in production. This guide covers the most important metrics and practical steps for evaluating RAG solutions.
      </p>

      <h2>Key Metrics Explained</h2>
      <div class="table-scroll">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>What It Measures</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Precision</td>
              <td>How many retrieved documents are relevant?</td>
              <td>When false positives are costly</td>
            </tr>
            <tr>
              <td>Recall</td>
              <td>How many relevant documents were retrieved?</td>
              <td>When missing information is risky</td>
            </tr>
            <tr>
              <td>F1 Score</td>
              <td>Balance between precision and recall</td>
              <td>General performance overview</td>
            </tr>
            <tr>
              <td>Answer Correctness</td>
              <td>Is the generated answer factually correct?</td>
              <td>For user-facing Q&A</td>
            </tr>
            <tr>
              <td>Faithfulness</td>
              <td>Does the answer rely only on retrieved context?</td>
              <td>For compliance and audit scenarios</td>
            </tr>
            <tr>
              <td>Latency</td>
              <td>How fast does the system respond?</td>
              <td>For real-time or interactive applications</td>
            </tr>
            <tr>
              <td>Coverage</td>
              <td>How much of the knowledge base is accessible via RAG?</td>
              <td>For completeness and onboarding new data</td>
            </tr>
            <tr>
              <td>Explainability</td>
              <td>Can the system show why it produced an answer?</td>
              <td>For regulated industries and user trust</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        While precision and recall are classic IR metrics, answer correctness and faithfulness are critical for generative AI. Latency and explainability are increasingly important for production deployments.
      </p>

      <h2>How to Evaluate</h2>
      <ul class="component-table">
        <li>
          <strong>Automated Benchmarks</strong> — Use labeled datasets to
          measure retrieval and generation quality. Public datasets like Natural Questions, TriviaQA, or domain-specific corpora can help standardize evaluation.
        </li>
        <li>
          <strong>Human Review</strong> — Sample outputs for accuracy,
          relevance, and clarity. Involve subject matter experts for high-stakes domains.
        </li>
        <li>
          <strong>Continuous Monitoring</strong> — Track metrics over time to
          catch regressions. Set up dashboards and alerts for key metrics.
        </li>
        <li>
          <strong>Adversarial Testing</strong> — Challenge the system with edge cases, ambiguous queries, or noisy data to assess robustness.
        </li>
        <li>
          <strong>User Feedback</strong> — Collect ratings and comments from end users to identify gaps and opportunities for improvement.
        </li>
      </ul>

      <h3>Example: Financial Document QA</h3>
      <section class="img-section">
        <!-- <img
          src="../assets/img/rag-eval-example.png"
          alt="RAG Evaluation Example"
          class="center-img"
        /> -->
        <div class="img-caption">
          <strong>Case Study:</strong> A bank uses RAG to answer regulatory
          questions. Automated tests show 92% precision and 88% answer
          correctness, with human reviewers confirming faithfulness for
          compliance.
        </div>
      </section>
      <p>
        In this deployment, the team combined automated metrics with regular expert reviews. They also tracked latency and explainability, ensuring every answer could be traced to its source documents. This approach helped the bank meet audit requirements and improve user trust.
      </p>

      <h2>Best Practices</h2>
      <ul class="component-table">
        <li>Define clear success criteria before deployment</li>
        <li>Use diverse datasets to avoid bias and overfitting</li>
        <li>Monitor metrics continuously and retrain as needed</li>
        <li>Document evaluation results for stakeholders and compliance</li>
        <li>Include explainability and latency in your evaluation plan</li>
        <li>Iterate quickly: use feedback loops to improve retrieval and generation</li>
      </ul>
      <p>
        Remember, evaluation is not a one-time event. As your data and user needs evolve, so should your metrics and benchmarks.
      </p>

      <h2>Tools & Resources</h2>
      <ul class="component-table">
        <li>
          <strong>Ragas</strong> — Open-source RAG evaluation toolkit for Python
        </li>
        <li>
          <strong>LangChain Benchmarks</strong> — Built-in tools for retrieval and generation evaluation
        </li>
        <li>
          <strong>HumanLoop</strong> — Platform for scalable human-in-the-loop review
        </li>
        <li>
          <strong>MLflow</strong> — Track experiments and metrics over time
        </li>
      </ul>

      <blockquote>
        <p>
          The right metrics make your RAG system trustworthy and actionable.
          Start measuring today to unlock real business value. A well-evaluated RAG pipeline is the foundation for reliable, scalable, and compliant AI in the enterprise.
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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

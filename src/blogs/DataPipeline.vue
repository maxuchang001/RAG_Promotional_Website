<template>
  <div class="article-page">
    <!-- Hero -->
    <header class="hero">
      <h1>
        Introducing Datastore Pipelines: Scalable Data Ingestion for Enterprises
      </h1>
      <p class="meta">
        <span>Product</span> ·
        <time datetime="2025-06-25">June 25, 2025</time> · 5&nbsp;min&nbsp;read
      </p>
      <p class="lead">
        Effortlessly import millions of documents, monitor progress, and enforce
        quality gates with our new Pipelines architecture.
      </p>
    </header>

    <!-- Architecture Diagram -->
    <section class="img-section">
      <img
        src="../assets/img/pipelines-architecture.png"
        alt="Datastore Pipelines Architecture"
        class="center-img"
      />
      <div class="img-caption">
        <strong>Architecture:</strong> Modular pipeline stages enable scalable,
        reliable, and auditable data ingestion for enterprise workloads.
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <h2>Why Data Ingestion Matters</h2>
      <p>
        Modern enterprises rely on vast, ever-changing document collections.
        Traditional ingestion tools struggle with scale, error handling, and
        compliance. Our new Datastore Pipelines solve these challenges with a
        robust, modular approach.
      </p>

      <h2>Pipeline Stages & Features</h2>
      <div class="table-scroll">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Function</th>
              <th>Enterprise Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ingest</td>
              <td>Bulk import from UI, API, or cloud storage</td>
              <td>Handles millions of files with auto-retry</td>
            </tr>
            <tr>
              <td>Parse</td>
              <td>Extract text, tables, images, and metadata</td>
              <td>Supports 20+ formats, preserves structure</td>
            </tr>
            <tr>
              <td>Enrich</td>
              <td>Apply OCR, entity recognition, and tagging</td>
              <td>Improves downstream search and analytics</td>
            </tr>
            <tr>
              <td>Validate</td>
              <td>Quality gates, schema checks, PII detection</td>
              <td>Ensures compliance and data integrity</td>
            </tr>
            <tr>
              <td>Index</td>
              <td>Build semantic and keyword indexes</td>
              <td>Enables fast, accurate retrieval</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="component-table">
        <li><strong>Bulk Import</strong> — UI, API, or cloud bucket sources</li>
        <li>
          <strong>Format Support</strong> — PDF, Office, Markdown, images, and
          more
        </li>
        <li>
          <strong>Quality Gates</strong> — Custom rules for validation and
          compliance
        </li>
        <li><strong>Audit Trail</strong> — Full logging and error reporting</li>
      </ul>

      <h3>Real-World Example</h3>
      <section class="img-section">
        <img
          src="../assets/img/pipelines-example.png"
          alt="Enterprise Data Ingestion Example"
          class="center-img"
        />
        <div class="img-caption">
          <strong>Example:</strong> A financial institution ingests 2 million
          regulatory documents monthly, with automated PII redaction and audit
          logs for every step.
        </div>
      </section>
      <p>
        With Pipelines, onboarding new document sources is as simple as
        connecting a cloud folder. Quality gates catch errors before they reach
        production, and audit logs make compliance reporting effortless.
      </p>

      <h2>Monitoring & Automation</h2>
      <div class="table-scroll">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Progress Dashboard</td>
              <td>
                Track ingestion status, errors, and throughput in real time
              </td>
            </tr>
            <tr>
              <td>Automated Retries</td>
              <td>
                Recover from transient failures without manual intervention
              </td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>
                Alert teams to issues or completion via email, Slack, or webhook
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The built-in dashboard gives instant visibility into every pipeline run.
        Automated retries and notifications keep your team focused on what
        matters.
      </p>

      <h2>Security & Compliance</h2>
      <section class="img-section">
        <img
          src="../assets/img/pipelines-security.png"
          alt="Security and Compliance"
          class="center-img"
        />
        <div class="img-caption">
          <strong>Security:</strong> Role-based access, encryption at rest, and
          full audit logs for every pipeline step.
        </div>
      </section>
      <p>
        Pipelines are designed for regulated industries. Every stage is logged,
        and sensitive data is protected with enterprise-grade security controls.
      </p>

      <blockquote>
        <p>
          Ready to scale your document ingestion? Try Datastore Pipelines and
          experience seamless, compliant, and reliable data onboarding for your
          enterprise.
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

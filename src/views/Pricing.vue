<template>
  <div class="pricing-page">
    <!-- Top Title -->
    <!-- <h1>Pricing</h1> -->
    <p class="subtitle">Elastic pricing from demo to production, scaling with your business</p>

    <!-- Platform Pricing -->
    <h1 class="section-title">PlatformAI Pricing</h1>
    <div class="pricing-table">
      <!-- On-demand Plan -->
      <div class="plan">
        <h3>On-Demand</h3>
        <p class="price">$0<span> / month + usage-based billing</span></p>
        <ul>
          <li>$25 free credit</li>
          <li>≈ $0.05 / query (token-based billing)</li>
          <li>$48.50 / 1,000 pages document import</li>
          <li>Unlimited users / workspaces / agents</li>
          <li>SOC2 & HIPAA compliant</li>
          <li>SAML / SSO</li>
        </ul>
        <el-button type="primary" plain>Get Started</el-button>
      </div>

      <!-- Reserved Throughput Plan -->
      <div class="plan featured">
        <h3>Reserved Throughput</h3>
        <p class="price">Custom<span> (monthly commitment by Model Unit)</span></p>
        <ul>
          <li>Guaranteed fixed throughput (TPS SLA)</li>
          <li>All features of On-demand plan</li>
          <li>RBAC, usage analytics, pipeline observability</li>
          <li>Dedicated or customer VPC deployment options</li>
          <li>Dedicated account manager</li>
        </ul>
        <el-button type="primary">Contact Sales</el-button>
      </div>
    </div>

    <!-- Feature Comparison Table -->
    <h2 class="section-title">Feature Comparison</h2>
    <div class="table-wrapper">
      <table class="feature-table">
        <thead>
          <tr>
            <th>Platform Management</th>
            <th>On-demand</th>
            <th>Reserved Throughput</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Unlimited users / admins / workspaces</td><td>✓</td><td>✓</td></tr>
          <tr><td>Agents / datastore quantity</td><td>✓</td><td>✓</td></tr>
          <tr><td>User roles & admin permissions</td><td>✓</td><td>✓</td></tr>
          <tr><td>SOC2 Type II & HIPAA</td><td>✓</td><td>✓</td></tr>
          <tr><td>SAML / SSO</td><td>✓</td><td>✓</td></tr>
          <tr><td>RBAC</td><td>—</td><td>✓</td></tr>
          <tr><td>Usage analytics</td><td>—</td><td>✓</td></tr>
          <tr><td>Pipeline observability</td><td>—</td><td>✓</td></tr>
        </tbody>
      </table>

      <table class="feature-table">
        <thead>
          <tr>
            <th>Data Ingestion</th>
            <th>On-demand</th>
            <th>Reserved Throughput</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Simple text documents</td><td>✓</td><td>✓</td></tr>
          <tr><td>Complex documents / charts / images</td><td>✓</td><td>✓</td></tr>
          <tr><td>Unstructured data</td><td>✓</td><td>✓</td></tr>
          <tr><td>Structured data</td><td>Contact Sales</td><td>Contact Sales</td></tr>
          <tr><td>UI import</td><td>✓</td><td>✓</td></tr>
          <tr><td>Continuous data ingestion</td><td>Contact Sales</td><td>Contact Sales</td></tr>
          <tr><td>Standard integrations</td><td>✓</td><td>✓</td></tr>
          <tr><td>Custom integrations</td><td>Contact Sales</td><td>Contact Sales</td></tr>
        </tbody>
      </table>

      <table class="feature-table">
        <thead>
          <tr>
            <th>Deployment</th>
            <th>On-demand</th>
            <th>Reserved Throughput</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>PlatformAI SaaS</td><td>✓</td><td>✓</td></tr>
          <tr><td>Dedicated PlatformAI VPC</td><td>—</td><td>Contact Sales</td></tr>
          <tr><td>Customer VPC</td><td>—</td><td>Contact Sales</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Component API Pricing -->
    <h2 class="section-title">Component API Pricing</h2>
    <div class="component-table">
      <div class="component-card">
        <h4>Parse</h4>
        <ul>
          <li>Text Only: $3 / 1,000 pages</li>
          <li>Multimodal: $40 / 1,000 pages</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>Rerank</h4>
        <ul>
          <li>$0.12 / 1M tokens (input)</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>Generate</h4>
        <ul>
          <li>$3 / 1M tokens (input)</li>
          <li>$15 / 1M tokens (output)</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>LMUnit</h4>
        <ul>
          <li>$3 / 1M tokens (input)</li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <h3>Let's Get Started</h3>
      <p>Platform AI is trusted by industry leaders such as HSBC, Qualcomm, and Hudl for their most complex, knowledge-intensive AI scenarios.</p>
      <el-button type="primary">Contact Us</el-button>
    </div>

    <!-- Disclaimer -->
    <div class="note">
      <el-alert
        title="All prices are for reference only. Actual pricing is subject to contract. For more details or custom solutions, please contact us."
        type="info"
        show-icon
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
// Static display only; add dynamic data or i18n logic here if needed
</script>

<style scoped>
.pricing-page {
  max-width: 1024px;
  margin: 40px auto;
  padding: 24px;
}
.subtitle {
  text-align: center;
  margin-top: 4px;
  color: #666;
}
.section-title {
  margin-top: 48px;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
}
/* Plan Cards */
.pricing-table {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
}
.plan {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 32px 24px;
  flex: 1 1 280px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 340px;
}
.plan.featured {
  border: 2px solid #409EFF;
  box-shadow: 0 4px 16px rgba(64,158,255,0.08);
}
.plan h3 {
  margin-bottom: 12px;
}
.price {
  font-size: 2em;
  font-weight: bold;
  margin: 12px 0 20px 0;
  text-align: center;
}
.price span {
  font-size: 0.5em;
  color: #888;
}
.plan ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  text-align: left;
  width: 100%;
}
.plan ul li {
  margin-bottom: 8px;
  color: #555;
}
/* Feature Comparison Table */
.table-wrapper {
  overflow-x: auto;
  margin-top: 24px;
}
.feature-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}
.feature-table thead {
  background: #f7f9fc;
}
.feature-table th,
.feature-table td {
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  text-align: center;
}
.feature-table th:first-child,
.feature-table td:first-child {
  text-align: left;
}
.feature-table tbody tr:nth-child(odd) {
  background: #fafafa;
}
/* Component API */
.component-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
}
.component-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
}
.component-card h4 {
  margin-bottom: 12px;
  font-size: 1.1rem;
}
.component-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.component-card ul li {
  margin-bottom: 6px;
  color: #555;
}
/* CTA */
.cta {
  margin-top: 48px;
  text-align: center;
}
.cta h3 {
  margin-bottom: 8px;
}
.note {
  margin-top: 32px;
}
</style>

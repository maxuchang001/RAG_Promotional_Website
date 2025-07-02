<template>
  <div class="pricing-page">
    <!-- 顶部标题 -->
    <h1>定价</h1>
    <p class="subtitle">从演示到生产，随业务扩展的弹性计费</p>

    <!-- 平台计费 -->
    <h2 class="section-title">平台计费</h2>
    <div class="pricing-table">
      <!-- 按需版 -->
      <div class="plan">
        <h3>按需版</h3>
        <p class="price">$0<span> / 月 + 使用量计费</span></p>
        <ul>
          <li>$25 免费额度</li>
          <li>≈ $0.05 / 查询（按 Token 计费）</li>
          <li>$48.50 / 1,000 页文档导入</li>
          <li>无限用户 / 工作区 / Agents</li>
          <li>SOC2 & HIPAA 合规</li>
          <li>SAML / SSO</li>
        </ul>
        <el-button type="primary" plain>立即开始</el-button>
      </div>

      <!-- 预留吞吐版 -->
      <div class="plan featured">
        <h3>预留吞吐版</h3>
        <p class="price">定制<span>（按 Model Unit 月度承诺）</span></p>
        <ul>
          <li>固定吞吐量保证（TPS SLA）</li>
          <li>包含按需版全部特性</li>
          <li>RBAC、使用分析、Pipeline 可观测性</li>
          <li>专属或客户 VPC 部署选项</li>
          <li>专属客户经理</li>
        </ul>
        <el-button type="primary">联系销售</el-button>
      </div>
    </div>

    <!-- 功能对比表 -->
    <h2 class="section-title">功能对比</h2>
    <div class="table-wrapper">
      <table class="feature-table">
        <thead>
          <tr>
            <th>平台管理</th>
            <th>按需版</th>
            <th>预留吞吐版</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>无限用户 / 管理员 / 工作区</td><td>✓</td><td>✓</td></tr>
          <tr><td>Agents / Datastore 数量</td><td>✓</td><td>✓</td></tr>
          <tr><td>User Roles & Admin 权限</td><td>✓</td><td>✓</td></tr>
          <tr><td>SOC2 Type II & HIPAA</td><td>✓</td><td>✓</td></tr>
          <tr><td>SAML / SSO</td><td>✓</td><td>✓</td></tr>
          <tr><td>RBAC</td><td>—</td><td>✓</td></tr>
          <tr><td>Usage 分析</td><td>—</td><td>✓</td></tr>
          <tr><td>Pipeline Observability</td><td>—</td><td>✓</td></tr>
        </tbody>
      </table>

      <table class="feature-table">
        <thead>
          <tr>
            <th>数据摄取</th>
            <th>按需版</th>
            <th>预留吞吐版</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>简单文本文档</td><td>✓</td><td>✓</td></tr>
          <tr><td>复杂文档 / 图表 / 图片</td><td>✓</td><td>✓</td></tr>
          <tr><td>非结构化数据</td><td>✓</td><td>✓</td></tr>
          <tr><td>结构化数据</td><td>联系销售</td><td>联系销售</td></tr>
          <tr><td>UI 导入</td><td>✓</td><td>✓</td></tr>
          <tr><td>持续数据摄取</td><td>联系销售</td><td>联系销售</td></tr>
          <tr><td>标准集成</td><td>✓</td><td>✓</td></tr>
          <tr><td>自定义集成</td><td>联系销售</td><td>联系销售</td></tr>
        </tbody>
      </table>

      <table class="feature-table">
        <thead>
          <tr>
            <th>Deployment</th>
            <th>按需版</th>
            <th>预留吞吐版</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>PlatformAI SaaS</td><td>✓</td><td>✓</td></tr>
          <tr><td>Dedicated PlatformAI VPC</td><td>—</td><td>联系销售</td></tr>
          <tr><td>Customer VPC</td><td>—</td><td>联系销售</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 组件 API 计费 -->
    <h2 class="section-title">组件 API 计费</h2>
    <div class="component-table">
      <div class="component-card">
        <h4>Parse</h4>
        <ul>
          <li>Text Only：$3 / 1,000 页</li>
          <li>Multimodal：$40 / 1,000 页</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>Rerank</h4>
        <ul>
          <li>$0.12 / 1M Tokens (输入)</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>Generate</h4>
        <ul>
          <li>$3 / 1M Tokens (输入)</li>
          <li>$15 / 1M Tokens (输出)</li>
        </ul>
      </div>
      <div class="component-card">
        <h4>LMUnit</h4>
        <ul>
          <li>$3 / 1M Tokens (输入)</li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <h3>让我们开始</h3>
      <p>Platform AI 已被 HSBC、Qualcomm、Hudl 等行业领袖信赖，用于他们最复杂、知识密集的 AI 场景。</p>
      <el-button type="success">联系我们</el-button>
    </div>

    <!-- 免责声明 -->
    <div class="note">
      <el-alert
        title="所有价格仅供参考，实际以合同为准。如需更详细说明或定制方案，欢迎联系我们。"
        type="info"
        show-icon
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
// 目前仅静态展示；如需动态加载数据或国际化可在此补充逻辑
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
/* 计划卡片 */
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
/* 功能对比表 */
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
/* 组件 API */
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

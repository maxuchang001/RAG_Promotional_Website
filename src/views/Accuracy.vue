<template>
  <div class="accuracy-verification">
    <!-- 标题区 -->
    <h2 class="title">Accuracy verification</h2>
    <p class="sub-title">Based on the scientific testing system, it covers the full-dimensional verification of function, performance and efficiency</p>

    <!-- 核心内容区 -->
    <div class="content">
      <!-- 左侧：测试维度 + 原理 -->
      <div class="test-dimensions">
        <h3 class="dimension-title">Test dimensions and validation logic</h3>

        <!-- 文档理解准确性 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>Document comprehension accuracy</h4>
            <span class="detail-icon">▾</span>
          </div>
          <div class="item-detail" v-show="true">
            <p>Verify content comprehension accuracy with <strong>three rounds of progressive testing</strong>:</p>
            <ol>
              <li>Basic validation: covering 1000+ documents in standard formats (PDF/Word/excel/PPT)</li>
              <li>Complex scenarios: contain specialized terminology (e.g., medical/legal fields), fuzzy semantics, cross-chapter association testing</li>
              <li>Dynamic updates: Introduce new typical documents in the industry (such as new financial regulations and technical white papers) every month.</li>
            </ol>
            <p>Verification criteria: <strong>98.5% of the matching degree</strong> between manual annotation and system output ≥ pass</p>
          </div>
          <p class="item-summary">Multiple rounds of testing cover standard/complex scenarios to ensure the accuracy of content understanding</p>
        </div>

        <!-- 响应速度 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>Responsiveness</h4>
            <span class="detail-icon">▾</span>
          </div>
          <div class="item-detail" v-show="true">
            <p><strong>Gradient stress testing</strong> is used to simulate real-world scenarios:</p>
            <ul>
              <li>Single-user test: 1000+ requests with average response time statistics</li>
              <li>Concurrent test: Simulates 10/100/1000 simultaneous user requests to monitor system throughput</li>
              <li>Extreme scenarios: large documents (100MB+) and high-frequency sequential requests (50+ requests per second)</li>
            </ul>
            <p>Verification criteria: 99% request response time <strong>≤ 500ms</strong>, no service interruption in peak scenarios</p>
          </div>
          <p class="item-summary">All-scenario stress test to ensure response efficiency under different loads</p>
        </div>

        <!-- 资源消耗 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>Resource consumption</h4>
            <span class="detail-icon">▾</span>
          </div>
          <div class="item-detail" v-show="true">
            <p>Verify resource efficiency with <strong>the Hardware Baseline Comparison Method</strong>:</p>
            <ol>
              <li>Comparison of the same configuration: On an 8-core 16G server, compare the CPU/memory usage of similar systems</li>
              <li>Dynamic scaling test: Simulates business peaks and valleys (10 times the difference in request volume) to monitor the elastic scheduling of resources</li>
              <li>Long-term stability: 72 hours of continuous operation, statistical resource fluctuation curve</li>
            </ol>
            <p>Verification criteria: <strong>≤ 40%</strong> CPU ≤ usage and <strong>60%</strong> memory usage in normal scenarios</p>
          </div>
          <p class="item-summary">Hardware-level comparative testing to ensure efficient resource utilization</p>
        </div>
      </div>

      <!-- 右侧：对比测试 + 数据可视化 -->
      <div class="comparative-test">
        <h3 class="dimension-title">Multi-dimensional comparison test</h3>

        <!-- 可视化对比图表 -->
        <div class="comparison-chart">
          <div class="chart-title">Comparison of core indicators</div>
          <div class="chart-group">
            <div class="chart-item">
              <div class="chart-label">Accuracy</div>
              <div class="chart-bar">
                <div class="bar-fill" style="width: 98.7%"></div>
              </div>
              <div class="chart-value">System: 98.7%</div>
            </div>
            <div class="chart-item">
              <div class="chart-label">LangChain</div>
              <div class="chart-bar">
                <div class="bar-fill" style="width: 83.7%"></div>
              </div>
              <div class="chart-value">83.7%</div>
            </div>
            <div class="chart-item">
              <div class="chart-label">Synopsys.ai</div>
              <div class="chart-bar">
                <div class="bar-fill" style="width: 78.5%"></div>
              </div>
              <div class="chart-value">78.5%</div>
            </div>
          </div>
        </div>

        <!-- 详细对比项 -->
        <div class="comparison-list">
          <div class="comparison-item">
            <span>Depth of document comprehension</span>
            <span class="highlight">+12% Terminology recognition</span>
            <p class="comparison-note">Covering medical/legal/financial and other vertical fields</p>
          </div>
          <div class="comparison-item">
            <span>Average response speed</span>
            <span class="highlight">+20% processing efficiency</span>
            <p class="comparison-note">The advantage of 100 concurrency is significant</p>
          </div>
          <div class="comparison-item">
            <span>Resource usage</span>
            <span class="highlight">-30% CPU usage</span>
            <p class="comparison-note">The same configuration server supports more concurrency</p>
          </div>
          <div class="comparison-item">
            <span>Exceptionally resilient capabilities</span>
            <span class="highlight">+25% self-healing rate</span>
            <p class="comparison-note">Verification of network fluctuations/hardware anomalies in scenarios</p>
          </div>
        </div>

        <!-- 标杆客户案例 -->
        <div class="customer-case">
          <h4 class="case-title">Measured data from a financial institution</h4>
          <p class="case-desc">In the processing of 100,000 credit contracts:</p>
          <ul>
            <li>Accuracy: 99.2% (only 78 corrections were made by manual review)</li>
            <li>Processing time: 65% shorter than traditional systems</li>
            <li>Server cost: Reduce the deployment of 2 physical machines</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部：测试体系说明 -->
    <div class="test-system">
      <h3 class="system-title">Description of the test system</h3>
      <p class="system-desc">
        This verification is based on <strong>the ISO/IEC 25010</strong> software quality model design, and the test dataset covers:
        <br>
        • General documents: 5000+ daily office documents (emails/reports/contracts)
        <br>
        • Professional documents: 3000+ medical records, legal provisions, financial reports
        <br>
        • Extreme scenarios: 100+ oversized/encrypted/broken format documents
        <br>
        All tests are supervised and carried out by <strong>a third-party neutral organization</strong> to ensure that the results are objective and credible.
      </p>
      <a class="report-link" target="_blank">View the full test report</a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.accuracy-verification {
  width: 85%;
  margin: 40px auto;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* 标题样式 */
.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #2c3e50;
  border-left: 5px solid #3578e5;
  padding-left: 10px;
}

.sub-title {
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 30px;
}

/* 内容布局 */
.content {
  display: flex;
  gap: 40px;
}

/* 左侧测试维度 */
.test-dimensions {
  flex: 1;
}

.dimension-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.dimension-item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.item-header h4 {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.detail-icon {
  font-size: 20px;
  color: #3578e5;
  transition: transform 0.3s;
}

.item-detail {
  margin-top: 15px;
  padding-left: 10px;
  border-left: 3px solid #3578e5;
  font-size: 14px;
  color: #555;
}

.item-summary {
  margin-top: 10px;
  font-size: 14px;
  color: #777;
}

/* 右侧对比测试 */
.comparative-test {
  flex: 0 0 320px;
}

.comparison-chart {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

.chart-group {
  margin-bottom: 20px;
}

.chart-item {
  margin-bottom: 10px;
}

.chart-label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.chart-bar {
  width: 100%;
  height: 12px;
  background: #f1f3f5;
  border-radius: 6px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #3578e5;
  transition: width 0.5s;
}

.chart-value {
  font-size: 14px;
  color: #777;
  margin-top: 5px;
}

.comparison-list {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.comparison-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.comparison-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.comparison-item span {
  font-size: 14px;
}

.highlight {
  color: #3578e5;
  font-weight: 600;
}

.comparison-note {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  text-align: right;
  width: 100%;
}

.customer-case {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.case-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c3e50;
}

.case-desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

/* 底部测试体系 */
.test-system {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

.system-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c3e50;
}

.system-desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.8;
}

.report-link {
  display: inline-block;
  padding: 8px 16px;
  background: #3578e5;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.report-link:hover {
  background: #285eaf;
}
</style>
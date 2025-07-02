<template>
  <div class="accuracy-verification">
    <!-- 标题区 -->
    <h2 class="title">准确性验证</h2>
    <p class="sub-title">基于科学测试体系，覆盖功能、性能、效率全维度验证</p>

    <!-- 核心内容区 -->
    <div class="content">
      <!-- 左侧：测试维度 + 原理 -->
      <div class="test-dimensions">
        <h3 class="dimension-title">测试维度与验证逻辑</h3>

        <!-- 文档理解准确性 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>文档理解准确性</h4>
            <span class="detail-icon" @click="toggleDetail(0)">▾</span>
          </div>
          <div class="item-detail" v-show="showDetails[0]">
            <p>通过 <strong>三轮递进式测试</strong> 验证内容理解准确性：</p>
            <ol>
              <li>基础验证：覆盖1000+份标准格式文档（PDF/Word/Markdown）</li>
              <li>复杂场景：包含专业术语（如医疗/法律领域）、模糊语义、跨章节关联测试</li>
              <li>动态更新：每月引入行业新增典型文档（如金融新规、技术白皮书）</li>
            </ol>
            <p>验证标准：人工标注与系统输出 <strong>匹配度≥98.5%</strong> 视为通过</p>
          </div>
          <p class="item-summary">多轮测试覆盖标准/复杂场景，保障内容理解精准度</p>
        </div>

        <!-- 响应速度 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>响应速度</h4>
            <span class="detail-icon" @click="toggleDetail(1)">▾</span>
          </div>
          <div class="item-detail" v-show="showDetails[1]">
            <p>采用 <strong>梯度压力测试</strong> 模拟真实场景：</p>
            <ul>
              <li>单用户测试：1000+次请求平均响应时间统计</li>
              <li>并发测试：模拟10/100/1000用户同时请求，监测系统吞吐量</li>
              <li>极端场景：超大文档（100MB+）、高频次连续请求（每秒50+次）</li>
            </ul>
            <p>验证标准：99%请求响应时间 <strong>≤500ms</strong>，峰值场景无服务中断</p>
          </div>
          <p class="item-summary">全场景压力测试，确保不同负载下响应效率</p>
        </div>

        <!-- 资源消耗 -->
        <div class="dimension-item">
          <div class="item-header">
            <h4>资源消耗</h4>
            <span class="detail-icon" @click="toggleDetail(2)">▾</span>
          </div>
          <div class="item-detail" v-show="showDetails[2]">
            <p>通过 <strong>硬件基线对比法</strong> 验证资源效率：</p>
            <ol>
              <li>同配置对比：在8核16G服务器上，对比同类系统CPU/内存占用</li>
              <li>动态伸缩测试：模拟业务峰谷（请求量差10倍），监测资源弹性调度</li>
              <li>长期稳定性：72小时持续运行，统计资源波动曲线</li>
            </ol>
            <p>验证标准：常规场景CPU占用 <strong>≤40%</strong>，内存占用 <strong>≤60%</strong></p>
          </div>
          <p class="item-summary">硬件级对比测试，保障资源利用高效性</p>
        </div>
      </div>

      <!-- 右侧：对比测试 + 数据可视化 -->
      <div class="comparative-test">
        <h3 class="dimension-title">多维度对比测试</h3>

        <!-- 可视化对比图表 -->
        <div class="comparison-chart">
          <div class="chart-title">核心指标对比</div>
          <div class="chart-group">
            <div class="chart-item">
              <div class="chart-label">准确率</div>
              <div class="chart-bar">
                <div class="bar-fill" style="width: 98.7%"></div>
              </div>
              <div class="chart-value">本系统：98.7%</div>
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
            <span>文档理解深度</span>
            <span class="highlight">+12% 专业术语识别</span>
            <p class="comparison-note">覆盖医疗/法律/金融等垂直领域</p>
          </div>
          <div class="comparison-item">
            <span>平均响应速度</span>
            <span class="highlight">+20% 处理效率</span>
            <p class="comparison-note">100并发下优势显著</p>
          </div>
          <div class="comparison-item">
            <span>资源占用</span>
            <span class="highlight">-30% CPU 使用率</span>
            <p class="comparison-note">同配置服务器支持更多并发</p>
          </div>
          <div class="comparison-item">
            <span>异常恢复能力</span>
            <span class="highlight">+25% 故障自愈率</span>
            <p class="comparison-note">网络波动/硬件异常场景验证</p>
          </div>
        </div>

        <!-- 标杆客户案例 -->
        <div class="customer-case">
          <h4 class="case-title">某金融机构实测数据</h4>
          <p class="case-desc">在10万份信贷合同处理中：</p>
          <ul>
            <li>• 准确率：99.2%（人工复核仅修正78份）</li>
            <li>• 处理耗时：相比传统系统缩短65%</li>
            <li>• 服务器成本：减少2台物理机部署</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部：测试体系说明 -->
    <div class="test-system">
      <h3 class="system-title">测试体系说明</h3>
      <p class="system-desc">
        本验证基于 <strong>ISO/IEC 25010</strong> 软件质量模型设计，测试数据集涵盖：
        <br>
        • 通用文档：5000+份日常办公文档（邮件/报告/合同）
        <br>
        • 专业文档：3000+份医疗病历、法律条文、金融财报
        <br>
        • 极限场景：100+份超大/加密/格式破损文档
        <br>
        所有测试通过 <strong>第三方中立机构</strong> 监督执行，保障结果客观可信。
      </p>
      <a href="#" class="report-link" target="_blank">查看完整测试报告</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制维度详情展开
const showDetails = ref([false, false, false]);

const toggleDetail = (index) => {
  showDetails.value[index] =!showDetails.value[index];
};
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
<template>
  <el-footer>
    <el-row class="footer" :gutter="40">
      <el-col :span="6">
        <h4>关于我们</h4>
        <ul><li>公司介绍</li><li>发展历程</li><li>团队介绍</li><li>新闻动态</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>文档</h4>
        <ul><li>快速指南</li><li>Docker 命令</li><li>VS Code 插件</li><li>API 文档</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>支持</h4>
        <ul><li>帮助中心</li><li>技术支持</li><li>常见问题</li><li>联系我们</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>联系方式</h4>
        <p>邮箱：contact@example.com</p>
        <p>电话：400-123-4567</p>
      </el-col>
    </el-row>
  </el-footer>
</template>

<style scoped>
.footer {
  background: #f5f5f5;
  padding: 40px 20px;
}
h4 {
  margin-bottom: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 4px;
}
</style>

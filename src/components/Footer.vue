<template>
  <el-footer>
    <el-row class="footer" :gutter="40">
      <el-col :span="6">
        <h4>About Us</h4>
        <ul><li>Company Profile</li><li>Milestones</li><li>Team Introduction</li><li>News & Events</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>Document</h4>
        <ul><li>Quick Guide</li><li>Docker Commands</li><li>VS Code plugin</li><li>API Document</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>Support</h4>
        <ul><li>Help Center</li><li>Technical Support</li><li>FAQs</li><li>Contact Us</li></ul>
      </el-col>
      <el-col :span="6">
        <h4>Contact Details</h4>
        <p>Email: spiritai@platformai.org</p>
        <p>Phone Call: 310-745-6014</p>
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

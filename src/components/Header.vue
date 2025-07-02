<template>
  <el-header>
    <div class="logo"><el-icon :size="20"><Monitor /></el-icon> RAG平台</div>
    <el-menu mode="horizontal" class="nav" :default-active="'1'">
      <el-menu-item index="1" @click="handleMenuClick('/')">主页</el-menu-item>
      <el-menu-item index="2" @click="handleMenuClick('/chipdesign')">芯片文档</el-menu-item>
      <el-menu-item index="3" @click="handleMenuClick('/accuracy')">准确性</el-menu-item>
      <el-sub-menu index="4" >
        <template #title>用例</template>
        <el-menu-item index="4-1" @click="handleMenuClick('/chipdesigncase')">芯片设计</el-menu-item>
        <el-menu-item index="4-2" @click="handleMenuClick('/autonomousvehicles')">自动驾驶</el-menu-item>
        <el-menu-item index="4-3" @click="handleMenuClick('/medicalrobotics')">智慧医疗</el-menu-item>
        <el-menu-item index="4-4" @click="handleMenuClick('/finregcompliance')">金融问答</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="5" @click="handleMenuClick('/pricing')">定价</el-menu-item>
      <el-menu-item index="6" @click="handleMenuClick('/blog')">博客</el-menu-item>
      <el-menu-item index="7" @click="handleMenuClick('/docs')">文档</el-menu-item>
    </el-menu>
    <div class="actions">
      <el-input placeholder="搜索..." size="small" />
      <el-button type="primary">登录/注册</el-button>
    </div>
  </el-header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMenuClick = (path) => {
  router.push(path)
}
</script>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.logo {
  font-weight: bold;
}
.nav {
  flex: 1;
  margin-left: 40px;
}
.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

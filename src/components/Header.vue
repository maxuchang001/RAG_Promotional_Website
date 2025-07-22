<template>
  <el-header>
    <div class="logo" @click="handleMenuClick('/')">
      <el-icon :size="20"><Monitor /></el-icon> EncryAgent
    </div>
    <el-menu mode="horizontal" class="nav" :default-active="activeTable">
      <el-menu-item index="1" @click="handleMenuClick('/')">Home</el-menu-item>
      <el-menu-item index="2" @click="handleMenuClick('/chipdesign')">Chip-design</el-menu-item>
      <el-menu-item index="3" @click="handleMenuClick('/accuracy')">Accuracy</el-menu-item>
      <el-sub-menu index="4" >
        <template #title>Use-cases</template>
        <el-menu-item index="4-1" @click="handleMenuClick('/chipdesigncase')">Chip design</el-menu-item>
        <el-menu-item index="4-2" @click="handleMenuClick('/autonomousvehicles')">Technology & Engineering</el-menu-item>
        <el-menu-item index="4-3" @click="handleMenuClick('/medicalrobotics')">Medical robotics</el-menu-item>
        <el-menu-item index="4-4" @click="handleMenuClick('/finregcompliance')">Fin-reg compliance</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="5" @click="handleMenuClick('/pricing')">Pricing</el-menu-item>
      <el-menu-item index="6" @click="handleMenuClick('/blog')">Blog</el-menu-item>
      <el-menu-item index="7" @click="handleMenuClick('/docs')">Docs</el-menu-item>
    </el-menu>
    <div class="actions">
      <el-input placeholder="Search..." size="small" />
      <el-button type="primary" @click="handleLogin">Login/Register</el-button>
    </div>
  </el-header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMenuClick = (path) => {
  router.push(path)
  activeTable.value = path === '/' ? '1' : path === '/chipdesign' ? '2' : path === '/accuracy' ? '3' : path.startsWith('/chipdesigncase') ? '4-1' : path === '/autonomousvehicles' ? '4-2' : path === '/medicalrobotics' ? '4-3' : path === '/finregcompliance' ? '4-4' : path === '/pricing' ? '5' : path === '/blog' ? '6' : '7'
}
import { ref } from 'vue'

const activeTable = ref('1')

const handleLogin = () => {
  window.location.href = 'http://34.80.152.254:9001/'
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

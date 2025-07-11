<template>
  <div>
    <el-container class="main">
      <el-main>
        <h1>85% accuracy of chip design documentation RAG</h1>
        <p>Rapidly realize intelligent parsing and processing of chip design documents without code</p>
        <!-- <el-button type="primary" icon="el-icon-video-camera">30 秒解说视频</el-button> -->
        <el-row :gutter="20" class="card-section">
          <el-col :span="12">
            <el-card>
              <img
                src="../assets/img/home-p1.png"
                class="image" style="width: 100%; height: 100%; object-fit: cover;"
              />
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="INITIAL DEMO" name="1">
                  <div>
                    Seamlessly create a RAG agent in minutes to showcase the value of your use case to technical stakeholders and business end-users.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="PROOF OF CONCEPT" name="2">
                  <div>
                    Connect your technical documents and structured data to enable your RAG agents to reason over all of your enterprise knowledge.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="PRODUCTION PREP" name="3">
                  <div>
                    Specialize your RAG agents to achieve unmatched accuracy and performance for your domain-specific use case.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="PRODUCTION LAUNCH" name="4">
                  <div>
                    Meet robust enterprise requirements around security, availability, and deployment to move safely into production.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-card>
          </el-col>
        </el-row>
        <h1>More scenarios</h1>
        <p>Quickly implement intelligent parsing and processing without code</p>
        <el-row :gutter="20" class="card-section">
          <el-col :span="12" v-for="(card, i) in cards" :key="i">
            <el-card>
              <h3>{{ card.title }}</h3>
              <p>{{ card.desc }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <el-aside width="260px" class="aside">
        <el-card>
          <div>
            <el-button type="primary" block style="width: 100%;">Get a demo</el-button>
          </div>
          <div style="margin-top: 10px;">
            <el-button block style="width: 100%;">Start Trial</el-button>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;">
          <h3>Prices</h3>
          <p><strong>$12,000</strong></p>
          <span>SaaS version/local license</span>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">

const cards = [
  { title: 'Chip Design Documentation', desc: 'Supports a variety of chip design document formats, including PDF, Word, excel, PPT, etc., and realizes intelligent understanding of scenarios through the supported RAG technology. The accuracy is up to 85%.' },
  { title: 'Use Case Demonstration', desc: 'Demonstrate the application effect in different scenarios through typical example demonstrations, covering from small teams to large enterprises.' },
  { title: 'Verification of accuracy', desc: 'A strict accuracy verification mechanism is used to ensure the quality of information extraction and Q&A.' },
  { title: 'Application scenarios', desc: 'Supports multiple segmentation scenarios, including verification, testing, and design document management.' },
];

import { ref } from 'vue'

const activeName = ref('1')

</script>

<style scoped>
.main {
  padding: 20px;
}
.card-section {
  margin-top: 30px;
}
.aside {
  padding: 10px;
}
</style>

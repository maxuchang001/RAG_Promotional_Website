<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="hero">
      <h1>Insights & Updates</h1>
      <p class="lead">Thought leadership, product deep-dives, and best practices on building RAG-powered applications with Contextual AI.</p>
    </section>

    <!-- Filters -->
    <section class="filters">
      <el-input
        v-model="search"
        placeholder="Search articles…"
        prefix-icon="el-icon-search"
        class="search-input"
      />
      <div class="tag-list">
        <el-tag
          v-for="tag in allTags"
          :key="tag"
          :type="activeTags.includes(tag) ? 'success' : 'info'"
          effect="plain"
          @click="toggleTag(tag)"
        >{{ tag }}</el-tag>
      </div>
    </section>

    <!-- Article Grid -->
    <section class="articles">
      <div class="grid">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="card"
        >
          <img :src="post.image" :alt="post.title" class="thumb" />
          <div class="body">
            <div class="meta">
              <span class="category">{{ post.category }}</span>
              <span>·</span>
              <span>{{ post.date }}</span>
              <span v-if="post.readtime">· {{ post.readtime }} min read</span>
            </div>
            <h3 class="title">{{ post.title }}</h3>
            <p class="excerpt">{{ post.excerpt }}</p>
            <el-button type="primary" link :href="post.href">Read more</el-button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Dummy data — replace with API call when backend is ready
const posts = ref([
  {
    id: 1,
    title: 'Introducing Datastore Pipelines: Scalable Data Ingestion for Enterprises',
    excerpt: 'Learn how our new Pipelines architecture makes it effortless to import millions of documents, monitor progress, and enforce quality gates.',
    image: 'https://source.unsplash.com/featured/600x400?abstract',
    date: 'June 25, 2025',
    category: 'Product',
    tags: ['Data Ingestion', 'Product'],
    readtime: 5,
    href: '#',
  },
  {
    id: 2,
    title: 'From Retrieval to Generation: A Practical Guide to Evaluation Metrics for RAG',
    excerpt: 'Precision, recall, answer-correctness—what really matters? We break down evaluation strategies you can implement today.',
    image: 'https://source.unsplash.com/featured/600x400?data',
    date: 'May 14, 2025',
    category: 'Engineering',
    tags: ['RAG', 'Evaluation'],
    readtime: 7,
    href: '#',
  },
  {
    id: 3,
    title: 'SOC 2 Type II & HIPAA: Security at Every Layer of Contextual AI',
    excerpt: 'Our commitment to enterprise-grade security is now validated by independent auditors. Here’s what it means for customers.',
    image: 'https://source.unsplash.com/featured/600x400?security',
    date: 'April 2, 2025',
    category: 'Company',
    tags: ['Security', 'Compliance'],
    readtime: 4,
    href: '#',
  },
])

const search = ref('')
const activeTags = ref([])

const allTags = computed(() => {
  const s = new Set()
  posts.value.forEach(p => p.tags.forEach(t => s.add(t)))
  return Array.from(s)
})

function toggleTag(tag) {
  const idx = activeTags.value.indexOf(tag)
  if (idx > -1) activeTags.value.splice(idx, 1)
  else activeTags.value.push(tag)
}

const filteredPosts = computed(() => {
  return posts.value.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.value.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.value.toLowerCase())
    const matchesTags = activeTags.value.length === 0 || activeTags.value.every(t => p.tags.includes(t))
    return matchesSearch && matchesTags
  })
})
</script>

<style scoped>
.blog-page {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 24px 48px;
}
.hero {
  text-align: center;
  margin-bottom: 32px;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
.lead {
  margin-top: 8px;
  color: #666;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}
.search-input {
  max-width: 400px;
  align-self: center;
}
.tag-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.articles .grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}
.thumb {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.meta {
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 8px;
}
.category {
  font-weight: 600;
  color: #409eff;
}
.title {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}
.excerpt {
  flex: 1;
  color: #555;
  margin-bottom: 16px;
}
</style>

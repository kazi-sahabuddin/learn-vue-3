<template>
  <el-table :data="todoList" stripe boder style="width: 100%">
    <el-table-column prop="userId" label="User Id" width="180" />
    <el-table-column prop="id" label="Id" width="180" />
    <el-table-column prop="title" label="Title" />
    <el-table-column prop="completed" label="Status">
      <template #default="slotProps">
        <el-tag type="success" v-if="slotProps.row.completed">Completed</el-tag>
        <el-tag type="danger" v-else>Incompleted</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const todoList = ref([])

async function getTodoList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  console.log(data)
  todoList.value = data
}

onMounted(() => {
  getTodoList()
})
</script>

<style scoped></style>

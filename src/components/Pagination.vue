<template>
  <ul class="pagination">
    <li
        v-for="page in pages"
        :key="page" class="page-item"
        :class="{active: currentPage === page}"
    >
      <router-link :to="{path: url ,query: {page: page}}" class="page-link">
        {{page}}
      </router-link>

    </li>
  </ul>
</template>

<script>
import {range} from "@/helpers/utils";

export default {
  name: "Pagination",
  props: {
    limit: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  }
}
</script>

<style scoped>

</style>

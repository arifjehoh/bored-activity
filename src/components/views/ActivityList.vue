<template>
  <div>
    <h1>Activity List</h1>
    <table border='1px'>
      <tr>
        <td>type</td>
        <td>participants</td>
        <td>key</td>
      </tr>

      <tr v-for='item in list' v-bind:key='item.key'>
        <td>{{ item.type }}</td>
        <td>{{ item.participants }}</td>
        <td>{{ item.key }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ActivityList',
  data () {
    return { list: [] }
  },
  mounted () {
    axios.get('https://www.boredapi.com/api/activity').then(data => { console.log(data.data); this.list = [...this.list, (data.data)] }).catch(console.error)
  }
}
</script>

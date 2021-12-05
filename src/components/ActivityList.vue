<template>
    <div>
        <h1>Activity List</h1>
        <table border="1px">
            <tr>
                <td>type </td>
                <td>participants </td>
                <td>key </td>
             </tr>

             <tr v-for="item in list" v-bind:key= "item.key">
                <td>{{item.type}} </td>
                <td>{{item.participants}} </td>
                <td>{{item.key}}  </td>
            </tr>
    </table>

    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vuew-axios'
Vue.use(VueAxios, axios)
export default {
    name: "ActivityList",
    data(){
        return{list:undefined}
    },
    mounted(){
        Vue.axios.get('https://www.boredapi.com/api/activity')
        .then((r) => {
            this.list=r.activity;
            console.warn(r.activity)
        })
    }
}
</script>
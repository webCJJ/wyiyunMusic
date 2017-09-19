<template>
     <div class="header">    
        <x-header :left-options="{showBack: false}" style="background-color: red;">
    	    <a slot="left"><i class="icon iconfont icon-caidan" style="font-size: 25px;color: #fff;"></i></a> 
    	   <ul class="title-ul">
    	   <li>
    	    	<i class="icon iconfont icon-yinle" style="font-size: 25px;"></i>
    	   </li>
    	   <li>
    	       <i class="icon iconfont icon-wangyiyunyinlezizhi-copy" style="font-size: 25px;"></i>
    	   </li>
    	   <li>
    	       <i class="icon iconfont icon-haoyou" style="font-size: 30px;"></i>
    	  </li>
    	 </ul>
    	 <a slot="right"><i class="icon iconfont icon-sousuo" style="font-size: 25px;color: #fff;"></i></a> 
    </x-header>
   
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.header .icon{
	
	cursor: pointer;
}
.header .title-ul{
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
	width: 100%;
}
.title-ul li{
	float: left;
	text-align: center;
	width: 30%;
	list-style: none;
}
</style>
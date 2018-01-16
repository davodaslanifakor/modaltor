<template>
	<div>	

		<app-modal  :visibel="open" @hide="hideModal" :defaultWidth="'50%'"  :resizeWidth='{1200:"70%",992:"100%"}'>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</app-modal>
		<button @click="open = true">modal-basic</button>
	</div>
</template>

<script>
import modal from '../vue-modal-tor.vue'
export default {

	name: 'modal-basic',
	components: {
		'app-modal':modal, 	
	},

	data () {
		return {
			open:false
		}
	},
	methods:{
		hideModal(){
			this.open = false
		}
	}
}
</script>

<style lang="less">

button{
	outline: 0;
	border:none;
	background: #901b1b;
	cursor: pointer; 
	color:#fff;
	font-size: 16px;
	border-radius: 2px;
	transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: 0.2s;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
	width: 120px;
	height: 32px;
	&:active{
		box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
		transition-delay: 0s;
	    outline: 0;

	}
}

</style>
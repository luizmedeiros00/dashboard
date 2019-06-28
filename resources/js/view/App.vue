<template>
    <div id="app" :class="{'hide-menu': !isMenuVisible}">
        <Header title="Controle"
            :hideToggle="false" 
			:hideUserDropdown="false"   />
        <Menu />
        <Content />
        <Footer />

    </div>
</template>

<script>
import { mapState } from "vuex"

import Header from '@/js/components/template/Header'
import Content from '@/js/components/template/Content'
import Menu from '@/js/components/template/Menu'
import Footer from '@/js/components/template/Footer'

export default {
    name:'App',
    components:{Header, Content, Menu, Footer},
    computed: mapState(['isMenuVisible']),

}
</script>

<style>
	*{
		font-family: "Lato", sans-serif;
	}
	body {
		margin: 0;
	}
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 250px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu footer";
	}
	#app.hide-menu {
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
	.card { 
		margin-bottom: 24px;
		border: 0 solid #f7f7f7 !important;
		border-radius: .25rem;
	}
</style>

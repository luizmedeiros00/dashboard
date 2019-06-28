<template>
    <!-- <aside class="menu" id="menu" v-show="isMenuVisible">
    </aside> -->
    <div class="left-side-menu" v-show="isMenuVisible">
        <div class="slimScrollDiv" >
            <div class="slimscroll-menu" >
                <div id="sidebar-menu" class="active">
                    <ul class="metismenu in" id="side-menu">
                        <li class="menu-title">Navegação</li>
                        <li class="active">
                            <a href="javascript: void(0);" class="active" @click="menu1 = !menu1">
                                <i class="fas fa-plus-square"></i>
                                <span> Cadastro </span>
                            </a>
                            <ul class="nav-second-level collapse in" v-show="menu1">
                                <router-link tag="li" to="/CadastroCliente"><a>Forcenedor</a></router-link>
 
  <!--                              <li>
                                    <a href="dashboard-2.html">Contrato</a>
                                </li>
                                <router-link tag="li" to="/CadastroPessoa/1"><a>Corretor</a></router-link>
                                <router-link tag="li" to="/CadastroUnidade"><a>Unidade</a></router-link> -->

                            </ul>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            menu1: false,
        }
    },
}
</script>

<style>
.left-side-menu {
    grid-area: menu;
    /* background: linear-gradient(to right, #232526, #414345); */
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.metismenu {
    padding: 0;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
#sidebar-menu .menu-title {
    padding: 10px 20px;
    letter-spacing: .05em;
    pointer-events: none;
    cursor: default;
    font-size: .6875rem;
    text-transform: uppercase;
    color: #6e768e;
    font-weight: 600;
}
.metismenu li {
    list-style: none;
}
.metismenu li {
    list-style: none;
}
#sidebar-menu>ul>li>a.active {
    color: #00acc1;
}
#sidebar-menu>ul>li>a {
    color: #6e768e;
    display: block;
    padding: 13px 20px;
    position: relative;
    -webkit-transition: all .4s;
    transition: all .4s;
    font-family: "Cerebri Sans,sans-serif";
    font-size: .95rem;
}
a {
    color: #6658dd;
    text-decoration: none;
    background-color: transparent;
}
#sidebar-menu>ul>li>a i {
    display: inline-block;
    line-height: 1.0625rem;
    margin: 0 10px 0 3px;
    text-align: center;
    vertical-align: middle;
    width: 20px;
}
#sidebar-menu>ul>li>a>span {
    vertical-align: middle;
}
#sidebar-menu>ul>li>ul {
    padding-left: 40px;
}
.metismenu .collapse.in {
    display: block;
}
.metismenu .collapse {
    display: none;
}
.collapse:not(.show) {
    display: none;
}
.metismenu ul {
    padding: 0;
}
.metismenu ul li {
    width: 100%;
}
.metismenu li {
    list-style: none;
}
#sidebar-menu>ul>li>a:active, 
#sidebar-menu>ul>li>a:focus, 
#sidebar-menu>ul>li>a:hover {
    color: #00acc1;
    text-decoration: none;
}
.nav-second-level li.active>a, 
.nav-third-level li.active>a {
    color: #00acc1;
}
.nav-second-level li a, 
.nav-thrid-level li a {
    padding: 8px 20px;
    color: #6e768e;
    display: block;
    position: relative;
    -webkit-transition: all .4s;
    transition: all .4s;
    font-size: .875rem;
}
.nav-second-level li a:focus, 
.nav-second-level li a:hover, 
.nav-thrid-level li a:focus, 
.nav-thrid-level li a:hover {
    color: #00acc1;
}
a:hover {
    text-decoration: none;
}
</style>
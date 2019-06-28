<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        /* background-color: #efefef; */
        background-color: #f5f6f8;
        padding: 20px;
    }
</style>
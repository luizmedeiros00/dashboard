<template>
    <b-row>
        <div class="col-12">
            <div class="page-title-box">
                <h4 class="page-title">{{ main }}</h4>
            </div>
        </div>
    </b-row>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['main', 'sub']
}
</script>

<style>
  .page-title-box .page-title {
    font-size: 1.25rem;
    margin: 0;
    /* line-height: 75px; */
    color: #323a46;
}
</style>

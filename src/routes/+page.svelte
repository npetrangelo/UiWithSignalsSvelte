<script lang="ts">
    import Lists from "$lib/lists.svelte";
    import ListBox from "$lib/ListBox.svelte";

    let lists = new Lists();
</script>

<style>
    .lists {
        display: flex;
    }

    .stats {
        background-color: bisque;
        width: 100%;
        margin: 5px;
        border-color: black;
        border-width: 1px;
        border-style: solid;
    }

    .left {
        margin-left: 10px;
    }
</style>

<h1 class="text-3xl font-bold underline">Welcome to Ui With Signals</h1>
<div class=lists>
    <ListBox bind:items={lists.items1}></ListBox>
    <ListBox bind:items={lists.items2}></ListBox>
</div>

<div class=stats>
    <p class=left>List 1 count: {lists.count1}</p>
    <p class=left>List 2 count: {lists.count2}</p>
    <p class=left>Total count: {lists.totalCount}</p>
</div>

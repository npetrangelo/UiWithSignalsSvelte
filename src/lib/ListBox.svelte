<script lang="ts">
    type MyProps = { items: Array<string> }

    let input = $state("");
    let { items=$bindable([]) }: MyProps = $props();

    function onsubmit() {
        items.push(input);
    }

    function onclick() {
        items.pop();
    }
</script>

<style>
    .main {
        background-color: bisque;
        width: 100%;
        margin: 5px;
        border-color: black;
        border-width: 1px;
        border-style: solid;
    }

    /* button {
        background-color: red;
        color: white;
        border-radius: 8px;
        border: 0px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    } */
</style>

<div class=main>
    <form {onsubmit}>
        <input type="text" bind:value={input}>
        <input type="submit">
    </form>
    <button class="bg-red-600" {onclick}>Remove Item</button>
    <div>
        <ol>
            {#each items as item}
                <li>{item}</li>
            {/each}
        </ol>
    </div>
</div>
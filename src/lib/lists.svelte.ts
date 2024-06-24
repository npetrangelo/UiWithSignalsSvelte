export default class Lists {
    items1 = $state(["foo"]);
    items2 = $state(["bar"]);

    count1 = $derived(this.items1.length);
    count2 = $derived(this.items2.length);
    totalCount = $derived(this.count1 + this.count2);
}
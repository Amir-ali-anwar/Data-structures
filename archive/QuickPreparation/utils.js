class NodeListV2 {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}
function ArrayToLinkList(arr) {
    const head = new NodeListV2();
    let current = head;
    for (const val of arr) {
        current.next = new NodeListV2(val)
        current = current.next
    }
    return head.next
}
function linkedListToArray(node) {
    let result = []
    while (node) {
        result.push(node.value)
        node = node.next
    }
    return result
}

export {NodeListV2,ArrayToLinkList,linkedListToArray}
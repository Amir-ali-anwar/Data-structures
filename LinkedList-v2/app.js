class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const PrintLinkList = (head) => {
  let current = head;
  console.log(current);
  while (current) {
    console.log(current.data);
    current=current.next
  }
};
PrintLinkList(a);
// console.log(a);

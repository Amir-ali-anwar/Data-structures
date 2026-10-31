// Min-heap: smallest item always on top. push/pop O(log n), peek O(1).
// Parent of i: Math.floor((i - 1) / 2). Children: 2i + 1 and 2i + 2.
export class MinHeap {
  private data: number[] = [];

  size(): number { return this.data.length; }
  peek(): number | undefined { return this.data[0]; }

  push(value: number): void {
    this.data.push(value);
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      let i = 0;
      while (true) {
        const left = 2 * i + 1, right = 2 * i + 2;
        let smallest = i;
        if (left < this.data.length && this.data[left] < this.data[smallest]) smallest = left;
        if (right < this.data.length && this.data[right] < this.data[smallest]) smallest = right;
        if (smallest === i) break;
        [this.data[smallest], this.data[i]] = [this.data[i], this.data[smallest]];
        i = smallest;
      }
    }
    return top;
  }
}

const h = new MinHeap();
[30, 50, 40, 10].forEach(v => h.push(v));
const out: number[] = [];
while (h.size() > 0) out.push(h.pop()!);
console.log(out); // [10, 30, 40, 50]

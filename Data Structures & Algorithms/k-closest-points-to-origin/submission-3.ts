class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new Heap(k, (p: number[], c: number[]) => {
            if (p === c) return true;
            return (p[1]*p[1] + p[0]*p[0] - c[0]*c[0] - c[1]*c[1]) > 0 ? true : false
          });
        for (let point of points) {
          heap.push(point);
          console.log({point})
        }
        return heap.data;
    }
}

// compare parent, node => true means matching, false means we need to change
// (a, b) => a-b > 0 ? true : false
// min heap -> compare(parent, child) => node - head > 0 ? true : false

class Heap<T> {
  public data: T[];

  constructor(private capacity: number, private comparator: (a: T, b: T) => boolean){
    this.data = [];
  }

  getSize(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  swap(ind1: number, ind2: number): void {
    const temp = this.data[ind1];
    this.data[ind1] = this.data[ind2];
    this.data[ind2] = temp;
  }

  push(num: T): void {
    this.data.push(num);
    this.heapifyUp();
    if (this.getSize() > this.capacity) {
      this.pop();
    }
  }

  peek(): T {
    if (this.data.length) return this.data[0];
    return null
  }

  pop(): void {
    if (this.data.length === 0) return;
    this.data[0] = this.data.pop()!;
    this.heapifyDown();
  }

  heapifyUp(): void {
    let curr = this.getSize() - 1;
    let parent = this.getParent(curr);

    // while (this.data[parent] > this.data[curr]) {
    while (!this.comparator(this.data[parent], this.data[curr]) && parent !== curr) {
      this.swap(parent, curr);
      curr = parent;
      parent = this.getParent(curr);
    }
  }

  heapifyDown(): void {
    let curr = 0;
    const size = this.getSize();

    while (true) {
      const leftChild = this.getLeftChild(curr);
      const rightChild = this.getRightChild(curr);
      let smaller = curr;

    //   if (leftChild < size && this.data[leftChild] < this.data[smaller]) {
      if (leftChild < size && this.comparator(this.data[leftChild], this.data[smaller])) {
        smaller = leftChild;
      }

    //   if (rightChild < size && this.data[rightChild] < this.data[smaller]) {
      if (rightChild < size && this.comparator(this.data[rightChild], this.data[smaller])) {
        smaller = rightChild;
      }

      if (smaller !== curr) {
        this.swap(curr, smaller);
        curr = smaller;
      } else {
        break;
      }

    }
  }

  getParent(index: number): number {
    return Math.floor((index - 1) / 2) > 0 ? Math.floor((index - 1) / 2) : 0
  }

  getLeftChild(index: number): number {
    return (2 * index + 1)
  }

  getRightChild(index: number): number {
    return (2 * index + 2)
  }
}
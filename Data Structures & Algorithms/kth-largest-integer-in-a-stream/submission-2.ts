class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private heap: Heap;
    constructor(k: number, nums: number[]) {
        this.heap = new Heap(k);
        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val);
        return this.heap.peek();
    }
}

class Heap {
  private data: number[];

  constructor(private capacity: number){
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

  push(num: number): void {
    this.data.push(num);
    this.heapifyUp();
    if (this.getSize() > this.capacity) {
      this.pop();
    }
  }

  peek(): number {
    if (this.data.length) return this.data[0];
    return -1
  }

  pop(): void {
    if (this.data.length === 0) return;
    this.data[0] = this.data.pop()!;
    this.heapifyDown();
  }

  heapifyUp(): void {
    let curr = this.getSize() - 1;
    let parent = this.getParent(curr);

    while (this.data[parent] > this.data[curr]) {
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

      if (leftChild < size && this.data[leftChild] < this.data[smaller]) {
        smaller = leftChild;
      }

      if (rightChild < size && this.data[rightChild] < this.data[smaller]) {
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
    return Math.floor((index - 1) / 2)
  }

  getLeftChild(index: number): number {
    return (2 * index + 1)
  }

  getRightChild(index: number): number {
    return (2 * index + 2)
  }
}

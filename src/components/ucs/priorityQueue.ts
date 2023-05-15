export default class PriorityQueue<T> {
    private items: [T, number][] = [];
  
    constructor(private compareFn: (a: number, b: number) => number) {}
  
    enqueue(element: T, priority: number) {
      const item: [T, number] = [element, priority];
      let added = false;
  
      for (let i = 0; i < this.items.length; i++) {
        if (this.compareFn(priority, this.items[i][1]) < 0) {
          this.items.splice(i, 0, item);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.items.push(item);
      }
    }
  
    dequeue(): T | undefined {
      return this.items.shift()?.[0];
    }
  
    peek(): T | undefined {
      return this.items[0]?.[0];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  
    includes(element: T): boolean {
      return this.items.some((item) => item[0] === element);
    }
  
    updatePriority(element: T) {
      const index = this.items.findIndex((item) => item[0] === element);
  
      if (index !== -1) {
        const [, priority] = this.items[index];
        this.items.splice(index, 1);
        this.enqueue(element, priority);
      }
    }
  }
  
  
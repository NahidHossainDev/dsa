// let myLinkedList = {
//     head:{
//         value:10,
//         next:{    /// 1 current
//             value:15,
//             next:{
//                 value:16,
//                 next:{
//                 value:18,
//                 next: null
//                 }
//             }
//         }
//     }
// }

// 10 --> 15 --> 16

class LinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  insert(index, value) {
    let currentNode = this.head;
    let preNode = null;
    let count = 0;
    while (currentNode !== null && count <= index) {
      if (index === count) {
        let a = { ...currentNode };
        currentNode.value = value;
        currentNode.next = a;
      } else {
        currentNode = currentNode.next;
        preNode = currentNode;
      }
      count++;
    }
  }

  append(value) {
    const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newHead = { value, next: this.head };
    this.head = newHead;
    this.length++;
  }

  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);

console.log(myLinkedList.printList());
myLinkedList.insert(2, 12);
console.log(myLinkedList.printList());

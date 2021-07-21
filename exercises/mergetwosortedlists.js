// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2){
  let head = { val: -1, next: null}
  let result = head;

  let current_l1 = l1;
  let current_l2 = l2;

  while(current_l1 != null && current_l2 != null){
    if(current_l1.val <= current_l2.val){
      result.next = current_l1;
      current_l1 = current_l1.next;
    }
    else if(current_l1.val > current_l2.val){
      result.next = current_l2;;
      current_l2 = current_l2.next;
    }
    result = result.next;
  }
  result.next = current_l1 || current_l2;

  
  return head.next;
}
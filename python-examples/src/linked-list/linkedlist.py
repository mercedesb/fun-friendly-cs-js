#!/usr/bin/env python

"""
A linked list is an alternative implementation of a ordered list of elements.
Whereas an array often is a contiguous block of memory.

Typical array:

    [e, e, e, e, e, e, ...]

A linked list:

    [e, p] -> [e, p] -> [e, p] -> [e, p] -> ...

A linked list contains zero or more nodes. Each node holds a value and a
pointer (p) to the next element.

Both data structures serve the same purpose: holding a list of elements - but
they make different tradeoffs:

* A linked list allows to add and remove items at arbitrary positions more easily than an array. Do you see why?
* On the other hand, a linked list will consume a bit more memory, since we need to store the pointers for navigation.
* We cannot directly access an element in a linked list, we have to start at the beginning and walk the chain.

"""


class Node:
    """
    A node in a linked list. It contains the value and a pointer to the next
    node.
    """

    def __init__(self, value=None):
        self.value = value
        self.next = None


class LinkedList:
    """
    A linked list know mainly about its entry point, like the first node, or
    head. It may, for performance reasons keep track of the last element as
    well (otherwise, we would have to traverse the list anytime we want to
    append to it).
    """

    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, value):
        """
        Append a value to the end of the linked list.
        """
        node = Node(value=value)

        if self.head is None:
            self.head = node
            self.tail = node
        else:
            assert self.tail is not None
            self.tail.next = node
            self.tail = node

    def remove(self):
        """
        Shortcut for removeHead. It's an error, if remove is attempted on an
        empty list.
        """
        if self.head is None:
            # Why TypeError?
            # This exception may be raised by user code to indicate that an
            # attempted operation on an object is not supported, and is not
            # meant to be. -- https://docs.python.org/3/library/exceptions.html#TypeError
            raise TypeError("cannot remove from an empty list")

        return self.removeHead()

    def removeHead(self):
        """
        Removes the first element.
        """
        if self.head is None:
            raise TypeError("cannot remove from an empty list")

        removed = self.head
        self.head = self.head.next

        # If we do not have a head anymore, make sure, we reset tail, too.
        if self.head is None:
            self.tail = None

        return removed

    def removeTail(self):
        """
        Remove element from the end of the list.

        Here, we have to start at the beginning and visit each node.
        """
        if self.tail is None:
            raise TypeError("cannot remove from an empty list")

        current, previous = self.head, None
        while current.next is not None:
            previous, current = current, current.next

        # No iteration happened, only a single node left.
        if previous is None:
            self.head, self.tail = None, None
            return current
        else:
            removed = self.tail
            self.tail = previous
            self.tail.next = None

            return removed

    def insert(self, value, index):
        """
        Insert value at position given in index, which shall be zero-based. So
        for example: ll.insert("abc", 0) would prepend a node with value "abc"
        to the list.
        """
        if index < 0:
            # Here, ValueError is approriate. Raised when an operation or
            # function receives an argument that has the right type but an
            # inappropriate value. -- https://docs.python.org/3/library/exceptions.html#ValueError
            raise ValueError("index needs to be non-negative")

        node = Node(value=value)

        if index == 0:
            node.next = self.head
            self.head = node
            if self.head.next is None:
                self.tail = self.head
        else:
            current, previous, i = self.head, None, 0
            while current is not None and i < index:
                previous, current = current, current.next
                i += 1

            # Found where to insert node.
            if current is not None:
                previous.next = node
                node.next = current
            elif previous is self.tail:
                self.add(value)

        return node

    def values(self):
        current = self.head
        while current is not None:
            yield current
            current = current.next

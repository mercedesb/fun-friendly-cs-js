#!/usr/bin/env python

from linkedlist import *
import pytest

"""
Some tests for linked list example. Using pytest.
"""


def test_empty_node():
    node = Node()
    assert node.value is None
    assert node.next is None

def test_empty_list():
    ll = LinkedList()
    assert ll.head is None
    assert ll.tail is None

def test_add_one_element():
    ll = LinkedList()
    ll.add("abc")
    assert ll.head is not None
    assert ll.tail is not None
    assert ll.head is ll.tail
    assert ll.head.value == "abc"
    assert ll.head.next is None

def test_add_two_elements():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    assert ll.head is not None
    assert ll.tail is not None
    assert ll.head is not ll.tail
    assert ll.head.value == "abc"
    assert ll.tail.value == "123"
    assert ll.head.next is ll.tail
    assert ll.tail.next is None

def test_add_many_elements():
    ll = LinkedList()
    for i in range(100):
        ll.add("e-{}".format(i))
    assert ll.head is not None
    assert ll.tail is not None
    assert ll.head.value == "e-0"
    assert ll.tail.value == "e-99"
    assert len(list(ll.values())) == 100

def test_remove_one():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.remove() # Shortcut for removeHead.
    assert ll.head is ll.tail
    assert ll.head.value == "123"
    assert ll.head.next is None

def test_remove_all():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.remove()
    ll.remove()
    assert ll.head is None
    assert ll.tail is None

def test_remove_too_much():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.remove()
    ll.remove()

    with pytest.raises(TypeError):
        ll.remove()

def test_remove_tail():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.removeTail()

    assert ll.head is ll.tail
    assert ll.head.value == "abc"
    assert ll.head.next is None

def test_remove_tail():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.removeTail()

    assert ll.head is ll.tail
    assert ll.head.value == "abc"
    assert ll.head.next is None

def test_remove_tail_twice():
    ll = LinkedList()
    ll.add("abc")
    ll.add("123")
    ll.removeTail()
    ll.removeTail()

    with pytest.raises(TypeError):
        ll.remove()


def test_insert_into_empty_list():
    ll = LinkedList()
    ll.insert("abc", 0)
    assert ll.head is not None
    assert ll.tail is not None
    assert ll.head is ll.tail
    assert ll.head.value == "abc"
    assert ll.head.next is None

def test_insert_multiple_into_empty_list():
    ll = LinkedList()
    ll.insert("abc", 0)
    ll.insert("123", 1)
    assert ll.head is not None
    assert ll.tail is not None
    assert ll.head is not ll.tail
    assert ll.head.value == "abc"
    assert ll.tail.value == "123"
    assert ll.head.next is ll.tail

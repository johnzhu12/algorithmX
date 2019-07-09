#include <stdio.h>
#include <stdlib.h>
typedef int Status;
typedef int ElemType;
typedef struct LNode
{
    ElemType data;
    struct LNode *next;
} LNode;
typedef LNode *LinkList;

//初始化链表
Status InitList_L(LinkList *L)
{
    (*L) = (LinkList)malloc(sizeof(LNode));
    if (!(*L))
        exit(-1);
    (*L)->next = NULL;
    return 0;
}
//获取指定
Status GetElem_L(LinkList L, int i, ElemType *e)
{
    int j;
    LinkList p = L->next;

    j = 1;
    p = L->next;

    while (p && j < i) //p不为空且还未到达i处
    {
        j++;
        p = p->next;
    }

    if (!p || j > i) //第i个元素不存在
        return -1;

    *e = p->data;

    return 0;
}
/*════╗
║ 算法2.9║ 
╚════*/
Status ListInsert_L(LinkList L, int i, ElemType e)
{
    LinkList p, s;
    int j;

    p = L;
    j = 0;

    while (p && j < i - 1) //寻找第i-1个结点
    {
        p = p->next;
        ++j;
    }

    if (!p || j > i - 1)
        return -1;

    s = (LinkList)malloc(sizeof(LNode));
    if (!s)
        exit(-1);
    s->data = e;
    s->next = p->next;
    p->next = s;

    return 0;
}
/*═════╗
║ 算法2.10 ║ 
╚═════*/
Status ListDelete_L(LinkList L, int i, ElemType *e)
{
    LinkList pre, p;
    int j;
    pre = L;
    j = 1;
    while (pre->next && j < i) //寻找第i个结点，并令pre指向其前驱
    {
        pre = pre->next;
        ++j;
    }
    if (!pre->next || j > i) //删除位置不合理
        return -1;
    p = pre->next;
    pre->next = p->next;
    *e = p->data;
    free(p);
    return 0;
}

/* Function to reverse the linked list */
static void reverse(struct LNode **head_ref)
{
    struct LNode *prev = NULL;
    struct LNode *current = *head_ref;
    struct LNode *next = NULL;
    while (current != NULL)
    {
        // Store next
        next = current->next;

        // Reverse current node's pointer
        current->next = prev;

        // Move pointers one position ahead.
        prev = current;
        current = next;
    }
    *head_ref = prev;
}
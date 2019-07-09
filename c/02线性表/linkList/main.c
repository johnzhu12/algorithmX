#include <stdio.h>
#include "linkList.h"

int main(int argc, char **argv)
{
    LinkList L;
    int i;
    InitList_L(&L);
    for (i = 1; i <= 6; i++)
    {
        printf("at L position %d  \"%d\" inserted...\n", i, 2 * i);
        ListInsert_L(L, i, 2 * i);
    }
    printf("\n");
    reverse(&L->next);
    // LinkList p = L->next;
    // p = L->next;
    ElemType e;
    for (i = 1; i <= 6; i++)
    {
        GetElem_L(L, i, &e);

        printf("reverse L  \"%d\" ...", e);
        // p = p->next;
    }
}
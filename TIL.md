# CSS

1. 양쪽 마진을 동일하게 주고싶다면 일단 부모요소에 아래와 같이 설정.

```scss
.parent {
  display: flex; /* 부모를 flexible하게 다룰 준비를 시켜야함*/
  margin: 0 auto; /* 양쪽 마진을 일단 동일하게 줌 */
  .self:nth-child(1) {
    margin-right: auto; /* 이렇게 하면 해당요소의 오른쪽 마진이 채워질 수 있을때까지 채워져서 중간이 텅비는 효과를 낸다.*/
  }
}
```

# JS

1. sort는 본래 데이터를 manipulate한다. 그래서 본래 데이터를 보존하고 싶으면 spread syntax로 복사해놓고 sort하라

2. itemdisplay 기능을 handleItemList.js에서 관리하도록 하게 하기 위해서 조금 애를 썼다.

vue-click-outside
========================

1. 点击视图外关闭视图
2. 这是一个vue自定义指令，可适用于全局和局部


Installation
========================

```
npm install @jizhongce/vue-click-outside
```

使用 & 参数
========================

#### 全局引用

```
import ClickOutside from '@jizhongce/vue-click-outside'


vue.use(ClickOutside)
```


#### 局部引用

在想要使用的组件内加入

```
import { ClickOutside } from @jizhongce/vue-click-outside'

export default {
  directives: {
    ClickOutside
  }
}

```

#### 用法

```
v-click-outside="{closehandler: 'handlerfunction', excluderef: ['some-class-you-want-exclude']}"
```

*closehandler* 传入用于关闭视图的函数，*excluderef* 传入想要排除的元素的class，比如当点击一些button后不想关闭视图，那就把这些button的class带入


#### 例子

```
<el-card v-show="show" v-click-outside="{closehandler: 'closeCard', excluderef: ['DetailedPkgButton']}">
.......
</el-card>

export default {
    data() {
        show: true
    },
    methods:{
		test(val){
			console.log(val)
		},

		closeCard(){
			this.show = false
		},
    },
    directives: {
        ClickOutside
 	}

}
```

例子中当点击元素class中带有DetailedPkgButton的标识时将不会关闭对话框

License
========================

MIT
Copyright (c) 2019 Zhongce Ji


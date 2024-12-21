<template>
  <div>
    <a-divider>computed计算属性</a-divider>
    <a-input prefix="姓" v-model:value="firstName" />
    <a-input prefix="名" v-model:value="lastName" />
    <a-tag color="green">{{firstName}}-{{lastName}}</a-tag>
    <a-tag color="blue">{{fullName}}</a-tag>
    <a-divider>watch1监听ref定义的基本类型数据</a-divider>
    <a-tag color="red">当前人数{{peopleNum}}</a-tag>
    <a-button @click="addPeopleNum">增加1数</a-button>
    <a-divider>watch2监听对象属性变化</a-divider>
    <a-tag color="red">{{watchCar.brand}}</a-tag>
    <a-tag color="blue">{{watchCar.price}}</a-tag>
    <a-button type="primary" @click="changeCarBrand">更换汽车品牌</a-button>
    <a-button type="primary" @click="changeCarPrice">更换汽车价格</a-button>
    <a-button type="primary" @click="changeCar">更换汽车</a-button>
    <a-divider>watch3监听reactive对象变化</a-divider>
    <a-tag color="red">{{watchPC.brand}}</a-tag>
    <a-tag color="blue">{{watchPC.price}}</a-tag>
    <a-button type="primary" @click="changePCBrand">更换电脑品牌</a-button>
    <a-button type="primary" @click="changePCPrice">更换电脑价格</a-button>
    <a-button type="primary" @click="changePC">更换电脑</a-button>
    <a-divider>watch4监听嵌套对象变化</a-divider>
    <a-tag color="red">{{watchSchool.name}}</a-tag>
    <a-tag color="blue">{{watchSchool.age}}</a-tag>
    <a-tag color="green">{{watchSchool.class.name}}</a-tag>
    <a-tag color="red">{{watchSchool.class.level}}</a-tag>
    <a-tag color="yellow">{{watchSchool.class.student.name}}</a-tag>
    <a-tag color="red">{{watchSchool.class.student.home}}</a-tag>
    <a-button type="primary" @click="changeSchoolAge">更换学校校龄</a-button>
    <a-button type="primary" @click="changeSchoolName">更换学校名称</a-button>
    <a-button type="primary" @click="changeSchool">更换学校</a-button>
    <a-button type="primary" @click="changeSchoolClassName">更换班级名称</a-button>
    <a-button type="primary" @click="changeSchoolClassLevel">更换班级届别</a-button>
    <a-button type="primary" @click="changeSchoolClass">更换班级</a-button>
    <a-button type="primary" @click="changeSchoolStudentName">更换学生姓名</a-button>
    <a-button type="primary" @click="changeSchoolStudentHome">更换学生老家</a-button>
    <a-button type="primary" @click="changeSchoolStudent">更换学生</a-button>
    <a-divider>watchEffect监听对象属性变化</a-divider>
    <a-tag color="red">{{watchWetaher.temp}}</a-tag>
    <a-tag color="blue">{{watchWetaher.wind}}</a-tag>
    <a-button type="primary" @click="changeWetaherTemp">更换温度</a-button>
    <a-button type="primary" @click="changeWetaherWind">更换风速</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed,watch,reactive,watchEffect } from 'vue'

const firstName = ref('zhang')
const lastName = ref('san')
// 计算属性 有缓存 方法没有缓存 多处使用fullName 只计算一次
const fullName = computed(() => {
  console.log('计算属性执行了')
  return firstName.value.toUpperCase() + '-' + lastName.value
})

// watch1监听ref定义的基本类型数据
const peopleNum = ref(0)

function addPeopleNum() {
  peopleNum.value++
}
// 监听ref不需要.value
const stopWatch = watch(peopleNum, (newValue, oldValue) => {
  console.log('监听属性执行了')
  console.log(newValue)
  console.log(oldValue)
  // 当newValue>10时，解除监视
  if (newValue > 10) {
    stopWatch()
  }
})

// watch2监听对象属性变化
const watchCar = ref({
  brand: '奔驰',
  price: 100000
})

function changeCarBrand() {
  watchCar.value.brand = watchCar.value.brand+"1"
}

function changeCarPrice() {
  watchCar.value.price += 1000
}

function changeCar() {
  watchCar.value = {
    brand: '宝马',
    price: 200000
  }
}

watch(watchCar, (newValue, oldValue) => {
  console.log('监听对象属性变化')
  console.log(newValue)
  console.log(oldValue)
  // 如果要监视对象的属性的变化 需要使用deep:true 默认只有整个对象变化才会执行回调
  // immediate:true一加载先执行一次
},{deep:true,immediate:true})

// watch3监听reactive对象变化 默认开启深度监听 并且无法关闭
const watchPC = reactive({
  brand: '苹果',
  price: 10000
})

function changePCBrand() {
  watchPC.brand = watchPC.brand+"#"
}

function changePCPrice() {
  watchPC.price += 1000
}

function changePC() {
  Object.assign(watchPC,{
    brand: '华硕',
    price: 20000
  })
}

watch(watchPC, (newValue, oldValue) => {
  console.log('监听reactive对象变化')
  console.log(newValue)
  console.log(oldValue)

})

// watch4监听嵌套对象变化
const watchSchool = reactive({
  name: '清华大学',
  age: 100,
  class: {
    name: '计算机',
    level: '大一' ,
    student: {
      name: '张三',
      home: '北京'
    }
  }
})

function changeSchoolAge() {
  watchSchool.age += 1
}

function changeSchoolName() {
  watchSchool.name = watchSchool.name+"#"
}

function changeSchool() {
  Object.assign(watchSchool,{
    name: '北京大学',
    age: 200,
    class: {
      name: '物理',
      level: '大二' ,
      student: {
        name: '李四',
        home: '北京'
      }
    }
  })
}
function changeSchoolClass() {
  watchSchool.class = {
    name: '化学',
    level: '大二' ,
    student: {
      name: '赵力',
      home: '广东'
    }
  }
}

function changeSchoolClassName() {
  watchSchool.class.name = watchSchool.class.name+"*"
}

function changeSchoolClassLevel() {
  watchSchool.class.level = watchSchool.class.level+"￥"
}

function changeSchoolStudent() {
  watchSchool.class.student = {
    name: '王五',
    home: '上海'
  }
}

function changeSchoolStudentName() {
  watchSchool.class.student.name = watchSchool.class.student.name+"*"
}

function changeSchoolStudentHome() {
  watchSchool.class.student.home = watchSchool.class.student.home+"&"
}

// 只监听特定属性className 和 studentName
// 监听getter 默认监听watchScool、class、student等整个对象的变化 且无法关闭
watch(
  () => {
    return {
      className: watchSchool.class.name,
      studentName: watchSchool.class.student.name
        //  student: watchSchool.class.student // 默认开启
    }
  },
  (newValue, oldValue) => {
    console.log('监听嵌套对象变化')
    console.log(newValue)
    console.log(oldValue)
  }
)

// watchEffect监听对象属性变化 不需要指定监听的属性 会自动分析对象的属性变化
const watchWetaher = reactive({
  temp: 30,
  wind: 1
})
function changeWetaherTemp() {
  watchWetaher.temp += 10
}

function changeWetaherWind() {
  watchWetaher.wind = watchWetaher.wind+1
}

watchEffect(() => {
  console.log('watchEffect监听对象属性变化')
  console.log(watchWetaher.temp)
  console.log(watchWetaher.wind)
})
</script>

<template>
  <a-form>
    <a-divider>ref定义基本类型</a-divider>
    <a-button @click="changeLabel" type="primary">{{ label }},{{ count }}</a-button>
    <a-divider>ref定义对象</a-divider>
    <a-input v-model:value="person.name" ></a-input>
    <a-input v-model:value="person.age" ></a-input>
    <a-button @click="changePerson" type="primary">换人</a-button>
    <a-button @click="changePersonObj" type="primary">换整个人</a-button>
    <a-divider>reactive定义对象</a-divider>
    <a-input v-model:value="car.brand" ></a-input>
    <a-input v-model:value="car.price" ></a-input>
    <a-button @click="changeCar" type="primary">换车</a-button>
    <a-button @click="changeCarObj" type="primary">换整个车</a-button>
    <a-divider>reactive定义数组</a-divider>
    <a-select v-model:value="selectValue" :options="games" size="large" style="width: 200px" @change="changeSelectValue"></a-select>
    <a-button @click="changeGame" type="primary">换游戏</a-button>
    <a-divider>reactive嵌套对象</a-divider>
    <a-input v-model:value="man.address.country" ></a-input>
    <a-input v-model:value="man.address.city" ></a-input>
    <a-button @click="changeMan" type="primary">换人</a-button>
    <a-divider>reactive嵌套对象解构</a-divider>
    <a-input v-model:value="woman.womanAddress.city" ></a-input>
    <a-input v-model:value="woman.womanAddress.country" ></a-input>
    <a-input v-model:value="woman.womanName" ></a-input>
    <a-input v-model:value="woman.womanAge" ></a-input>
    <a-button @click="changeWoman" type="primary">解构对象赋值</a-button>
  </a-form>
</template>

<script lang="ts" setup>
  import { ref,reactive,toRefs } from 'vue'

  const label = ref('ref')
  let count = 0

  const person = ref({
    name: 'name',
    age: 18
  })
  let car = reactive({
    brand: '宝马',
    price: 100
  })
  const changeLabel = () => {
    label.value = 'change'
    count++
  }

  const changePerson = () => {
    person.value.name = 'name3'+ count
    person.value.age++
  }

  const changePersonObj = () => {
    person.value = {
      name: 'name4'+count,
      age: 20
    }
  }

  const changeCar = () => {
    car.brand = '奔驰'+car.price
    car.price++
  }

  const changeCarObj = () => {

    const car1 = {
      brand: '劳斯莱斯',
      price: 2000
    }
    // 整个对象替换 会失去响应式
    // car = car1
    // 浅拷贝
    Object.assign(car, car1)
  }

  const games = ref([
    { label: 'LOL', value: 'lol' },
    { label: 'DNF', value: 'dnf' },
    { label: 'CSGO', value: 'csgo' }
  ])
  const selectValue = ref('lol')

  const changeSelectValue = (value) => {
    console.log(value)
  }

  const changeGame = () => {
    games.value = [
      { label: 'LOL', value: 'lol' },
      { label: 'DNF', value: 'dnf' },
      { label: 'CSGO', value: 'csgo' },
      { label: 'NF', value: 'nf' }
    ]
    selectValue.value = 'nf'
  }

  // reactive 复杂嵌套对象
  const man = reactive({
    name: 'name',
    age: 18,
    address: {
      city: '美国',
      country: '洛杉矶'
    }
  })

  const changeMan = () => {
    man.address.country = '中国'
    man.address.city = '深圳'
  }

  // reactive 嵌套对象
  const woman = reactive({
    womanName: 'name',
    womanAge: 18,
    womanAddress: {
      city: '美国',
      country: '洛杉矶'
    }
  })
// 解构 单属性会失去响应式
//  let { womanAddress,womanName,womanAge } = woman
//  let { country,city} = womanAddress
 // 恢复响应式
  const { womanAddress,womanName,womanAge } = toRefs(woman)
 const { country,city} = toRefs(womanAddress.value)




const changeWoman = () => {
    // womanAddress 还有响应式
    // womanAddress.country = '德国'
    // womanAddress.city = '汉堡'

    // 失去响应式
    // womanName = 'name1'
    // womanAge = 20
    // country= '中国11'
    // city = '上海22'

    // 恢复响应式 后变成ref 对象需要加.value
    womanName.value = 'name1'
    womanAge.value = 20
    country.value = '中国11'
    city.value = '上海22'


    console.log(womanName)
    console.log(womanAge)
    console.log(country)
    console.log(city)
  }
</script>

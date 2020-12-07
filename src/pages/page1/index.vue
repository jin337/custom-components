<template>
  <div>
    <form-module :config="formTemp" v-model="fromData" :width="120">
      <template slot="name13" slot-scope="{data}">
        {{data.name13}}
        <el-button type="primary" @click="(data)">新增</el-button>
      </template>
      <template slot-scope="{data}">
        <el-button type="primary" @click="getData(data)">提交</el-button>
      </template>
    </form-module>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      formTemp: [
        {
          label: '文本',
          key: 'name1',
          type: 'input'
        },
        {
          label: '文本域',
          key: 'name2',
          type: 'textarea'
        },
        {
          label: '数值',
          key: 'name3',
          type: 'number'
        },
        {
          label: '日期',
          key: 'name4',
          type: 'data'
        },
        {
          label: '日期+时间',
          key: 'name5',
          type: 'datetime'
        },
        {
          label: '时间段',
          key: 'name6',
          type: 'datepicker'
        },
        {
          label: '多选',
          key: 'name7',
          type: 'checkbox',
          options: [
            {
              label: '选项1',
              key: 1
            },
            {
              label: '选项2',
              key: 2
            },
            {
              label: '选项3',
              key: 3
            }
          ]
        },
        {
          label: '单选',
          key: 'name8',
          type: 'radio',
          options: [
            {
              label: '选项1',
              key: 1
            },
            {
              label: '选项2',
              key: 2
            },
            {
              label: '选项3',
              key: 3
            }
          ]
        },
        {
          label: '选择器',
          key: 'name9',
          type: 'select',
          options: [
            {
              label: '选项1',
              key: 1
            },
            {
              label: '选项2',
              key: 2
            },
            {
              label: '选项3',
              key: 3
            }
          ]
        },
        {
          label: '选择器+多选',
          key: 'name10',
          type: 'select-multiple',
          options: [
            {
              label: '选项1',
              key: 1
            },
            {
              label: '选项2',
              key: 2
            },
            {
              label: '选项3',
              key: 3
            }
          ]
        },
        {
          label: '选择器+练级',
          key: 'name11',
          type: 'select-cascader',
          options: [
            {
              label: '选项1',
              key: 1
            },
            {
              label: '选项2',
              key: 2
            },
            {
              label: '选项3',
              key: 3
            }
          ]
        },
        {
          label: '累加',
          key: 'name12',
          type: 'add'
        },
        {
          label: '其他',
          key: 'name13',
          type: 'other'
        }
      ],
      fromData: {}
    }
  },
  methods: {
    getData (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

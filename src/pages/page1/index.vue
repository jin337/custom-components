<template>
  <div>
    <form-module :config="formTemp" v-model="fromData" :width="120">
      <template slot="name13" slot-scope="{data}">
        <el-button size="small" @click="openDialog">编辑</el-button>
        <el-table :data="data.name13" border style="margin-top:10px">
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>
      <template slot-scope="{data}">
        <el-button type="primary" @click="getData(data)">提交</el-button>
      </template>
    </form-module>

    <el-dialog :visible.sync="showDialog" width="60%">
      <form-module :config="dialogTemp" v-model="dialogData" :width="120">
        <template slot="name3" slot-scope="{data}">{{convertData(data,'name3')}}</template>
        <template slot-scope="{data}">
          <el-button type="primary" @click="getDialogData(data)">提交</el-button>
        </template>
      </form-module>
    </el-dialog>
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
      fromData: {},

      showDialog: false,
      dialogTemp: [
        {
          label: '颜色',
          key: 'name1',
          type: 'checkbox',
          options: [
            {
              label: '颜色1',
              key: 1
            },
            {
              label: '颜色2',
              key: 2
            },
            {
              label: '颜色3',
              key: 3
            }
          ]
        },
        {
          label: '尺码',
          key: 'name2',
          type: 'checkbox',
          options: [
            {
              label: '尺码1',
              key: 1
            },
            {
              label: '尺码2',
              key: 2
            },
            {
              label: '尺码3',
              key: 3
            }
          ]
        },
        {
          label: '其他',
          key: 'name3',
          type: 'other'
        }
      ],
      dialogData: {}
    }
  },
  methods: {
    getData (data) {
      console.log(data)
    },
    openDialog () {
      this.showDialog = true
    },
    getDialogData (data) {
      console.log(data)
    },
    convertData (data, name) {
      const newData = []
      for (const [key, value] of Object.entries(data)) {
        if (key !== name) {
          console.log(value)
        }
      }
      return newData
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

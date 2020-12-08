<template>
  <el-form size="small" :model="formData" :label-width="width+'px'">
    <el-form-item :style="widthStyle" v-for="item in formTemp" :key="item.key" :label="item.label" :required="item.required">
      <!-- 文本 -->
      <template v-if="item.type === 'input'">
        <el-input v-model="formData[item.key]" :disabled="show"></el-input>
      </template>

      <!-- 文本域 -->
      <template v-if="item.type === 'textarea'">
        <el-input type="textarea" :rows="4" v-model="formData[item.key]" :disabled="show"></el-input>
      </template>

      <!-- 数值 -->
      <template v-if="item.type === 'number'">
        <el-input-number class="item-all" v-model="formData[item.key]" controls-position="right" :disabled="show"></el-input-number>
      </template>

      <!-- 日期 -->
      <template v-if="item.type === 'data'">
        <el-date-picker class="item-all" v-model="formData[item.key]" type="date" value-format="yyyy-MM-dd" :disabled="show" @blur="changeDate(item.key,formData[item.key])"></el-date-picker>
      </template>

      <!-- 日期+时间 -->
      <template v-if="item.type === 'datetime'">
        <el-date-picker class="item-all" v-model="formData[item.key]" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" :disabled="show" @blur="changeDate(item.key,formData[item.key])"></el-date-picker>
      </template>

      <!-- 时间段 -->
      <div class="datepicker" v-if="item.type === 'datepicker'">
        <el-date-picker v-model="datepicker.start" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" :disabled="show" @blur="changeDate(item.key,datepicker.start,'start')"></el-date-picker>
        <span> - </span>
        <el-date-picker v-model="datepicker.end" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" :disabled="show" @blur="changeDate(item.key,datepicker.end,'end')"></el-date-picker>
      </div>

      <!-- 多选 -->
      <template v-if="item.type === 'checkbox'">
        <el-checkbox-group v-model="formData[item.key]" :disabled="show" @change="changeCheckbox($event,item)">
          <el-checkbox v-for="li in item.options" :key="li.key" :label="li.key">{{li.label}}</el-checkbox>
        </el-checkbox-group>
      </template>

      <!-- 单选 -->
      <template v-if="item.type === 'radio'">
        <el-radio-group v-model="formData[item.key]" :disabled="show" @change="changeRadio($event,item)">
          <el-radio v-for="li in item.options" :key="li.key" :label="li.key">{{li.label}}</el-radio>
        </el-radio-group>
      </template>

      <!-- 选择器 -->
      <template v-if="item.type === 'select'">
        <el-select class="item-all" v-model="formData[item.key]" :disabled="show" value-key="key">
          <el-option v-for="li in item.options" :key="li.key" :label="li.label" :value="li"></el-option>
        </el-select>
      </template>

      <!-- 选择器+多选 -->
      <template v-if="item.type === 'select-multiple'">
        <el-select multiple collapse-tags class="item-all" v-model="formData[item.key]" :disabled="show" value-key="key">
          <el-option v-for="li in item.options" :key="li.key" :label="li.label" :value="li"></el-option>
        </el-select>
      </template>

      <!-- 选择器+默认 -->
      <template v-if="item.type === 'select-cascader'">
        <el-select multiple collapse-tags class="item-all" v-model="formData[item.key]" :disabled="show" value-key="key">
          <el-option v-for="li in item.options" :key="li.key" :label="li.label" :value="li"></el-option>
        </el-select>
        <div class="is-default">
          <div class="label">选择默认值</div>
          <el-select class="item-all" v-model="isDefault" :disabled="show" value-key="key" @change="changeDefault($event,item.key)">
            <el-option v-for="li in formData[item.key]" :key="li.key" :label="li.label" :value="li"></el-option>
          </el-select>
        </div>
      </template>

      <!-- 累加 -->
      <template v-if="item.type === 'add'">
        <el-tag :key="li.value" v-for="li in addList">{{li.value}}</el-tag>
        <el-input class="input-new-tag" v-if="addInputVisible" v-model="addInput" ref="saveAddInput" @keyup.enter.native="addSubmit(item.key)" @blur="addSubmit(item.key)">
        </el-input>
        <el-button v-else class="button-new-tag" icon="el-icon-plus" @click="showInput">添加</el-button>
      </template>

      <!-- 上传图片 -->
      <template v-if="item.type === 'upload'">
        <div class="upload-show" v-if="show">
          <div v-for="pic in fileList" :key="pic">
            <el-image style="width: 100px; height: 100px" :src="pic" fit="contain"></el-image>
          </div>
          <div class="pic-none" v-if="!fileList.length">
            <i class="el-icon-hot-water"></i>
            <span>暂无图片</span>
          </div>
        </div>
        <el-upload :action="item.upload.action" :headers="item.upload.headers" :limit="item.upload.limit" :data="item.upload.data" :on-change="changeUpload" :on-remove="removeUpload" :file-list="fileList" list-type="picture" v-else>
          <el-button size="small" icon="el-icon-upload">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传上传图片文件，且文件名称不能包含符号</div>
        </el-upload>
      </template>
    </el-form-item>

    <el-form-item v-if="!show">
      <slot :data="transData(formData)"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'form-module',
  props: {
    // 模板
    temp: {
      type: Array,
      required: true
    },
    // 填写的数据
    data: {
      type: Object,
      required: true
    },
    // label宽度
    width: {
      type: Number,
      required: true
    },
    // 是否显示slot
    show: {
      type: Boolean
    },
    // 一行显示多少个元素
    row: {
      type: Number
    }
  },
  data () {
    return {
      formData: {},
      // 时间段
      datepicker: {},
      // 选择器+默认
      isDefault: {},
      // 累加
      addList: [],
      addInputVisible: false,
      addInput: '',
      // 上传
      fileList: []
    }
  },
  computed: {
    formTemp: {
      get () {
        const config = JSON.parse(JSON.stringify(this.temp))
        const data = JSON.parse(JSON.stringify(this.data))

        const arrList = ['checkbox', 'select-multiple', 'datepicker']

        for (let i = 0; i < config.length; i++) {
          const element = config[i]
          // data为空时
          if (!data[element.key]) {
            data[element.key] = ''
            arrList.forEach(name => {
              if (element.type == name) {
                data[element.key] = []
              }
            })
          }
        }
        this.formData = data
        return config
      },
      set () { }
    },
    // 计算宽度
    widthStyle () {
      const style = {}
      if (this.row) {
        style.width = 100 / this.row + '%'
      }
      return style
    }
  },
  created () {
    this.datepicker = {}
  },
  methods: {
    // 监控-时间选择
    changeDate (name, key, id) {
      if (id) {
        this.formData[name] = [this.datepicker.start, this.datepicker.end]
      } else {
        this.formData[name] = key
      }
      this.$forceUpdate()
    },
    // 监控-选择器+默认
    changeDefault (item, name) {
      const list = this.formData[name]
      list.forEach(element => {
        if (element.key === item.key) {
          element.isDefault = true
        } else {
          element.isDefault = false
        }
      })
    },
    // 监控单选
    changeRadio (key, data) {
      let selectRadio = {}
      data.options.forEach(element => {
        if (element.key === key) {
          selectRadio = element
        }
      })
      const newName = data.key + '_value'
      this.formData[newName] = selectRadio
    },
    // 监控多选
    changeCheckbox (key, data) {
      const selectList = []
      data.options.forEach(element => {
        key.forEach(ke => {
          if (element.key === ke) {
            selectList.push(element)
          }
        })
      })
      const newName = data.key + '_value'
      this.formData[newName] = selectList
    },
    // 累加-输入
    showInput () {
      this.addInputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveAddInput[0].$refs.input.focus()
      })
    },
    // 累加-确定
    addSubmit (name) {
      const addInput = this.addInput
      if (addInput) {
        this.addList.push({
          value: addInput
        })
      }
      this.addInputVisible = false
      this.addInput = ''
      this.formData[name] = this.addList
    },
    // 监控文件上传
    changeUpload (file, fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i]
        if (element.response) {
          element.url = element.response.data.targetAddr
        }
      }
      this.fileList = fileList
    },
    // 文件列表移除文件
    removeUpload (file, fileList) {
      this.fileList = fileList
    },
    // 转换数据
    transData (data) {
      const newData = {}
      for (const [key, value] of Object.entries(data)) {
        let newKey = null
        if (key.includes('_value')) {
          newKey = key.slice(0, -6)
          newData[newKey] = JSON.parse(JSON.stringify(value))
        } else {
          newData[key] = JSON.parse(JSON.stringify(value))
        }
      }
      return newData
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.el-form-item {
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.datepicker {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .el-input {
    width: 48%;
  }
}
.item-all {
  width: 100%;
}

.is-default {
  display: flex;
  flex-direction: row;
  margin-top: 18px;
  .label {
    white-space: nowrap;
    margin-right: 12px;
  }
}

.el-tag {
  margin-right: 10px;
}
.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  vertical-align: bottom;
}
</style>

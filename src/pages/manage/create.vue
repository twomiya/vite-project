<template>
  <div style="padding: 20px">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <tinymce v-model="ruleForm.content" :height="300" />
        <!-- <el-input v-model="ruleForm.content"></el-input> -->
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >发布</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Tinymce from "../../components/Tinymce/index.vue";

export default {
  components: {
    Tinymce,
  },
  setup() {
    const state = reactive({
      count: 0,
      ruleForm: {
        title: "",
        content: "",
      },
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        content: [
          { required: true, message: "请输入文章内容", trigger: "blur" },
        ],
      },
    });
    const submitForm = (formName) => {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const resetForm = (formName) => {
      this.$refs[formName].resetFields();
    };

    return {
      ...toRefs(state),
      submitForm,
      resetForm,
    };
  },
};
</script>

<style lang="scss" scoped></style>

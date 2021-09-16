<template>
  <div style="padding: 20px">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="createForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <tinymce
          v-model="ruleForm.content"
          :height="300"
          :value="ruleForm.content"
          @input="handleChange"
        />
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
import { reactive, toRefs, ref } from "vue";
import Tinymce from "../../components/Tinymce/index.vue";
import { createArticle } from "../../api/main";

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
    const handleChange = (value) => {
      state.ruleForm.content = value;
    };
    const createForm = ref(null);
    const submitForm = (formName) => {
      console.log(state.ruleForm);
      createForm.value.validate((valid) => {
        if (valid) {
          const data = {
            title: state.ruleForm.title,
            content: state.ruleForm.content,
          };
          console.log(data);
          createArticle(data).then((res) => {
            console.log(res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const resetForm = (formName) => {
      createForm.value.resetFields();
    };

    return {
      ...toRefs(state),
      handleChange,
      createForm,
      submitForm,
      resetForm,
    };
  },
};
</script>

<style lang="scss" scoped></style>

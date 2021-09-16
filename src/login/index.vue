<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForms"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import { login } from "../api/main";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      count: 0,
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 9,
            message: "长度在 6 到 9 个字符",
            trigger: "blur",
          },
        ],
      },
    });
    const ruleForms = ref();
    const router = useRouter();
    onMounted(() => {
      console.log(ruleForms);
    });
    const submitForm = (formName) => {
      ruleForms.value.validate((valid) => {
        if (valid) {
          const data = {
            username: state.ruleForm.name,
            password: state.ruleForm.password,
          };
          login(data).then((res) => {
            localStorage.setItem("token", res.data.data.token);
            console.log(res.data.data);
            router.push("/dashboard");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const resetForm = (formName) => {
      ruleForms.value.resetFields();
    };

    return {
      ...toRefs(state),
      ruleForms,
      submitForm,
      resetForm,
    };
  },
};
</script>

<style lang="scss" scoped></style>

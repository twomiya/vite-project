<template>
  <div style="padding: 20px">
    <el-row class="second-row">
      <el-col :span="24">
        <div class="card-info">
          <el-card class="box-card">
            <div class="card-box">
              <div class="image">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  alt=""
                />
              </div>
              <div class="content">
                <h1>title</h1>
                <div>content</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="card-info">
          <el-card class="box-card">
            <div class="card-box">
              <div class="image">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  alt=""
                />
              </div>
              <div class="content">
                <h1>title</h1>
                <div>content</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="card-info">
          <el-card class="box-card">
            <div class="card-box">
              <div class="image">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  alt=""
                />
              </div>
              <div class="content">
                <h1>title</h1>
                <div>content</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.second-row {
  .el-col {
    margin-bottom: 20px;
    .card-info {
      width: 100%;
      .card-box {
        display: flex;
        .image {
          width: 120px;
          height: 120px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

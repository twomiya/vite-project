<template>
  <div>
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-people">
            <i class="el-icon-user-solid"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">New Visits</div>
            <count-to
              :start-val="0"
              :end-val="102400"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('messages')">
          <div class="card-panel-icon-wrapper icon-message">
            <i class="el-icon-chat-dot-square"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Messages</div>
            <count-to
              :start-val="0"
              :end-val="81212"
              :duration="3000"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('purchases')">
          <div class="card-panel-icon-wrapper icon-money">
            <i class="el-icon-goods"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Purchases</div>
            <count-to
              :start-val="0"
              :end-val="9280"
              :duration="3200"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('shoppings')">
          <div class="card-panel-icon-wrapper icon-shopping">
            <i class="el-icon-shopping-cart-full"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">Shoppings</div>
            <count-to
              :start-val="0"
              :end-val="13600"
              :duration="3600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="second-row">
      <el-col :span="24" v-for="item in articleList" :key="item.id">
        <div class="card-info">
          <el-card class="box-card">
            <div class="card-box">
              <div class="image">
                <img :src="item.image" alt="item.image" />
              </div>
              <div class="content">
                <h1>{{ item.title }}</h1>
                <div>{{ item.content }}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import CountTo from "../../components/VueCountTo/vue-countTo.vue";
import { getList } from "../../api/main";
import _ from "lodash";
export default {
  components: {
    CountTo,
  },
  setup() {
    const state = reactive({
      count: 0,
      articleList: [],
    });
    const handleSetLineChartData = () => {};
    const getArticleList = () => {
      getList().then((res) => {
        state.articleList = _.get(res, "data.list", []);
      });
    };
    onMounted(() => {
      getArticleList();
    });
    return {
      ...toRefs(state),
      handleSetLineChartData,
      getArticleList,
    };
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      i {
        float: left;
        font-size: 48px;
      }
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
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

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>

<template>
  <div id="app">
    <div class="top">
      <h1>S-UI</h1>
      <p>
        一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
        <s-icon
          fontSize="26px"
          style="color: red; margn-right: 10px"
          icon="icon-cuo"
        ></s-icon>
      </p>
      <p>
        用于学习和交流！<s-icon
          fontSize="26px"
          style="color: green; margn-right: 10px"
          icon="icon-duigou"
        ></s-icon>
      </p>
    </div>
    <h2>Button</h2>
    <div class="btn">
      <s-button>默认按钮</s-button>
      <s-button type="primary" @click="handleClick('1')"
        >默认按钮__点击</s-button
      >
      <s-button type="warning">警告按钮</s-button>
      <s-button type="success">成功按钮</s-button>
      <s-button type="danger">危险按钮</s-button>
      <s-button icon="icon-xiazai" type="info">其他按钮</s-button>
      <s-button type="success" icon="icon-sousuo">搜索</s-button>
      <s-button type="danger" :loading="true">加载按钮</s-button>
    </div>
    <div>
      <s-button-group>
        <s-button icon="icon-jiantouarrowhead7">上一页</s-button>
        <s-button icon="icon-jiantouyou" iconPosition="right">下一页</s-button>
      </s-button-group>
    </div>
    <h2>Icon</h2>
    <div class="icon">
      <s-icon fontSize="26px" icon="icon-xiazai"></s-icon>
      <s-icon fontSize="26px" icon="icon-sousuo"></s-icon>
      <s-icon fontSize="26px" icon="icon-cuo"></s-icon>
      <s-icon fontSize="26px" icon="icon-duigou"></s-icon>
      <s-icon fontSize="26px" icon="icon-xiazai"></s-icon>
      <s-icon fontSize="26px" icon="icon-sousuo"></s-icon>
      <s-icon fontSize="26px" icon="icon-cuo"></s-icon>
      <s-icon fontSize="26px" icon="icon-xiazai"></s-icon>
      <s-icon fontSize="26px" icon="icon-yanjing"></s-icon>
      <s-icon fontSize="26px" icon="icon-touxiang"></s-icon>
      <s-icon fontSize="26px" icon="icon-mima"></s-icon>
      <s-icon fontSize="26px" icon="icon-youxiang"></s-icon>
      <s-icon fontSize="26px" icon="icon-jianshao"></s-icon>
      <s-icon fontSize="26px" icon="icon-jiantouyou"></s-icon>
      <s-icon fontSize="26px" icon="icon-sousuo"></s-icon>
      <s-icon fontSize="26px" icon="icon-zengjia"></s-icon>
      <s-icon fontSize="26px" icon="icon-bianji"></s-icon>
      <s-icon fontSize="26px" icon="icon-touxiang"></s-icon>
      <s-icon fontSize="26px" icon="icon-fenxiang"></s-icon>
      <s-icon fontSize="26px" icon="icon-shezhi"></s-icon>
      <s-icon fontSize="26px" icon="icon-lingdang"></s-icon>
      <s-icon fontSize="26px" icon="icon-shanchu"></s-icon>
      <s-icon fontSize="26px" icon="icon-home"></s-icon>
    </div>
    <h2>
      对echarts进行简单封装 只需传入配置即可 不需要手动实例 配置参考echarts官网
    </h2>
    <s-row>
      <s-col :span="8">
        <s-echarts width="100%" height="300px" :options="op1"></s-echarts>
      </s-col>
      <s-col :span="8">
        <s-echarts width="100%" height="300px" :options="op2"></s-echarts>
      </s-col>
      <s-col :span="8">
        <s-echarts width="100%" height="300px" :options="op3"></s-echarts>
      </s-col>
    </s-row>
    <h2>Input</h2>
    <!-- input -->
    <div>
      <s-input v-model="a" placeholder="用户名" />
      <s-input v-model="b" type="password" placeholder="密码" />
      <s-input v-model="c" disabled placeholder="禁用" />
      <s-input v-model="d" clearable />
      <s-input
        v-model="e"
        type="password"
        showPassword
        placeholder="可查看密码"
      />
      <s-input placeholder="带图标" prefixIcon="icon-bianji" />
      <s-input placeholder="带图标" suffixIcon="icon-bianji" />
    </div>
    <div class="lay">
      <h2>Layout</h2>
      <s-row>
        <s-col :span="24">
          <div class="r"></div>
        </s-col>
      </s-row>
      <!--  -->
      <s-row>
        <s-col :span="12">
          <div class="r"></div>
        </s-col>
        <s-col :span="12">
          <div class="g"></div>
        </s-col>
      </s-row>
      <!--  -->
      <s-row>
        <s-col :span="8">
          <div class="r"></div>
        </s-col>
        <s-col :span="8">
          <div class="g"></div>
        </s-col>
        <s-col :span="8">
          <div class="b"></div>
        </s-col>
      </s-row>
      <!--  -->
      <s-row>
        <s-col :span="4">
          <div class="r"></div>
        </s-col>
        <s-col :span="4">
          <div class="b"></div>
        </s-col>
        <s-col :span="4">
          <div class="g"></div>
        </s-col>
        <s-col :span="4">
          <div class="r"></div>
        </s-col>
        <s-col :span="4">
          <div class="b"></div>
        </s-col>
        <s-col :span="4">
          <div class="g"></div>
        </s-col>
      </s-row>
      <!--  -->
      <s-row>
        <s-col :span="6">
          <div class="r"></div>
        </s-col>
        <s-col :offset="12" :span="6">
          <div class="r"></div>
        </s-col>
      </s-row>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      a: "普通输入框",
      b: "password",
      c: "禁用",
      d: "可以清空",
      e: "123456",
      op1: {
        color: ["#409eff"],
        title: {
          text: "Vue中ECharts组建",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      op2: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
      op3: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    handleClick(index) {
      alert(index);
    },
  },
};
</script>

<style lang="scss">
.s-button,
.s-icon,
.s-input {
  margin-right: 18px;
}
// .s-icon{
//   margin-right: 36px;
// }
.top {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top h1 {
  height: 48px;
  text-align: center;
  font-size: 34px;
  line-height: 48px;
  color: #555;
  margin-top: 25px;
}
.top p {
  height: 28ox;
  font-size: 18px;
  line-height: 28px;
  color: #888;
}
h2 {
  margin: 40px 10px;
  padding: 0 8px;
  border-left: 6px solid #409eff;
}
.r {
  background-color: #99a9bf;
  height: 40px;
}
.b {
  background-color: #d3dce6;
  height: 40px;
}
.g {
  background-color: #e5e9f2;
  height: 40px;
}
</style>


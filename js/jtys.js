var statisticsEcharts = echarts.init($('.statistics .inner .bar')[0])
var analysisEcharts = echarts.init($('.analysis .inner .bar')[0])
var crowdEcharts = echarts.init($('.crowd .inner .bar')[0])
var serviceEcharts = echarts.init($('.service .inner .bar')[0])


var myechartsOne = echarts.init($('.hygiene .wrap')[0])
var myechartsTwo = echarts.init($('.hygiene .wrap')[1])
var myechartsThree = echarts.init($('.hygiene .wrap')[2])
var myechartsFour = echarts.init($('.hygiene .wrap')[3])


var optionStatistics = {
  // 应用访问趋势
  grid: {
    left: '0%',
    right: '12%',
    bottom: '5%',
    top: '5%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['居民主动签约人数', '重点人群签约人数', '签约居民数', '常住人口数'],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#a8c8f6'
      }
    },
    axisLine: { //y轴
      show: false
    },
  },
  series: [
    {
      name: 'TOP',
      label: {
        show: true,
        position: 'right',
        formatter: function (num) {
          if (num.value > 0) {
            return num.value;
          } else {
            return '';
          }
        }
      },
      barWidth: 20,
      type: 'bar',
      data: [26543, 160594, 247256, 463244],
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = ['#57d3b4', '#c49dfd', '#d9b65a', '#438fe0',];
            return colorList[params.dataIndex]
          }
        }
      },
    },
  ]
}
var optionAnalysis = {
  // 签约质量分析
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2', '2020.1', '2019.12', '2019.11', '2019.10'],
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
      formatter: function (num) {
        return num + '%';
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  series: [{
    name: '签约率',
    data: [53, 54, 55, 51, 56, 62, 55,],
    type: 'line',
    itemStyle: {
      color: '#ffa222'  // 线颜色
    }
  }, {
    name: '重点人群签约率',
    data: [70, 78, 79, 81, 68, 72, 74,],
    type: 'line',
    itemStyle: {
      color: '#edafee'  // 线颜色
    }
  }, {
    name: '履约率',
    data: [100, 100, 100, 100, 100, 100, 100,],
    type: 'line',
    itemStyle: {
      color: '#5496d4'  // 线颜色
    }
  }]
}
var optionCrowd = {
  // 工具提示
  tooltip: {
    // 触发类型  经过轴触发axis  经过轴触发item
    trigger: 'item',
    // 轴触发提示才有效
    axisPointer: {
      // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
      type: 'shadow'
    }
  },
  // 图表边界控制
  grid: {
    // 距离 上右下左 的距离
    left: '0',
    right: '3%',
    bottom: '3%',
    top: '5%',
    // 大小是否包含文本【类似于boxsizing】
    containLabel: true,
    //显示边框
    show: true,
    //边框颜色
    borderColor: 'rgba(0, 240, 255, 0.3)'
  },
  // 控制x轴
  xAxis: [
    {
      // 使用类目，必须有data属性
      type: 'category',
      // 使用 data 中的数据设为刻度文字
      data: ['65岁以上老年人', '0-6岁儿童', '孕产妇', '高血压患者', '糖尿病患者', '精神病患者', '肺结核患者', '残疾人', '计生特殊家庭', '困难人群'],
      // 刻度设置
      axisTick: {
        // true意思：图形在刻度中间
        // false意思：图形在刻度之间
        alignWithLabel: false,
        show: false
      },
      //文字
      axisLabel: {
        color: '#4c9bfd',
        interval: 0,
        rotate: 50,
      }
    }
  ],
  // 控制y轴
  yAxis: [
    {
      // 使用数据的值设为刻度文字
      type: 'value',
      axisTick: {
        // true意思：图形在刻度中间
        // false意思：图形在刻度之间
        alignWithLabel: false,
        show: false
      },
      //文字
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 240, 255, 0.3)'
        }
      },
    }
  ],
  // 控制x轴
  series: [
    {
      // series配置
      // 颜色
      itemStyle: {
        // 提供的工具函数生成渐变颜色
        color: new echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0, 0, 0, 1,
          [
            { offset: 0, color: '#00fffb' }, // 0 起始颜色
            { offset: 1, color: '#0061ce' }  // 1 结束颜色
          ]
        )
      },
      // 图表数据名称
      name: '重点人群档案管理情况',
      // 图表类型
      type: 'bar',
      // 柱子宽度
      barWidth: '60%',
      // 数据
      data: [39845, 33225, 5484, 2610, 917, 0, 4, 0, 0, 0]
    }
  ]
}
var optionService = {
  // 基本医疗服务
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{a}<br/>{b}: {c}' + '万人'
  },
  xAxis: {
    type: 'category',
    data: ['5.15', '5.14', '5.13', '5.12', '5.11', '5.10', '5.09', '5.08', '5.07', '5.06', '5.05', '5.04',],
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
      formatter: function (num) {
        return num + '人';
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
    name: '就诊人次',
    data: [11, 15, 25, 20, 21, 11, 5, 16, 25, 27, 8, 13],
    type: 'line',
    itemStyle: {
      normal: {
        color: '#57d3b4' // 颜色
      }
    },
  }]
}



var optionOne = {
  title: {
    text: '个人档案建\r\n\r\n' + '档占比',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '97.6%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2.4, name: '1' },
        { value: 97.6, name: '2' },
      ],
      color: ['#1869ad', '#fdf090']
    }
  ]
};
var optionTwo = {
  title: {
    text: '合格档案率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '99.91%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 0.09, name: '1' },
        { value: 99.91, name: '2' },
      ],
      color: ['#1869ad', '#239ff9']
    }
  ]
};
var optionThree = {
  title: {
    text: '家庭建档率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '56.01%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 43.99, name: '1' },
        { value: 56.01, name: '2' },
      ],
      color: ['#1869ad', '#37c4ad']
    }
  ]
};
var optionFour = {
  title: {
    text: '规范档案率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '99.97%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 0.03, name: '1' },
        { value: 99.97, name: '2' },
      ],
      color: ['#1869ad', '#9c8be5']
    }
  ]
};




statisticsEcharts.setOption(optionStatistics)
analysisEcharts.setOption(optionAnalysis)
crowdEcharts.setOption(optionCrowd)
serviceEcharts.setOption(optionService)

myechartsOne.setOption(optionOne)
myechartsTwo.setOption(optionTwo)
myechartsThree.setOption(optionThree)
myechartsFour.setOption(optionFour)


/************************************
 * layui的页面控制
 ***********************************/
var httpsServices;
layui.config({
  base: "../../js/modules/"
}).use(['form', 'layer', 'jquery', 'services', 'commonLayer'], function () {
  var $ = layui.jquery,
    form = layui.form,
    httpsServices = layui.services();
  var hash = new httpsServices.urlSearch();

  //弹出窗
  var commonLayer = layui.commonLayer();

  if (httpsServices.currUserInfo == undefined) {
    window.location.href = "login2.html";
  }

  console.log(httpsServices.currUserInfo);
  $("#doctorName").html(httpsServices.currUserInfo.realName);
  var orgName = httpsServices.currUserInfo.orgName;
  if (typeof (httpsServices.currUserInfo.orgName) != 'undefined' && orgName) {
    $("#orgName").html('[' + httpsServices.currUserInfo.orgName + ']');
  }

  $("#outLogin").click(function () {
    httpsServices.setCookie("witSid", "", 1);
    window.location.href = "login2.html";

  });

  $("#btn-jtys").click(function (obj) {
    commonLayer.openMaxWinNoTitleToData("../../index2.html?classId=005&showBack=1");
  });

  $("#btn-ehr").click(function (obj) {
    commonLayer.openMaxWinNoTitleToData("../../index2.html?classId=006&showBack=1");
  });

});
var myechartsOne = echarts.init($('.cost .wrap')[0])
var myechartsTwo = echarts.init($('.cost .wrap')[1])
var myechartsThree = echarts.init($('.cost .wrap')[2])
var myechartsFour = echarts.init($('.cost .wrap')[3])
var myechartsFive = echarts.init($('.cost .wrap')[4])
var myechartsSix = echarts.init($('.cost .wrap')[5])

var statisticsChartEcharts = echarts.init($('.statisticsChart .chart .bar')[0])

var myechartsSeven = echarts.init($('.patient .inner .wrap')[0])
var myechartsEight = echarts.init($('.patient .inner .wrap')[1])

var myechartsDisease = echarts.init($('.disease .bar')[0])
var myechartsOperation = echarts.init($('.operation .bar')[0])

var statisticsChartOption = {
  // 2019年医疗人次总数
  title: {
    text: '2019年医疗人次总数',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '0%',
    right: '20%',
    bottom: '0%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    show: false,
    type: 'log',
  },
  yAxis: {
    type: 'category',
    data: ['医疗集团', '下化乡', '樊村镇', '僧楼镇', '清涧街道', '赵家庄乡', '城区街道', '阳村乡', '柴家乡', '小梁乡'].reverse(),
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
  label: {
    formatter: function (num) {
      return num.value + '人';
    }
  },
  tooltip: {
    
  },
  series: [
    {
      name: '门诊人次',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      barWidth: 30,
      data: [295653, 866, 10821, 15066, 16131, 12577, 54982, 3015, 9499, 18457].reverse(),
      itemStyle: {
        normal: { color: '#7771e6' }
      },
    },
    {
      name: '出院人次',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
      },
      barWidth: 30,
      data: [19234, 19, 531, 736, 880, 497, 2094, 486, 475, 1132].reverse(),
      itemStyle: {
        normal: { color: '#2aa794' }
      },
    },
  ],
  
  // series: [
  //   {
  //     name: 'TOP',
  //     label: {
  //       show: true,
  //       position: 'right',
  //       formatter: function (num) {
  //         if (num.value > 0) {
  //           return num.value + '万人';
  //         } else {
  //           return '';
  //         }
  //       }
  //     },
  //     type: 'bar',
  //     barWidth: '20',
  //     data: [29.56, 1.6, 4, 4.5, 1, 2, 3, 4, 2.5, 7].reverse(),
  //     itemStyle: {
  //       normal: {
  //         color: function (params) {
  //           var colorList = ['#57d3b4',];
  //           return colorList[params.dataIndex]
  //         }
  //       }
  //     },
  //   },
  // ]
}
var optionOne = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '西药类31.5%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 68.5, name: '1' },
        { value: 31.5, name: '2' },
      ],
      color: ['#1869ad', '#fdf090']
    }
  ]
};
var optionTwo = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '中药类8.1%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 91.9, name: '1' },
        { value: 8.1, name: '2' },
      ],
      color: ['#1869ad', '#239ff9']
    }
  ]
};
var optionThree = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '检查11.4%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 88.6, name: '1' },
        { value: 11.4, name: '2' },
      ],
      color: ['#1869ad', '#37c4ad']
    }
  ]
};
var optionFour = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '化验9.34%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 90.66, name: '1' },
        { value: 9.34, name: '2' },
      ],
      color: ['#1869ad', '#9c8be5']
    }
  ]
};
var optionFive = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '手术3.04%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 96.96, name: '1' },
        { value: 3.04, name: '2' },
      ],
      color: ['#1869ad', '#ff9a6e']
    }
  ]
};
var optionSix = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '其他36.59%';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 63.41, name: '1' },
        { value: 36.59, name: '2' },
      ],
      color: ['#1869ad', '#4cc4e3']
    }
  ]
};
var optionSeven = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '患者构成',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: function (num) {
          var html;
          html = '门诊总人数\r\n\r\n' + '361,886人';
          return html;
        },
      },
      emphasis: {
        label: {
          show: false,
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 68644, name: '内科' },
        { value: 36796, name: '外科' },
        { value: 190212, name: '其他科室' },
        { value: 41583, name: '儿科' },
        { value: 24651, name: '妇产科' }
      ],
      color: ['#1869ad', '#4cc4e3', '#ff9a6e', '#9c8be5', '#37c4ad']
    }
  ]
};
var optionEight = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '患者构成',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: function (num) {
          var html;
          html = '住院总人次\r\n\r\n' + '23,710人';
          return html;
        },
      },
      emphasis: {
        label: {
          show: false,
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 8173, name: '内科' },
        { value: 4069, name: '外科' },
        { value: 6992, name: '其他科室' },
        { value: 1640, name: '儿科' },
        { value: 2836, name: '妇产科' }
      ],
      color: ['#1869ad', '#4cc4e3', '#ff9a6e', '#9c8be5', '#37c4ad']
    }
  ]
};




var diseaseOption = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['传染性疾病', '慢性病', '恶性肿瘤'],
    splitLine: {
      show: false
    },
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
  label: {
    formatter: function (num) {
      if (num.value > 0) {
        return num.value - 20 + '例';
      } else {
        return '';
      }
    }
  },
  series: [
    {
      name: '直接访问',
      type: 'bar',
      stack: '总量',
      barWidth: 30,
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [371, 0, 0],
      itemStyle: {
        normal: { color: '#a5e7f0' }
      }
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 20, 0],
      itemStyle: {
        normal: { color: '#2aa794' }
      }
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 399],
      itemStyle: {
        normal: { color: '#7771e6' }
      }
    },
  ]
};

var operation = {
  left: '10%',
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '10%',
    containLabel: 'true'
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['急诊与择期麻药', '日间手术占比', '压疮占比', '手术级别'],
    splitLine: {
      show: false
    },
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
  label: {
    formatter: function (num) {
      if (num.value > 0) {
        return num.value + '%';
      } else {
        return '';
      }
    }
  },
  series: [
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      barWidth: 30,
      data: [12, 27, 0, 0],
      itemStyle: {
        normal: { color: '#a5e7f0' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [88, 73, 0, 35],
      itemStyle: {
        normal: { color: '#2aa794' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 75, 35],
      itemStyle: {
        normal: { color: '#7771e6' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 25, 18],
      itemStyle: {
        normal: { color: '#00aacc' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 0, 12],
      itemStyle: {
        normal: { color: '#08a9f2' }
      }
    }
  ]
};

myechartsOne.setOption(optionOne)
myechartsTwo.setOption(optionTwo)
myechartsThree.setOption(optionThree)
myechartsFour.setOption(optionFour)
myechartsFive.setOption(optionFive)
myechartsSix.setOption(optionSix)
myechartsSeven.setOption(optionSeven)
myechartsEight.setOption(optionEight)
myechartsDisease.setOption(diseaseOption)
myechartsOperation.setOption(operation)
statisticsChartEcharts.setOption(statisticsChartOption)


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
    window.location.href = "login.html";
  }

  console.log(httpsServices.currUserInfo);
  $("#doctorName").html(httpsServices.currUserInfo.realName);
  var orgName = httpsServices.currUserInfo.orgName;
  if (typeof (httpsServices.currUserInfo.orgName) != 'undefined' && orgName) {
    $("#orgName").html('[' + httpsServices.currUserInfo.orgName + ']');
  }
  //科室


  $("#outLogin").click(function () {
    httpsServices.setCookie("witSid", "", 1);
    window.location.href = "login2.html";

  });

  $("#btn-fjzl").click(function (obj) {
    commonLayer.openMaxWinNoTitleToData("../../index2.html?classId=001&showBack=1");
  });

  $(".cell_font").click(function (obj) {
    console.log(obj.target.attributes["data_sysno"].value);
    var classId = obj.target.attributes["data_sysno"].value;
    //commonLayer.openMaxWinNoTitleToData("index2.html?classId="+classId+"&showBack=1");
    if (obj.target.attributes["data_sysno"].value === "005") {
      commonLayer.openMaxWinNoTitleToData("index2.html?classId=" + classId + "&showBack=1");
    }
    else if (obj.target.attributes["data_sysno"].value === "006") {
      commonLayer.openMaxWinNoTitleToData("index2.html?classId=" + classId + "&showBack=1");
    }
    else if (obj.target.attributes["data_sysno"].value === "001") {
      commonLayer.openMaxWinNoTitleToData("index2.html?classId=" + classId + "&showBack=1");
    }
    else if (obj.target.attributes["data_sysno"].value === "002") {
      commonLayer.openMaxWinNoTitleToData("index2.html?classId=" + classId + "&showBack=1");
    }
    else {
      commonLayer.successMsg("系统尚未开放！");
      //			commonLayer.openMaxWinNoTitleToData("html/deviceManage/fridgeTempShow.html?classId="+classId+"&showBack=1");
    }
  });

});

//打开新窗口
function addTab(_this) {
  var childWindow = $("iframe")[0].contentWindow;//获取子窗体的window对象.
  childWindow.tab.tabAdd(_this);
}
//series里定义的mymap,地图js文件里定义的heJin
echarts.registerMap('mymap', heJin);

var myecharts = echarts.init($('.map .inner .chart .geo')[0])

var option = {
	xAxis: { show: false, min: 0, max: 100 },
	yAxis: { show: false, min: 0, max: 100 },
	backgroundColor: '', //设置无背景色
	geo: {
		show: true,
		map: 'mymap',
		zoom: 1.2,
		label: {
			normal: { show: false },
			emphasis: { show: false }
		},
		roam: false,
		itemStyle: {
			normal: {
				areaColor: '#142957',
				borderColor: '#0692a4',
			},
			emphasis: {
				areaColor: '#0b1c2d',
			}
		},
	},
	series: [{
		type: 'effectScatter',
		symbolSize: 15,
		itemStyle: {
			color: '#80F1BE'
		},
		label: {
			show: true,
			formatter: function (param) {
				return param.data[2];
			},
			position: 'right'
		},
		data: [
			[30, 90, '下化乡'],
			[50.7, 80.2, '樊村镇'],
			[70.4, 70, '僧楼镇'],
			[40.4, 60.2, '清涧街道'],
			[73, 45.2, '赵家庄乡'],
			[60.4, 30.2, '城区街道'],
			[33, 30.2, '阳村乡'],
			[70.4, 15.2, '柴家乡'],
			[50.4, 5.2, '小梁乡'],
		]
	}]
};


myecharts.setOption(option)

var domList = {
	'樊村镇': ['1个', '0个', '24个', '0个', '40张', '15人', '5人'],
	'柴家乡': ['1个', '0个', '12个', '0个', '40张', '11人', '3人'],
	'城区街道': ['2个', '3个', '27个', '8个', '80张', '188人', '290人'],
	'小梁乡': ['1个', '0个', '17个', '0个', '40张', '13人', '7人'],
	'赵家庄乡': ['1个', '0个', '18个', '0个', '40张', '15人', '3人'],
	'阳村乡': ['1个', '0个', '10个', '0个', '40张', '9人', '3人'],
	'清涧街道': ['0个', '0个', '16个', '0个', '40张', '15人', '4人'],
	'僧楼镇': ['2个', '0个', '24个', '0个', '70张', '8人', '3人'],
	'下化乡': ['1个', '0个', '9个', '0个', '30张', '1人', '1人'],
}
var personList = {
	'樊村镇': [{ id: '1', hospitalName: '樊村镇中心卫生院', departmentName: '康复科', personName: '韩会强' },
	{ id: '2', hospitalName: '樊村镇中心卫生院', departmentName: '内科', personName: '曹华' },
	{ id: '3', hospitalName: '樊村镇中心卫生院', departmentName: '内科', personName: '杨磊平' },
	{ id: '4', hospitalName: '樊村镇中心卫生院', departmentName: '中医科', personName: '裴杰斌' },
	{ id: '5', hospitalName: '樊村镇中心卫生院', departmentName: '内科', personName: '任喜强' },
	{ id: '6', hospitalName: '樊村镇中心卫生院', departmentName: '外科', personName: '任吉红' },],
	'柴家乡': [{ id: '1', hospitalName: '柴家乡中心卫生院', departmentName: '防疫科', personName: '姚改飞' },
	{ id: '2', hospitalName: '柴家乡中心卫生院', departmentName: '内科', personName: '高济霞' },
	{ id: '3', hospitalName: '柴家乡中心卫生院', departmentName: '妇产科', personName: '丁淑文' },
	{ id: '4', hospitalName: '柴家乡中心卫生院', departmentName: '妇产科', personName: '胡军芳' },
	{ id: '5', hospitalName: '柴家乡中心卫生院', departmentName: '防疫科', personName: '李梅' },
	{ id: '6', hospitalName: '柴家乡中心卫生院', departmentName: '内科', personName: '高梅' },],
	'城区街道': [{ id: '1', hospitalName: '城区社区卫生服务中心', departmentName: '档案室', personName: '曹娟' },
	{ id: '2', hospitalName: '城区社区卫生服务中心', departmentName: '档案室', personName: '张琛' },
	{ id: '3', hospitalName: '城区社区卫生服务中心', departmentName: '内科', personName: '卢婷' },
	{ id: '4', hospitalName: '城区社区卫生服务中心', departmentName: '收款室', personName: '樊焕珍' },
	{ id: '5', hospitalName: '城区社区卫生服务中心', departmentName: '妇保科', personName: '高仙果' },
	{ id: '6', hospitalName: '城区社区卫生服务中心', departmentName: '传染科', personName: '贺彩萍' },],
	'小梁乡': [{ id: '1', hospitalName: '小梁乡卫生院', departmentName: '内科', personName: '武红生' },
	{ id: '2', hospitalName: '小梁乡卫生院', departmentName: '全科', personName: '谢俊群' },
	{ id: '3', hospitalName: '小梁乡卫生院', departmentName: '财务科', personName: '刘志民' },
	{ id: '4', hospitalName: '小梁乡卫生院', departmentName: '中医科', personName: '梁高杰' },
	{ id: '5', hospitalName: '小梁乡卫生院', departmentName: '中医科', personName: '张刘军' },
	{ id: '6', hospitalName: '小梁乡卫生院', departmentName: '内科', personName: '张军' },],
	'赵家庄乡': [{ id: '1', hospitalName: '赵家庄乡卫生院', departmentName: '内科', personName: '王勇' },
	{ id: '2', hospitalName: '赵家庄乡卫生院', departmentName: '公卫科', personName: '董改莉' },
	{ id: '3', hospitalName: '赵家庄乡卫生院', departmentName: '预防接种', personName: '张红' },
	{ id: '4', hospitalName: '赵家庄乡卫生院', departmentName: '妇保科', personName: '马俊霞' },
	{ id: '5', hospitalName: '赵家庄乡卫生院', departmentName: '办公室', personName: '郑国伟' },
	{ id: '6', hospitalName: '赵家庄乡卫生院', departmentName: '护理站', personName: '杨晶茹' },],
	'阳村乡': [{ id: '1', hospitalName: '阳村乡卫生院', departmentName: '公卫科', personName: '赵李平' },
	{ id: '2', hospitalName: '阳村乡卫生院', departmentName: '防保科', personName: '闫晓民' },
	{ id: '3', hospitalName: '阳村乡卫生院', departmentName: '防保科', personName: '张秀红' },
	{ id: '4', hospitalName: '阳村乡卫生院', departmentName: '内科', personName: '吴建华' },
	{ id: '5', hospitalName: '阳村乡卫生院', departmentName: '内科', personName: '王润玫' },
	{ id: '6', hospitalName: '阳村乡卫生院', departmentName: '全科', personName: '柴霞' },],
	'清涧街道': [{ id: '1', hospitalName: '清涧社区卫生服务中心', departmentName: '全科', personName: '郭伟' },
	{ id: '2', hospitalName: '清涧社区卫生服务中心', departmentName: '内科', personName: '周彦杰' },
	{ id: '3', hospitalName: '清涧社区卫生服务中心', departmentName: '全科', personName: '王雪梅' },
	{ id: '4', hospitalName: '清涧社区卫生服务中心', departmentName: '全科', personName: '丁孟云' },
	{ id: '5', hospitalName: '清涧社区卫生服务中心', departmentName: '中医科', personName: '李一' },
	{ id: '6', hospitalName: '清涧社区卫生服务中心', departmentName: '全科', personName: '侯萌' },],
	'僧楼镇': [{ id: '1', hospitalName: '僧楼镇中心卫生院', departmentName: '妇产科', personName: '李青节' },
	{ id: '2', hospitalName: '僧楼镇中心卫生院', departmentName: '妇产科', personName: '高云亮' },
	{ id: '3', hospitalName: '僧楼镇中心卫生院', departmentName: '妇产科', personName: '李慧芳' },
	{ id: '4', hospitalName: '僧楼镇中心卫生院', departmentName: '内科', personName: '师文芳' },
	{ id: '5', hospitalName: '僧楼镇中心卫生院', departmentName: '内科', personName: '陈晓玲' },
	{ id: '6', hospitalName: '僧楼镇中心卫生院', departmentName: '妇产科', personName: '杨娟' },],
	'下化乡': [{ id: '1', hospitalName: '下化乡卫生院', departmentName: '内科', personName: '李改珍' },
	{ id: '2', hospitalName: '下化乡卫生院', departmentName: '防疫科', personName: '师飞平' },
	{ id: '3', hospitalName: '下化乡卫生院', departmentName: '护士', personName: '杨文芳' },
	{ id: '4', hospitalName: '下化乡卫生院', departmentName: '公卫', personName: '贺会民' },],
}
myecharts.on('click', function (params) {
	if (params.value) {
		// 弹窗页面
		var html = '<div class="tableTitle">' +
			'<ul>' +
			'<li>序号</li><li>区域名称</li><li>医院名称</li><li>科室名称</li><li>医务人员姓名</li><li>操作</li><div></div>' +
			'</ul>' +
			'</div>' +
			'<div class="infoLine">' +
			'<ul>' +
			`<li>${personList[params.value[2]][0].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][0].hospitalName}</li><li>${personList[params.value[2]][0].departmentName}</li><li>${personList[params.value[2]][0].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'<ul>' +
			`<li>${personList[params.value[2]][1].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][1].hospitalName}</li><li>${personList[params.value[2]][1].departmentName}</li><li>${personList[params.value[2]][1].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'<ul>' +
			`<li>${personList[params.value[2]][2].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][2].hospitalName}</li><li>${personList[params.value[2]][2].departmentName}</li><li>${personList[params.value[2]][2].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'<ul>' +
			`<li>${personList[params.value[2]][3].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][3].hospitalName}</li><li>${personList[params.value[2]][3].departmentName}</li><li>${personList[params.value[2]][3].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'<ul>' +
			`<li>${personList[params.value[2]][4].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][4].hospitalName}</li><li>${personList[params.value[2]][4].departmentName}</li><li>${personList[params.value[2]][4].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'<ul>' +
			`<li>${personList[params.value[2]][5].id}</li><li>${params.value[2]}</li><li>${personList[params.value[2]][5].hospitalName}</li><li>${personList[params.value[2]][5].departmentName}</li><li>${personList[params.value[2]][5].personName}</li><li><span>语音呼叫</span><span>视频呼叫</span></li><div></div>` +
			'</ul>' +
			'</div>';
		var button = "";
		var win = new Window({//弹窗的一些配置参数
			width: 800, //宽度
			height: 500, //高度
			title: `${params.value[2]}卫生院医生列表`, //标题
			content: html, //内容
			isMask: false, //是否遮罩
			buttons: button, //按钮
			isDrag: true, //是否移动
		});
		$('.infoLine ul li span').on('click', function () {
			toast('该功能正在建设中')
		})
	}
})
myecharts.on('mouseover', function (params) {
	if (params.value) {
		let domConfig = domList[params.value[2]]
		let dom = '<p style="text-align: center;">'
			+ params.value[2] +
			'</p>' + '<p>乡镇卫生院：'
			+ domConfig[0] +
			'</p>' + '<p>社区服务中心：'
			+ domConfig[1] +
			'</p>' + '<p>村卫生室：'
			+ domConfig[2] +
			'</p>' + '<p>社区服务站：'
			+ domConfig[3] +
			'</p>' + '<p>编制床位：'
			+ domConfig[4] +
			'</p>' + '<P>医生：'
			+ domConfig[5] +
			'</p>' + '<p>护士：'
			+ domConfig[6] +
			'</p>'
		document.getElementsByClassName('info')[0].innerHTML = dom
	} else if (params.name) {
		let domConfig = domList[params.name]
		let dom = '<p style="text-align: center;">'
			+ params.name +
			'</p>' + '<p>乡镇卫生院：'
			+ domConfig[0] +
			'</p>' + '<p>社区服务中心：'
			+ domConfig[1] +
			'</p>' + '<p>村卫生室：'
			+ domConfig[2] +
			'</p>' + '<p>社区服务站：'
			+ domConfig[3] +
			'</p>' + '<p>编制床位：'
			+ domConfig[4] +
			'</p>' + '<P>医生：'
			+ domConfig[5] +
			'</p>' + '<p>护士：'
			+ domConfig[6] +
			'</p>'
		document.getElementsByClassName('info')[0].innerHTML = dom
	}
})
import config from '@etc/js/config'
export default {
	error: {
		err_1: '请输入用户名',
		err_2: '用户名只能输入6-20个字母、数字、下划线',
		err_3: '请输入密码',
		err_4: '密码只能输入6-20个字母、数字、下划线',
		err_5: '请再次输入密码',
		err_6: '两次输入密码不一致!',
		err_7: '账户已存在',
		err_8: '账户不存在',
		err_9: '连接失败！',
		err_10: '当前节点连接失败，请检查节点！',
		err_11: '文件格式错误！',
		err_12: '请选择节点！',
	},
	warn: {
		w_1: '请选择账户',
		w_2: '请获取账户',
		w_3: '账户为空！',
		w_4: '请选择模式',
		w_5: '模式不能为空',
		w_6: '',
		w_7: '用户不能为空',
		w_8: '请输入公共账户名称',
		w_9: '长度在 3 到 20 个字符',
		w_10: '',
		w_11: '创建组成功',
		w_12: '数据为空！',
		w_13: '登陆超时，请重新登陆！',
		w_14: '请输入目标地址',
		w_15: '请输入金额',
		w_16: '已取消',
		w_17: '不能为空',
		w_18: '格式不正确',
		w_19: '余额不足',
		w_20: '是否导入此账户',
		w_21: '是否导出此账户',
	},
	success: {
		s_1: '创建成功！',
		s_2: '复制成功',
		s_3: '创建账户请求发送成功！',
		s_4: '连接成功！',
		s_5: '删除成功！',
		s_6: '导出成功！',
		s_7: '导入成功！',
	},
	btn: {
		confirm: '确认',
		cancel: '取消',
		login: '登陆',
		register: '注册',
		back: '返回',
		person: '个人账户',
		group: '共管账户',
		unlock: '解锁',
		enter: '转入',
		out: '转出',
		code: '二维码',
		copy: '复制',
		createAccount: '创建账户',
		createPersson: '创建个人账户',
		restart: '重置',
		agree: '同意',
		refuse: '拒绝',
		approval: '审批',
		create: '创建',
		newBuild: '新建',
		set: '设置',
		setName: '设置别名',
		setNode: '设置节点',
		review: '重审',
		lookHistory: '查看历史',
		exportAccount: '导出账户',
		importAccount: '导入账户',
	},
	loading: {
		l_1: '账户获取中……'
	},
	title: {
		walletTitle: '<span>SMPC</span> Wallet',
		login: '登陆账户',
		register: '创建账户',
		gMember: '当前组成员',
		selectNode: '节点选择',
		history: '历史',
		wait: '待办',
		refrsh: '刷新',
		personAccount: '个人账户',
		groupAccount: '共管账户',
		quit: '安全退出',
		createGroup: '创建确认',
		groupNews: '共管账户消息',
		txnsNews: '交易消息',
		accountList: '账户列表',
		netSet: '网络设置',
		groupSet: '组信息设置',
		gAccountSet: '共管账户设置'
	},
	label: {
		username: '用户名',
		password: '密码',
		password2: '确认密码',
		coinType: '币种',
		address: '地址',
		balance: '余额',
		action: '操作',
		admins: '管理人',
		self: '自己',
		send: '发送',
		sendAddr: '发送地址',
		assets: '资产',
		amount: '数量',
		date: '日期',
		info: '信息',
		hash: '交易哈希',
		mode: '模式',
		to: '接收',
		value: '数量',
		source: '发起账户',
		from: '发送',
		group: '组',
		txnHistory: '交易历史',
		groupHistory: '共管账户历史',
		personHistory: '个人账户历史',
		groupTxnsHistory: '共管交易历史',
		personTxnsHistory: '个人交易历史',
		IP: 'IP地址',
		aliases: '别名',
		notSetUp: '未设置',
		initiator: '发起者',
		approver: '审批者',
		version: '版本',
		versionTest: '测试网',
		groupId: '组 ID',
		groupAccountId: '共管账户 ID',
		identity: '身份',
		details: '详情',
		approvalTime: '审批剩余时间',
		localNode: '本地节点'
	},
	state: {
		name: '状态',
		on: '在线',
		off: '离线',
		success: '成功',
		fail: '失败',
		pending: '等待中',
		null: '无',
		new: '新',
		end: '结束'
	},
	action: {
		copy: '复制',
		paste: '粘贴',
		revoke: '撤销',
		redo: '重做',
		cut: '剪切',
		delete: '删除',
		selectAll: '全选',
	},
	tip: {
		name: '提示',
		walletTip: '注意：当前版本为测试网。<br />请勿转入主网币，否则将丢失所有资产！<br />钱包密钥是本地存储。我们无法恢复密钥！',
		deleteNode: '此操作将永久删除该节点, 是否继续? ',
		devTip: '开发中'
	}
}

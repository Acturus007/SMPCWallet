export const datas = {
  eDialog: {
    pwd: false,
    confirm: false
  },
  loading: {
    creat: false,
    confirm: false
  },
  mode: {
    init: '',
    select: ''
  },
  node: {
    init: [],
    select: [],
    min: 0,
    max: 0,
    add: '',
    refresh: true
  },
  dataPage: {},
  gID: '',
  signTx: '',
}

export const watchs = {
  accountType (cur) {
    if (Number(cur) === 1) {
      this.toUrl('/createPerson')
    } else {
      this.toUrl('/createGroup')
    }
  },
}

export const methods = {
  init () {
    // if (Number(this.accountType) === 1) {
    //   this.getNetUrl()
    // }
    this.mode = {
      init: this.$$.mode,
      select: this.$$.config.initGroupMode
    }
    this.changeMode()
  },
  modalClick () {
    this.eDialog.pwd = false
    this.eDialog.confirm = false
    this.loading.creat = false
    this.$$.web3.setProvider(this.serverRPC)
    this.$emit('closeModal')
  },
  createAndGetGid (mode, arr, signStr) {
    this.eDialog.confirm = false
    this.loading.creat = true
    this.$$.createGroup(mode, arr).then(res => {
      let gInfo = res
      console.log(gInfo)
      if (gInfo.msg === 'Success') {
        this.gID = res.info.Gid
        this.openPwdDialog(signStr)
      } else {
        this.msgError(gInfo.info.toString())
        this.modalClick()
      }
    }).catch(err => {
      this.msgError(err)
      this.modalClick()
    })
  },
  openPwdDialog (signStr) {
    if (!this.gID) {
      this.msgError(this.$t('warn').w_3)
      this.modalClick()
      return
    }
    let data = 'REQDCRMADDR:' + this.gID + ':' + this.mode.select + ':' + Date.now()
    if (signStr) {
      data += signStr
    }
    console.log(data)
    this.dataPage = {
      from: this.address,
    }
    this.$$.getReqNonce(this.address).then(nonce => {
      this.dataPage.nonce = nonce
      this.dataPage.value = 0
      this.dataPage.data = data
      console.log(this.dataPage)
      this.eDialog.pwd = true
      this.loading.creat = false
    })
  },
  getSignData (data) {
    this.eDialog.pwd = false
    this.loading.creat = true
    if (data.signTx) {
      this.signTx = data.signTx
      this.reqAccount()
    } else {
      this.loading.creat = false
      this.msgError('Error')
    }
  },
  reqAccount () {
    this.$$.reqAccount(this.signTx, this.accountType).then(res => {
      console.log(res)
      if (res.msg === 'Success') {
        if (Number(this.accountType) !== 1) {
          this.updateStatus(res.info)
        }
        this.saveDB(res.info)
        this.msgSuccess(this.$t('success').s_3)
      }
      this.modalClick()
      if (Number(this.accountType) !== 1) {
        this.toUrl('/waitNews')
      }
    }).catch(err => {
      console.log(err)
      this.msgError(err.error)
      this.modalClick()
    })
  },
  resetForm(formName) {
    this.mode.select = this.$$.config.initGroupMode
    this.node.select = []
    this.gID = ''
    this.changeMode()
  },
  refreshNode () {
    this.node.refresh = false
    this.$nextTick(() => {
      this.node.refresh = true
    })
  },
}
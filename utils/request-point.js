import request from './request'
import { dateFormat } from './tool'

// http://htsit.hanhua.com/pla-cust
function plaCust (code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'platform.custom'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// tong2
function tong2 (code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'htong.tong2'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// HTONGBACK
function hongback (code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'HTONGBACK'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// 情报（房估价）
function qingbao (code, option = {}) {
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'qingbao'
  config.headers['HT-PROXY-SERVICE-CODE'] = code

  return request(config)
}

// 客户中心（注册,实名）
function userCenter (code, option = {}) {
  option.data = {
    Transaction: {
      TransHeader: {
        'trans_id': `CRPT${Date.now()}${Math.round(Math.random() * 1000 + 1000)}`,
        'service_code': code,
        'channel_type': 'hanhua_zhx',
        'tran_date': dateFormat(new Date(), 'yyyyMMdd'), // '20200710'
        'tran_time': dateFormat(new Date(), 'hhmmss'), // '100123'
        'oper_org': '',
        'oper_userid': ''
      },
      TransBody: option.data
    }
  }
  const config = {
    headers: {},
    ...option
  }
  config.headers['HT-PROXY-ENDPOINT'] = 'USERCENTER'
  config.headers['HT-PROXY-SERVICE-CODE'] = code
  return request(config)
}

export default {
  plaCust,
  tong2,
  hongback,
  qingbao,
  userCenter
}

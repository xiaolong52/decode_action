//Thu Oct 31 2024 14:30:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("极星"),
  ckName = "jxck",
  fs = require("fs");
window = {};
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let ckStr = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  ckStrArr = [],
  envSplitor = ["@", "\n"],
  strSplitor = "&",
  data = "",
  ck_status = true,
  msg = "",
  num,
  userId = token = activityTaskId = no = "",
  requestId,
  nickname,
  memberid,
  deviceId,
  fanhui,
  fanhui1,
  fanhui2,
  client_secret = "385798256D8247E9B7E2E93BF2741517",
  appVer = "4.7.4",
  appId = "polestar-app-android";
var hours = new Date().getMonth(),
  timestamp = Math.round(new Date().getTime()).toString();
let TempAccount = [];
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) return;else {
      {
        log("\n\n=================================================\n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=================================================\n");
        log("=================== 共找到 " + ckStrArr.length + " 个账号 ===================");
        if (debug) {
          log("【debug】 这是你的全部账号数组:\n " + ckStrArr);
          log("【debug】 这是你的全部账号数组:\n " + ckStr1Arr);
        }
        for (let _0x112550 = 0; _0x112550 < ckStrArr.length; _0x112550++) {
          num = _0x112550 + 1;
          DoubleLog("-------- 开始【第 " + num + " 个账号】-------- ");
          ck = ckStrArr[_0x112550].split(strSplitor);
          debugLog("【debug】 这是你第 " + num + " 账号信息: " + ck + " ");
          mobile = ck[0];
          let _0x1ad304 = fs.existsSync(strShare);
          if (_0x1ad304) {
            console.log("检测到token缓存文件" + strShare + "，载入...");
            TempAccount = fs.readFileSync(strShare, "utf-8");
            if (TempAccount) {
              TempAccount = JSON.parse(TempAccount);
              let _0x3dc497 = false;
              for (let _0x31500c = 0; _0x31500c < TempAccount.length; _0x31500c++) {
                if (TempAccount[_0x31500c].phone == ck[0]) {
                  _0x3dc497 = true;
                  refreshtoken = TempAccount[_0x31500c].refreshtoken;
                  deviceId = TempAccount[_0x31500c].deviceId;
                  console.log("账号[" + num + "] " + "该账号有缓存 token:" + refreshtoken);
                  break;
                }
              }
              if (!_0x3dc497) {
                console.log("账号[" + num + "] 该账号没有缓存，尝试登录获取token.....");
                DoubleLog("账号[" + num + "] 去刷新token");
                deviceId = randomszxx(33);
                refreshtoken = ck[1];
              }
            }
          } else deviceId = randomszxx(33), console.log("账号[" + num + "] " + "还没有缓存文件，尝试登录获取token....."), DoubleLog("账号[" + num + "] 去刷新token"), refreshtoken = ck[1];
          await start();
        }
        await SendMsg(msg);
      }
    }
  }
})().catch(_0x4b699e => log(_0x4b699e)).finally(() => $.done());
async function start() {
  detailList = [];
  commentList = [];
  postId = "";
  postImg = "";
  console.log("✅账号[" + num + "] 开始 刷新token 🎉");
  console.log("随机延迟 " + randomInt(1000, 5000) / 1000 + "秒🎉 ");
  await $.wait(randomInt(1000, 5000));
  await refresh_token();
  ck_status == true && (console.log("✅账号[" + num + "] 开始 查询积分 🎉"), console.log("随机延迟 " + randomInt(1000, 5000) / 1000 + "秒🎉 "), await $.wait(randomInt(1000, 5000)), await Check_points(), console.log("✅账号[" + num + "] 开始 任务列表 🎉"), console.log("随机延迟 " + randomInt(1000, 5000) / 1000 + "秒🎉 "), await $.wait(randomInt(1000, 5000)), await task_tasklist());
}
async function Login() {
  did = RandeCode();
  let _0xe30e8d = ts13(),
    _0x2eb1fc = "globalDatetime" + _0xe30e8d + "username" + ck[0] + "test_123456679890123456",
    _0x3afdc3 = MD5Encrypt(_0x2eb1fc).toUpperCase();
  return new Promise(_0x434626 => {
    {
      var _0x1f6252 = {
        "method": "GET",
        "url": "http://ypapp.cnnb.com.cn/yongpai-user/api/login2/local?username=" + ck[0] + "&password=" + ck[1] + "&deviceId=" + did + "&globalDatetime=" + _0xe30e8d + "&sign=" + _0x3afdc3,
        "headers": {
          "Host": "ypapp.cnnb.com.cn",
          "User-Agent": "okhttp/3.10.0"
        }
      };
      debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x1f6252)));
      axios.request(_0x1f6252).then(async function (_0xf7be8f) {
        try {
          let _0x2bd2c2 = _0xf7be8f.data;
          debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xf7be8f.data)));
          if (_0x2bd2c2.code == 0) {
            {
              nickname = _0x2bd2c2.data.nickname;
              userId = _0x2bd2c2.data.userId;
              addNotifyStr("账号[" + num + "] 用户:" + nickname);
              log("账号[" + num + "] deviceId:" + _0x2bd2c2.data.deviceId);
              token = _0x2bd2c2.data.token;
              log("账号[" + num + "] token:" + _0x2bd2c2.data.token);
              log("账号[" + num + "] userId：" + userId);
              log("账号[" + num + "] 获得积分:" + _0x2bd2c2.data.score);
              log("账号[" + num + "] 推荐码:" + _0x2bd2c2.data.recommendcode);
            }
          } else {
            console.log(_0x2bd2c2);
          }
        } catch (_0x50eec8) {
          log("异常：" + JSON.stringify(_0xf7be8f.data) + "，原因：" + data.message);
        }
      }).catch(function (_0xc25a07) {
        console.error(_0xc25a07);
      }).then(_0x407d38 => {
        _0x434626();
      });
    }
  });
}
async function refresh_token(_0x56c9e6) {
  try {
    let _0x3d3e77 = {
        "url": "https://uc.app.polestar-auto.com/oauth/token?grant_type=refresh_token&client_id=" + appId + "&client_secret=" + client_secret + "&refresh_token=" + refreshtoken,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": "0",
          "Host": "uc.app.polestar-auto.com",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.10.0"
        }
      },
      _0x3faf42 = await httpPost(_0x3d3e77, "刷新token");
    if (_0x3faf42.code == 200) {
      ck_status = true;
      DoubleLog("账号[" + num + "] 刷新refreshToken成功:" + _0x3faf42.data.refreshToken);
      token = _0x3faf42.data.accessToken;
      let _0x4409d9 = num - 1;
      TempAccount[_0x4409d9] = {
        "phone": ck[0],
        "refreshtoken": _0x3faf42.data.refreshToken,
        "deviceId": deviceId
      };
      var _0x458591 = JSON.stringify(TempAccount, null, 2);
      fs.writeFile(strShare, _0x458591, "Utf8", _0x304cbd => {
        _0x304cbd ? (console.log(_0x304cbd), console.log("账号[" + num + "] 缓存文件" + strShare + "更新失败!")) : console.log("账号[" + num + "] 缓存文件" + strShare + "更新成功!");
      });
      await $.wait(5000);
      console.log("✅账号[" + num + "] 开始 查询用户信息 🎉");
      console.log("随机延迟 " + randomInt(1000, 5000) / 1000 + "秒🎉 ");
      await $.wait(randomInt(1000, 5000));
      await user_info();
    } else DoubleLog("账号[" + num + "] 刷新token:失败 ❌ 了呢,原因:" + _0x3faf42.msg + "!🎉"), console.log(_0x3faf42), ck_status = false;
  } catch (_0x256b2f) {
    console.log(_0x256b2f);
  }
}
async function user_info() {
  let _0x281541 = RandeCode(),
    _0x44ebaa = ts13(),
    _0x5ae053 = MD5(client_secret + "appId=" + appId + "&appVer=" + appVer + "&clientType=PHONE&deviceId=" + deviceId + "&deviceModel=MI6&nonce=" + _0x281541 + "&systemVer=PKQ1.190118.001&timestamp=" + _0x44ebaa + client_secret);
  try {
    let _0x345cdd = {
        "url": "https://gw.app.polestar-auto.com/user/api/v1/user/profile?appId=" + appId + "&timestamp=" + _0x44ebaa + "&nonce=" + _0x281541 + "&deviceId=" + deviceId + "&deviceModel=MI6&clientType=PHONE&systemVer=PKQ1.190118.001&appVer=" + appVer + "&sign=" + _0x5ae053,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "Host": "gw.app.polestar-auto.com",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.10.0"
        }
      },
      _0x1aaf6f = await httpGet(_0x345cdd, "用户信息");
    if (_0x1aaf6f?.["code"] == 200) {
      DoubleLog("账号[" + num + "] 用户:" + _0x1aaf6f.data.phone + " uid:" + _0x1aaf6f.data.uid + " 🎉");
      userId = _0x1aaf6f.data.uid;
    } else DoubleLog("账号[" + num + "] 用户查询:失败 ❌ 了呢,原因:" + _0x1aaf6f.msg + "!🎉"), console.log(_0x1aaf6f);
  } catch (_0x40c66d) {
    console.log(_0x40c66d);
  }
}
async function Check_points(_0x45a4a9) {
  try {
    let _0x4074d4 = {
        "url": "https://points.api.polestar.cn/v1/points/my",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "Version": appVer,
          "Device": "Android",
          "X-User-Agent": "MI6",
          "Host": "points.api.polestar.cn",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.10.0"
        }
      },
      _0x19c704 = await httpGet(_0x4074d4, "查询积分");
    DoubleLog("账号[" + num + "] 积分:" + _0x19c704.currentPoints);
  } catch (_0x525fb0) {
    console.log(_0x525fb0);
  }
}
async function task_tasklist() {
  let _0x3bcd7e = ts13(),
    _0x4f1fd5 = MD5Encrypt(userId + "_AndroidadPlatform" + _0x3bcd7e + "kaed499-28b6c504-824ed2ccb4e-3ce07a");
  try {
    let _0x4f6552 = {
        "url": "https://pointcalculator.api.polestar.cn/v1/PointCalculators?clientType=App&sourceApp=Additional",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "Version": appVer,
          "Device": "Android",
          "X-User-Agent": "MI6",
          "Host": "pointcalculator.api.polestar.cn",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.10.0"
        }
      },
      _0x34b333 = await httpGet(_0x4f6552, "任务列表");
    DoubleLog("账号[" + num + "] 获取任务列表成功: 🎉");
    tasklist = _0x34b333;
    for (let _0x57dab1 = 0; _0x57dab1 < tasklist.length; _0x57dab1++) {
      {
        const _0x33f429 = tasklist[_0x57dab1],
          _0x319523 = _0x33f429.template.title;
        if (_0x319523.includes("每日签到") || _0x319523.includes("车辆配置器")) {
          {
            if (_0x33f429.isTodayCompleted == false) DoubleLog("账号[" + num + "] " + _0x319523 + " 可获得积分:" + _0x33f429.template.description + " " + _0x33f429.completeStatus + " 任务状态：未完成，去完成  🎉"), await executeTask(_0x33f429, _0x319523);else _0x33f429.isTodayCompleted == true ? DoubleLog("账号[" + num + "] " + _0x319523 + " 可获得积分:" + _0x33f429.template.description + " " + _0x33f429.completeStatus + " 任务状态：已完成 明天再来吧！ 🎉") : DoubleLog("账号[" + num + "] " + _0x319523 + " 任务状态:未知状态！🎉");
          }
        }
      }
    }
  } catch (_0x151f8c) {
    console.log(_0x151f8c);
  }
}
async function executeTask(_0xff72c, _0x3d23e0) {
  try {
    {
      const _0x1cdbe4 = [];
      console.log("随机延迟 " + randomInt(1000, 5000) / 1000 + "秒 🎉 ");
      await $.wait(randomInt(1000, 5000));
      if (_0x3d23e0.includes("每日签到")) await signin(_0xff72c.template.code);else _0x3d23e0.includes("车辆配置器") && (await task_start());
    }
  } catch (_0xed4d2e) {
    console.log(_0xed4d2e);
  }
}
async function signin(_0x4076bd) {
  let _0x11e235 = ts13();
  try {
    {
      let _0x107f10 = {
          "url": "https://pointcalculator.api.polestar.cn/v1/PointCalculators",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
            "Version": appVer,
            "Device": "Android",
            "X-User-Agent": "MI6",
            "Host": "pointcalculator.api.polestar.cn",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.10.0"
          },
          "body": "{\"eventCode\":\"" + _0x4076bd + "\",\"eventSource\":\"App\",\"mobile\":\"" + mobile + "\",\"pscnId\":\"" + userId + "\",\"sourceApp\":\"\",\"sourceCode\":\"\"}"
        },
        _0x4f0498 = await httpPost(_0x107f10, "签到");
      DoubleLog("账号[" + num + "] 签到 获得积分:" + _0x4f0498);
    }
  } catch (_0x468009) {
    console.log(_0x468009);
  }
}
async function task_start(_0xd753d3, _0x5db730) {
  try {
    {
      let _0x459cfa = {
          "url": "https://configurator.api.polestar.cn/v1/point/pointCalculators",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
            "Version": appVer,
            "Device": "Android",
            "X-User-Agent": "MI6",
            "Host": "configurator.api.polestar.cn",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.10.0"
          }
        },
        _0x42c5ff = await httpGet(_0x459cfa, "查看车辆配置器");
      DoubleLog("账号[" + num + "] 完成查看车辆配置器任务 获得积分:" + _0x42c5ff.points);
    }
  } catch (_0x46d36d) {
    console.log(_0x46d36d);
  }
}
function ParseHtml(_0x38d4a1, _0x2d90b1) {
  let _0x22b107 = domParser.parseFromString(_0x38d4a1),
    _0x10f98c = xpath.select("//script", _0x22b107),
    _0x1a8969 = _0x10f98c[_0x2d90b1].childNodes[0],
    _0x1a3a21,
    _0x5f2680 = new JSDOM("<script>" + DealScriptStr(_0x1a8969.data) + "</script>", {
      "runScripts": "dangerously"
    });
  _0x1a3a21 = _0x5f2680.window.getDuibaToken.toString();
  let _0x362e07 = _0x1a3a21.match(/var key = '(.*)?';/)[1],
    _0x2f6453 = "window[\"" + _0x362e07 + "\"]";
  _0x5f2680.window.close();
  return {
    "defaultToken": _0x2f6453
  };
}
function DealScriptStr(_0x1e7c8d) {
  _0x1e7c8d = _0x1e7c8d.replace(/\/\*.*?\*\//g, " ");
  _0x1e7c8d = _0x1e7c8d.replace(/\b0(\d+)/g, "0o$1");
  return _0x1e7c8d;
}
async function Envs() {
  if (ckStr) {
    if (ckStr.indexOf(envSplitor[0]) != -1) ckStr.split(envSplitor[0]).forEach(_0x5da6f4 => {
      ckStrArr.push(_0x5da6f4);
    });else {
      if (ckStr.indexOf(envSplitor[1]) != -1) ckStr.split(envSplitor[1]).forEach(_0x5dd9c8 => {
        ckStrArr.push(_0x5dd9c8);
      });else {
        ckStrArr.push(ckStr);
      }
    }
  } else {
    {
      log("\n 【" + $.name + "】：未填写变量 " + ckName);
      return;
    }
  }
  return true;
}
async function SendMsg(_0x2aefa0) {
  if (!_0x2aefa0) return;
  if (Notify > 0) {
    {
      if ($.isNode()) {
        {
          var _0x1f77bf = require("./sendNotify");
          await _0x1f77bf.sendNotify($.name, _0x2aefa0);
        }
      } else $.msg(_0x2aefa0);
    }
  } else log(_0x2aefa0);
}
function DoubleLog(_0x32d156) {
  if ($.isNode()) _0x32d156 && (console.log("" + _0x32d156), msg += "\n" + _0x32d156);else {
    console.log("" + _0x32d156);
    msg += "\n" + _0x32d156;
  }
}
function addNotifyStr(_0x4fdb4d, _0x10b47c = true) {
  _0x10b47c && log("\n" + _0x4fdb4d);
  msg += "\n" + _0x4fdb4d;
}
function RandeCode() {
  var _0x1f6873 = new Date().getTime(),
    _0xd9b8fd = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x41257b) {
      {
        var _0x35ae21 = (_0x1f6873 + Math.random() * 16) % 16 | 0;
        _0x1f6873 = Math.floor(_0x1f6873 / 16);
        return (_0x41257b == "x" ? _0x35ae21 : _0x35ae21 & 3 | 8).toString(16);
      }
    });
  return _0xd9b8fd;
}
function timestampToTime(_0x103b8c) {
  dt = new Date(parseInt(_0x103b8c));
  if (isNaN(dt.getTime())) throw new Error("无效的时间戳");
  const _0xdb450a = dt.getFullYear(),
    _0xc6fc32 = (dt.getMonth() + 1).toString().padStart(2, "0"),
    _0x370af3 = dt.getDate().toString().padStart(2, "0"),
    _0x23565b = dt.getHours().toString().padStart(2, "0"),
    _0x18f147 = dt.getMinutes().toString().padStart(2, "0"),
    _0x101279 = dt.getSeconds().toString().padStart(2, "0");
  return _0xdb450a + "-" + _0xc6fc32 + "-" + _0x370af3 + " " + _0x23565b + ":" + _0x18f147 + ":" + _0x101279 + " ";
}
function decodeUnicode(_0x9f3804) {
  return _0x9f3804.replace(/\\u[\dA-Fa-f]{4}/g, function (_0x24393c) {
    return String.fromCharCode(parseInt(_0x24393c.substr(2), 16));
  });
}
function base64_encode(_0x18d948) {
  let _0x228cb1 = Buffer.from(_0x18d948, "utf-8").toString("base64");
  return _0x228cb1;
}
function base64_decode(_0x2386e6) {
  let _0xde3eec = Buffer.from(_0x2386e6, "base64").toString("utf8");
  return _0xde3eec;
}
function randomszdx(_0x17a5cc) {
  _0x17a5cc = _0x17a5cc || 32;
  var _0x46c4e1 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x59b625 = _0x46c4e1.length,
    _0x2317cb = "";
  for (i = 0; i < _0x17a5cc; i++) _0x2317cb += _0x46c4e1.charAt(Math.floor(Math.random() * _0x59b625));
  return _0x2317cb;
}
function randomszxx(_0x37b5d3) {
  _0x37b5d3 = _0x37b5d3 || 32;
  var _0x5465ee = "qwertyuioplkjhgfdsazxcvbnm1234567890",
    _0x5ab1a9 = _0x5465ee.length,
    _0x3b7b71 = "";
  for (i = 0; i < _0x37b5d3; i++) _0x3b7b71 += _0x5465ee.charAt(Math.floor(Math.random() * _0x5ab1a9));
  return _0x3b7b71;
}
function HmacSHA256_Encrypt(_0x107c87) {
  let _0x1d8655 = "63jrwTexCzUjxiNUGfSrkXghKuo96Soi";
  return CryptoJS.HmacSHA256(_0x107c87, _0x1d8655).toString();
}
function randomString(_0x5535d3) {
  for (var _0x5ed46f = _0x5535d3 > 0 && undefined !== _0x5535d3 ? _0x5535d3 : 21, _0x1f1725 = ""; _0x1f1725.length < _0x5ed46f;) _0x1f1725 += Math.random().toString(36).slice(2);
  return _0x1f1725.slice(0, _0x5ed46f);
}
function randomInt(_0x293357, _0x3dbabf) {
  return Math.round(Math.random() * (_0x3dbabf - _0x293357) + _0x293357);
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function wait(_0x26188d) {
  return new Promise(function (_0x3076f8) {
    setTimeout(_0x3076f8, _0x26188d * 1000);
  });
}
function local_hours() {
  let _0x74b640 = new Date(),
    _0x3d2d7b = _0x74b640.getHours();
  return _0x3d2d7b;
}
function local_minutes() {
  let _0x54cd3b = new Date(),
    _0x16ed06 = _0x54cd3b.getMinutes();
  return _0x16ed06;
}
function local_Seconds() {
  let _0x29bb99 = new Date(),
    _0x3a9b22 = _0x29bb99.getSeconds();
  return _0x3a9b22;
}
function local_UTCMilliseconds() {
  let _0x1561a4 = new Date(),
    _0x3761f1 = _0x1561a4.getUTCMilliseconds();
  return _0x3761f1;
}
function local_year() {
  let _0x41db0d = new Date();
  y = _0x41db0d.getFullYear();
  return y;
}
function local_month() {
  let _0x10014c = new Date(),
    _0x42baa9 = _0x10014c.getMonth() + 1;
  return _0x42baa9;
}
function local_month_two() {
  let _0x45dfe8 = new Date(),
    _0x291aa8 = _0x45dfe8.getMonth() + 1;
  _0x291aa8.toString().length == 1 && (_0x291aa8 = "0" + _0x291aa8);
  return _0x291aa8;
}
function local_day() {
  let _0x1fd22 = new Date(),
    _0x28d0df = _0x1fd22.getDate();
  return _0x28d0df;
}
function local_day_two() {
  let _0x10b57f = new Date(),
    _0x235ef1 = _0x10b57f.getDate();
  if (_0x235ef1.toString().length == 1) {
    _0x235ef1 = "0" + _0x235ef1;
  }
  return _0x235ef1;
}
function debugLog(..._0x2712b7) {
  debug && console.log(..._0x2712b7);
}
async function httpPost(_0x53c86c, _0x570ab4, _0x3e3ac7 = 5000) {
  return new Promise((_0x119bc2, _0x344a08) => {
    let _0x3098a0 = _0x53c86c;
    !_0x570ab4 && (_0x570ab4 = this.constructor.name);
    debug && (console.log("\n 【debug】=============== 这是 " + _0x570ab4 + " 请求 url ==============="), console.log(_0x3098a0));
    $.post(_0x3098a0, async (_0x557209, _0x84d540, _0x351f67) => {
      try {
        if (_0x84d540.status === 302) {
          {
            debug && (console.log("\n 【debug】=========== 这是 " + _0x570ab4 + " 302 请求头部数据 ========="), console.log(_0x351f67));
            let _0x2627d4 = _0x84d540.headers;
            _0x119bc2(_0x2627d4);
          }
        } else {
          {
            if (_0x84d540.headers["content-type"].includes("text/html")) _0x119bc2(_0x351f67);else {
              let _0x466147 = JSON.parse(_0x351f67);
              debug && (console.log("\n 【debug】=============这是 " + _0x570ab4 + " json解析后数据============"), console.log(JSON.parse(_0x351f67)));
              _0x119bc2(_0x466147);
            }
          }
        }
      } catch (_0x380176) {
        console.log(_0x557209, _0x84d540);
        console.log("\n " + _0x570ab4 + " 请求失败！请稍后尝试！");
        _0x344a08(_0x380176);
      } finally {}
    }, _0x3e3ac7);
  });
}
async function httpGet(_0x40caee, _0x4172ce, _0x5a8779 = 5000) {
  return new Promise((_0x397ca3, _0x20b1b1) => {
    {
      let _0x477dc3 = _0x40caee;
      !_0x4172ce && (_0x4172ce = this.constructor.name);
      debug && (console.log("\n 【调试】=============== 这是 " + _0x4172ce + " 请求 url ==============="), console.log(_0x477dc3));
      $.get(_0x477dc3, async (_0x14152e, _0x49a8ed, _0x4f6865) => {
        try {
          {
            if (_0x49a8ed.status === 302) {
              {
                debug && (console.log("\n 【debug】=========== 这是 " + _0x4172ce + " 302 请求头部数据 ========="), console.log(_0x4f6865));
                let _0x455b4d = _0x49a8ed.headers;
                _0x397ca3(_0x455b4d);
              }
            } else {
              {
                if (_0x49a8ed.headers["content-type"].includes("text/html")) {
                  _0x397ca3(_0x4f6865);
                } else {
                  let _0x2ec83a = JSON.parse(_0x4f6865);
                  debug && (console.log("\n 【debug】=============这是 " + _0x4172ce + " json解析后数据============"), console.log(JSON.parse(_0x4f6865)));
                  _0x397ca3(_0x2ec83a);
                }
              }
            }
          }
        } catch (_0x49006d) {
          console.log(_0x14152e, _0x49a8ed);
          console.log("\n " + _0x4172ce + " 请求失败！请稍后尝试！");
          _0x20b1b1(_0x49006d);
        } finally {}
      }, _0x5a8779);
    }
  });
}
var MD5 = function (_0x1dbaa8) {
  function _0x557e33(_0x2ce6ae, _0xc930cf) {
    return _0x2ce6ae << _0xc930cf | _0x2ce6ae >>> 32 - _0xc930cf;
  }
  function _0x3e6edd(_0x38674c, _0xe86f35) {
    var _0x2dc1ed, _0x1f272, _0x537d81, _0x3cef7b, _0xa7c226;
    _0x537d81 = _0x38674c & 2147483648;
    _0x3cef7b = _0xe86f35 & 2147483648;
    _0x2dc1ed = _0x38674c & 1073741824;
    _0x1f272 = _0xe86f35 & 1073741824;
    _0xa7c226 = (_0x38674c & 1073741823) + (_0xe86f35 & 1073741823);
    if (_0x2dc1ed & _0x1f272) {
      return _0xa7c226 ^ 2147483648 ^ _0x537d81 ^ _0x3cef7b;
    }
    return _0x2dc1ed | _0x1f272 ? _0xa7c226 & 1073741824 ? _0xa7c226 ^ 3221225472 ^ _0x537d81 ^ _0x3cef7b : _0xa7c226 ^ 1073741824 ^ _0x537d81 ^ _0x3cef7b : _0xa7c226 ^ _0x537d81 ^ _0x3cef7b;
  }
  function _0x4db41a(_0xb48695, _0x1846a5, _0x3e76c3) {
    return _0xb48695 & _0x1846a5 | ~_0xb48695 & _0x3e76c3;
  }
  function _0x1e425a(_0x1b4a72, _0x266b9c, _0x32cf94) {
    return _0x1b4a72 & _0x32cf94 | _0x266b9c & ~_0x32cf94;
  }
  function _0x38651a(_0x2f95bf, _0x58b25a, _0xc67a85) {
    return _0x2f95bf ^ _0x58b25a ^ _0xc67a85;
  }
  function _0x1f269c(_0x54a19a, _0x5086fd, _0x13d6a0) {
    return _0x5086fd ^ (_0x54a19a | ~_0x13d6a0);
  }
  function _0x3f61ea(_0x334d6f, _0xc5b176, _0x1e7a08, _0x3ed1d7, _0x8120a5, _0x47333a, _0x47ec19) {
    _0x334d6f = _0x3e6edd(_0x334d6f, _0x3e6edd(_0x3e6edd(_0x4db41a(_0xc5b176, _0x1e7a08, _0x3ed1d7), _0x8120a5), _0x47ec19));
    return _0x3e6edd(_0x557e33(_0x334d6f, _0x47333a), _0xc5b176);
  }
  function _0x421bbf(_0x215fdf, _0x450851, _0x39af06, _0x139531, _0x329a69, _0x5d1ecb, _0x366e1b) {
    _0x215fdf = _0x3e6edd(_0x215fdf, _0x3e6edd(_0x3e6edd(_0x1e425a(_0x450851, _0x39af06, _0x139531), _0x329a69), _0x366e1b));
    return _0x3e6edd(_0x557e33(_0x215fdf, _0x5d1ecb), _0x450851);
  }
  function _0xe47de4(_0x182693, _0x4a25fa, _0x1b6625, _0x1c533e, _0x19b478, _0x5b3232, _0x2c72cb) {
    _0x182693 = _0x3e6edd(_0x182693, _0x3e6edd(_0x3e6edd(_0x38651a(_0x4a25fa, _0x1b6625, _0x1c533e), _0x19b478), _0x2c72cb));
    return _0x3e6edd(_0x557e33(_0x182693, _0x5b3232), _0x4a25fa);
  }
  function _0x5247f0(_0x1030bd, _0x7db70, _0x3ad200, _0x5cc183, _0x14b8eb, _0x3780e1, _0x2f65cf) {
    _0x1030bd = _0x3e6edd(_0x1030bd, _0x3e6edd(_0x3e6edd(_0x1f269c(_0x7db70, _0x3ad200, _0x5cc183), _0x14b8eb), _0x2f65cf));
    return _0x3e6edd(_0x557e33(_0x1030bd, _0x3780e1), _0x7db70);
  }
  function _0x2524ce(_0x3ddc47) {
    {
      var _0x531f72;
      var _0x1d93fe = _0x3ddc47.length;
      var _0x569659 = _0x1d93fe + 8;
      var _0x46f848 = (_0x569659 - _0x569659 % 64) / 64;
      var _0x1786d4 = (_0x46f848 + 1) * 16;
      var _0x574991 = Array(_0x1786d4 - 1);
      var _0x395c7a = 0;
      var _0x46ed63 = 0;
      while (_0x46ed63 < _0x1d93fe) {
        _0x531f72 = (_0x46ed63 - _0x46ed63 % 4) / 4;
        _0x395c7a = _0x46ed63 % 4 * 8;
        _0x574991[_0x531f72] = _0x574991[_0x531f72] | _0x3ddc47.charCodeAt(_0x46ed63) << _0x395c7a;
        _0x46ed63++;
      }
      _0x531f72 = (_0x46ed63 - _0x46ed63 % 4) / 4;
      _0x395c7a = _0x46ed63 % 4 * 8;
      _0x574991[_0x531f72] = _0x574991[_0x531f72] | 128 << _0x395c7a;
      _0x574991[_0x1786d4 - 2] = _0x1d93fe << 3;
      _0x574991[_0x1786d4 - 1] = _0x1d93fe >>> 29;
      return _0x574991;
    }
  }
  function _0x675d74(_0x6557a7) {
    var _0x3ecf63 = "",
      _0x506af0 = "",
      _0x16e9b1,
      _0x279017;
    for (_0x279017 = 0; _0x279017 <= 3; _0x279017++) {
      _0x16e9b1 = _0x6557a7 >>> _0x279017 * 8 & 255;
      _0x506af0 = "0" + _0x16e9b1.toString(16);
      _0x3ecf63 = _0x3ecf63 + _0x506af0.substr(_0x506af0.length - 2, 2);
    }
    return _0x3ecf63;
  }
  function _0x2f9288(_0x576b22) {
    _0x576b22 = _0x576b22.replace(/\r\n/g, "\n");
    var _0x113133 = "";
    for (var _0x32b9b7 = 0; _0x32b9b7 < _0x576b22.length; _0x32b9b7++) {
      {
        var _0x346bc3 = _0x576b22.charCodeAt(_0x32b9b7);
        if (_0x346bc3 < 128) {
          _0x113133 += String.fromCharCode(_0x346bc3);
        } else _0x346bc3 > 127 && _0x346bc3 < 2048 ? (_0x113133 += String.fromCharCode(_0x346bc3 >> 6 | 192), _0x113133 += String.fromCharCode(_0x346bc3 & 63 | 128)) : (_0x113133 += String.fromCharCode(_0x346bc3 >> 12 | 224), _0x113133 += String.fromCharCode(_0x346bc3 >> 6 & 63 | 128), _0x113133 += String.fromCharCode(_0x346bc3 & 63 | 128));
      }
    }
    return _0x113133;
  }
  var _0x3d83e9 = Array(),
    _0x8c725f,
    _0x4feb35,
    _0x9a68de,
    _0x9701eb,
    _0x336f59,
    _0x11fd63,
    _0x3a5d12,
    _0x5857d5,
    _0x228828,
    _0x2b02bf = 7,
    _0x2ad611 = 12,
    _0x1d1e9a = 17,
    _0x1dc291 = 22,
    _0x15791b = 5,
    _0x57f883 = 9,
    _0x5a8474 = 14,
    _0x216a8e = 20,
    _0x511457 = 4,
    _0x423725 = 11,
    _0x1abaf8 = 16,
    _0x5b555e = 23,
    _0x176208 = 6,
    _0x53c745 = 10,
    _0x46988d = 15,
    _0xca9118 = 21;
  _0x1dbaa8 = _0x2f9288(_0x1dbaa8);
  _0x3d83e9 = _0x2524ce(_0x1dbaa8);
  _0x11fd63 = 1732584193;
  _0x3a5d12 = 4023233417;
  _0x5857d5 = 2562383102;
  _0x228828 = 271733878;
  for (_0x8c725f = 0; _0x8c725f < _0x3d83e9.length; _0x8c725f += 16) {
    _0x4feb35 = _0x11fd63;
    _0x9a68de = _0x3a5d12;
    _0x9701eb = _0x5857d5;
    _0x336f59 = _0x228828;
    _0x11fd63 = _0x3f61ea(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 0], _0x2b02bf, 3614090360);
    _0x228828 = _0x3f61ea(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 1], _0x2ad611, 3905402710);
    _0x5857d5 = _0x3f61ea(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 2], _0x1d1e9a, 606105819);
    _0x3a5d12 = _0x3f61ea(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 3], _0x1dc291, 3250441966);
    _0x11fd63 = _0x3f61ea(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 4], _0x2b02bf, 4118548399);
    _0x228828 = _0x3f61ea(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 5], _0x2ad611, 1200080426);
    _0x5857d5 = _0x3f61ea(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 6], _0x1d1e9a, 2821735955);
    _0x3a5d12 = _0x3f61ea(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 7], _0x1dc291, 4249261313);
    _0x11fd63 = _0x3f61ea(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 8], _0x2b02bf, 1770035416);
    _0x228828 = _0x3f61ea(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 9], _0x2ad611, 2336552879);
    _0x5857d5 = _0x3f61ea(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 10], _0x1d1e9a, 4294925233);
    _0x3a5d12 = _0x3f61ea(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 11], _0x1dc291, 2304563134);
    _0x11fd63 = _0x3f61ea(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 12], _0x2b02bf, 1804603682);
    _0x228828 = _0x3f61ea(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 13], _0x2ad611, 4254626195);
    _0x5857d5 = _0x3f61ea(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 14], _0x1d1e9a, 2792965006);
    _0x3a5d12 = _0x3f61ea(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 15], _0x1dc291, 1236535329);
    _0x11fd63 = _0x421bbf(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 1], _0x15791b, 4129170786);
    _0x228828 = _0x421bbf(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 6], _0x57f883, 3225465664);
    _0x5857d5 = _0x421bbf(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 11], _0x5a8474, 643717713);
    _0x3a5d12 = _0x421bbf(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 0], _0x216a8e, 3921069994);
    _0x11fd63 = _0x421bbf(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 5], _0x15791b, 3593408605);
    _0x228828 = _0x421bbf(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 10], _0x57f883, 38016083);
    _0x5857d5 = _0x421bbf(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 15], _0x5a8474, 3634488961);
    _0x3a5d12 = _0x421bbf(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 4], _0x216a8e, 3889429448);
    _0x11fd63 = _0x421bbf(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 9], _0x15791b, 568446438);
    _0x228828 = _0x421bbf(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 14], _0x57f883, 3275163606);
    _0x5857d5 = _0x421bbf(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 3], _0x5a8474, 4107603335);
    _0x3a5d12 = _0x421bbf(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 8], _0x216a8e, 1163531501);
    _0x11fd63 = _0x421bbf(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 13], _0x15791b, 2850285829);
    _0x228828 = _0x421bbf(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 2], _0x57f883, 4243563512);
    _0x5857d5 = _0x421bbf(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 7], _0x5a8474, 1735328473);
    _0x3a5d12 = _0x421bbf(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 12], _0x216a8e, 2368359562);
    _0x11fd63 = _0xe47de4(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 5], _0x511457, 4294588738);
    _0x228828 = _0xe47de4(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 8], _0x423725, 2272392833);
    _0x5857d5 = _0xe47de4(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 11], _0x1abaf8, 1839030562);
    _0x3a5d12 = _0xe47de4(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 14], _0x5b555e, 4259657740);
    _0x11fd63 = _0xe47de4(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 1], _0x511457, 2763975236);
    _0x228828 = _0xe47de4(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 4], _0x423725, 1272893353);
    _0x5857d5 = _0xe47de4(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 7], _0x1abaf8, 4139469664);
    _0x3a5d12 = _0xe47de4(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 10], _0x5b555e, 3200236656);
    _0x11fd63 = _0xe47de4(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 13], _0x511457, 681279174);
    _0x228828 = _0xe47de4(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 0], _0x423725, 3936430074);
    _0x5857d5 = _0xe47de4(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 3], _0x1abaf8, 3572445317);
    _0x3a5d12 = _0xe47de4(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 6], _0x5b555e, 76029189);
    _0x11fd63 = _0xe47de4(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 9], _0x511457, 3654602809);
    _0x228828 = _0xe47de4(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 12], _0x423725, 3873151461);
    _0x5857d5 = _0xe47de4(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 15], _0x1abaf8, 530742520);
    _0x3a5d12 = _0xe47de4(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 2], _0x5b555e, 3299628645);
    _0x11fd63 = _0x5247f0(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 0], _0x176208, 4096336452);
    _0x228828 = _0x5247f0(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 7], _0x53c745, 1126891415);
    _0x5857d5 = _0x5247f0(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 14], _0x46988d, 2878612391);
    _0x3a5d12 = _0x5247f0(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 5], _0xca9118, 4237533241);
    _0x11fd63 = _0x5247f0(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 12], _0x176208, 1700485571);
    _0x228828 = _0x5247f0(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 3], _0x53c745, 2399980690);
    _0x5857d5 = _0x5247f0(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 10], _0x46988d, 4293915773);
    _0x3a5d12 = _0x5247f0(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 1], _0xca9118, 2240044497);
    _0x11fd63 = _0x5247f0(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 8], _0x176208, 1873313359);
    _0x228828 = _0x5247f0(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 15], _0x53c745, 4264355552);
    _0x5857d5 = _0x5247f0(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 6], _0x46988d, 2734768916);
    _0x3a5d12 = _0x5247f0(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 13], _0xca9118, 1309151649);
    _0x11fd63 = _0x5247f0(_0x11fd63, _0x3a5d12, _0x5857d5, _0x228828, _0x3d83e9[_0x8c725f + 4], _0x176208, 4149444226);
    _0x228828 = _0x5247f0(_0x228828, _0x11fd63, _0x3a5d12, _0x5857d5, _0x3d83e9[_0x8c725f + 11], _0x53c745, 3174756917);
    _0x5857d5 = _0x5247f0(_0x5857d5, _0x228828, _0x11fd63, _0x3a5d12, _0x3d83e9[_0x8c725f + 2], _0x46988d, 718787259);
    _0x3a5d12 = _0x5247f0(_0x3a5d12, _0x5857d5, _0x228828, _0x11fd63, _0x3d83e9[_0x8c725f + 9], _0xca9118, 3951481745);
    _0x11fd63 = _0x3e6edd(_0x11fd63, _0x4feb35);
    _0x3a5d12 = _0x3e6edd(_0x3a5d12, _0x9a68de);
    _0x5857d5 = _0x3e6edd(_0x5857d5, _0x9701eb);
    _0x228828 = _0x3e6edd(_0x228828, _0x336f59);
  }
  var _0x38a6f5 = _0x675d74(_0x11fd63) + _0x675d74(_0x3a5d12) + _0x675d74(_0x5857d5) + _0x675d74(_0x228828);
  return _0x38a6f5.toLowerCase();
};
function MD5Encrypt(_0x2b5c17) {
  function _0x208a8d(_0x301333, _0x20e65b) {
    return _0x301333 << _0x20e65b | _0x301333 >>> 32 - _0x20e65b;
  }
  function _0x70b0c7(_0x2f76dd, _0x44090e) {
    {
      var _0x4e2368, _0x13950e, _0x177aac, _0x47a373, _0x2b455e;
      _0x177aac = 2147483648 & _0x2f76dd;
      _0x47a373 = 2147483648 & _0x44090e;
      _0x4e2368 = 1073741824 & _0x2f76dd;
      _0x13950e = 1073741824 & _0x44090e;
      _0x2b455e = (1073741823 & _0x2f76dd) + (1073741823 & _0x44090e);
      return _0x4e2368 & _0x13950e ? 2147483648 ^ _0x2b455e ^ _0x177aac ^ _0x47a373 : _0x4e2368 | _0x13950e ? 1073741824 & _0x2b455e ? 3221225472 ^ _0x2b455e ^ _0x177aac ^ _0x47a373 : 1073741824 ^ _0x2b455e ^ _0x177aac ^ _0x47a373 : _0x2b455e ^ _0x177aac ^ _0x47a373;
    }
  }
  function _0x3b0bc2(_0xd7dfb4, _0x1ea176, _0x16be1c) {
    return _0xd7dfb4 & _0x1ea176 | ~_0xd7dfb4 & _0x16be1c;
  }
  function _0x147dad(_0x255dea, _0x3edf0a, _0xb112e2) {
    return _0x255dea & _0xb112e2 | _0x3edf0a & ~_0xb112e2;
  }
  function _0x879974(_0xd257df, _0x220ab7, _0x3d3498) {
    return _0xd257df ^ _0x220ab7 ^ _0x3d3498;
  }
  function _0x1f985b(_0x5a0593, _0x59304f, _0x4d7033) {
    return _0x59304f ^ (_0x5a0593 | ~_0x4d7033);
  }
  function _0xa6d551(_0x13ae9c, _0x47c81f, _0x555db3, _0x397b2f, _0x2db4e6, _0x8409c3, _0x52fdad) {
    _0x13ae9c = _0x70b0c7(_0x13ae9c, _0x70b0c7(_0x70b0c7(_0x3b0bc2(_0x47c81f, _0x555db3, _0x397b2f), _0x2db4e6), _0x52fdad));
    return _0x70b0c7(_0x208a8d(_0x13ae9c, _0x8409c3), _0x47c81f);
  }
  function _0x1c40dd(_0x598a0f, _0x1616ab, _0x355051, _0x3d9c31, _0x58345c, _0x4fc558, _0x449ff4) {
    _0x598a0f = _0x70b0c7(_0x598a0f, _0x70b0c7(_0x70b0c7(_0x147dad(_0x1616ab, _0x355051, _0x3d9c31), _0x58345c), _0x449ff4));
    return _0x70b0c7(_0x208a8d(_0x598a0f, _0x4fc558), _0x1616ab);
  }
  function _0x3d6d90(_0x364bf9, _0x3e4b4b, _0x28e22e, _0x4ef1b3, _0x1dd96f, _0x2fd1a4, _0x27710d) {
    _0x364bf9 = _0x70b0c7(_0x364bf9, _0x70b0c7(_0x70b0c7(_0x879974(_0x3e4b4b, _0x28e22e, _0x4ef1b3), _0x1dd96f), _0x27710d));
    return _0x70b0c7(_0x208a8d(_0x364bf9, _0x2fd1a4), _0x3e4b4b);
  }
  function _0x37a9e4(_0x2c2c49, _0x6f584d, _0x410fc6, _0xbd9c77, _0xa12bd7, _0x105960, _0x21e781) {
    _0x2c2c49 = _0x70b0c7(_0x2c2c49, _0x70b0c7(_0x70b0c7(_0x1f985b(_0x6f584d, _0x410fc6, _0xbd9c77), _0xa12bd7), _0x21e781));
    return _0x70b0c7(_0x208a8d(_0x2c2c49, _0x105960), _0x6f584d);
  }
  function _0x49efdf(_0x207eda) {
    {
      for (var _0x58abe6, _0x5439fd = _0x207eda.length, _0x2e779d = _0x5439fd + 8, _0xda48ca = (_0x2e779d - _0x2e779d % 64) / 64, _0x291ad0 = 16 * (_0xda48ca + 1), _0x20d670 = new Array(_0x291ad0 - 1), _0x54c172 = 0, _0x46ff24 = 0; _0x5439fd > _0x46ff24;) _0x58abe6 = (_0x46ff24 - _0x46ff24 % 4) / 4, _0x54c172 = _0x46ff24 % 4 * 8, _0x20d670[_0x58abe6] = _0x20d670[_0x58abe6] | _0x207eda.charCodeAt(_0x46ff24) << _0x54c172, _0x46ff24++;
      _0x58abe6 = (_0x46ff24 - _0x46ff24 % 4) / 4;
      _0x54c172 = _0x46ff24 % 4 * 8;
      _0x20d670[_0x58abe6] = _0x20d670[_0x58abe6] | 128 << _0x54c172;
      _0x20d670[_0x291ad0 - 2] = _0x5439fd << 3;
      _0x20d670[_0x291ad0 - 1] = _0x5439fd >>> 29;
      return _0x20d670;
    }
  }
  function _0x305f70(_0x385774) {
    var _0x5b2a8c,
      _0x1323b3,
      _0x313b70 = "",
      _0xd0fb81 = "";
    for (_0x1323b3 = 0; 3 >= _0x1323b3; _0x1323b3++) _0x5b2a8c = _0x385774 >>> 8 * _0x1323b3 & 255, _0xd0fb81 = "0" + _0x5b2a8c.toString(16), _0x313b70 += _0xd0fb81.substr(_0xd0fb81.length - 2, 2);
    return _0x313b70;
  }
  function _0x437a2a(_0x131fff) {
    {
      _0x131fff = _0x131fff.replace(/\r\n/g, "\n");
      for (var _0x4b6b3e = "", _0xfa4830 = 0; _0xfa4830 < _0x131fff.length; _0xfa4830++) {
        {
          var _0x3f2d18 = _0x131fff.charCodeAt(_0xfa4830);
          128 > _0x3f2d18 ? _0x4b6b3e += String.fromCharCode(_0x3f2d18) : _0x3f2d18 > 127 && 2048 > _0x3f2d18 ? (_0x4b6b3e += String.fromCharCode(_0x3f2d18 >> 6 | 192), _0x4b6b3e += String.fromCharCode(63 & _0x3f2d18 | 128)) : (_0x4b6b3e += String.fromCharCode(_0x3f2d18 >> 12 | 224), _0x4b6b3e += String.fromCharCode(_0x3f2d18 >> 6 & 63 | 128), _0x4b6b3e += String.fromCharCode(63 & _0x3f2d18 | 128));
        }
      }
      return _0x4b6b3e;
    }
  }
  var _0x3dc873,
    _0x1cad72,
    _0x11f34c,
    _0x6afae,
    _0x56f04b,
    _0xb8df00,
    _0xcadfd5,
    _0x53ba2e,
    _0x33b508,
    _0x43175b = [],
    _0x333d94 = 7,
    _0x1df58e = 12,
    _0x5a91ac = 17,
    _0x68a00f = 22,
    _0x11b5e3 = 5,
    _0x3f63be = 9,
    _0x2407ca = 14,
    _0x22e036 = 20,
    _0x4d113c = 4,
    _0xd7e74a = 11,
    _0x11f0e6 = 16,
    _0x3cfd47 = 23,
    _0x10fe75 = 6,
    _0x1be31b = 10,
    _0x12f82a = 15,
    _0x179465 = 21;
  for (_0x2b5c17 = _0x437a2a(_0x2b5c17), _0x43175b = _0x49efdf(_0x2b5c17), _0xb8df00 = 1732584193, _0xcadfd5 = 4023233417, _0x53ba2e = 2562383102, _0x33b508 = 271733878, _0x3dc873 = 0; _0x3dc873 < _0x43175b.length; _0x3dc873 += 16) _0x1cad72 = _0xb8df00, _0x11f34c = _0xcadfd5, _0x6afae = _0x53ba2e, _0x56f04b = _0x33b508, _0xb8df00 = _0xa6d551(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 0], _0x333d94, 3614090360), _0x33b508 = _0xa6d551(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 1], _0x1df58e, 3905402710), _0x53ba2e = _0xa6d551(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 2], _0x5a91ac, 606105819), _0xcadfd5 = _0xa6d551(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 3], _0x68a00f, 3250441966), _0xb8df00 = _0xa6d551(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 4], _0x333d94, 4118548399), _0x33b508 = _0xa6d551(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 5], _0x1df58e, 1200080426), _0x53ba2e = _0xa6d551(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 6], _0x5a91ac, 2821735955), _0xcadfd5 = _0xa6d551(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 7], _0x68a00f, 4249261313), _0xb8df00 = _0xa6d551(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 8], _0x333d94, 1770035416), _0x33b508 = _0xa6d551(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 9], _0x1df58e, 2336552879), _0x53ba2e = _0xa6d551(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 10], _0x5a91ac, 4294925233), _0xcadfd5 = _0xa6d551(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 11], _0x68a00f, 2304563134), _0xb8df00 = _0xa6d551(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 12], _0x333d94, 1804603682), _0x33b508 = _0xa6d551(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 13], _0x1df58e, 4254626195), _0x53ba2e = _0xa6d551(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 14], _0x5a91ac, 2792965006), _0xcadfd5 = _0xa6d551(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 15], _0x68a00f, 1236535329), _0xb8df00 = _0x1c40dd(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 1], _0x11b5e3, 4129170786), _0x33b508 = _0x1c40dd(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 6], _0x3f63be, 3225465664), _0x53ba2e = _0x1c40dd(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 11], _0x2407ca, 643717713), _0xcadfd5 = _0x1c40dd(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 0], _0x22e036, 3921069994), _0xb8df00 = _0x1c40dd(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 5], _0x11b5e3, 3593408605), _0x33b508 = _0x1c40dd(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 10], _0x3f63be, 38016083), _0x53ba2e = _0x1c40dd(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 15], _0x2407ca, 3634488961), _0xcadfd5 = _0x1c40dd(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 4], _0x22e036, 3889429448), _0xb8df00 = _0x1c40dd(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 9], _0x11b5e3, 568446438), _0x33b508 = _0x1c40dd(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 14], _0x3f63be, 3275163606), _0x53ba2e = _0x1c40dd(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 3], _0x2407ca, 4107603335), _0xcadfd5 = _0x1c40dd(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 8], _0x22e036, 1163531501), _0xb8df00 = _0x1c40dd(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 13], _0x11b5e3, 2850285829), _0x33b508 = _0x1c40dd(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 2], _0x3f63be, 4243563512), _0x53ba2e = _0x1c40dd(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 7], _0x2407ca, 1735328473), _0xcadfd5 = _0x1c40dd(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 12], _0x22e036, 2368359562), _0xb8df00 = _0x3d6d90(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 5], _0x4d113c, 4294588738), _0x33b508 = _0x3d6d90(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 8], _0xd7e74a, 2272392833), _0x53ba2e = _0x3d6d90(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 11], _0x11f0e6, 1839030562), _0xcadfd5 = _0x3d6d90(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 14], _0x3cfd47, 4259657740), _0xb8df00 = _0x3d6d90(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 1], _0x4d113c, 2763975236), _0x33b508 = _0x3d6d90(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 4], _0xd7e74a, 1272893353), _0x53ba2e = _0x3d6d90(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 7], _0x11f0e6, 4139469664), _0xcadfd5 = _0x3d6d90(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 10], _0x3cfd47, 3200236656), _0xb8df00 = _0x3d6d90(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 13], _0x4d113c, 681279174), _0x33b508 = _0x3d6d90(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 0], _0xd7e74a, 3936430074), _0x53ba2e = _0x3d6d90(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 3], _0x11f0e6, 3572445317), _0xcadfd5 = _0x3d6d90(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 6], _0x3cfd47, 76029189), _0xb8df00 = _0x3d6d90(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 9], _0x4d113c, 3654602809), _0x33b508 = _0x3d6d90(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 12], _0xd7e74a, 3873151461), _0x53ba2e = _0x3d6d90(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 15], _0x11f0e6, 530742520), _0xcadfd5 = _0x3d6d90(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 2], _0x3cfd47, 3299628645), _0xb8df00 = _0x37a9e4(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 0], _0x10fe75, 4096336452), _0x33b508 = _0x37a9e4(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 7], _0x1be31b, 1126891415), _0x53ba2e = _0x37a9e4(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 14], _0x12f82a, 2878612391), _0xcadfd5 = _0x37a9e4(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 5], _0x179465, 4237533241), _0xb8df00 = _0x37a9e4(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 12], _0x10fe75, 1700485571), _0x33b508 = _0x37a9e4(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 3], _0x1be31b, 2399980690), _0x53ba2e = _0x37a9e4(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 10], _0x12f82a, 4293915773), _0xcadfd5 = _0x37a9e4(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 1], _0x179465, 2240044497), _0xb8df00 = _0x37a9e4(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 8], _0x10fe75, 1873313359), _0x33b508 = _0x37a9e4(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 15], _0x1be31b, 4264355552), _0x53ba2e = _0x37a9e4(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 6], _0x12f82a, 2734768916), _0xcadfd5 = _0x37a9e4(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 13], _0x179465, 1309151649), _0xb8df00 = _0x37a9e4(_0xb8df00, _0xcadfd5, _0x53ba2e, _0x33b508, _0x43175b[_0x3dc873 + 4], _0x10fe75, 4149444226), _0x33b508 = _0x37a9e4(_0x33b508, _0xb8df00, _0xcadfd5, _0x53ba2e, _0x43175b[_0x3dc873 + 11], _0x1be31b, 3174756917), _0x53ba2e = _0x37a9e4(_0x53ba2e, _0x33b508, _0xb8df00, _0xcadfd5, _0x43175b[_0x3dc873 + 2], _0x12f82a, 718787259), _0xcadfd5 = _0x37a9e4(_0xcadfd5, _0x53ba2e, _0x33b508, _0xb8df00, _0x43175b[_0x3dc873 + 9], _0x179465, 3951481745), _0xb8df00 = _0x70b0c7(_0xb8df00, _0x1cad72), _0xcadfd5 = _0x70b0c7(_0xcadfd5, _0x11f34c), _0x53ba2e = _0x70b0c7(_0x53ba2e, _0x6afae), _0x33b508 = _0x70b0c7(_0x33b508, _0x56f04b);
  var _0x416dfa = _0x305f70(_0xb8df00) + _0x305f70(_0xcadfd5) + _0x305f70(_0x53ba2e) + _0x305f70(_0x33b508);
  return _0x416dfa.toLowerCase();
}
function AES_Encrypt(_0x57847f, _0x2a8c74, _0x299ece) {
  let _0x153a49 = CryptoJS.enc.Utf8.parse(_0x2a8c74 + _0x299ece),
    _0x1bf1d0 = CryptoJS.enc.Utf8.parse(_0x2a8c74 + _0x299ece),
    _0x37a2db = CryptoJS.AES.encrypt(_0x57847f, _0x153a49, {
      "iv": _0x1bf1d0,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }),
    _0x59b479 = CryptoJS.enc.Base64.stringify(_0x37a2db.ciphertext);
  return _0x59b479.toString();
}
function AES_Decrypt(_0x146f69, _0x1d10af, _0x276d0a) {
  let _0x2e4775 = CryptoJS.enc.Utf8.parse(_0x1d10af + _0x276d0a),
    _0x1f7874 = CryptoJS.enc.Utf8.parse(_0x1d10af + _0x276d0a),
    _0x3237d0 = CryptoJS.AES.decrypt(_0x146f69, _0x2e4775, {
      "iv": _0x1f7874,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }),
    _0x15d5b = _0x3237d0.toString(CryptoJS.enc.Utf8);
  return _0x15d5b.toString();
}
function RSAEncrypt(_0x3caafa) {
  const _0x4a560f = new NodeRSA(publicKeyStr);
  _0x4a560f.setOptions({
    "encryptionScheme": "pkcs1"
  });
  let _0x381d70 = _0x4a560f.encrypt(_0x3caafa, "base64", "utf8");
  return _0x381d70;
}
function Env(_0x1de274, _0x56653a) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2447f8 {
    constructor(_0x4d4a4a) {
      this.env = _0x4d4a4a;
    }
    ["send"](_0x5bee6e, _0x383635 = "GET") {
      _0x5bee6e = "string" == typeof _0x5bee6e ? {
        "url": _0x5bee6e
      } : _0x5bee6e;
      let _0x1e133b = this.get;
      "POST" === _0x383635 && (_0x1e133b = this.post);
      return new Promise((_0x2c975a, _0xbd06f4) => {
        _0x1e133b.call(this, _0x5bee6e, (_0x54e9d3, _0x2f6a97, _0x81312b) => {
          _0x54e9d3 ? _0xbd06f4(_0x54e9d3) : _0x2c975a(_0x2f6a97);
        });
      });
    }
    ["get"](_0x5aaaee) {
      return this.send.call(this.env, _0x5aaaee);
    }
    ["post"](_0x45431a) {
      return this.send.call(this.env, _0x45431a, "POST");
    }
  }
  return new class {
    constructor(_0x273a7d, _0x4743fe) {
      this.name = _0x273a7d;
      this.http = new _0x2447f8(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4743fe);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x516a4c, _0x5ce512 = null) {
      try {
        return JSON.parse(_0x516a4c);
      } catch {
        return _0x5ce512;
      }
    }
    ["toStr"](_0x208db2, _0x3b6a56 = null) {
      try {
        return JSON.stringify(_0x208db2);
      } catch {
        return _0x3b6a56;
      }
    }
    ["getjson"](_0x1ea357, _0x14ee88) {
      {
        let _0x40b88d = _0x14ee88;
        const _0x46d844 = this.getdata(_0x1ea357);
        if (_0x46d844) try {
          _0x40b88d = JSON.parse(this.getdata(_0x1ea357));
        } catch {}
        return _0x40b88d;
      }
    }
    ["setjson"](_0x39470f, _0x364d36) {
      try {
        return this.setdata(JSON.stringify(_0x39470f), _0x364d36);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x213850) {
      return new Promise(_0x33b833 => {
        this.get({
          "url": _0x213850
        }, (_0x2c9f59, _0x52b27e, _0x2d4e55) => _0x33b833(_0x2d4e55));
      });
    }
    ["runScript"](_0x4409c3, _0x13aded) {
      return new Promise(_0x3dde76 => {
        {
          let _0x4e152b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x4e152b = _0x4e152b ? _0x4e152b.replace(/\n/g, "").trim() : _0x4e152b;
          let _0xfb1d1a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0xfb1d1a = _0xfb1d1a ? 1 * _0xfb1d1a : 20;
          _0xfb1d1a = _0x13aded && _0x13aded.timeout ? _0x13aded.timeout : _0xfb1d1a;
          const [_0x5e4164, _0xef1afa] = _0x4e152b.split("@"),
            _0xaa605c = {
              "url": "http://" + _0xef1afa + "/v1/scripting/evaluate",
              "body": {
                "script_text": _0x4409c3,
                "mock_type": "cron",
                "timeout": _0xfb1d1a
              },
              "headers": {
                "X-Key": _0x5e4164,
                "Accept": "*/*"
              }
            };
          this.post(_0xaa605c, (_0x145c0f, _0x2db09a, _0x266399) => _0x3dde76(_0x266399));
        }
      }).catch(_0x4dd0ed => this.logErr(_0x4dd0ed));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x272ad8 = this.path.resolve(this.dataFile),
              _0x417a0e = this.path.resolve(process.cwd(), this.dataFile),
              _0x5ab8dc = this.fs.existsSync(_0x272ad8),
              _0x1cac02 = !_0x5ab8dc && this.fs.existsSync(_0x417a0e);
            if (!_0x5ab8dc && !_0x1cac02) return {};
            {
              {
                const _0x1932fd = _0x5ab8dc ? _0x272ad8 : _0x417a0e;
                try {
                  return JSON.parse(this.fs.readFileSync(_0x1932fd));
                } catch (_0x48024a) {
                  return {};
                }
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x4dee56 = this.path.resolve(this.dataFile),
              _0x393f57 = this.path.resolve(process.cwd(), this.dataFile),
              _0x454424 = this.fs.existsSync(_0x4dee56),
              _0x44e7a4 = !_0x454424 && this.fs.existsSync(_0x393f57),
              _0x1c891d = JSON.stringify(this.data);
            _0x454424 ? this.fs.writeFileSync(_0x4dee56, _0x1c891d) : _0x44e7a4 ? this.fs.writeFileSync(_0x393f57, _0x1c891d) : this.fs.writeFileSync(_0x4dee56, _0x1c891d);
          }
        }
      }
    }
    ["lodash_get"](_0x475409, _0x420900, _0x4854ba) {
      {
        const _0x370856 = _0x420900.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x467ff5 = _0x475409;
        for (const _0x5bfdd8 of _0x370856) if (_0x467ff5 = Object(_0x467ff5)[_0x5bfdd8], undefined === _0x467ff5) return _0x4854ba;
        return _0x467ff5;
      }
    }
    ["lodash_set"](_0x1a6639, _0x4150f5, _0x1d3494) {
      return Object(_0x1a6639) !== _0x1a6639 ? _0x1a6639 : (Array.isArray(_0x4150f5) || (_0x4150f5 = _0x4150f5.toString().match(/[^.[\]]+/g) || []), _0x4150f5.slice(0, -1).reduce((_0x3f2783, _0x254db1, _0x3d2417) => Object(_0x3f2783[_0x254db1]) === _0x3f2783[_0x254db1] ? _0x3f2783[_0x254db1] : _0x3f2783[_0x254db1] = Math.abs(_0x4150f5[_0x3d2417 + 1]) >> 0 == +_0x4150f5[_0x3d2417 + 1] ? [] : {}, _0x1a6639)[_0x4150f5[_0x4150f5.length - 1]] = _0x1d3494, _0x1a6639);
    }
    ["getdata"](_0xab0e74) {
      let _0x410678 = this.getval(_0xab0e74);
      if (/^@/.test(_0xab0e74)) {
        const [, _0x5ec3f4, _0x2534e8] = /^@(.*?)\.(.*?)$/.exec(_0xab0e74),
          _0x16c670 = _0x5ec3f4 ? this.getval(_0x5ec3f4) : "";
        if (_0x16c670) try {
          const _0xed0e90 = JSON.parse(_0x16c670);
          _0x410678 = _0xed0e90 ? this.lodash_get(_0xed0e90, _0x2534e8, "") : _0x410678;
        } catch (_0x5e774c) {
          _0x410678 = "";
        }
      }
      return _0x410678;
    }
    ["setdata"](_0xd6e63a, _0xe3882) {
      let _0x357987 = false;
      if (/^@/.test(_0xe3882)) {
        {
          const [, _0x17f6c7, _0x419b02] = /^@(.*?)\.(.*?)$/.exec(_0xe3882),
            _0x362036 = this.getval(_0x17f6c7),
            _0xb5da90 = _0x17f6c7 ? "null" === _0x362036 ? null : _0x362036 || "{}" : "{}";
          try {
            const _0x41f209 = JSON.parse(_0xb5da90);
            this.lodash_set(_0x41f209, _0x419b02, _0xd6e63a);
            _0x357987 = this.setval(JSON.stringify(_0x41f209), _0x17f6c7);
          } catch (_0x374502) {
            const _0x23df29 = {};
            this.lodash_set(_0x23df29, _0x419b02, _0xd6e63a);
            _0x357987 = this.setval(JSON.stringify(_0x23df29), _0x17f6c7);
          }
        }
      } else _0x357987 = this.setval(_0xd6e63a, _0xe3882);
      return _0x357987;
    }
    ["getval"](_0x34af88) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x34af88) : this.isQuanX() ? $prefs.valueForKey(_0x34af88) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x34af88]) : this.data && this.data[_0x34af88] || null;
    }
    ["setval"](_0x399cbf, _0x49ad61) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x399cbf, _0x49ad61) : this.isQuanX() ? $prefs.setValueForKey(_0x399cbf, _0x49ad61) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x49ad61] = _0x399cbf, this.writedata(), true) : this.data && this.data[_0x49ad61] || null;
    }
    ["initGotEnv"](_0x9ceb31) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x9ceb31 && (_0x9ceb31.headers = _0x9ceb31.headers ? _0x9ceb31.headers : {}, undefined === _0x9ceb31.headers.Cookie && undefined === _0x9ceb31.cookieJar && (_0x9ceb31.cookieJar = this.ckjar));
    }
    ["get"](_0x54518f, _0xe39383 = () => {}) {
      _0x54518f.headers && (delete _0x54518f.headers["Content-Type"], delete _0x54518f.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x54518f.headers = _0x54518f.headers || {}, Object.assign(_0x54518f.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x54518f, (_0x7f62fc, _0x4336d6, _0x2c6e50) => {
        !_0x7f62fc && _0x4336d6 && (_0x4336d6.body = _0x2c6e50, _0x4336d6.statusCode = _0x4336d6.status);
        _0xe39383(_0x7f62fc, _0x4336d6, _0x2c6e50);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x54518f.opts = _0x54518f.opts || {}, Object.assign(_0x54518f.opts, {
        "hints": false
      })), $task.fetch(_0x54518f).then(_0x920a2 => {
        const {
          statusCode: _0x53c2d9,
          statusCode: _0x2f7ad7,
          headers: _0x2a000d,
          body: _0x2d6f48
        } = _0x920a2;
        _0xe39383(null, {
          "status": _0x53c2d9,
          "statusCode": _0x2f7ad7,
          "headers": _0x2a000d,
          "body": _0x2d6f48
        }, _0x2d6f48);
      }, _0x1a9dc5 => _0xe39383(_0x1a9dc5))) : this.isNode() && (this.initGotEnv(_0x54518f), this.got(_0x54518f).on("redirect", (_0xda947, _0x35fe80) => {
        try {
          {
            if (_0xda947.headers["set-cookie"]) {
              {
                const _0xb7577 = _0xda947.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0xb7577 && this.ckjar.setCookieSync(_0xb7577, null);
                _0x35fe80.cookieJar = this.ckjar;
              }
            }
          }
        } catch (_0x160637) {
          this.logErr(_0x160637);
        }
      }).then(_0x3eff6a => {
        {
          const {
            statusCode: _0x4445d0,
            statusCode: _0x118dac,
            headers: _0xe3cd2f,
            body: _0x3789e2
          } = _0x3eff6a;
          _0xe39383(null, {
            "status": _0x4445d0,
            "statusCode": _0x118dac,
            "headers": _0xe3cd2f,
            "body": _0x3789e2
          }, _0x3789e2);
        }
      }, _0x8125b7 => {
        const {
          message: _0x50bb21,
          response: _0x346dee
        } = _0x8125b7;
        _0xe39383(_0x50bb21, _0x346dee, _0x346dee && _0x346dee.body);
      }));
    }
    ["post"](_0x312a25, _0xa673df = () => {}) {
      {
        if (_0x312a25.body && _0x312a25.headers && !_0x312a25.headers["Content-Type"] && (_0x312a25.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x312a25.headers && delete _0x312a25.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x312a25.headers = _0x312a25.headers || {}, Object.assign(_0x312a25.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(_0x312a25, (_0x2e644f, _0x3ba360, _0x5adabf) => {
          !_0x2e644f && _0x3ba360 && (_0x3ba360.body = _0x5adabf, _0x3ba360.statusCode = _0x3ba360.status);
          _0xa673df(_0x2e644f, _0x3ba360, _0x5adabf);
        });else {
          if (this.isQuanX()) _0x312a25.method = "POST", this.isNeedRewrite && (_0x312a25.opts = _0x312a25.opts || {}, Object.assign(_0x312a25.opts, {
            "hints": false
          })), $task.fetch(_0x312a25).then(_0x5cdf4e => {
            const {
              statusCode: _0x20f797,
              statusCode: _0x5a3e40,
              headers: _0x42b014,
              body: _0x504506
            } = _0x5cdf4e;
            _0xa673df(null, {
              "status": _0x20f797,
              "statusCode": _0x5a3e40,
              "headers": _0x42b014,
              "body": _0x504506
            }, _0x504506);
          }, _0x2f5ceb => _0xa673df(_0x2f5ceb));else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x312a25);
                const {
                  url: _0x8fc662,
                  ..._0x472a5f
                } = _0x312a25;
                this.got.post(_0x8fc662, _0x472a5f).then(_0x59a9c4 => {
                  {
                    const {
                      statusCode: _0x29ee12,
                      statusCode: _0x3d0ceb,
                      headers: _0x27c0c4,
                      body: _0x50a532
                    } = _0x59a9c4;
                    _0xa673df(null, {
                      "status": _0x29ee12,
                      "statusCode": _0x3d0ceb,
                      "headers": _0x27c0c4,
                      "body": _0x50a532
                    }, _0x50a532);
                  }
                }, _0x892a72 => {
                  const {
                    message: _0x36a2c2,
                    response: _0xb187c5
                  } = _0x892a72;
                  _0xa673df(_0x36a2c2, _0xb187c5, _0xb187c5 && _0xb187c5.body);
                });
              }
            }
          }
        }
      }
    }
    ["time"](_0x40eac5, _0xf037a1 = null) {
      {
        const _0x4adb17 = _0xf037a1 ? new Date(_0xf037a1) : new Date();
        let _0xb5d237 = {
          "M+": _0x4adb17.getMonth() + 1,
          "d+": _0x4adb17.getDate(),
          "H+": _0x4adb17.getHours(),
          "m+": _0x4adb17.getMinutes(),
          "s+": _0x4adb17.getSeconds(),
          "q+": Math.floor((_0x4adb17.getMonth() + 3) / 3),
          "S": _0x4adb17.getMilliseconds()
        };
        /(y+)/.test(_0x40eac5) && (_0x40eac5 = _0x40eac5.replace(RegExp.$1, (_0x4adb17.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x3b73b8 in _0xb5d237) new RegExp("(" + _0x3b73b8 + ")").test(_0x40eac5) && (_0x40eac5 = _0x40eac5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xb5d237[_0x3b73b8] : ("00" + _0xb5d237[_0x3b73b8]).substr(("" + _0xb5d237[_0x3b73b8]).length)));
        return _0x40eac5;
      }
    }
    ["msg"](_0x542195 = _0x1de274, _0xb7dd44 = "", _0x20da6e = "", _0x41c0a4) {
      {
        const _0x366aa9 = _0x29086a => {
          if (!_0x29086a) return _0x29086a;
          if ("string" == typeof _0x29086a) return this.isLoon() ? _0x29086a : this.isQuanX() ? {
            "open-url": _0x29086a
          } : this.isSurge() ? {
            "url": _0x29086a
          } : undefined;
          if ("object" == typeof _0x29086a) {
            if (this.isLoon()) {
              {
                let _0xea07ad = _0x29086a.openUrl || _0x29086a.url || _0x29086a["open-url"],
                  _0x6aaf2c = _0x29086a.mediaUrl || _0x29086a["media-url"];
                return {
                  "openUrl": _0xea07ad,
                  "mediaUrl": _0x6aaf2c
                };
              }
            }
            if (this.isQuanX()) {
              let _0x2c2477 = _0x29086a["open-url"] || _0x29086a.url || _0x29086a.openUrl,
                _0x21a041 = _0x29086a["media-url"] || _0x29086a.mediaUrl;
              return {
                "open-url": _0x2c2477,
                "media-url": _0x21a041
              };
            }
            if (this.isSurge()) {
              let _0x487031 = _0x29086a.url || _0x29086a.openUrl || _0x29086a["open-url"];
              return {
                "url": _0x487031
              };
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x542195, _0xb7dd44, _0x20da6e, _0x366aa9(_0x41c0a4)) : this.isQuanX() && $notify(_0x542195, _0xb7dd44, _0x20da6e, _0x366aa9(_0x41c0a4))), !this.isMuteLog) {
          let _0x40bb54 = ["", "==============📣系统通知📣=============="];
          _0x40bb54.push(_0x542195);
          _0xb7dd44 && _0x40bb54.push(_0xb7dd44);
          _0x20da6e && _0x40bb54.push(_0x20da6e);
          console.log(_0x40bb54.join("\n"));
          this.logs = this.logs.concat(_0x40bb54);
        }
      }
    }
    ["log"](..._0xfc5f5f) {
      _0xfc5f5f.length > 0 && (this.logs = [...this.logs, ..._0xfc5f5f]);
      console.log(_0xfc5f5f.join(this.logSeparator));
    }
    ["logErr"](_0x2bd7e6, _0x153f6f) {
      const _0x277ece = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x277ece ? this.log("", "❗️" + this.name + ", 错误!", _0x2bd7e6.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2bd7e6);
    }
    ["wait"](_0x4b6571) {
      return new Promise(_0x40e46e => setTimeout(_0x40e46e, _0x4b6571));
    }
    ["done"](_0x4973cd = {}) {
      const _0x5865b4 = new Date().getTime(),
        _0x2b9221 = (_0x5865b4 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2b9221 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4973cd);
    }
  }(_0x1de274, _0x56653a);
}
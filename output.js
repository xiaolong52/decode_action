//Thu Aug 08 2024 13:47:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let wangchao = process.env.wangchao,
  userList = [],
  articles = [],
  JSESSIONID = "",
  ACTIVITY_JSESSIONID = "";
main().catch(() => {}).finally(() => {});
async function main() {
  await loadDependencies();
  if (!(await checkEnv())) {
    return;
  }
  console.log("\n望潮每日抽奖");
  for (const [_0x700a2d, _0x25726e] of userList.entries()) {
    console.log("账号[" + (_0x700a2d + 1) + "]开始运行");
    await login(_0x25726e);
    await listUserArticle(_0x25726e);
    if (!articles) {
      return;
    }
    let _0x1dcd88 = true;
    for (const _0x31cb2d of articles) {
      _0x1dcd88 = _0x1dcd88 && _0x31cb2d.isRead;
    }
    if (!_0x1dcd88) {
      for (const _0x4634ea of articles) {
        await readArticle(_0x4634ea, _0x25726e);
        console.log("等待5秒");
        await delay(5000);
      }
    }
    await activityLogin(_0x25726e);
    if (!ACTIVITY_JSESSIONID) {
      return;
    }
    await finishActivity(_0x25726e);
    await userAwardRecordUpgrade(_0x25726e);
  }
}
async function login(_0x4d5e8d) {
  const _0x22dfac = "https://xmt.taizhou.com.cn/prod-api/user-read/app/login?id=" + _0x4d5e8d[0] + "&sessionId=" + _0x4d5e8d[1] + "&deviceId=" + _0x4d5e8d[2],
    _0x49975e = await got.get(_0x22dfac, {
      headers: {
        Host: "xmt.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
      }
    }),
    _0x2f67f7 = parseJSESSIONID(_0x49975e.rawHeaders);
  if (!_0x2f67f7) {
    console.log("获取JSESSIONID失败");
    return;
  }
  JSESSIONID = _0x2f67f7;
}
async function listUserArticle(_0x512558) {
  if (!JSESSIONID) {
    console.log("结束=listUserArticle");
    return;
  }
  const _0xc7b4d = "https://xmt.taizhou.com.cn/prod-api/user-read/list/" + getFormattedDate(),
    _0xf58a21 = await got.get(_0xc7b4d, {
      headers: {
        Host: "xmt.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        Cookie: "cookie=" + _0x512558[3] + "; tfstk=" + _0x512558[4] + "; JSESSIONID=" + JSESSIONID
      }
    }).json();
  if (_0xf58a21.code !== 200) {
    console.log("请求文章列表失败：" + _0xf58a21.message);
    return;
  }
  articles = _0xf58a21.data.articleIsReadList;
  console.log("请求文章列表成功");
}
async function readArticle(_0x3075f7, _0x376a47) {
  if (_0x3075f7.isRead === true) {
    console.log("已经阅读=" + _0x3075f7.title);
    return;
  }
  const _0x4ac701 = new Date().getTime(),
    _0x4cd3c3 = "https://xmt.taizhou.com.cn/prod-api/already-read/article?articid=" + _0x3075f7.id + "&timestamp=" + _0x4ac701 + "&signature=" + signature(_0x3075f7.id, _0x4ac701),
    _0x4ceb09 = await got.get(_0x4cd3c3, {
      headers: {
        Host: "xmt.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        Cookie: "cookie=" + _0x376a47[3] + "; tfstk=" + _0x376a47[4] + "; JSESSIONID=" + JSESSIONID
      }
    }).json();
  if (_0x4ceb09.code !== 200) {
    console.log("阅读文章失败：" + _0x4ceb09.message);
    return;
  }
  console.log("阅读文章成功=" + _0x3075f7.title);
}
async function activityLogin(_0x1e52c3) {
  const _0x4cb39a = "https://srv-app.taizhou.com.cn/tzrb/user/loginWC?accountId=" + _0x1e52c3[0] + "&sessionId=" + _0x1e52c3[1],
    _0x2eae59 = await got.get(_0x4cb39a, {
      headers: {
        Host: "srv-app.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://srv-app.taizhou.com.cn/luckdraw-ra-1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
      }
    }),
    _0x49bb29 = parseActivitySession(_0x2eae59.rawHeaders);
  if (!_0x49bb29) {
    console.log("活动登录失败：" + _0x2eae59.message);
    return;
  }
  ACTIVITY_JSESSIONID = _0x49bb29;
  console.log("活动登录成功");
}
async function finishActivity(_0x2e7673) {
  const _0xf0696 = "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/saveUpdate",
    _0x1c4be8 = await got.post(_0xf0696, {
      headers: {
        Host: "srv-app.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        Origin: "https://srv-app.taizhou.com.cn",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://srv-app.taizhou.com.cn/luckdraw-ra-1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        Cookie: "JSESSIONID=" + ACTIVITY_JSESSIONID + "; tfstk=" + _0x2e7673[4] + ".",
        "Content-type": "application/x-www-form-urlencoded"
      },
      form: {
        activityId: "67",
        sessionId: "undefined",
        sig: "undefined",
        token: "undefined"
      }
    }).json();
  if (_0x1c4be8.code !== 200) {
    console.log("保存失败：" + _0x1c4be8.message);
    return;
  }
  console.log("保存活动成功");
}
async function userAwardRecordUpgrade(_0x16113e) {
  const _0xed0a88 = "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/pageList?pageSize=10&pageNum=1&activityId=67",
    _0x3afc3e = await got.get(_0xed0a88, {
      headers: {
        Host: "srv-app.taizhou.com.cn",
        Connection: "keep-alive",
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; LE2110 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0",
        Accept: "*/*",
        "X-Requested-With": "com.shangc.tiennews.taizhou",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://srv-app.taizhou.com.cn/luckdraw-ra-1/",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        Cookie: "JSESSIONID=" + ACTIVITY_JSESSIONID + "; tfstk=" + _0x16113e[4] + "."
      }
    }).json();
  if (_0x3afc3e.code !== 200) {
    console.log("抽奖失败：" + _0x3afc3e.message);
    return;
  }
  console.log("抽奖活动完成=" + _0x3afc3e.data.records[0].awardName);
}
function getFormattedDate() {
  const _0x5f32de = new Date(),
    _0x2ba87e = _0x5f32de.getFullYear();
  let _0x38aec6 = _0x5f32de.getMonth() + 1;
  _0x38aec6 = _0x38aec6 < 10 ? "0" + _0x38aec6 : _0x38aec6;
  let _0x9291f8 = _0x5f32de.getDate();
  _0x9291f8 = _0x9291f8 < 10 ? "0" + _0x9291f8 : _0x9291f8;
  return "" + _0x2ba87e + _0x38aec6 + _0x9291f8;
}
async function checkEnv() {
  if (!wangchao) {
    console.log("找不到wangchao");
    return false;
  }
  const _0x57d2c1 = wangchao.split("&");
  for (const [_0x58fbec, _0xc786a4] of _0x57d2c1.entries()) {
    const _0x500336 = _0xc786a4.split("#");
    if (_0x500336.length !== 3) {
      console.log("账号" + (_0x58fbec + 1) + "规则错误");
      return false;
    }
    userList.push(_0x500336);
  }
  return true;
}
function parseJSESSIONID(_0x3700d) {
  const _0x2cbfed = {};
  for (let _0x2a5ae9 = 0; _0x2a5ae9 < _0x3700d.length; _0x2a5ae9 += 2) {
    _0x2cbfed[_0x3700d[_0x2a5ae9]] = _0x3700d[_0x2a5ae9 + 1];
  }
  const _0x40d827 = _0x2cbfed["Set-Cookie"];
  let _0x352548 = null;
  if (_0x40d827) {
    const _0x339a9a = _0x40d827.match(/JSESSIONID=([^;]+)/);
    _0x339a9a && (_0x352548 = _0x339a9a[1]);
  }
  return _0x352548;
}
function signature(_0x5774de, _0x5e905a) {
  const _0x1e151c = "&&" + _0x5774de + "&&TlGFQAOlCIVxnKopQnW&&" + _0x5e905a;
  return crypto.createHash("md5").update(_0x1e151c).digest("hex");
}
function delay(_0x5c45b6) {
  return new Promise(_0x432b6f => setTimeout(_0x432b6f, _0x5c45b6));
}
function parseActivitySession(_0x51cf4c) {
  for (let _0x56c0be = 0; _0x56c0be < _0x51cf4c.length; _0x56c0be += 2) {
    if (_0x51cf4c[_0x56c0be] === "Set-Cookie") {
      const _0x5133be = _0x51cf4c[_0x56c0be + 1],
        _0x1a5879 = _0x5133be.match(/JSESSIONID=([^;]+)/);
      if (_0x1a5879) {
        return _0x1a5879[1];
      }
    }
  }
}
async function loadDependencies() {
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    console.log("浏览器运行环境");
    const _0x170ef9 = await import("got"),
      _0x5d26b6 = await import("crypto");
    window.got = _0x170ef9.default;
    window.crypto = _0x5d26b6.default;
  } else {
    console.log("其他运行环境");
    const _0x3b2706 = await import("got"),
      _0x260697 = await import("crypto");
    global.got = _0x3b2706.default;
    global.crypto = _0x260697.default;
  }
}
//Sat May 10 2025 08:11:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.default = undefined;
var n = require("../@babel/runtime/helpers/typeof"),
  r = "length",
  t = "charCodeAt",
  e = "fromCharCode",
  i = "<Tps1II",
  a = "Sm(+Hf`",
  u = "1-m2+#-#",
  o = "u{rr!^t",
  f = "\\g4WelRa",
  c = "1.<~72)",
  s = "&%1i*'&,ogU(/<*=\"",
  h = ">3-;",
  w = "8BHH/EB;",
  v = "<;Ky:D<zK2N",
  d = "WTfG]XS",
  y = "swtV&{$\"m.((",
  l = "psmwkq\x7Fwm",
  x = "<4E OG\"AKM3MD@",
  S = "UR`4XQ[EoWY",
  m = "Va2_^X_Ui[",
  g = "PO_>VSH",
  b = "ol~_upk",
  A = "UVVZP\\XRB",
  p = {
    _x64Add: function (n, r) {
      n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]];
      var t = [0, 0, 0, 0];
      return t[3] += n[3] + r[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += n[2] + r[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += n[1] + r[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += n[0] + r[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]];
    },
    _x64Multiply: function (n, r) {
      n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]];
      var t = [0, 0, 0, 0];
      return t[3] += n[3] * r[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += n[2] * r[3], t[1] += t[2] >>> 16, t[2] &= 65535, t[2] += n[3] * r[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += n[1] * r[3], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += n[2] * r[2], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += n[3] * r[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += n[0] * r[3] + n[1] * r[2] + n[2] * r[1] + n[3] * r[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]];
    },
    _x64Rotl: function (n, r) {
      return 32 === (r %= 64) ? [n[1], n[0]] : r < 32 ? [n[0] << r | n[1] >>> 32 - r, n[1] << r | n[0] >>> 32 - r] : (r -= 32, [n[1] << r | n[0] >>> 32 - r, n[0] << r | n[1] >>> 32 - r]);
    },
    _x64LeftShift: function (n, r) {
      return 0 === (r %= 64) ? n : r < 32 ? [n[0] << r | n[1] >>> 32 - r, n[1] << r] : [n[1] << r - 32, 0];
    },
    _x64Xor: function (n, r) {
      return [n[0] ^ r[0], n[1] ^ r[1]];
    },
    _x64Fmix: function (n) {
      return n = this._x64Xor(n, [0, n[0] >>> 1]), n = this._x64Multiply(n, [4283543511, 3981806797]), n = this._x64Xor(n, [0, n[0] >>> 1]), n = this._x64Multiply(n, [3301882366, 444984403]), n = this._x64Xor(n, [0, n[0] >>> 1]);
    },
    hash128: function (n, e) {
      e = e || 0;
      for (var o = (n = n || K("", 39))[r] % 16, f = n[r] - o, c = [0, e], s = [0, e], h = [0, 0], w = [0, 0], v = [2277735313, 289559509], d = [1291169091, 658871167], y = 0; y < f; y += 16) h = [255 & n[t](y + 4) | (255 & n[t](y + 5)) << 8 | (255 & n[t](y + 6)) << 16 | (255 & n[t](y + 7)) << 24, 255 & n[t](y) | (255 & n[t](y + 1)) << 8 | (255 & n[t](y + 2)) << 16 | (255 & n[t](y + 3)) << 24], w = [255 & n[t](y + 12) | (255 & n[t](y + 13)) << 8 | (255 & n[t](y + 14)) << 16 | (255 & n[t](y + 15)) << 24, 255 & n[t](y + 8) | (255 & n[t](y + 9)) << 8 | (255 & n[t](y + 10)) << 16 | (255 & n[t](y + 11)) << 24], h = this[K("Ys2-Cj`ikclx", 87)](h, v), h = this[K("[u03Jnvo", 89)](h, 31), h = this[K("+Ec\\|D>G=52N", 41)](h, d), c = this[K("4Lhk)AA", 50)](c, h), c = this[K("6Nni-CMD", 52)](c, 27), c = this[K("]w61;gd", 91)](c, s), c = this[K("k$@CIuv", 10)](this[K("?Ywp)PJSAYFR", 61)](c, [0, 5]), [0, 1390208809]), w = this[K("-Gab~F<E?70L", 43)](w, d), w = this[K("|7QRk(4-", 27)](w, 33), w = this[K("Sm(+ElfoUmjf", 81)](w, v), s = this[K("Ys2-Vlj", 87)](s, w), s = this[K("-Gab$8D=", 43)](s, 31), s = this[K("2Jjew21", 48)](s, c), s = this[K("=WqrzGD", 59)](this[K("c}8;U|v\x7Fe}zv", 2)](s, [0, 5]), [0, 944331445]);
      switch (h = [0, 0], w = [0, 0], o) {
        case 15:
          w = this[K("$<X[x11", 34)](w, this[K("Ga\x7Fx0HH[3Y[EP", 69)]([0, n[t](y + 14)], 48));
        case 14:
          w = this[K("Vn/(Kco", 84)](w, this[K("x3MNa{&)d+)+\"", 23)]([0, n[t](y + 13)], 40));
        case 13:
          w = this[K("p+EFm$\"", 15)](w, this[K("8Plo!;9J$HH4A", 54)]([0, n[t](y + 12)], 32));
        case 12:
          w = this[K("f!?8[s\x7F", 5)](w, this[K("v1OHgy{+b)+v ", 21)]([0, n[t](y + 11)], 24));
        case 11:
          w = this[K(i, 58)](w, this[K("Ke #<TTg7]_Yl", 73)]([0, n[t](y + 10)], 16));
        case 10:
          w = this[K("d|9:Yqq", 3)](w, this[K("Tl)*E_]n@TTPe", 82)]([0, n[t](y + 9)], 8));
        case 9:
          w = this[K(";Usl0NH", 57)](w, [0, n[t](y + 8)]), w = this[K("Tl)*FognVlke", 82)](w, d), w = this[K("$<X[r1?6", 34)](w, 33), w = this[K("Oi$'9`ZcQiVb", 77)](w, v), s = this[K(a, 81)](s, w);
        case 8:
          h = this[K("e\x7F>9Zp~", 4)](h, this[K("`x56Icar\\``ly", 94)]([0, n[t](y + 7)], 56));
        case 7:
          h = this[K("h#=>e}}", 7)](h, this[K("Oi$'8PPcKQS]h", 77)]([0, n[t](y + 6)], 48));
        case 6:
          h = this[K("bz;4_ws", 1)](h, this[K("e\x7F>9Vnj}Qgegv", 4)]([0, n[t](y + 5)], 40));
        case 5:
          h = this[K(a, 81)](h, this[K("Wq,/@XXkCikU`", 85)]([0, n[t](y + 4)], 32));
        case 4:
          h = this[K("'A_X$2<", 37)](h, this[K("6Nni'9;L\"6J6G", 52)]([0, n[t](y + 3)], 24));
        case 3:
          h = this[K("}6VQr+7", 28)](h, this[K("Uo.)F^ZmAWUWf", 83)]([0, n[t](y + 2)], 16));
        case 2:
          h = this[K("H`|\x7FE]]", 70)](h, this[K(",D`c|75F(<<8M", 42)]([0, n[t](y + 1)], 8));
        case 1:
          h = this[K(i, 58)](h, [0, n[t](y)]), h = this[K("\":ZUk=)0$:%7", 32)](h, v), h = this[K("~9WPu*2+", 29)](h, 31), h = this[K("bz;4T}ipdzew", 1)](h, d), c = this[K(")C]^&<:", 39)](c, h);
      }
      return c = this[K("0Hdg-EE", 46)](c, [0, n[r]]), s = this[K("5Oij*@N", 51)](s, [0, n[r]]), c = this[K("Qk*%7SP", 79)](c, s), s = this[K("@Xtw&@C", 62)](s, c), c = this[K("Mg&!0^Qa", 75)](c), s = this[K("0Hdgr;<N", 46)](s), c = this[K("d|9:Blo", 3)](c, s), s = this[K("{4PSY$'", 26)](s, c), (K("10325476", 94) + (c[0] >>> 0)[K(u, 26)](16))[K("71/$-", 33)](-8) + (K("SRQPWVUT", 33) + (c[1] >>> 0)[K(" {\\#yq\x7Fu", 9)](16))[K("ysmjo", 4)](-8) + (K("JKHINOLM", 24) + (s[0] >>> 0)[K("!z]\"zp|t", 10)](16))[K("LD@?:", 54)](-8) + (K("KJIHONML", 25) + (s[1] >>> 0)[K("b\\CadRZR", 75)](16))[K("GA?4=", 49)](-8);
    }
  },
  //此函数是一个健壮的迭代器转换工具，适用于需要安全处理可迭代对象并可能限制元素数量的场景（如React组件解构props时的防御性编程）
  O = function (n, t) {
    if (Array.isArray(n)) return n;
    if (Symbol.iterator in Object(n)) return function (n, t) {
      var e = [],
        i = true,
        a = false,
        u = undefined;
      try {
        for (var o, f = n[Symbol.iterator()]; !(i = (o = f.next()).done) && (e.push(o.value), !t || e.length !== t); i = true);
      } catch (n) {
        a = true, u = n;
      } finally {
        try {
          !i && f.return && f.return();
        } finally {
          if (a) throw u;
        }
      }
      return e;
    }(n, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };

//版本号比较
function U(n, t) {
  // 将n和t按"."分割为数组
  let e = n.split(".");
  let i = t.split(".");

  // 确保数组长度一致，不足时填充"0"
  let a = Math.min(e.length, i.length);
  while (e.length < a) e.push("0");
  while (i.length < a) i.push("0");

  // 逐项比较数组元素
  for (let u = 0; u < a; u++) {
    let o = parseInt(e[u], 10);
    let f = parseInt(i[u], 10);
    if (o > f) return 1;
    if (o < f) return -1;
  }
  return 0;
}
function N(n, r) {
  return r.indexOf(n + ":ok") > -1;
}
var W = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  D = ["t", "d"];
function M(n) {
  return n[Math.floor(Math.random() * n.length)];
}
function k(n, r, t) {
  return n.slice(0, r) + t + n.slice(r);
}
function _(n, r) {
  return k(n, r, M(W));
}
function P(n) {
  var r = n.charAt(0),
    t = "ghijklmnopqrstuv".charAt("0123456789abcdef".indexOf(r));
  return _(_(_(n.replace(r, t), 4), 15), 24);
}
var I = [];

//基于格式校验的唯一值生成器,结合校验、变换和缓存机制，确保对特定格式输入生成唯一标识，适用于需要防重复和高唯一性的场景
function E(n) {
  if (23 === n.length && "0123456789abcdef".indexOf(n.charAt(0)) > -1 && "0123456789abcdef".indexOf(n.charAt(n.length - 1)) > -1) {
    var t = P(n);
    if (I.length < 1000) {
      for (; -1 !== I.indexOf(t);) t = P(n);
      return I.push(t), t;
    }
    for (I.splice(0, 1); -1 !== I.indexOf(t);) t = P(n);
    return I.push(t), t;
  }
  return n;
}

//通过预定义映射表 t，将输入字符串 n 中的数字和连字符转换为新字符，适用于需要可控字符替换的场景，但需严格确保输入合法性和映射表长度
function F(n, t) {
  for (var e = "", i = 0; i < n.length; i++) {
    var a = n.charAt(i);
    e += t.charAt("0123456789-".indexOf(a));
  }
  return e;
}

//通过字符映射、多层位移和密钥处理，将输入转换为高熵的加密字符串，适用于需要强唯一性和安全性的场景。实际行为依赖 _、k、M 的具体实现，但核心逻辑围绕字符替换和抗碰撞设计。
function q(n) {
  var r = _(_(_(F(n, "zhaosunweid"), 0), 4), 6);
  return _(_(_(function (n, r) {
    return k(n, r, M(D));
  }(r, 10), 15), 18), 25);
}

//是一个唯一标识符生成器，遵循 UUID v4 规范，结合时间戳、随机数和混淆逻辑生成 32 位唯一字符串。
//优先从微信小程序本地存储（wx.getStorageSync）读取 _cid 键的值。
//若值存在且长度为 32，直接返回（可能用于持久化唯一ID）
function Y() {
  var n = wx.getStorageSync(_cid);
  if (n && 32 === n.length) return n;
  var t = new Date().getTime(),
    e = undefined;
  try {
    e = performance && performance.now && 1000 * performance.now() || 0;
  } catch (n) {
    e = new Date().getTime().toString().slice(-9);
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (n) {
    var r = 16 * Math.random();
    return t > 0 ? (r = (t + r) % 16 | 0, t = Math.floor(t / 16)) : (r = (e + r) % 16 | 0, e = Math.floor(e / 16)), (n === K("q", 86) ? r : 3 & r | 8).toString(16);
  });
}

//是一个随机数字字符串生成器，其功能是生成一个由 n 位随机数字（0-9）组成的字符串。
//n：目标字符串的长度
function T(n) {
  for (var t = "", e = "0123456789", i = e.length, a = 0; a < n; a++) t += e.charAt(Math.floor(Math.random() * i));
  return t;
}

//是一个条件型随机数字生成器，根据输入参数 n 的布尔值，生成不同格式的 16 位数字字符串
//n：布尔值（或可被隐式转换为布尔值的类型），控制生成数字的首位奇偶性。
function H(n) {
  return n ? (2 * Math.floor(5 * Math.random()) + 1).toString() + T(15) : (2 * Math.floor(5 * Math.random())).toString() + T(15);
}
var j = {
  a: function () {},
  d: function () {},
  c: function (n, r, t) {},
  b: function () {}
};

//是一个二进制字符串解码器，用于从 ArrayBuffer 中提取指定偏移量的字符串数据。其核心逻辑是通过 4 字节长度前缀 定位字符串内容，并转换为可读文本。
//n: 类型化数组（如 Uint8Array），其 buffer 属性指向底层的 ArrayBuffer
//t: 整数偏移量，表示从 n.buffer 的哪个位置开始读取数据
function $(n, t) {
  var i = "",
    a = new Uint32Array(n.buffer, t, 1);
  if (a && a.length > 0) {
    var u = a[0];
    i = function (n) {
      for (var t = "", i = 0; i < n.length; i++) {
        var a = String.fromCharCode(n[i]);
        t = t.concat(a);
      }
      return t;
    }(new Uint8Array(n.buffer, t + 4, u));
  }
  return i;
}

//URL 安全的 Base64 编码解码器，支持 UTF-8 字符集，使用 - 和 _ 替代传统 Base64 的 + 和 /
var R = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  encode: function (n) {
    var e,
      i,
      a,
      u,
      o,
      f,
      c,
      s = "",
      h = 0;
    for (n = R._utf8_encode(n); h < n.length;) u = (e = n.charCodeAt(h++)) >> 2, o = (3 & e) << 4 | (i = n.charCodeAt(h++)) >> 4, f = (15 & i) << 2 | (a = n.charCodeAt(h++)) >> 6, c = 63 & a, isNaN(i) ? f = c = 64 : isNaN(a) && (c = 64), s = s + this._keyStr.charAt(u) + this._keyStr.charAt(o) + this._keyStr.charAt(f) + this._keyStr.charAt(c);
    return s;
  },
  decode: function (n) {
    var t,
      i,
      a,
      u,
      f,
      c,
      s = K("", 39),
      h = 0;
    for (n = n.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < n.length;) t = this._keyStr.indexOf(n.charAt(h++)) << 2 | (u = this._keyStr.indexOf(n.charAt(h++))) >> 4, i = (15 & u) << 4 | (f = this._keyStr.indexOf(n.charAt(h++))) >> 2, a = (3 & f) << 6 | (c = this._keyStr.indexOf(n.charAt(h++))), s += String.fromCharCode(t), 64 != f && (s += String.fromCharCode(i)), 64 != c && (s += String.fromCharCode(a));
    return s = R._utf8_decode(s);
  },
  _utf8_encode: function (n) {
    n = n.replace(/\r\n/g, "\n");
    for (var i = "", a = 0; a < n.length; a++) {
      var u = n.charCodeAt(a);
      u < 128 ? i += String.fromCharCode(u) : u > 127 && u < 2048 ? (i += String.fromCharCode(u >> 6 | 192), i += String.fromCharCode(63 & u | 128)) : (i += String.fromCharCode(u >> 12 | 224), i += String.fromCharCode(u >> 6 & 63 | 128), i += String.fromCharCode(63 & u | 128));
    }
    return i;
  },
  _utf8_decode: function (n) {
    for (var i = "", a = 0, u = c1 = c2 = 0; a < n.length;) (u = n.charCodeAt(a)) < 128 ? (i += String.fromCharCode(u), a++) : u > 191 && u < 224 ? (c2 = n.charCodeAt(a + 1), i += String.fromCharCode((31 & u) << 6 | 63 & c2), a += 2) : (c2 = n.charCodeAt(a + 1), c3 = n.charCodeAt(a + 2), i += String.fromCharCode((15 & u) << 12 | (63 & c2) << 6 | 63 & c3), a += 3);
    return i;
  }
};
function C(n) {
  this.message = n, this.name = "InitialException";
}
function J(n) {
  this.message = n, this.name = "DetectException";
}
var L = {
    W02: "-",
    W03: "-",
    W04: {},
    W5: "-",
    W6: "-",
    W7: "-",
    W8: "-",
    W9: "-",
    W10: false,
    W11: "-",
    W12: "-",
    W13: "-",
    W14: [],
    W15: [],
    W18: "-",
    W19: "-",
    W20: "-",
    W21: "-",
    W22: "-",
    W23: "-",
    W24: "-",
    W25: [],
    W26: [],
    W28: {},
    W29: {},
    W30: {},
    W31: "-",
    W32: "-",
    W33: "-",
    ct: [],
    to: 2500,
    alstTime: {}
  },
  V = {
    partner: "",
    app_name: "",
    channel: "",
    t: "",
    id: "",
    v: "",
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    i: "",
    idf: "",
    g: "",
    h: "",
    k: "",
    obsField: ""
  },
  Z = function (n) {
    //该代码定义了一个高阶函数 Z，用于将异步函数 n 封装为 Promise 接口，支持回调、画布绘制等多种异步模式
    return function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return new Promise(function (r) {
        t.isCb ? n(function (n) {
          r(n);
        }) : t.isCanvas ? (n.draw(false, function () {
          setTimeout(function () {
            r();
          }, 30);
        }), setTimeout(function () {
          r();
        }, 2 * (L.to || 16000) / 3)) : n(Object.assign({}, t, {
          success: r,
          fail: r
        }));
      });
    };
  };
function B(n) {
  var t = function () {
    for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", e = 0, i = n.length; e < 127; e++) t += n.charAt(Math.floor(Math.random() * i));
    var a = t.split("");
    return a.splice(Math.floor(Math.random() * (n.length - 1)), 0, "\\"), a.join("");
  }();
  L.W01 = t, L.alstTime.W01 = new Date().getTime() - n, wx.setStorage({
    key: _fmData,
    data: t
  });
}
function z(n) {
  var r = new Date().getTime();
  return L.alstTime.W01 = 0, Z(wx.getStorage)({
    key: _fmData
  }).then(function (t) {
    if (t.data) L.W01 = t.data;else {
      if (!n.fmData) return function (n) {
        if (wx.getFileSystemManager) {
          var r = wx.getFileSystemManager();
          return Z(r.readFile)({
            filePath: wx.env.USER_DATA_PATH + "/tdfp1.txt",
            encoding: "utf-8"
          }).then(function (r) {
            N.readFile, r.errMsg && r.data ? (L.W01 = r.data, L.alstTime.W01 = new Date().getTime() - n) : B(n);
          });
        }
        return B(n);
      }(r);
      L.W01 = n.fmData;
    }
    return L.alstTime.W01 = new Date().getTime() - r, false;
  });
}
function G(n) {
  return Z(wx[K("SUCQP2OAA", 61)])()[K("&xt#", 15)](function (r) {
    return N(K("_aO]dFSU]", 73), r[K("frqMpm", 94)]) ? function (n) {
      return Z(wx[K("HGW'TJIAL\\LN4GIE", 62)])()[K("gZZb", 80)](function (r) {
        N(K("/,>i330*#5''r< >", 37), r[K("guvLql", 0)]) ? (L[K("C#", 73)] = JSON[K("nnogmgbf|", 88)](r[K("4'!%", 26)]), L[K("EQU[<HWN", 65)][K("aj]^hjgYihlUk", 85)] = K("H", 21)) : L[K("4mr", 58)][K("%b", 43)] = r, L[K("@JPP7MJC", 60)][K("[;", 2)] = new Date()[K(".-9y41*", 36)]() - n;
      });
    }(n) : (L[K("Z25", 1)][K("E%", 75)] = r, false);
  });
}
function Q(n) {
  var r = new Date()[K("/,>x50+", 37)]();
  return (n[K("swhk\x7Fupr@uqdzt~-|z", 5)] === K("I\\^SS_WeEE", 69) || true === n[K("vxohzv\x7F\x7FC)tyuq}*\x7F\x7F", 8)]) && !!wx[K(s, 28)] && Z(wx[K("hgwNtadjBXHni~h{d", 94)])()[K(h, 39)](function (n) {
    N(K(s, 28), n[K("1?<{;6", 41)]) && n[K("} vqy\x7F$", 15)] !== K("f^^\\dmY", 78) && n[K(" w$}v z", 15)] !== K("npsijtwmfx{ab|\x7F", 58) ? (L[K("N)-", 84)] = JSON[K("!#\"u\x7Fqpt/", 11)](n[K("_cTW[Ye", 80)]), L[K("'`b", 45)] = JSON[K("EGF8D<=?C", 47)](n[K("qius`sh", 1)]) || K("", 70)) : L[K("}WX", 36)][K("\"Z`", 40)] = n, L[K("jt~~Ywpi", 7)][K("![c", 39)] = new Date()[K("IFT5OJA", 63)]() - r;
  });
}
function X(n) {
  return false === n[K("LL#ICKFJ7YH", 59)] ? Z(wx[K("bam=camZbUgT3QaS", 88)])()[K("D97=", 45)](function (n) {
    if (N(K("?<Ny@DN=O0@7w4B6", 53), n[K("r!\"Y%q", 11)])) {
      var r = n[K("mk\x7Fi", 7)] && n[K("[Yi[", 84)][K("$#z\x7F", 13)]();
      L[K("C}\x7F", 73)] = r ? p[K("/)8,S]X", 36)](r) : K("P", 33);
    } else L[K("nFI", 21)][K("W00", 93)] = n;
  }) : (L[K("'ac", 45)] = K("y", 74), false);
}
function K(n, i) {
  for (var a = "", u = 0; u < n[r]; u++) a += String[e]((95 + (n[t](u) - 32 ^ 31 & u) - i) % 95 + 30);
  return a;
}
function nn(n, r, t) {
  return new Promise(function (t) {
    wx[K("]Zjs_hHnFVmaLnhPZJ|q", 87)]({
      canvasId: n,
      success: t,
      fail: t
    }, r[K("dTYZ", 81)]);
  })[K("!usy", 10)](function (n) {
    return N(K("ts\"+v c&m\x7Ft)[wsyqc4j", 15), n[K("GUV,QL", 63)]) ? function (n, r) {
      var t = wx[K("_\\n=ea[LybfViHWiINOy", 85)]();
      return Z(t[K(v, 50)])({
        filePath: n
      })[K("B71?", 43)](function (n) {
        N(K(v, 50), n[K("Q_\\:[V", 73)]) ? (L[K("\\7:", 3)] = n[K("ekjepp", 94)], wx[K("gXjDlf`RSPMfnZ", 81)](K("$*0d\"6=!0", 34), L[K(".fk", 52)])) : L[K("yST", 32)][K("-gj", 51)] = n, L[K(" *00v-*#", 28)][K("F! ", 76)] = new Date()[K(d, 77)]() - r;
      });
    }(n[K("H8CG}8F>,<B7", 49)], t) : (L[K("+be", 49)][K("D|\"", 74)] = n, false);
  });
}
function rn(n) {
  var t = new Date()[K("ts br\x7Ft", 11)]();
  if (!n[K("'(\x7F}", 23)]) {
    var e = wx[K("wt'`!%%v\x7F|i!r~", 14)](K("AIM&GU^D]", 63));
    if (e && 32 === e[r]) return L[K(">v{", 68)] = e, L[K("WckiNZe\\", 83)][K(".fk", 52)] = new Date()[K("UR`AS^U", 75)]() - t, e;
    if (!n[K("eg8[ah^m", 84)] && n[K(")x\"~", 22)]) {
      var i = wx[K("hvhe}oNa{rlsDy}vzlk", 3)](K("wfdgu|bq", 1), n[K("RBKD", 63)]),
        a = i[K("P^PMeW?QS[DT8R@^FCIr", 74)](0, 0, 200, 0);
      return a[K(y, 16)](0, K(" ss", 11)), a[K("59:uGEEA/AIO", 49)](1, K("XHHVB", 62)), i[K("namB`baIg}mk", 88)](a), i[K("<>@A,>?M", 51)](10, 10, 70, 40), i[K("A2@w>86(2g05:\"", 43)](0.2), i[K("uftKokhR~rdl", 0)](K("w#)y", 19)), i[K("%))(t!$4", 28)](20, 20, 70, 40), i[K("?0Br1=>yHL2:", 41)](K("L9=<FO", 48)), i[K("lnpq\\no}", 4)](30, 30, 70, 40), i[K("7(:i46 \"8m:? (", 33)](1), i[K("%w$T~x{c.\"w}", 15)](K("&1'$+", 33)), i[K("o`rAoovHm\x7Fk", 89)](10), i[K("fhnoP`~s", 93)](K("-8;6ZVU,=[!<*7'=:(%=)G>$", 34), 15, 35), new Promise(function (r) {
        Z(i)({
          isCanvas: true
        })[K("sffn", 92)](function () {
          return nn(K("J;;4@I1N", 51), n, t);
        })[K(h, 39)](function () {
          r();
        }), setTimeout(function () {
          r();
        }, wx[K(";8J$LF@230-FN:", 49)](K("X^d8a_ZcSa{", 86)) ? 2 * (L[K("RL", 59)] || 16000) / 3 : 1000);
      });
    }
    return L[K(" XY", 38)] = K("B", 19), false;
  }
  return false;
}
function tn(n, r) {
  return !(!n[K(")&4n5 %1#8:i\"#?677", 31)] || r[K("15*%=+24m33&8: 0:8", 34)] !== K("TieXf`ZjP^", 80) && true !== r[K("} vq\"\x7F''Z.,r-)t#fd", 15)]) && Z(wx[K("ur!bw&%pt|", 12)])()[K(")}{ ", 18)](function (r) {
    return !!N(K("c`rLeuvbbj", 89), r[K("CQR(U@", 59)]) && !!(!n[K(",/!'", 28)] && r[K("9LNC/8JKIO5", 53)] && r[K("':8-|.<='='", 35)][K("<-::*S8;&2~3 '3=(&", 38)] || n[K(".1'%", 30)] && r[K("*')%)**#'t V><+`2 #5?1", 26)] && r[K("mhljtwi`zhgJyyf\\uefzzr", 93)][K("SBMSAhSTM[&DOLZF__", 61)]) && Z(wx[K("bamDn[Zhlcc", 88)])({
      altitude: true
    })[K("nc]k", 87)](function (n) {
      N(K("XWg>dQTbRiU", 78), n[K("lx{W~k", 5)]) ? L[K("[7>", 2)] = n : L[K("\"[\\", 40)][K("K'.", 81)] = n;
    });
  });
}
function en(n) {
  return !!(n[K("cUYeq&\"~(w", 14)] && U(n[K("`PZ`v%'qtr", 11)], K("\"|#+y%", 77)) > 0);
}
var an = {
  _keyStr: K("oqsqwqsq\x7Fqsqwqs/n000000000UKMOMKUWZT]_][UWUkmomkuwu{**VVZZ^^ZZ", 12) + "~/=",
  encode: function (n) {
    for (var e, i, a, u, o, f, c, s = K("", 72), h = 0; h < n[r];) u = (e = n[t](h++)) >> 2, o = (3 & e) << 4 | (i = n[t](h++)) >> 4, f = (15 & i) << 2 | (a = n[t](h++)) >> 6, c = 63 & a, isNaN(i) ? f = c = 64 : isNaN(a) && (c = 64), s = s + this[K(">KF[6VW", 60)][K("\"&\"2[6", 28)](u) + this[K("alexQsr", 0)][K("txp'V#", 15)](o) + this[K("3>;N#M@", 49)][K("gmguA}", 2)](f) + this[K("LYPeDdY", 74)][K("MSI_/[", 71)](c);
    return s;
  },
  decode: function (n) {
    var t,
      i,
      a,
      u,
      o,
      f,
      c = K("", 28),
      s = 0;
    for (n = n[K("E9A<03>", 48)](/[^A-Za-z0-9\~\/\=]/g, K("", 61)); s < n[r];) t = this[K("<I@U4TI", 58)][K("KQDD^4N", 63)](n[K("FJFV R", 64)](s++)) << 2 | (u = this[K("OZWjGad", 77)][K("DH=CW/G", 56)](n[K(",0(8m8", 38)](s++))) >> 4, i = (15 & u) << 4 | (o = this[K("lyp$d'&", 11)][K("bf_]uMY", 86)](n[K("*.*:c>", 36)](s++))) >> 2, a = (3 & o) << 6 | (f = this[K("1<5H!CB", 47)][K("PTIO[3K", 68)](n[K("IOE[#_", 67)](s++))), c += String[e](t), 64 != o && (c += String[e](i)), 64 != f && (c += String[e](a));
    return c;
  },
  _utf8_encode: function (n) {
    n = n[K(". .+x{'", 25)](/\r\n/g, "\n");
    for (var i = K("", 0), a = 0; a < n[r]; a++) {
      var u = n[t](a);
      u < 128 ? i += String[e](u) : u > 127 && u < 2048 ? (i += String[e](u >> 6 | 192), i += String[e](63 & u | 128)) : (i += String[e](u >> 12 | 224), i += String[e](u >> 6 & 63 | 128), i += String[e](63 & u | 128));
    }
    return i;
  },
  _utf8_decode: function (n) {
    for (var i = K("", 63), a = 0, u = c1 = c2 = 0; a < n[r];) (u = n[t](a)) < 128 ? (i += String[e](u), a++) : u > 191 && u < 224 ? (c2 = n[t](a + 1), i += String[e]((31 & u) << 6 | 63 & c2), a += 2) : (c2 = n[t](a + 1), c3 = n[t](a + 2), i += String[e]((15 & u) << 12 | (63 & c2) << 6 | 63 & c3), a += 3);
    return i;
  }
};
function un(n, i) {
  function a(n, i, a, u, o, f) {
    a && (i = unescape(encodeURIComponent(i)));
    var c,
      s,
      h,
      w,
      v,
      d,
      y,
      l,
      x,
      S,
      m,
      g,
      b,
      A = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756),
      p = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344),
      O = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584),
      U = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928),
      N = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080),
      W = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312),
      D = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154),
      M = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696),
      k = function (n) {
        for (var e, i, a, u = new Array(0, 4, 536870912, 536870912, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964), o = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697), f = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272), c = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144), s = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256), h = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488), w = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746), v = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568), d = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578), y = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488), l = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800), x = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744), S = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128), m = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261), g = n[r] > 8 ? 3 : 1, b = new Array(32 * g), A = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), p = 0, O = 0, U = 0; U < g; U++) {
          var N = n[t](p++) << 24 | n[t](p++) << 16 | n[t](p++) << 8 | n[t](p++),
            W = n[t](p++) << 24 | n[t](p++) << 16 | n[t](p++) << 8 | n[t](p++);
          N ^= (a = 252645135 & (N >>> 4 ^ W)) << 4, N ^= a = 65535 & ((W ^= a) >>> -16 ^ N), N ^= (a = 858993459 & (N >>> 2 ^ (W ^= a << -16))) << 2, N ^= a = 65535 & ((W ^= a) >>> -16 ^ N), N ^= (a = 1431655765 & (N >>> 1 ^ (W ^= a << -16))) << 1, N ^= a = 16711935 & ((W ^= a) >>> 8 ^ N), a = (N ^= (a = 1431655765 & (N >>> 1 ^ (W ^= a << 8))) << 1) << 8 | (W ^= a) >>> 20 & 240, N = W << 24 | W << 8 & 16711680 | W >>> 8 & 65280 | W >>> 24 & 240, W = a;
          for (var D = 0; D < A[r]; D++) A[D] ? (N = N << 2 | N >>> 26, W = W << 2 | W >>> 26) : (N = N << 1 | N >>> 27, W = W << 1 | W >>> 27), W &= -15, e = u[(N &= -15) >>> 28] | o[N >>> 24 & 15] | f[N >>> 20 & 15] | c[N >>> 16 & 15] | s[N >>> 12 & 15] | h[N >>> 8 & 15] | w[N >>> 4 & 15], i = v[W >>> 28] | d[W >>> 24 & 15] | y[W >>> 20 & 15] | l[W >>> 16 & 15] | x[W >>> 12 & 15] | S[W >>> 8 & 15] | m[W >>> 4 & 15], a = 65535 & (i >>> 16 ^ e), b[O++] = e ^ a, b[O++] = i ^ a << 16;
        }
        return b;
      }(n),
      _ = 0,
      P = undefined,
      I = i[r],
      E = 0,
      F = 32 == k[r] ? 3 : 9;
    l = 3 == F ? a ? new Array(0, 32, 2) : new Array(30, -2, -2) : a ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2), 2 == f ? i += K("?>=<;:98", 29) : 1 == f ? a && (h = 8 - I % 8, i += String[e](h, h, h, h, h, h, h, h), 8 === h && (I += 8)) : f || (i += "\0\0\0\0\0\0\0\0");
    var q = K("", 22),
      Y = K("", 56);
    for (1 == u && (x = o[t](_++) << 24 | o[t](_++) << 16 | o[t](_++) << 8 | o[t](_++), m = o[t](_++) << 24 | o[t](_++) << 16 | o[t](_++) << 8 | o[t](_++), _ = 0); _ < I;) {
      for (d = i[t](_++) << 24 | i[t](_++) << 16 | i[t](_++) << 8 | i[t](_++), y = i[t](_++) << 24 | i[t](_++) << 16 | i[t](_++) << 8 | i[t](_++), 1 == u && (a ? (d ^= x, y ^= m) : (S = x, g = m, x = d, m = y)), d ^= (h = 252645135 & (d >>> 4 ^ y)) << 4, d ^= (h = 65535 & (d >>> 16 ^ (y ^= h))) << 16, d ^= h = 858993459 & ((y ^= h) >>> 2 ^ d), d ^= h = 16711935 & ((y ^= h << 2) >>> 8 ^ d), d = (d ^= (h = 1431655765 & (d >>> 1 ^ (y ^= h << 8))) << 1) << 1 | d >>> 31, y = (y ^= h) << 1 | y >>> 31, s = 0; s < F; s += 3) {
        for (P = l[s + 1], b = l[s + 2], c = l[s]; c != P; c += b) w = y ^ k[c], v = (y >>> 4 | y << 28) ^ k[c + 1], h = d, d = y, y = h ^ (p[w >>> 24 & 63] | U[w >>> 16 & 63] | W[w >>> 8 & 63] | M[63 & w] | A[v >>> 24 & 63] | O[v >>> 16 & 63] | N[v >>> 8 & 63] | D[63 & v]);
        h = d, d = y, y = h;
      }
      y = y >>> 1 | y << 31, y ^= h = 1431655765 & ((d = d >>> 1 | d << 31) >>> 1 ^ y), y ^= (h = 16711935 & (y >>> 8 ^ (d ^= h << 1))) << 8, y ^= (h = 858993459 & (y >>> 2 ^ (d ^= h))) << 2, y ^= h = 65535 & ((d ^= h) >>> 16 ^ y), y ^= h = 252645135 & ((d ^= h << 16) >>> 4 ^ y), d ^= h << 4, 1 == u && (a ? (x = d, m = y) : (d ^= S, y ^= g)), Y += String[e](d >>> 24, d >>> 16 & 255, d >>> 8 & 255, 255 & d, y >>> 24, y >>> 16 & 255, y >>> 8 & 255, 255 & y), 512 == (E += 8) && (q += Y, Y = K("", 45), E = 0);
    }
    if (q = (q += Y)[K("TFPMG@A", 63)](/\0*$/g, K("", 35)), !a) {
      if (1 === f) {
        var T = 0;
        (I = q[r]) && (T = q[t](I - 1)), T <= 8 && (q = q[K("st`ppwoio", 93)](0, I - T));
      }
      q = decodeURIComponent(escape(q));
    }
    return q;
  }
  function u(n) {
    for (var t = n[r]; t < 24; t++) n += K("J", 24);
    return n;
  }
  var o = K("qsqwqsq\x7F", 62);
  return function (n, r) {
    var t = function (n, r, t) {
      return {
        key: u(n[K("6..%,", 32)](r, t)),
        vector: 1
      };
    }(r, 0, 24);
    return an[K("kukvnn", 4)](a(t[K("' 7", 25)], n, 1, 1, o, 0));
  }(n, i);
}
function on(n, r) {
  return function (n, r) {
    return un(n, r);
  }(n, r);
}
var fn = ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) === K("(62&2.77", 31) && n(Symbol[K("[gUgWcgc", 79)]) === K("pwh\\hl", 90) ? function (r) {
    return n(r);
  } : function (r) {
    return r && ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) === K("8FB6B>GG", 47) && r[K("6CCEC@N1OKO", 48)] === Symbol && r !== Symbol[K("VYWYQ_YQC", 67)] ? K(":A6*26", 36) : n(r);
  },
  cn = Object[K("EVUNOW", 65)] || function (n) {
    for (var t = 1; t < arguments[r]; t++) {
      var e = arguments[t];
      for (var i in e) Object[K(l, 93)][K(x, 49)][K("%\",-", 31)](e, i) && (n[i] = e[i]);
    }
    return n;
  },
  sn = function (n, t) {
    if (Array[K(":Es@G7L", 46)](n)) return n;
    if (Symbol[K("JTDPFPVT", 62)] in Object(n)) return function (n, t) {
      var e = [],
        i = true,
        a = false,
        u = undefined;
      try {
        for (var o, f = n[Symbol[K("\\fZfPbdb", 80)]](); !(i = (o = f[K("yq&#", 9)]())[K("-95-", 38)]) && (e[K("nrse", 91)](o[K("WCOUB", 62)]), !t || e[r] !== t); i = true);
      } catch (n) {
        a = true, u = n;
      } finally {
        try {
          !i && f[K("~p#!z\x7F", 10)] && f[K("B4FFF;", 45)]();
        } finally {
          if (a) throw u;
        }
      }
      return e;
    }(n, t);
    throw new TypeError(K("Dhs_caY}Tfekdfau\x7F{hLt{yzhGukq}dvjh*gkek[Unjqhd``LxLs", 88));
  },
  hn = K("", 20),
  wn = K("", 56),
  vn = 0,
  dn = 0;
function yn(n) {
  this[K("U]aO_moXmm", 83)] = K("6zMyfV{6#+r8=0o[qK@G4%01", 70), this[K("aj9dambZdT", 85)] = true, this[K("0;(+76//\";", 36)] = true, this[K("6<|C@", 45)] = n, n && (n[K("]fNjg", 84)] ? this[K("FLU?]V", 68)] = n[K("_hLha", 86)] : n[K("MW\\", 69)] === K("697)?,<(==", 67) ? this[K("X^kMo`", 86)] = K("itwrp>67ox%~|bfjf~=|r`&oa{kj,lmogkoe+nrwg", 94) : n[K("%/4", 29)] === K("G4@;2FJ", 81) ? this[K("hn{]\x7Fp", 7)] = K("}+(%-JBCs/ q%'M%55nj?1U3b3^62k89D'*&\x7F{$}K)#.(", 19) : this[K("8>K-O@", 54)] = K("KVUPRywvAZz\\^\\DHH@bB\\BgMC]IHmNKMIMMKtHPUY", 64)), this[K("CFRJAW_S\"YO@", 65)] = false, this[K("TYTbeRP_hAc]egf", 82)] = 0;
}
function ln(n, r, t) {
  n[K("CL?8BC:<5L", 55)] && (r[K("NQ<=DKH", 56)] && r[K("-.~\x7Fz(+", 23)](t), r[K("'2374,>.", 33)] && r[K("ZgfdgYm[", 84)](t));
}
function xn(n) {
  var r = new Date()[K("mjxYkvm", 4)]();
  try {
    WXWebAssembly[K("26>>.2;5\"4$", 38)](K("..y, xO*(.*p\"-F=k?:[h8", 24), {
      a: j
    })[K(h, 39)](function (t) {
      L[K("#__", 41)] = new Date()[K("0/?\x7F63(", 38)]() - r, n[K("KS6V]", 66)][K("cL]Z", 73)] = t;
    })[K("wt+tx", 18)](function () {
      n[K("@F+IJ", 55)][K("kTeb", 81)] = false;
    });
  } catch (r) {
    n[K("PV;YZ", 71)][K("^IXW", 68)] = false;
  }
}
function Sn(n, r) {
  (wx.setStorage({
    key: _fmData,
    data: n
  }), wx.getFileSystemManager) && wx.getFileSystemManager().writeFile({
    filePath: wx.env.USER_DATA_PATH + "/tdfp1.txt",
    encoding: "utf-8",
    data: n
  });
  var t = new Date()[K("('7w.+ ", 30)]();
  wx[K("J=I)OCO?65", 52)]({
    key: K("HNT(QOJSCQk", 70),
    data: K("", 16) + t + L[K("'3;9}*5,", 35)][K("v vq& pt~\x7Fqxp", 11)] + K(" !", 31) + r
  });
}
yn.prototype.getInfo = function (n) {
  var t = this;
  if (t.fmOpt.wasm || false === t.fmOpt.wasm || plsource === gmsource || xn(t), !t.fmOpt || !t.fmOpt.partnerCode) throw new C("partnerCode configuration failed");
  console.log("partnerCode configuration successful."), n.timeout && n.timeout < 2500 && (n.timeout = 2500), t[K("({+y.^$qt ", 19)](), n[K("FEQ+I@H4PFN", 60)] = n[K("RQ]7]T\\8lRZ", 72)] ? n[K("c`rFngmW}ek", 89)][K(":4z9<*2*", 35)]() : K("!", 77);
  var e = wx[K("A>L.JLJ<I6'XD0", 55)](K("5=AtF2?F0LD", 51))[K("LHGAI", 54)](K("hi", 8))[1],
    i = vn || wx[K("<;K+MAA143\"EO5", 50)](K(";C?<TNH", 57))[K("_]ZVd", 73)](K("de", 4))[2] || 24;
  if (-1 !== [K("d", 49), K("P", 28), K("u", 64)][K("^b[YiA]", 82)](n[K(S, 75)])) {
    if (n[K("('7j+\"6s28,", 30)] !== K(":", 6)) if (wn && 23 === wn[r]) {
      t[K("KT'RKWH@^N", 63)] = true;
      var a = E(wn);
      if (ln(t, n, a), t[K("MVEFTU@BOF", 65)] = false, n[K(S, 75)] === K("s", 62) && L[K("FPZZ=KTM", 66)][K("YbUV`b_QQPT]S", 77)] === K("a", 46)) return;
    } else if (e) {
      var u = e[K("!|{u&", 11)](K("Z[", 89)),
        o = undefined,
        f = undefined;
      if (2 === u[r]) {
        13 === u[0][r] ? o = u[0] : 14 === u[0][r] && (o = u[0][K("E?963", 47)](0, 13), f = u[0][K("oig\\e", 89)](13));
        var c = new Date()[K("=:H);F=", 51)]();
        if (o && 13 === o[r] && c - o < 60 * i * 60 * 1000) {
          t[K("s|Ozs\x7Fphvf", 8)] = !t[K("DO<?CB;;6O", 56)];
          var s = E(u[1]);
          if (ln(t, n, s), t[K("5>-.<=(*'>", 41)] = false, n[K("IFT(TMW1S[M", 63)] === K("F", 17) && f === K(":", 7)) return;
        }
      }
    }
    try {
      L[K("+'", 20)] = t[K("P[HKWVOOB[", 68)] && !e || n[K("\"!-`-$,i<\"*", 24)] === K("Q", 29) ? n[K("vjmdurp", 0)] || 2500 : 16000;
    } catch (h) {
      L[K("d^", 77)] = n[K("WMRKV]Q", 64)] || 16000;
    }
    if (n[K(";=3915", 41)] || n[K("A;78>06", 41)] || console[K("U>RO", 59)](K("iqf(-7>ZK:>\"> &L5#:P-';$*42X..&\\4719)-//", 33)), n[K("YOPIP__", 66)] && Number[K("=F 6&", 49)](n[K("UKLETSS", 62)])) {
      t[K(m, 74)] = true, console[K("*r'\"", 16)](K("28/PU_f!ci_R]Voo{NFHuMF|VHqVFvKE`PQRZ", 73));
      var h = new C(K("ck\\&')4P5;- / ==- 4>'?4*8:'e0 932\"' 4N", 27));
      return n[K(",&-1", 35)] && n[K("#|$*", 26)](h), void (n[K("&320+-1/", 32)] && n[K("cnosh`rb", 93)](h));
    }
    L[K("/fk", 53)] = new Date()[K(g, 70)]();
    var v = undefined;
    try {
      var l = wx[K("$#3l257%\"f(:=+%+", 26)](),
        x = wx[K("DCS~IH{UYLFDJZL?R@CU_Q", 58)](),
        A = wx[K("('7t.*#70`%,<", 30)](),
        O = wx[K("VUa3[Z7Wj]2VYS", 76)](),
        U = wx[K("65Aq0@>5<~7>2", 44)]();
      v = Object[K(",?<76<", 40)]({}, l, x, A, O, U);
    } catch (r) {
      try {
        v = wx[K("{x+d*-/~*T)q(j ,g", 18)]();
      } catch (h) {
        return t[K("OX+VWSTLRB", 67)] = true, console[K("esplv", 93)](K("flc+\"*3]H!,>L94;%7<z;2&W?;06:8P_", 30) + h), n[K("nhsw", 6)] && n[K("mirp", 5)](h), void (n[K("Vcb`[]a_", 80)] && n[K("Wbcgd\\n^", 81)](h));
      }
    }
    delete v[K("[ij@mX", 83)], L[K("tP", 27)] = JSON[K("#% {ys~r!", 13)](v);
    var W,
      D,
      M,
      k,
      _,
      P,
      I = new Date()[K("'$6p-(#", 29)]();
    !function () {
      if (wx[K("[Xj;]o[PQ4hQo", 81)]) {
        var n = wx[K("'$6`!3/$-a$-#", 29)]();
        L[K(":ry", 64)] = JSON[K("XXUMWIHLV", 66)](n);
      }
    }(), function () {
      if (wx[K(">=I <IC=7/M@LKKE:AW)", 52)]) {
        var n = wx[K("QN\\5OZ^JZ0PU_TVR-rJ^", 71)]();
        L[K(")bc", 47)] = JSON[K("lliacedXz", 86)](n);
      }
    }(), function () {
      if (wx[K("UR`,UT[dTk=WXPOhL@", 75)]) {
        var n = wx[K("*)5`\"#4?9>a:%?{3!7", 32)]();
        L[K(" [Y", 38)] = JSON[K("bbc[YS^R`", 76)](n);
      }
    }(), L[K("K'+", 81)] = [], wx[K("UR`=WeRZhREW]^", 75)] && wx[K("!\x7F,jz)&.$.p#ps", 23)]()[K("\\[k9glaYRa", 82)]()[K("HJLUCQ", 63)](function (n) {
      return n[K("PX]^`:b\\X", 72)] === K("_SeY\\Wc]hV", 78);
    })[K("N^LXf", 70)](function (n) {
      return L[K("?x~", 69)][K(";A<0", 40)](n[K("dTj_", 81)]);
    }), function (n, r) {
      if (!n[K("~!bv's&$u", 14)] && wx[K("QaQLfV;S\\h[k_^R>_Mv\\u", 75)] && en(r)) {
        var t = wx[K("UeUPbRG_Pl_o[Zn:Cqz@q", 79)]({
          type: K("C0,0<", 41),
          width: 10,
          height: 10
        });
        if (t) {
          var e = t[K("{x+T &/~% ", 18)](K("?,(,0", 37)),
            i = e[K("po\x7FM&xhpt{r|", 7)](K("S@<@L^ffVxiPbldoq\x7Fs}Op|us", 89));
          if (e && i) {
            var a = e[K("MJX5C]ATCSAS", 67)](i[K("_YUHYPIIaiESBTRfq^^BB", 8)]),
              u = e[K(":9E 0@2G0N2N", 48)](i[K("phj_jcfXrdjbSmco}k`sIwq", 25)]),
              o = e[K("# 2hx+z.)9+%", 25)](e[K("L:JJ;@B", 83)]);
            L[K("M)-", 83)] = {
              vendor: a,
              renderer: u,
              webglStr: o
            };
          }
        }
      }
    }(n, v), function (n, r) {
      if (wx[K("iyid~nSkdpcsgfzFwentm", 4)] && !n[K("::l.>G+8", 41)] && en(r)) {
        var t = wx[K("(6(%=/u,#1\"<&'=h6\")5,", 34)]({
          type: K("6i", 2),
          width: 300,
          height: 150
        });
        if (t) {
          var e = t[K("zy*U''.\x7F$!", 17)](K("Iz", 21));
          if (e) {
            var i = e[K("%5% 2\"k,8.)?d9-);6\"%", 31)](0, 0, 200, 0);
            i[K(y, 16)](0, K("XJH", 67)), i[K("aef@kiiu[}e{", 93)](1, K("ugeqg", 91)), e[K("TVXYEga][", 75)] = i, e[K("TVXYDVWe", 75)](10, 10, 70, 40), e[K("!'+x~#\\!\"+p", 23)] = 0.2, e[K("?CGF(HTB6", 54)] = K("P[aP", 75), e[K("(*,-w\"#1", 31)](20, 20, 70, 40), e[K("jlrsS}{wa", 2)] = K("WBHIIP", 59), e[K("AEED)E8H", 56)](30, 30, 70, 40), e[K("jnpf`jBh{bn", 1)] = 1, e[K("|!! m.6$s", 20)] = K("IRJIV", 68), e[K("jrp{Shxn", 2)] = 10, e[K("DFHI6FPU", 59)](K("z&% HDG\x7F+Ir.\x7F%x/g67h?Uc6", 16), 15, 35);
            var a = t[K("QM#=U;4(!", 58)]();
            L[K(")e`", 47)] = p[K("keth00=", 1)](a);
          }
        }
      }
    }(n, v), L[K("kw\x7F}Zvqh", 8)][K("=B:.y61(", 39)] = new Date()[K("@?O.FC8", 54)]() - I, Promise[K("blo", 94)]([z(n), (P = new Date()[K("SPbCQ\\W", 73)](), !!wx[K("!\x7F,bX[j)r't", 23)] && Z(wx[K("c`rG;DIwUyk", 89)])()[K("QD@H", 58)](function (n) {
      N(K("sp#WKTY&e({", 10), n[K("0<?t:7", 40)]) ? L[K("rMI", 25)] = JSON[K("=?>0<457K", 39)](0 === n[K("t# Qzvr", 13)]) : L[K("^69", 5)][K(".fd", 52)] = n, L[K("AMQW0LKB", 61)][K("[46", 2)] = new Date()[K("vu&`|yr", 13)]() - P;
    })), (k = n, _ = new Date()[K("21=}0=6", 40)](), !(k[K("wxll", 8)] || !wx[K("RVVQ^=dElVUUmnLQsEs#pvACEzBIL~FA]", 76)]) && Z(wx[K("kqohwT}\\uqr|vqUxl|hZiifznekpuaohv", 6)])()[K("9,(0", 34)](function (n) {
      N(K("!'!\"-c7w;'$&<?~\"\"2\"M''044+=:b/92,", 27), n[K("jvuQ|i", 3)]) ? L[K(".fe", 52)] = JSON[K(">>?7=726L", 40)](n[K("vyqpvpqWznb", 1)]) : L[K("vNQ", 29)][K("M&%", 83)] = n, L[K(":DNN)G@9", 54)][K("F!\"", 76)] = new Date()[K("{x+ky'\x7F", 18)]() - _;
    })), (M = new Date()[K("\"!-m -&", 24)](), L[K("pO", 23)] = K("5", 6), L[K("\",66p/(!", 30)][K("sP", 26)] = 0, L[K("XbhhOeb[", 84)][K("oO", 22)] = 0, L[K("NXbbES\\U", 74)][K("OXOH^XIKGF^GY", 67)] = K("n", 60), Z(wx[K("*)5s,2<5='|7?%", 32)])()[K("RGAO", 59)](function (n) {
      if (N(K(";8J!=MMDN6\"FH4", 49), n[K("Q_\\:[V", 73)])) {
        var r = n[K("E=IMBLD,XN6", 52)];
        return L[K("\\;", 3)] = r, L[K("YeioHdcZ", 85)][K("(d", 46)] = new Date()[K("QN\\=WRI", 71)]() - M, K("[UdEhca_hJoiga", 80) in n && (L[K("0kh", 54)] = n[K("mgz[z}\x7Fmz\\}\x7Fqs", 3)]), r === K("\"rrp", 8) ? G(new Date()[K("qn|]wri", 8)]())[K(",!~%", 21)](function () {
          return wx[K("ppnnPcea", 90)]();
        })[K("ZYiY[", 84)](function () {
          return null;
        }) : (L[K("(288~52+", 36)][K(")2%&02/!! $-#", 29)] = K("*", 86), false);
      }
      return L[K("Y34", 0)][K("U2", 91)] = n, false;
    })), Q(v), (D = new Date()[K("feqPlib", 92)](), Z(wx[K("WTf@WgSRV;hR[UjQErq", 77)])()[K("+\x7Fy&", 20)](function (n) {
      N(K(".-9z.<*+=a3;\"\"5:<+(", 36), n[K("x'$c#\x7F", 17)]) ? L[K("?!", 69)] = n[K("YEM[L", 64)] : L[K("e?@", 12)][K("wY", 30)] = n, L[K(w, 52)][K("$e", 42)] = new Date()[K("|{(jz&|", 19)]() - D;
    })), X(n), rn(n), (W = new Date()[K("}z)i$!}", 20)](), wx[K("khzUmwnn~`|R{dxJ{x`k", 2)] && wx[K("?<N)9C::B4@&G0Dw/,T_", 53)]()[K("0%#)", 25)](function (n) {
      L[K("O+.", 85)] = n, L[K("&0::|+4-", 34)][K("iED", 16)] = new Date()[K(d, 77)]() - W;
    }), false), tn(n, v), !!wx[K(",+;t,2,-;\x7F #8:'!#=e*2,<", 34)] && Z(wx[K("a^lNYiYX`EUVeaPlxp_}O{I", 87)])()[K("PECI", 57)](function (n) {
      N(K("@?O/8N89O\"47DF3MWQ>^.X(", 54), n[K("guvLql", 0)]) ? L[K("-ig", 51)] = n : L[K("pHO", 23)][K("O**", 85)] = n;
    }), !!wx[K("zy*Vp-.\x7F.$V)u.", 17)] && Z(wx[K("yv%Ww\"!p-%Q*t/", 16)])()[K("zoiw", 4)](function (n) {
      N(K("mjxKc\x7F|lp)E\x7F`x", 4), n[K("M[X6_J", 69)]) ? L[K("+gd", 49)] = n : L[K("Ax\x7F", 71)][K("gBA", 14)] = n;
    })])[K("gZZb", 80)](function () {
      if (L[K("F\x7F ", 76)] = new Date()[K(b, 6)](), !t[K("r}N{r|siug", 7)] || !t[K("x\"ps\x7F~wwzs", 13)]) {
        var e = undefined;
        if (dn) e = dn;else {
          var a = wx[K("*)5v373#\"!\x7F7=+", 32)](K("4:4;MAA", 50))[K("@:|C:0<4", 41)]()[K("=;40:", 39)](K("ML", 76)),
            u = sn(a, 2),
            o = u[0],
            f = u[1];
          o && 13 === o[r] && new Date()[K("^]iHdaZ", 84)]() - o < 60 * i * 60 * 1000 && (e = f);
        }
        if (e && Math[K("KPVWS", 66)](100 * Math[K("#p|w$x", 14)]()) < parseInt(e, 10)) return t[K("NRYWTO.AYXMMD]", 66)](n, true, v), void (t[K(m, 74)] = true);
        t[K("lp{qjm@cgfoojc", 1)](n, false, v);
      }
    }, function () {
      console[K("YBVS", 63)](K("y v8=GNj[13C5:F\\*$/S--w", 49));
      var r = new J(K("RXOpu\x7F'A$y{*}b/#b|gkee,", 10));
      n[K("3/4:", 42)] && n[K("]Yb`", 84)](r), n[K("/:;?<4F6", 41)] && n[K(";FGK@8J:", 53)](r);
    });
    var F = undefined;
    try {
      F = t[K("oxkdvwn`ax", 4)] && !e || n[K("VUa;YPXD`V^", 76)] === K(" ", 75) ? n[K("4(/&+02", 29)] || 2500 : 16000;
    } catch (h) {
      F = n[K(":.1(1><", 35)] || 16000;
    }
    L[K(w, 52)][K("IUV?UPK", 69)] = F, setTimeout(function () {
      clearTimeout(hn), hn = K("", 3), t[K("/8j6734,2\"", 35)] || (t[K("&1]/.(/%9+", 26)] = true, t[K(" $/%&~_p+*r|u/", 20)](n, true, v));
    }, F);
  } else console[K("7 0-", 29)](K("0MGBW@YBF]OYSLQYQ][WKCW[M\\", 61));
};
var mn = 0;
function gn(e, i, a, u) {
  a[K("Z_^dcXZYnGeWc}`", 88)] = 201, L[K("r%", 13)][0] = mn, L[K("3E", 45)][1] = L[K("<L", 54)][1] || [], L[K("@P", 58)][1][mn] = K("", 40);
  var o = new Date()[K(b, 6)](),
    f = {
      "content-type": K("&472*- >&=9X1\\23,@9'#'G-/(0(4)75)", 34)
    };
  if (u[K("N>DRdhhcb`", 88)] && U(u[K("!pz'7EG055", 43)], K("jgksbl", 54)) > 0 && a[K(",2v5>", 35)][K("w`qn", 93)]) {
    var s = JSON[K(";=822*7)I", 37)](e);
    f = {
      "content-type": K("O_\\YSTIe_TVwjwkjukFNtNltxCIGM@LLR", 75),
      tdk: p[K("B:OAnnw", 55)](s)
    };
  }
  wx[K("4&14#00", 31)]({
    url: a[K("}$-p5.", 28)] + K("j=/=D?79`", 41) + a[K("/7u:9", 38)][K("M?MROGI'DHH", 58)],
    method: K("&$+)", 51),
    timeout: 5000,
    data: e,
    header: f,
    success: function (e) {
      if (200 === e[K("acMagd7ZZZ", 75)]) {
        if (e[K("zv)t", 20)][K("CNFF", 61)] === K(">?<", 12) && e[K("^ZlX", 87)] && e[K("VRdP", 79)][K("sgvuip", 94)]) {
          a[K("Y\\YebY]ZmDdPbbc", 87)] = 255;
          var u = undefined,
            c = undefined,
            s = undefined;
          if (f[K("pae", 89)] && n(e[K("ECWA", 62)][K("ZLY^PY", 69)]) === K("FFG?E?", 48)) {
            var h = a[K("v|]\"!", 14)][K("~ixw", 5)][K("^bjjRf^]", 82)],
              w = h[K("m zt~y}", 6)][K("%", 29)],
              v = h[K("}0++/(*", 22)][K("_", 85)],
              d = h[K("=QJDNIM", 53)][K("D", 55)],
              y = function (n) {
                for (var e = new ArrayBuffer(n[r]), i = new Uint8Array(e), a = 0; a < n[r]; a++) i[a] = n[t](a);
                return i;
              }(e[K("][oY", 86)][K("G;JIEL", 50)]),
              l = y[r],
              x = d(l);
            new Uint8Array(w[K("z/|}y.", 22)], x, l)[K("zmy", 5)](y);
            var S = v(x, l),
              m = JSON[K("oasq`", 92)]($(w, S));
            if (m && m[K("kj^T", 80)] && m[K("{wpoqUm", 5)] && m[K("X", 82)]) {
              Sn(m[K("YXHF", 62)], m[K("tnifjLb", 93)], E(m[K("952)7h/", 34)])), dn = m[K("<", 54)][K("ZTUkgc", 81)], vn = m[K("_", 89)][K("tf", 91)] || 24, wx[K("O@R,TNH:KH", 57)]({
                key: K("w\x7F{x)--", 22),
                data: new Date()[K(g, 70)]() + K("\"#", 33) + m[K("F", 64)][K("jde{ws", 2)] + K("76", 54) + vn
              });
              var b = E(m[K("[WPOQ5M", 68)]);
              if (wn = m[K(" {ts}Qi", 9)], a[K("[d7b[gXPn^", 79)]) return;
              a[K("oxKvwstlrb", 4)] = true, ln(a, i, b);
            } else {
              if (a[K("qtq}zqurul-x+%(", 16)] = 401, a[K("DO\x7FILNAGGI", 56)]) return;
              a[K(";DvB;G80N>", 47)] = true;
              var A = a[K("2EF5:6;1z48?0>NF", 46)](i, true);
              ln(a, i, A);
            }
          } else {
            u = e[K("us$q", 15)][K(" s# }'", 11)][K("[ZND", 64)], c = e[K("+)9+", 36)][K("9-8?7>", 36)][K("D>96:}2", 45)], s = E(e.data.result.tokenId), Sn(u, c);
            var p = s;
            if (wn = c, a[K("y%Q#y$zr-|", 14)]) return;
            a[K("`k8e`be[cU", 84)] = true, ln(a, i, p);
          }
        } else {
          if (a[K("~\"#/(''$#{>*88=", 29)] = 301, a[K("?HzFGCD<B2", 51)]) return;
          a[K("(3c-(*-#;-", 28)] = true;
          var O = a[K("{/,#,y!'T.qv*q$<", 24)](i, true);
          ln(a, i, O);
        }
      } else {
        if (a[K("ADAMJAEBE<\\HZZ[", 63)] = 302, a[K("irAliujb|l", 93)]) return;
        a[K("W`3^_[\\TjZ", 75)] = true;
        var U = a[K("NabQ^J_U'PD[TBRj", 74)](i, true);
        ln(a, i, U);
      }
      L[K("Ug", 79)][1][mn] = new Date()[K("?<N/E@;", 53)]() - o, mn = 0;
    },
    fail: function () {
      if (!a[K("\"-Y+\",#z%t", 22)] || !a[K("]fUVdePR_V", 81)]) if (a[K("585AF=1>I @<FFG", 51)] = 303, L[K("N^", 72)][1][mn] = new Date()[K("FEQ0LIB", 60)]() - o, (mn += 1) < 3) new Date()[K(c, 39)]() - o < 5000 ? hn = setTimeout(function () {
        return a[K("&*1/,'Yz! tv,%", 26)](i, false, u);
      }, 5000 - (new Date()[K("# 2l!,'", 25)]() - o)) : gn(e, i, a, u);else {
        mn = 0, a[K("R].[R\\SIUG", 70)] = true;
        var n = a[K("?PS@OELD(C5JEMCY", 59)](i, true);
        ln(a, i, n);
      }
    }
  });
}
yn.prototype.sendProfile = function (n, r, t) {
  gn(n, r, this, t);
}, yn[K("/0,0*6>(,", 28)][K("EKPHCDx:@A463J", 57)] = function (n, r, t) {
  var e = this;
  e[K("ux!xs * T*}v", 20)] || (e[K("*/53(<F<x>&9", 40)] = true);
  var i = e[K("evujucvnNyolck}s", 2)](n, r);
  r && e[K("!*x{ !\x7F\x7Fr*", 21)] && (n[K("`cRSVef", 74)] && n[K("\\_NOJYZ", 70)](i), n[K("u#\" zr!p", 16)] && n[K("z&'+ y*{", 21)](i), e[K("})uv%$pr\x7F)", 18)] = false), r || e[K("L?E>-NN8JL4", 54)](V, n, t);
}, yn[K(A, 66)][K("=NMBM;NFuA74K3E[", 57)] = function (e, i) {
  var a = this,
    u = K("lm", 12),
    o = K("~", 79),
    f = K("t", 69),
    c = K("b", 51);
  e[K("QSESOC", 63)] && n(e[K("sukqim", 2)]) === K("885-7)", 34) && (f = e[K("kmciae", 89)] === K("\"{rrvp|vx", 10) ? K("h", 57) : e[K("\\\\PXRT", 74)]), e[K("( y!%~p", 16)] && n(e[K("bZT__SW", 74)]) === K("``]U_Q", 74) && (c = e[K("tljmime", 92)] === K("jb[Y_[e]Q", 82) ? K(",", 92) : e[K("ldbeae]", 84)]);
  var s = undefined;
  if (s = function (n) {
    for (var e = K("gikioikigo", 52), i = 255, a = 0, u = 0; u < n[r]; u++) i ^= n[t](u), a += n[t](u);
    return K("", 18) + n + e[t]((i + 256) % 10) + e[t](a % 10);
  }(s = new Date()[K("OL^?UPK", 69)]() + K("=", 14) + parseInt(1000000 * (Math[K("=-;,>=", 40)]() + 1), 10)), V[K("[M_\\]U[", 72)] = a[K("rxY\x7F%", 10)][K("_Qc`YQg5VZ^", 76)], V[K("JX[KSOPI", 70)] = a[K("u}\\# ", 13)][K(" .-o$)\"", 28)] || K("", 67), V[K("DH@LKCK", 62)] = a[K("`fKij", 87)][K("'-'16,6", 33)] || K("", 79), V[K("\"", 11)] = on(i ? L[K("gA@", 14)] + u + L[K("uOS", 28)] : L[K("#Z_", 41)] + u + L[K("K%%", 81)] + u + JSON[K("FFG?E?:>D", 48)](L[K(":st", 64)]), s), V[K("^X", 82)] = on(f + u + c, s), V[K("J", 49)] = a[K("nt~fp'%\x7Fvt", 13)], V[K("'", 35)] = L[K("&_]", 44)], V[K("!", 28)] = on(L[K("0m", 54)] + u + L[K("kH", 18)] + u + L[K(")cc", 47)] + u + L[K("K$'", 81)] + u + L[K("3r", 57)] + u + L[K("X27", 94)] + u + L[K("lFH", 19)] + u + Y() + u + e[K("?<N\"B;A+YA7", 53)], s), V[K("^", 88)] = on(L[K("I*", 79)] + u + L[K("lGE", 19)] + u + L[K("G !", 77)] + u + L[K("T.,", 90)] + u + L[K("P*.", 86)] + u + o + u + JSON[K("ddaY[]\\Pb", 78)](L[K("E!%", 75)]) + u + JSON[K("rrskicnbp", 92)](L[K("!][", 39)]), s), V[K("L", 69)] = on(L[K("A{\x7F", 71)] + u + L[K("^9>", 5)] + u + L[K("W0:", 93)] + u + L[K("U.5", 91)] + u + L[K("R,)", 88)] + u + JSON[K("350**\"/!1", 29)](L[K(".il", 52)]) + u + JSON[K("%'&y$}|p#", 15)](L[K("ZdnnIg`Y", 86)]), s), V[K("m", 6)] = on(L[K("kK", 18)], s), V[K("N", 69)] = on(L[K("#c", 41)], s), V[K("Z", 78)] = on(L[K("/hk", 53)], s), V[K("SGU)ILVO", 65)] = on(new Date()[K("('7w.+ <8&,d+*:)%", 30)]() + u + L[K("W23", 93)] + u + L[K("4nm", 58)] + u + L[K("5qm", 59)], s), V[K("a", 87)] = p[K("*\"7)VV_", 31)](V[K("t", 16)] + u + V[K("P", 74)] + u + V[K("~", 24)] + u + V[K("'", 31)] + u + V[K("+", 34)]), V[K("Q", 70)] = p[K("icvj66?", 94)](s + u + V[K(">", 37)] + u + encodeURI(V[K("{m\x7F#}u{", 9)]) + u + encodeURI(V[K("WgdV`Re\\", 83)]) + encodeURI(V[K("u{q\"%rx", 16)])), V[K("2", 36)] = p[K("'!0$KUP", 28)](V[K("2,", 38)] + u + String(V[K("N", 74)])), V[K("510", 41)] = q(s), i) {
    mn = 0;
    var h = cn({}, L);
    try {
      h[K("-?", 39)][1] = h[K(",<", 38)][1] ? h[K("\"2", 28)][1][K("EKFJ", 56)](K("0", 46)) : K("", 37);
    } catch (n) {
      console[K("FHC", 55)](n);
    }
    var w = R[K("2:2?57", 42)](JSON[K("ttqikml`r", 94)]({
      os: 4,
      v: a[K("=EI7GUW@EE", 59)],
      d: JSON[K("uwvhtlmos", 0)](V),
      e: a[K("bgflk`baf_}o{ux", 1)],
      all: new Date()[K("96D%?:1", 47)]() - L[K("/fk", 53)],
      ptime: Number(e[K("?5:3>E9", 40)] || 0) / 1000,
      tp: h[K("y*", 20)] ? h[K(":J", 52)][K("PTMW", 67)](K("d", 54)) : K("", 61)
    }));
    return L[K("N^", 72)][1] = [], K("cRW\\", 76) + w;
  }
  return V;
}, yn[K("BECEECME?", 47)][K("ymxo\x7FHuofs", 5)] = function () {
  this[K("nsywtx#']rz}", 13)] = false, this[K("svw\"%ssp(n#~%'&", 18)] = 0, this[K("^i:gf`g]aS", 82)] = false, this[K("mveftu`bof", 2)] = true, mn = 0;
};
var bn = {};
yn[K("twq{w}{sa", 2)][K("YNOW", 67)] = function (t) {
  var e = Y();
  try {
    wx[K(",|/h)--~(ta9+v", 22)](K("ty|z", 19), e);
  } catch (n) {}
  var i = undefined;
  try {
    i = wx[K(" |/_y*$|uh-u$", 22)]()[K("xuk\x7Fjr|r", 6)] === K("22FA98<F", 43);
  } catch (n) {
    try {
      i = wx[K(">=I)TOM;L)O6J'^J*", 52)]()[K("nk]q`hvl", 91)] === K("||-.,-#+", 22);
    } catch (n) {
      i = false;
    }
  }
  if (!t[K("<,B7", 41)]) return {
    code: 2000,
    msg: "\u8BF7\u4F20\u5165\u5408\u6CD5\u7684path"
  };
  if (t[K("RWDP^", 62)] && fn(t[K("qtgq}", 93)]) === K("@2950@", 46) || t[K("hth#", 4)] && n(t[K("*6.B", 37)]) === K("JJKCA;", 52)) {
    var a = K("", 24);
    if (t[K("~-#5", 26)]) a = t[K("&2*>", 33)];else {
      for (var o = Object[K("xs%\"", 11)](t[K("\\aR^`", 72)])[K("QLRQ", 59)](), f = {}, c = 0; c < o[r]; c++) {
        if (n(t[K("v{htz", 3)][o[c]]) !== K(")+*} y", 19) && null !== t[K("%(z%)", 17)][o[c]]) return {
          code: 2002,
          msg: "query\u7684value\u503C\u542B\u6709\u975E\u5B57\u7B26\u4E32\u7C7B\u578B"
        };
        f[o[c]] = null === t[K("x}nz%", 5)][o[c]] ? K("", 61) : t[K("$)u&(", 16)][o[c]];
      }
      a = function (n) {
        return Object[K("z%(+z\x7F/", 19)](n)[K("yl~", 10)](function (n) {
          var r = O(n, 2),
            t = r[0],
            e = r[1];
          return K("", 94) + t + e;
        })[K("gmdh", 90)](K("", 37));
      }(f);
    }
    t[K("H8NC", 53)] in bn ? bn[t[K("A3G:", 46)]] += 1 : bn[t[K("RBTI", 63)]] = 1;
    var s = function (n) {
      var t = undefined;
      t = n > 254 ? K("CB", 58) : 2 === n[K("C? @E=;1", 44)](16)[r] ? n[K("YU:ZSKUK", 66)](16) : K("t", 66) + n[K(u, 26)](16);
      var e = new Date()[K("$#3s\"/$", 26)]()[K("SO0PUMKA", 60)]()[K("YSMJO", 67)](-10),
        i = F(e, K("a_]ZYTRRjE]", 71)),
        a = 1,
        o = Math[K("2998:", 41)](90 * Math[K("G7A:@G", 50)]()) + 10,
        f = a + (((Number(o) + Number(e)) % 256)[K("okLliaoe", 88)]() + o[K("gcDdaYg]", 80)]() + e)[K(">66-4", 40)](0, 10) + t + o,
        c = p[K("zr$yGAL", 16)](f)[K("e_YVS", 79)](8, 16);
      return t + a[K("60v50.6.", 31)](16) + o + i + c;
    }(bn[t[K("N>PE", 59)]]);
    if (23 !== s[r]) return {
      code: 2003,
      msg: "ts\u4E0D\u7B26\u5408\u89C4\u8303"
    };
    var h = encodeURIComponent(a + s)[K(" s\x7FzjutIqp", 11)](K("M[Z", 38), K("4", 7))[K("}qythkvK\x7F~", 9)](K("f", 67), K("kyu", 68))[K("QEMHDGB'CB", 60)](K("\"", 88), K("JV^", 35))[K("^P^[IJW*PQ", 73)](K("%", 90), K("Sad", 44))[K("vhvsaboBxy", 2)](K("c", 56), K("`lv", 57))[K("J<JG=>;\x7FLM", 53)]("~", K("m!,", 70)),
      w = p[K("tl\"w9;B", 10)](h) + e;
    if (64 !== w[r]) return {
      code: 2004,
      msg: K("60;?11]H17N>N3?3_$PQ+W", 45)
    };
    var v = p[K("71@4[e`", 44)](w + t[K("7)9,", 36)])[K("2**! ", 28)](-16) + H(i),
      d = p[K("[UdX  -", 80)](e + K("/", 88))[K("!xtsv", 11)](-16) + v;
    if (48 !== d[r]) return {
      code: 2005,
      msg: K("rlw{uu>+}s+zrwcw<`lmok", 10)
    };
    var y = p[K("f^se+50", 91)](d);
    if (32 !== y[r]) return {
      code: 2006,
      msg: K("=9B@8>dQHLA7EH6LF-[ZR\\", 52)
    };
    var l = K("H", 56) + w + s + d + y;
    return 168 !== l[r] ? {
      code: 2008,
      msg: K("c_djfd/{nb{icfPfls}|xz", 90)
    } : {
      code: 0,
      sign: l
    };
  }
  return {
    code: 2001,
    msg: "\u8BF7\u4F20\u5165\u5408\u6CD5\u7684query\u6216\u8005body"
  };
};
var An = yn;
exports.default = An;
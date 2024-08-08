//Thu Aug 08 2024 13:36:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(Z) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a2) {
      return typeof a2;
    } : function (a2) {
      return a2 && "function" == typeof Symbol && a2.constructor === Symbol && a2 !== Symbol.prototype ? "symbol" : typeof a2;
    };
    return b(Z);
  }
  function c(Z, a0) {
    var a2 = "undefined" != typeof Symbol && Z[Symbol.iterator] || Z["@@iterator"];
    if (!a2) {
      if (Array.isArray(Z) || (a2 = d(Z)) || a0 && Z && "number" == typeof Z.length) {
        a2 && (Z = a2);
        var a3 = 0,
          a4 = function () {};
        return {
          s: a4,
          n: function () {
            var a9 = {
              done: !0
            };
            return a3 >= Z.length ? a9 : {
              done: !1,
              value: Z[a3++]
            };
          },
          e: function (a9) {
            throw a9;
          },
          f: a4
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a5,
      a6 = !0,
      a7 = !1;
    return {
      s: function () {
        a2 = a2.call(Z);
      },
      n: function () {
        var ab = a2.next();
        a6 = ab.done;
        return ab;
      },
      e: function (aa) {
        a7 = !0;
        a5 = aa;
      },
      f: function () {
        try {
          a6 || null == a2.return || a2.return();
        } finally {
          if (a7) {
            throw a5;
          }
        }
      }
    };
  }
  function d(Z, a0) {
    if (Z) {
      if ("string" == typeof Z) {
        return f(Z, a0);
      }
      var a2 = {}.toString.call(Z).slice(8, -1);
      "Object" === a2 && Z.constructor && (a2 = Z.constructor.name);
      return "Map" === a2 || "Set" === a2 ? Array.from(Z) : "Arguments" === a2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a2) ? f(Z, a0) : void 0;
    }
  }
  function f(Z, a0) {
    (null == a0 || a0 > Z.length) && (a0 = Z.length);
    for (var a1 = 0, a2 = Array(a0); a1 < a0; a1++) {
      a2[a1] = Z[a1];
    }
    return a2;
  }
  function g() {
    'use strict';

    g = function () {
      return a1;
    };
    var a0,
      a1 = {},
      a2 = Object.prototype,
      a3 = a2.hasOwnProperty,
      a4 = Object.defineProperty || function (aw, ax, ay) {
        aw[ax] = ay.value;
      },
      a5 = "function" == typeof Symbol ? Symbol : {},
      a6 = a5.iterator || "@@iterator",
      a7 = a5.asyncIterator || "@@asyncIterator",
      a8 = a5.toStringTag || "@@toStringTag";
    function a9(aw, ax, ay) {
      var aA = {
        value: ay,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aw, ax, aA);
      return aw[ax];
    }
    try {
      a9({}, "");
    } catch (ax) {
      a9 = function (az, aA, aB) {
        return az[aA] = aB;
      };
    }
    function aa(az, aA, aB, aC) {
      var aD = aA && aA.prototype instanceof ah ? aA : ah,
        aE = Object.create(aD.prototype),
        aF = new au(aC || []);
      a4(aE, "_invoke", {
        value: aq(az, aB, aF)
      });
      return aE;
    }
    function ab(az, aA, aB) {
      try {
        return {
          type: "normal",
          arg: az.call(aA, aB)
        };
      } catch (aG) {
        var aD = {};
        aD.type = "throw";
        aD.arg = aG;
        return aD;
      }
    }
    a1.wrap = aa;
    var ac = "suspendedStart",
      ad = "suspendedYield",
      ae = "executing",
      af = "completed",
      ag = {};
    function ah() {}
    function ai() {}
    function aj() {}
    var ak = {};
    a9(ak, a6, function () {
      return this;
    });
    var al = Object.getPrototypeOf,
      am = al && al(al(av([])));
    am && am !== a2 && a3.call(am, a6) && (ak = am);
    aj.prototype = ah.prototype = Object.create(ak);
    var an = aj.prototype;
    function ao(az) {
      ["next", "throw", "return"].forEach(function (aC) {
        a9(az, aC, function (aE) {
          return this._invoke(aC, aE);
        });
      });
    }
    function ap(az, aA) {
      function aE(aF, aG, aH, aI) {
        var aK = ab(az[aF], az, aG);
        if ("throw" !== aK.type) {
          var aL = aK.arg,
            aM = aL.value;
          return aM && "object" == b(aM) && a3.call(aM, "__await") ? aA.resolve(aM.__await).then(function (aO) {
            aE("next", aO, aH, aI);
          }, function (aO) {
            aE("throw", aO, aH, aI);
          }) : aA.resolve(aM).then(function (aO) {
            aL.value = aO;
            aH(aL);
          }, function (aO) {
            return aE("throw", aO, aH, aI);
          });
        }
        aI(aK.arg);
      }
      var aC;
      a4(this, "_invoke", {
        value: function (aF, aG) {
          function aJ() {
            return new aA(function (aM, aN) {
              aE(aF, aG, aM, aN);
            });
          }
          return aC = aC ? aC.then(aJ, aJ) : aJ();
        }
      });
    }
    function aq(az, aA, aB) {
      var aD = ac;
      return function (aE, aF) {
        if (aD === ae) {
          throw Error("Generator is already running");
        }
        if (aD === af) {
          if ("throw" === aE) {
            throw aF;
          }
          var aH = {
            value: a0,
            done: !0
          };
          return aH;
        }
        for (aB.method = aE, aB.arg = aF;;) {
          var aI = aB.delegate;
          if (aI) {
            var aJ = ar(aI, aB);
            if (aJ) {
              if (aJ === ag) {
                continue;
              }
              return aJ;
            }
          }
          if ("next" === aB.method) {
            aB.sent = aB._sent = aB.arg;
          } else {
            if ("throw" === aB.method) {
              if (aD === ac) {
                throw aD = af, aB.arg;
              }
              aB.dispatchException(aB.arg);
            } else {
              "return" === aB.method && aB.abrupt("return", aB.arg);
            }
          }
          aD = ae;
          var aK = ab(az, aA, aB);
          if ("normal" === aK.type) {
            if (aD = aB.done ? af : ad, aK.arg === ag) {
              continue;
            }
            var aL = {};
            aL.value = aK.arg;
            aL.done = aB.done;
            return aL;
          }
          "throw" === aK.type && (aD = af, aB.method = "throw", aB.arg = aK.arg);
        }
      };
    }
    function ar(az, aA) {
      var aF = aA.method,
        aG = az.iterator[aF];
      if (aG === a0) {
        aA.delegate = null;
        "throw" === aF && az.iterator.return && (aA.method = "return", aA.arg = a0, ar(az, aA), "throw" === aA.method) || "return" !== aF && (aA.method = "throw", aA.arg = new TypeError("The iterator does not provide a '" + aF + "' method"));
        return ag;
      }
      var aD = ab(aG, az.iterator, aA.arg);
      if ("throw" === aD.type) {
        aA.method = "throw";
        aA.arg = aD.arg;
        aA.delegate = null;
        return ag;
      }
      var aE = aD.arg;
      return aE ? aE.done ? (aA[az.resultName] = aE.value, aA.next = az.nextLoc, "return" !== aA.method && (aA.method = "next", aA.arg = a0), aA.delegate = null, ag) : aE : (aA.method = "throw", aA.arg = new TypeError("iterator result is not an object"), aA.delegate = null, ag);
    }
    function as(az) {
      var aA = {
        tryLoc: az[0]
      };
      var aB = aA;
      1 in az && (aB.catchLoc = az[1]);
      2 in az && (aB.finallyLoc = az[2], aB.afterLoc = az[3]);
      this.tryEntries.push(aB);
    }
    function at(az) {
      var aA = az.completion || {};
      aA.type = "normal";
      delete aA.arg;
      az.completion = aA;
    }
    function au(az) {
      var aA = {
        tryLoc: "root"
      };
      this.tryEntries = [aA];
      az.forEach(as, this);
      this.reset(!0);
    }
    function av(az) {
      if (az || "" === az) {
        var aB = az[a6];
        if (aB) {
          return aB.call(az);
        }
        if ("function" == typeof az.next) {
          return az;
        }
        if (!isNaN(az.length)) {
          var aC = -1,
            aD = function aH() {
              for (; ++aC < az.length;) {
                if (a3.call(az, aC)) {
                  aH.value = az[aC];
                  aH.done = !1;
                  return aH;
                }
              }
              aH.value = a0;
              aH.done = !0;
              return aH;
            };
          return aD.next = aD;
        }
      }
      throw new TypeError(b(az) + " is not iterable");
    }
    ai.prototype = aj;
    a4(an, "constructor", {
      value: aj,
      configurable: !0
    });
    a4(aj, "constructor", {
      value: ai,
      configurable: !0
    });
    ai.displayName = a9(aj, a8, "GeneratorFunction");
    a1.isGeneratorFunction = function (az) {
      var aC = "function" == typeof az && az.constructor;
      return !!aC && (aC === ai || "GeneratorFunction" === (aC.displayName || aC.name));
    };
    a1.mark = function (az) {
      Object.setPrototypeOf ? Object.setPrototypeOf(az, aj) : (az.__proto__ = aj, a9(az, a8, "GeneratorFunction"));
      az.prototype = Object.create(an);
      return az;
    };
    a1.awrap = function (az) {
      var aB = {
        __await: az
      };
      return aB;
    };
    ao(ap.prototype);
    a9(ap.prototype, a7, function () {
      return this;
    });
    a1.AsyncIterator = ap;
    a1.async = function (az, aA, aB, aC, aD) {
      void 0 === aD && (aD = Promise);
      var aE = new ap(aa(az, aA, aB, aC), aD);
      return a1.isGeneratorFunction(aA) ? aE : aE.next().then(function (aG) {
        return aG.done ? aG.value : aE.next();
      });
    };
    ao(an);
    a9(an, a8, "Generator");
    a9(an, a6, function () {
      return this;
    });
    a9(an, "toString", function () {
      return "[object Generator]";
    });
    a1.keys = function (az) {
      var aB = Object(az),
        aC = [];
      for (var aD in aB) aC.push(aD);
      aC.reverse();
      return function aF() {
        for (; aC.length;) {
          var aG = aC.pop();
          if (aG in aB) {
            aF.value = aG;
            aF.done = !1;
            return aF;
          }
        }
        aF.done = !0;
        return aF;
      };
    };
    a1.values = av;
    au.prototype = {
      constructor: au,
      reset: function (az) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a0, this.done = !1, this.delegate = null, this.method = "next", this.arg = a0, this.tryEntries.forEach(at), !az) {
          for (var aA in this) "t" === aA.charAt(0) && a3.call(this, aA) && !isNaN(+aA.slice(1)) && (this[aA] = a0);
        }
      },
      stop: function () {
        this.done = !0;
        var aA = this.tryEntries[0].completion;
        if ("throw" === aA.type) {
          throw aA.arg;
        }
        return this.rval;
      },
      dispatchException: function (az) {
        if (this.done) {
          throw az;
        }
        var aB = this;
        function aH(aI, aJ) {
          aE.type = "throw";
          aE.arg = az;
          aB.next = aI;
          aJ && (aB.method = "next", aB.arg = a0);
          return !!aJ;
        }
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC],
            aE = aD.completion;
          if ("root" === aD.tryLoc) {
            return aH("end");
          }
          if (aD.tryLoc <= this.prev) {
            var aF = a3.call(aD, "catchLoc"),
              aG = a3.call(aD, "finallyLoc");
            if (aF && aG) {
              if (this.prev < aD.catchLoc) {
                return aH(aD.catchLoc, !0);
              }
              if (this.prev < aD.finallyLoc) {
                return aH(aD.finallyLoc);
              }
            } else {
              if (aF) {
                if (this.prev < aD.catchLoc) {
                  return aH(aD.catchLoc, !0);
                }
              } else {
                if (!aG) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aD.finallyLoc) {
                  return aH(aD.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (az, aA) {
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD];
          if (aE.tryLoc <= this.prev && a3.call(aE, "finallyLoc") && this.prev < aE.finallyLoc) {
            var aF = aE;
            break;
          }
        }
        aF && ("break" === az || "continue" === az) && aF.tryLoc <= aA && aA <= aF.finallyLoc && (aF = null);
        var aG = aF ? aF.completion : {};
        aG.type = az;
        aG.arg = aA;
        return aF ? (this.method = "next", this.next = aF.finallyLoc, ag) : this.complete(aG);
      },
      complete: function (az, aA) {
        if ("throw" === az.type) {
          throw az.arg;
        }
        "break" === az.type || "continue" === az.type ? this.next = az.arg : "return" === az.type ? (this.rval = this.arg = az.arg, this.method = "return", this.next = "end") : "normal" === az.type && aA && (this.next = aA);
        return ag;
      },
      finish: function (az) {
        for (var aA = this.tryEntries.length - 1; aA >= 0; --aA) {
          var aB = this.tryEntries[aA];
          if (aB.finallyLoc === az) {
            this.complete(aB.completion, aB.afterLoc);
            at(aB);
            return ag;
          }
        }
      },
      catch: function (az) {
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC];
          if (aD.tryLoc === az) {
            var aE = aD.completion;
            if ("throw" === aE.type) {
              var aF = aE.arg;
              at(aD);
            }
            return aF;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (az, aA, aB) {
        this.delegate = {
          iterator: av(az),
          resultName: aA,
          nextLoc: aB
        };
        "next" === this.method && (this.arg = a0);
        return ag;
      }
    };
    return a1;
  }
  function h(Z, a0, a1, a2, a3, a4, a5) {
    try {
      var a7 = Z[a4](a5),
        a8 = a7.value;
    } catch (aa) {
      return void a1(aa);
    }
    a7.done ? a0(a8) : Promise.resolve(a8).then(a2, a3);
  }
  function i(Z) {
    return function () {
      var a1 = this,
        a2 = arguments;
      return new Promise(function (a3, a4) {
        var a6 = Z.apply(a1, a2);
        function a7(a9) {
          h(a6, a3, a4, a7, a8, "next", a9);
        }
        function a8(a9) {
          h(a6, a3, a4, a7, a8, "throw", a9);
        }
        a7(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = void 0,
    l = "64",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "10019",
    s = "",
    t = "",
    u = "FR*r!isE5W";
  function v() {
    return w.apply(this, arguments);
  }
  function w() {
    w = i(g().mark(function a1() {
      var a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH;
      return g().wrap(function (aI) {
        for (;;) {
          switch (aI.prev = aI.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aI.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aI.next = 5;
              return X("先去boxjs填写账号密码");
            case 5:
              return aI.abrupt("return");
            case 6:
              aI.next = 8;
              return V();
            case 8:
              k = aI.sent;
              a3 = j.split(" ");
              a4 = c(a3);
              aI.prev = 11;
              a4.s();
            case 13:
              if ((a5 = a4.n()).done) {
                aI.next = 202;
                break;
              }
              a6 = a5.value;
              console.log("随机生成UA");
              a7 = T();
              ua = a7.ua;
              m = a7.commonUa;
              n = a7.uuid;
              console.log(ua);
              console.log(m);
              phone_number = a6.split("&")[0];
              password = a6.split("&")[1];
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取sessionId");
              aI.next = 28;
              return D("/api/account/init");
            case 28:
              a8 = aI.sent;
              s = a8.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              aI.next = 34;
              return x("/web/init?client_id=".concat(r));
            case 34:
              a9 = aI.sent;
              signature_key = a9.data.client.signature_key;
              console.log(signature_key);
              console.log("获取code");
              aI.next = 40;
              return z("/web/oauth/credential_auth");
            case 40:
              if (aa = aI.sent, aa.data) {
                aI.next = 44;
                break;
              }
              console.log(aa.message);
              return aI.abrupt("continue", 200);
            case 44:
              ab = aa.data.authorization_code.code;
              console.log(ab);
              console.log("登录");
              aI.next = 49;
              return D("/api/zbtxz/login", "check_token=&code=".concat(ab, "&token=&type=-1&union_id="));
            case 49:
              ac = aI.sent;
              console.log("登录成功");
              q = ac.data.session.account_id;
              s = ac.data.session.id;
              console.log("————————————");
              console.log("开始签到");
              aI.next = 57;
              return B("/api/user_mumber/sign");
            case 57:
              ad = aI.sent;
              console.log("签到获得：".concat(ad.data.signExperience, "积分"));
              console.log("————————————");
              console.log("开始任务");
              ae = !0;
              af = !0;
              ag = !0;
              aI.next = 66;
              return B("/api/user_center/task?type=1&current=1&size=20");
            case 66:
              ah = aI.sent;
              ai = c(ah.data.list);
              aI.prev = 68;
              ai.s();
            case 70:
              if ((aj = ai.n()).done) {
                aI.next = 92;
                break;
              }
              if (ak = aj.value, console.log("任务：".concat(ak.name)), 1 != ak.completed) {
                aI.next = 76;
                break;
              }
              console.log("任务已完成");
              return aI.abrupt("continue", 90);
            case 76:
              if (console.log("任务进度：".concat(ak.finish_times, "/").concat(ak.frequency)), "使用本地服务" != ak.name) {
                aI.next = 87;
                break;
              }
              al = ak.finish_times;
            case 79:
              if (!(al < ak.frequency)) {
                aI.next = 87;
                break;
              }
              aI.next = 82;
              return D("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 82:
              am = aI.sent;
              console.log("任务完成获得：".concat(am.data.score_notify.integral, "积分"));
            case 84:
              al++;
              aI.next = 79;
              break;
            case 87:
              "新闻资讯阅读" == ak.name && (ae = !1);
              "新闻资讯点赞" == ak.name && (af = !1);
              "分享资讯给好友" == ak.name && (ag = !1);
            case 90:
              aI.next = 70;
              break;
            case 92:
              aI.next = 97;
              break;
            case 94:
              aI.prev = 94;
              aI.t0 = aI.catch(68);
              ai.e(aI.t0);
            case 97:
              aI.prev = 97;
              ai.f();
              return aI.finish(97);
            case 100:
              if (ae && af && ag) {
                aI.next = 135;
                break;
              }
              aI.next = 103;
              return B("/api/article/channel_list?channel_id=639abec5e305b418fc469e3b&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 103:
              an = aI.sent;
              ao = c(an.data.article_list);
              aI.prev = 105;
              ao.s();
            case 107:
              if ((ap = ao.n()).done) {
                aI.next = 127;
                break;
              }
              if (aq = ap.value, ar = aq.id, ae) {
                aI.next = 115;
                break;
              }
              aI.next = 113;
              return B("/api/article/read_time?channel_article_id=".concat(ar, "&is_end=true&read_time=3051"));
            case 113:
              as = aI.sent;
              as.data ? console.log("阅读成功") : console.log("文章已经阅读过了");
            case 115:
              if (af) {
                aI.next = 120;
                break;
              }
              aI.next = 118;
              return D("/api/favorite/like", "action=true&id=".concat(ar));
            case 118:
              at = aI.sent;
              at.data ? console.log("点赞成功") : console.log("文章已经点赞过了");
            case 120:
              if (ag) {
                aI.next = 125;
                break;
              }
              aI.next = 123;
              return D("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(ar));
            case 123:
              au = aI.sent;
              au.data ? console.log("分享成功") : console.log("文章已经分享过了");
            case 125:
              aI.next = 107;
              break;
            case 127:
              aI.next = 132;
              break;
            case 129:
              aI.prev = 129;
              aI.t1 = aI.catch(105);
              ao.e(aI.t1);
            case 132:
              aI.prev = 132;
              ao.f();
              return aI.finish(132);
            case 135:
              console.log("————————————");
              console.log("阅读抽奖");
              o = "";
              aI.next = 140;
              return F("/prod-api/user-read/app/login?id=".concat(q, "&sessionId=").concat(s, "&deviceId=").concat(n));
            case 140:
              o = aI.sent;
              console.log("获取登录cookie");
              console.log(o);
              aI.next = 145;
              return H("/prod-api/user-read/list/".concat(S()));
            case 145:
              if (av = aI.sent, av.data.completedCount != av.data.sum) {
                aI.next = 150;
                break;
              }
              console.log("阅读已经完成");
              aI.next = 173;
              break;
            case 150:
              aw = c(av.data.articleIsReadList);
              aI.prev = 151;
              aw.s();
            case 153:
              if ((ax = aw.n()).done) {
                aI.next = 165;
                break;
              }
              if (ay = ax.value, !ay.isRead) {
                aI.next = 157;
                break;
              }
              return aI.abrupt("continue", 163);
            case 157:
              az = Date.now();
              aA = k.md5("&&".concat(ay.id, "&&TlGFQAOlCIVxnKopQnW&&").concat(az));
              aI.next = 161;
              return H("/prod-api/already-read/article?articid=".concat(ay.id, "&timestamp=").concat(az, "&signature=").concat(aA));
            case 161:
              aB = aI.sent;
              console.log(aB.msg);
            case 163:
              aI.next = 153;
              break;
            case 165:
              aI.next = 170;
              break;
            case 167:
              aI.prev = 167;
              aI.t2 = aI.catch(151);
              aw.e(aI.t2);
            case 170:
              aI.prev = 170;
              aw.f();
              return aI.finish(170);
            case 173:
              aI.next = 175;
              return H("/prod-api/user-read-count/count/".concat(S()));
            case 175:
              aC = aI.sent;
              p = "";
              aI.next = 179;
              return J("/tzrb/user/loginWC?accountId=".concat(q, "&sessionId=").concat(s));
            case 179:
              p = aI.sent;
              console.log("获取抽奖cookie");
              console.log(p);
              aI.next = 184;
              return L("/tzrb/awardUpgrade/list?activityId=67");
            case 184:
              aD = aI.sent;
              aE = aD.data;
              aF = g().mark(function aZ() {
                var b1, b2;
                return g().wrap(function (b4) {
                  for (;;) {
                    switch (b4.prev = b4.next) {
                      case 0:
                        b4.next = 2;
                        return N("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        b1 = b4.sent;
                        b2 = aE.findIndex(function (b6) {
                          return b6.id == b1.data;
                        });
                        -1 != b2 ? console.log("抽奖获得：".concat(aE[b2].title)) : console.log(JSON.stringify(b1));
                      case 5:
                      case "end":
                        return b4.stop();
                    }
                  }
                }, aZ);
              });
              aG = 0;
            case 188:
              if (!(aG < aC.data)) {
                aI.next = 193;
                break;
              }
              return aI.delegateYield(aF(), "t3", 190);
            case 190:
              aG++;
              aI.next = 188;
              break;
            case 193:
              console.log("————————————");
              console.log("查询积分");
              aI.next = 197;
              return B("/api/user_mumber/account_detail");
            case 197:
              aH = aI.sent;
              console.log("拥有积分：".concat(aH.data.rst.total_integral, "\n"));
              t += "用户：".concat(phone_number, " 积分：").concat(aH.data.rst.total_integral, "\n");
            case 200:
              aI.next = 13;
              break;
            case 202:
              aI.next = 207;
              break;
            case 204:
              aI.prev = 204;
              aI.t4 = aI.catch(11);
              a4.e(aI.t4);
            case 207:
              aI.prev = 207;
              a4.f();
              return aI.finish(207);
            case 210:
              if (!t) {
                aI.next = 213;
                break;
              }
              aI.next = 213;
              return X(t);
            case 213:
            case "end":
              return aI.stop();
          }
        }
      }, a1, null, [[11, 204, 207, 210], [68, 94, 97, 100], [105, 129, 132, 135], [151, 167, 170, 173]]);
    }));
    return w.apply(this, arguments);
  }
  function x(Z) {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function a0(a1) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a5 = {
                  url: "https://passport.tmuyun.com".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": R(),
                    "Accept-Encoding": "gzip",
                    "user-agent": ua
                  }
                };
                $.get(a5, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            try {
                              a9 ? (console.log("".concat(JSON.stringify(a9))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a4(JSON.parse(ab));
                            } catch (ah) {
                              $.logErr(ah, aa);
                            } finally {
                              a4();
                            }
                          case 1:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a8);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, a0);
    }));
    return y.apply(this, arguments);
  }
  function z(Z) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function Z(a0) {
      var a2;
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              a2 = P();
              return a3.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  url: "https://passport.tmuyun.com".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a2.uuid,
                    "X-SIGNATURE": a2.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": ua
                  },
                  body: a2.body
                };
                $.post(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (af) {
                      for (;;) {
                        switch (af.prev = af.next) {
                          case 0:
                            try {
                              aa ? (console.log("".concat(JSON.stringify(aa))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a5(JSON.parse(ac));
                            } catch (ag) {
                              $.logErr(ag, ab);
                            } finally {
                              a5();
                            }
                          case 1:
                          case "end":
                            return af.stop();
                        }
                      }
                    }, a9);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a3.stop();
          }
        }
      }, Z);
    }));
    return A.apply(this, arguments);
  }
  function B(Z) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a0(a1) {
      var a2;
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              a2 = Q(a1);
              return a3.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  url: "https://vapp.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a2.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": a2.uuid,
                    "X-SIGNATURE": a2.signature,
                    "X-TENANT-ID": l,
                    "X-ACCOUNT-ID": q,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": m
                  }
                };
                $.get(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !aa) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 9;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ac));
                          case 9:
                            ad.next = 14;
                            break;
                          case 11:
                            ad.prev = 11;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, ab);
                          case 14:
                            ad.prev = 14;
                            a5();
                            return ad.finish(14);
                          case 17:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return C.apply(this, arguments);
  }
  function D(Z, a0) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function Z(a0, a1) {
      var a3;
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              a3 = Q(a0);
              return a4.abrupt("return", new Promise(function (a6) {
                var a7 = {
                  url: "https://vapp.taizhou.com.cn".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a3.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": a3.uuid,
                    "X-SIGNATURE": a3.signature,
                    "X-TENANT-ID": l,
                    "X-ACCOUNT-ID": q,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": m
                  },
                  body: a1
                };
                $.post(a7, function () {
                  var a9 = i(g().mark(function aa(ab, ac, ad) {
                    return g().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !ab) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a6(JSON.parse(ad));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ac);
                          case 14:
                            ae.prev = 14;
                            a6();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, aa, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a4.stop();
          }
        }
      }, Z);
    }));
    return E.apply(this, arguments);
  }
  function F(Z) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a0(a1) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://xmt.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: o,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(a6, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !a9) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a9)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 11;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            o = $.isNode() ? aa.headers["set-cookie"][0] : aa.headers["set-cookie"] || aa.headers["Set-Cookie"];
                            o = o.split(";")[0];
                            a4(o);
                          case 11:
                            ad.next = 16;
                            break;
                          case 13:
                            ad.prev = 13;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, aa);
                          case 16:
                            ad.prev = 16;
                            a4();
                            return ad.finish(16);
                          case 19:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a8, null, [[0, 13, 16, 19]]);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return G.apply(this, arguments);
  }
  function H(Z) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a0(a1) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://xmt.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: o,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !aa) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a4(JSON.parse(ac));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ab);
                          case 14:
                            ae.prev = 14;
                            a4();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, a9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return I.apply(this, arguments);
  }
  function J(Z) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a0(a1) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://srv-app.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: p,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(a6, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !a9) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a9)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 11;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            p = $.isNode() ? aa.headers["set-cookie"][0] : aa.headers["set-cookie"] || aa.headers["Set-Cookie"];
                            p = p.split(";")[0];
                            a4(p);
                          case 11:
                            ad.next = 16;
                            break;
                          case 13:
                            ad.prev = 13;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, aa);
                          case 16:
                            ad.prev = 16;
                            a4();
                            return ad.finish(16);
                          case 19:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a8, null, [[0, 13, 16, 19]]);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, a0);
    }));
    return K.apply(this, arguments);
  }
  function L(Z) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a0(a1) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  url: "https://srv-app.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: p,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !aa) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 9;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ac));
                          case 9:
                            ad.next = 14;
                            break;
                          case 11:
                            ad.prev = 11;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, ab);
                          case 14:
                            ad.prev = 14;
                            a5();
                            return ad.finish(14);
                          case 17:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return M.apply(this, arguments);
  }
  function N(Z, a0) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a0(a1, a2) {
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  url: "https://srv-app.taizhou.com.cn".concat(a1),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: p,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: a2
                };
                $.post(a8, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (af) {
                      for (;;) {
                        switch (af.prev = af.next) {
                          case 0:
                            if (af.prev = 0, !ac) {
                              af.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            af.next = 9;
                            break;
                          case 6:
                            af.next = 8;
                            return $.wait(2000);
                          case 8:
                            a6(JSON.parse(ae));
                          case 9:
                            af.next = 14;
                            break;
                          case 11:
                            af.prev = 11;
                            af.t0 = af.catch(0);
                            $.logErr(af.t0, ad);
                          case 14:
                            af.prev = 14;
                            a6();
                            return af.finish(14);
                          case 17:
                          case "end":
                            return af.stop();
                        }
                      }
                    }, ab, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a4.stop();
          }
        }
      }, a0);
    }));
    return O.apply(this, arguments);
  }
  function P() {
    var a1 = new (k.loadJSEncrypt())();
    a1.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    password = a1.encrypt(password);
    var a2 = R(),
      a3 = "client_id=".concat(r, "&password=").concat(password, "&phone_number=").concat(phone_number),
      a4 = "post%%/web/oauth/credential_auth?".concat(a3, "%%").concat(a2, "%%");
    a3 = "client_id=".concat(r, "&password=").concat(encodeURIComponent(password), "&phone_number=").concat(phone_number);
    CryptoJS = k.createCryptoJS();
    var a5 = CryptoJS.HmacSHA256(a4, signature_key),
      a6 = CryptoJS.enc.Hex.stringify(a5);
    var a7 = {};
    a7.uuid = a2;
    a7.signature = a6;
    a7.body = a3;
    return a7;
  }
  function Q(Z) {
    var a0 = R(),
      a1 = Date.now();
    Z.indexOf("?") > 0 && (Z = Z.substring(0, Z.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a2 = CryptoJS.SHA256("".concat(Z, "&&").concat(s, "&&").concat(a0, "&&").concat(a1, "&&").concat(u, "&&").concat(l)).toString(),
      a3 = {
        uuid: a0,
        time: a1,
        signature: a2
      };
    return a3;
  }
  function R() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (Z) {
      var a0 = 16 * Math.random() | 0,
        a1 = "x" === Z ? a0 : 3 & a0 | 8;
      return a1.toString(16);
    });
  }
  function S() {
    var Z = new Date(),
      a0 = Z.getFullYear(),
      a1 = String(Z.getMonth() + 1).padStart(2, "0"),
      a2 = String(Z.getDate()).padStart(2, "0");
    return "".concat(a0).concat(a1).concat(a2);
  }
  function T() {
    var Z = "6.0.2",
      a0 = R(),
      a1 = U(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a2 = "Xiaomi " + a1,
      a3 = "Android",
      a4 = "".concat(a3.toUpperCase(), ";").concat("11", ";").concat(r, ";").concat(Z, ";1.0;null;").concat(a1),
      a5 = "".concat(Z, ";").concat(a0, ";").concat(a2, ";").concat(a3, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      a6 = {
        ua: a4,
        commonUa: a5,
        uuid: a0
      };
    return a6;
  }
  function U(Z) {
    return Z[Math.floor(Math.random() * Z.length)];
  }
  function V() {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function a0() {
      var a1;
      return g().wrap(function a2(a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              if (a1 = $.getdata("Utils_Code") || "", !a1 || !Object.keys(a1).length) {
                a3.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a1);
              return a3.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a3.abrupt("return", new Promise(function () {
                var a6 = i(g().mark(function a7(a8) {
                  return g().wrap(function aa(ab) {
                    for (;;) {
                      switch (ab.prev = ab.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ac) {
                            $.setdata(ac, "Utils_Code");
                            eval(ac);
                            console.log("✅ Utils加载成功, 请继续");
                            a8(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ab.stop();
                      }
                    }
                  }, a7);
                }));
                return function (a8) {
                  return a6.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return W.apply(this, arguments);
  }
  function X(Z) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function a1(a2) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              if (!$.isNode()) {
                a3.next = 5;
                break;
              }
              a3.next = 3;
              return notify.sendNotify($.name, a2);
            case 3:
              a3.next = 6;
              break;
            case 5:
              $.msg($.name, "", a2);
            case 6:
            case "end":
              return a3.stop();
          }
        }
      }, a1);
    }));
    return Y.apply(this, arguments);
  }
  i(g().mark(function Z() {
    return g().wrap(function (a1) {
      for (;;) {
        switch (a1.prev = a1.next) {
          case 0:
            a1.next = 2;
            return v();
          case 2:
          case "end":
            return a1.stop();
        }
      }
    }, Z);
  }))().catch(function (a0) {
    $.log(a0);
  }).finally(function () {
    $.done({});
  });
})();
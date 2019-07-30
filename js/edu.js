var fullscreen = document.getElementById("fullscreen"); //浮层

/*********************-----轮播图-----*********************/
(function() {
  var turnbanner = setInterval(interrun, 5000);
  var Mybanner = document.getElementsByClassName("banner"); //获取图片
  var Mypoint = document.getElementsByClassName("point"); //获取点
  var intergo = 0;
  // 点击按钮事件----------------------------------
  function clickpoint() {
    for (var i = 0; i < Mypoint.length; i++) {
      (function(index) {
        Mypoint[index].addEventListener("click", function() {
          clearpoint();
          this.className = "point onpoint";
          clearbanner();
          Mybanner[index].className = "banner active";
          intergo = index;
        });
      })(i);
    }
  }
  // 图片切换函数
  function interrun() {
    if (intergo != Mybanner.length - 1) {
      intergo++;
    } else {
      intergo = 0;
    }
    bannerrun();
  }
  // 设置图片名字-----------------------------------
  function bannerrun() {
    clearbanner();
    Mybanner[intergo].className = "banner active";
    clearpoint();
    Mypoint[intergo].className = "point onpoint";
  }
  // 清除按钮点击-------------------------------------
  function clearpoint() {
    for (var i = 0; i < Mypoint.length; i++) {
      Mypoint[i].className = "point";
    }
  }

  //清除图片名字
  function clearbanner() {
    for (var i = 0; i < Mybanner.length; i++) {
      Mybanner[i].className = "banner";
    }
  }
  setInterval(interrun, 5000);
  clickpoint();
  bannerrun();
})();
/***************************************************************/

/***************************照片墙*********************************/
(function() {
  //获取元素当前属性-----------------------------
  function getstyle(obj, name) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj, null)[name];
    } else {
      return obj.currentStyle[name];
    }
  }
  var pictwall = document.getElementsByClassName("O124_in_wall");
  function addleftsize() {
    var wallleft = parseInt(getstyle(pictwall[0], "left")); //获取照片墙样式
    if (wallleft <= -1620) {
      var newview = 0;
    } else {
      var newview = wallleft - 1;
    }
    pictwall[0].style.left = newview + "px";
  }
  setInterval(addleftsize, 10);
})();

/*******************************************************************/

/**************************关注按钮登录弹窗*****************************/
(function() {
  var intencl = document.getElementsByClassName("O124_inten_button");
  var inten = document.getElementById("intenbu");
  var canso = document.getElementById("cansobu");
  var LogIn = document.getElementsByClassName("O124_log_in_area");
  var LogCha = document.getElementsByClassName("cha");
  inten.onclick = function() {
    LogIn[0].style.display = "block";
    fullscreen.style.display = "block";
    LogCha[0].onclick = function() {
      LogIn[0].style.display = "none";
      fullscreen.style.display = "none";
      return;
    };
    inten.innerHTML = "已关注";
    canso.style.display = "inline-block";
    inten.style.color = "black";
    inten.style.background = "url(./img/tick_off.png) no-repeat";
    inten.style.backgroundPosition = "8px";
    inten.style.width = "52px";
    inten.style.borderRadius = "0px;";
    intencl[0].style.border = "1px solid #efefef";
  };
  canso.onclick = function() {
    inten.innerHTML = "关注";
    canso.style.display = "none";
    inten.style.color = "#ffffff";
    inten.style.background = null;
    inten.style.backgroundPosition = null;
    inten.style.width = null;
    inten.style.borderRadius = null;
    intencl[0].style.border = null;
  };
})();
/******************************************************************/

/****************************视频播放事件********************************/
(function() {
  var videoon = document.getElementsByClassName("O124_video_main");
  var video_area = document.getElementById("video_area");
  var chacha = document.getElementById("cha");
  chacha.onclick = function() {
    video_area.style.display = "none";
    fullscreen.style.display = "none";
  };
  videoon[0].onclick = function() {
    video_area.style.display = "block";
    fullscreen.style.display = "block";
  };
})();
/*********************************************************************/

/*************************不再提醒功能***********************************/
(function() {
  var date = new Date();
  var past = new Date(date.setDate(date.getDate() + 3));
  var gray = document.getElementsByClassName("O124_remaind");
  var remaindarea = document.getElementById("remaindarea");
  var norebu = document.getElementById("noremaind");
  var cookstr = "remaind=no; expires=" + past;
  norebu.onclick = function() {
    gray[0].style.backgroundColor = "#ffffff";
    remaindarea.style.display = "none";
    document.cookie = cookstr;
  };
  function nore() {
    var Mycookir = document.cookie;
    var remaindcookie = Mycookir.split("; ");
    if (remaindcookie[0] === "remaind=no") {
      gray[0].style.backgroundColor = "#ffffff";
      remaindarea.style.display = "none";
    }
  }
  nore();
})();
/************************************************************/

/*********************************课程数据获取*************************/
(function() {
  /**第一页课程*/
  // var onePageDesignCourse = getDesignData(1, 20); //两个返回值，total:课程总数,list:当前页课程数组对象
  // var onePageProgramCourse = getProgramData(1, 20); //两个返回值，total:课程总数,list:当前页课程数组对象
  // /************/

  // /**根据数据创造分页点击节点并创造第一页分页节点**/
  // var pointFatherul = document.getElementById("O124_pagefather");
  // var pointBrotherLi = document.getElementsByClassName("O124_right_change");
  // /**
  //  *
  //  * @param {number} number
  //  * @param {string} element
  //  * @param {object} fatherele
  //  * @param {object} brotherele
  //  */
  // function createSeqEle(number, element, fatherele, brotherele) {
  //   for (var i = 1; i <= number; i++) {
  //     var li = document.createElement(element);
  //     var gztext = document.createTextNode(i);
  //     li.appendChild(gztext);
  //     fatherele.insertBefore(li, brotherele);
  //   }
  // }
  // createSeqEle(
  //   Math.ceil(onePageDesignCourse.total / 20),
  //   "li",
  //   pointFatherul,
  //   pointBrotherLi[0]
  // );
  /*********************/

  /******渲染第一页数据*******/
  // var gradpaMainPoint = document.getElementById("grandpa_elet");
  // var ulelement = document.getElementsByClassName("O124_inleft_main_ul");
  // gradpaMainPoint.removeChild(ulelement[0]);
  // var creatingUl = document.createElement("ul");
  // creatingUl.innerHTML = "";
  /*************************/

  // 配置
  var curType = 0; // 当前分类 0: 产品设计, 1: 编程语言
  var pageNo = 1; // 当前页码
  var pageSize = 20; // 每页数量
  var firstGenPaging = true;//是否第一次生成分页，防止重复绑定事件

  // 元素
  var listWrapEle = document.querySelector("#grandpa_elet");

  // 初始化
  bindToggleCatagoryEvent();
  var data = getListData();
  genCourseList(data.list);
  genPaging(data.total);

  /**
   * 绑定切换事件
   */
  function bindToggleCatagoryEvent() {
    var catagoryButtonWrap = document.querySelector(".O124_inleft_button_wrap");
    // 事件委托
    catagoryButtonWrap.addEventListener(
      "click",
      function(event) {
        var ele = event.target;
        if (ele.tagName.toLowerCase() !== "span") return;

        // 拿到对应的 type 值
        var type = parseInt(ele.id.substr(-1, 1));
        if (type !== curType) {
          curType = type;
          toggleCatagory(type);
        }
      },
      false
    );
  }

  /**
   * 切换课程分类
   * @param {number} catagoryType 分类的 type
   */
  function toggleCatagory(catagoryType) {
    // 切换按钮的样式
    var btns = document.querySelectorAll(".O124_inleft_button");
    btns.forEach(function(btn) {
      if (catagoryType === parseInt(btn.id.substr(-1, 1))) {
        // 加 active
        btn.className = "O124_inleft_button active";
      } else {
        // 不加 active
        btn.className = "O124_inleft_button";
      }
    });
    // 初始化课程列表到第一页
    pageNo = 1;
    var data = getListData();
    genCourseList(data.list);
    genPaging(data.total);
  }

  /**
   * 获取列表数据
   * 根据当前的分类类型和页码获取数据
   */
  function getListData() {
    var getDataFn = curType === 0 ? getDesignData : getProgramData;
    return getDataFn(pageNo, pageSize);
  }

  /**
   * 根据提供的数据，生成课程列表
   * @param {Array} 课程列表的数据
   */
  function genCourseList(list) {
    clearCourseList();
    var ulElem = document.createElement("ul");
    ulElem.className = "O124_inleft_main_ul";
    var content = "";

    list.forEach(function(course, index) {
      content +=
        '<li class="O124_courses"><div><img src="' +
        course.image +
        '" alt="" class="O124_change_img"></div><div><span class="O124_inpict_cha1">' +
        course.title +
        '</span><span class="O124_inpict_cha2">音频帮</span><span class="O124_student_num">' +
        course.studentNum +
        '</span><span class="O124_inpict_price">￥' +
        course.price +
        '</span></div><div id="O124_mouse_detail"><div class="O124_detail_imga"><img src="' +
        course.image +
        '" alt="" class="O124_change_img"></div><div class="O124_detail_right"><div class="O124_detail_title">' +
        course.title +
        '</div><div class="O124_detail_peonum">57人在学</div><div class="O124_detail_from">' +
        course.author +
        '</div><div class="O124_detail_kind">' +
        course.categoryName +
        '</div></div><div class="O124_detail_descrb">' +
        course.description +
        "</div></div></li>";
    });

    ulElem.innerHTML = content;
    listWrapEle.appendChild(ulElem);
  }

  /**
   * 清除列表
   */
  function clearCourseList() {
    listWrapEle.innerHTML = "";
  }

  /**
   * 生成分页，并绑定事件
   */
  function genPaging(total) {
    var PagingFatherEln = document.getElementById("O124_pagefather");
    PagingFatherEln.innerHTML =
      '<li class="O124_left_change"></li><li class="O124_right_change" id="pagingBrother"></li>';
    var pagingBrother = document.getElementById("pagingBrother");
    var PageNum = Math.ceil(total / 20);
    for (i = 1; i <= PageNum; i++) {
      var createli = document.createElement("li");
      var gztext = document.createTextNode(i);
      createli.appendChild(gztext);
      PagingFatherEln.insertBefore(createli, pagingBrother);
    }
    var pagepoint = PagingFatherEln.childNodes;
    pagepoint[1].className = "active";
    if (firstGenPaging) {
      firstGenPaging = false
      PagingFatherEln.addEventListener("click", function(event) {
        var tar = event.target;
        if (Number(tar.innerHTML) !== 0) {
          // 点击页码
          changePage(parseInt(tar.innerHTML), tar);
        } else if (tar.className === "O124_left_change") {
          prev();
          // 上一页
        } else if (tar.className === "O124_right_change") {
          next();
          // 下一页
        }
        data = getListData();
        genCourseList(data.list);
      });
    }
    function prev() {
      // 如果是第一页，直接return
      if (pageNo === 1) {
        return;
      }
      clearPagepoint();
      pageNo--;
      pagepoint[pageNo].className = "active";
      // 否则修改 pageNo，调用获取数据，生成列表
    }

    function next() {
      if (pageNo === Math.ceil(total / 20)) {
        return;
      }
      clearPagepoint();
      pageNo++;
      pagepoint[pageNo].className = "active";
    }

    function changePage(n, point) {
      clearPagepoint();
      pageNo = n;
      point.className = "active";
      // 改样式
    }
    function clearPagepoint() {
      for (var i = 1; i < pagepoint.length - 1; i++) {
        pagepoint[i].className = "";
      }
    }
  }
})();
/**********************************************************************/

// (function() {
//   // 产品切换事件-----------------------------------
//   // 获取网站数据节点
//   var courseimg = document.getElementsByClassName("O124_change_img");
//   var coursestuNum = document.getElementsByClassName("O124_student_num");
//   var courseprice = document.getElementsByClassName("O124_inpict_price");
//   var coursetitle = document.getElementsByClassName("O124_detail_title");
//   var coursefrom = document.getElementsByClassName("O124_detail_from");
//   var coursekind = document.getElementsByClassName("O124_detail_kind");
//   var coursedescrb = document.getElementsByClassName("O124_detail_descrb");
//   // 创造页码节点函数S
//   /**
//    *
//    * @param {number} number
//    * @param {stirng} element
//    * @param {object} fatherele
//    * @param {object} brotherele
//    */
//   function createSeqEle(number, element, fatherele, brotherele) {
//     for (var i = 1; i <= number; i++) {
//       var li = document.createElement(element);
//       var gztext = document.createTextNode(i);
//       li.appendChild(gztext);
//       fatherele.insertBefore(li, brotherele);
//     }
//   }
//   //-------
//   var on_but = 0;
//   var courseDesigns = getDesignData(1, 20); //获取设计数据,返回数据总长度和第一页数据的对象
//   var courseProgramms = getProgramData(1, 20); //获取编程数据，返回数据总长度和第一页数据的对象
//   var pagefather = document.getElementById("O124_pagefather");
//   var leftChange = document.getElementsByClassName("O124_left_change");
//   var rightChange = document.getElementsByClassName("O124_right_change");
//   /**
//    *
//    * @param {object} courseinthis //获取的该页面的数据
//    */
//   onepagecourse(courseDesigns,courseDesigns.list.length);
//   /**
//    *删除分页节点
//    * @param {number} pagenum
//    */
//   function deletpagepoint(pagenum) {
//     for (var i = pagenum; i > 0; i--) {
//       pagefather.removeChild(pagefather.childNodes[i]);
//     }
//   }
//   // 创建页码
//   createSeqEle(
//     Math.ceil(courseDesigns.total / 20),
//     "li",
//     pagefather,
//     rightChange[0]
//   );
//   var pageindex = 1;
//   var pages = pagefather.childNodes;
//   pages[1].className = "active";

//   //清除所有页码按钮样式
//   function clearPageNum() {
//     for (i = 1; i < pages.length - 1; i++) {
//       pages[i].className = "";
//     }
//   }
//   // 对页码点击事件
//   /**
//    *
//    */
//   function pointpage() {
//     for (i = 1; i < pages.length - 1; i++) {
//       (function(pageon) {
//         pages[pageon].onclick = function() {
//           if (pageindex === pageon) {
//             return;
//           }
//           clearPageNum();
//           pages[pageon].className = "active";
//           pageindex = pageon;
//           if ((on_but = 0)) {
//             var coursechage = getDesignData(pageindex, 20);
//             onepagecourse(coursechage);
//           } else {
//             coursechage = getProgramData(pageindex, 20);
//             onepagecourse(coursechage);
//           }
//         };
//       })(i);
//     }
//   }
//   // 上一页下一页按钮事件
//   leftChange[0].onclick = function() {
//     if (pageindex === 1) {
//       return;
//     }
//     pageindex = pageindex - 1;
//     clearPageNum();
//     pages[pageindex].className = "active";
//     if ((on_but = 0)) {
//       var coursechage = getDesignData(pageindex, 20);
//       onepagecourse(coursechage);
//     } else {
//       coursechage = getProgramData(pageindex, 20);
//       onepagecourse(coursechage);
//     }
//   };
//   rightChange[0].onclick = function() {
//     if (pageindex === pages.length - 2) {
//       return;
//     }
//     pageindex = pageindex + 1;
//     clearPageNum();
//     pages[pageindex].className = "active";
//     if ((on_but = 0)) {
//       var coursechage = getDesignData(pageindex, 20);
//       onepagecourse(coursechage);
//     } else {
//       coursechage = getProgramData(pageindex, 20);
//       onepagecourse(coursechage);
//     }
//   };
//   // 按钮样式改变
//   var bigButton1 = document.getElementById("big_button1");
//   var bigButton2 = document.getElementById("big_button2");
//   bigButton1.onclick = function() {
//     if (on_but === 0) {
//       return;
//     }
//     deletpagepoint(Math.ceil(courseProgramms.total / 20));
//     createSeqEle(
//       Math.ceil(courseDesigns.total / 20),
//       "li",
//       pagefather,
//       rightChange[0]
//     );
//     this.style.backgroundColor = "#3b9e32";
//     this.style.color = "#ffffff";
//     this.style.cursor = "default";
//     bigButton2.style.backgroundColor = "#ffffff";
//     bigButton2.style.color = "#666666";
//     bigButton2.style.cursor = "pointer";
//     on_but = 0;
//     pageindex = 1;
//     pages[pageindex].className = "active";
//     pointpage();
//     var coursechage = getDesignData(pageindex, 20);
//     onepagecourse(coursechage);
//   };
//   bigButton2.onclick = function() {
//     if (on_but === 1) {
//       return;
//     }
//     deletpagepoint(Math.ceil(courseDesigns.total / 20));
//     createSeqEle(
//       Math.ceil(courseProgramms.total / 20),
//       "li",
//       pagefather,
//       rightChange[0]
//     );
//     this.style.backgroundColor = "#3b9e32";
//     this.style.color = "#ffffff";
//     this.style.cursor = "default";
//     bigButton1.style.backgroundColor = "#ffffff";
//     bigButton1.style.color = "#666666";
//     bigButton1.style.cursor = "pointer";
//     on_but = 1;
//     pageindex = 1;
//     pages[pageindex].className = "active";
//     pointpage();
//     coursechage = getProgramData(pageindex, 20);
//     onepagecourse(coursechage);
//   };
//   pointpage();
// })();
